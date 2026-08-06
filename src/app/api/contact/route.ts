import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// In-memory rate limiter — per IP, max 5 requests per 5 minutes.
// This resets on server restart (serverless cold start). For persistent
// rate limiting, replace with Redis or an edge KV store.
// ---------------------------------------------------------------------------

type RateLimitEntry = {
  count: number;
  windowStart: number;
};

const rateLimitMap = new Map<string, RateLimitEntry>();

const RATE_LIMIT_MAX =
  Number(process.env.RATE_LIMIT_REQUESTS) || 5;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    // New window
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Periodically clean up old entries to prevent unbounded memory growth
// (runs opportunistically on each request)
function cleanupRateLimitMap(): void {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS * 2) {
      rateLimitMap.delete(ip);
    }
  }
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 100;
}

function isValidMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 5000;
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest): Promise<NextResponse> {
  cleanupRateLimitMap();

  // Determine client IP from common headers (Vercel, Cloudflare, etc.)
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  // Rate limit check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // Honeypot — bots fill the hidden _honey field; real users never see it
  if (body._honey) {
    // Silently accept but do nothing — don't tip off the bot
    return NextResponse.json({ success: true });
  }

  // Extract and validate fields
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const vehicle = typeof body.vehicle === 'string' ? body.vehicle.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const errors: Record<string, string> = {};

  if (!isValidName(name)) {
    errors.name = 'Name must be between 2 and 100 characters.';
  }
  if (!isValidEmail(email)) {
    errors.email = 'A valid email address is required.';
  }
  if (!isValidMessage(message)) {
    errors.message = 'Message must be between 10 and 5000 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, errors },
      { status: 422 }
    );
  }

  // ---------------------------------------------------------------------------
  // Log submission (in production: replace with nodemailer, SendGrid, Resend, etc.)
  // ---------------------------------------------------------------------------
  const contactEmail = process.env.CONTACT_EMAIL || 'freeelancerc@gmail.com';

  console.log('[Contact Form] New submission received:');
  console.log({
    to: contactEmail,
    timestamp: new Date().toISOString(),
    ip,
    name,
    email,
    phone: phone || '(not provided)',
    service: service || '(not specified)',
    vehicle: vehicle || '(not specified)',
    message,
  });

  // ---------------------------------------------------------------------------
  // TODO: Replace the console.log above with actual email sending, e.g.:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@sansanichcardetailing.com',
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `New Quote Request from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nVehicle: ${vehicle}\n\nMessage:\n${message}`,
  // });
  // ---------------------------------------------------------------------------

  return NextResponse.json({ success: true }, { status: 200 });
}

// Reject non-POST methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
