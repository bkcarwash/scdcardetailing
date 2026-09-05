import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : null;
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const city = typeof body.city === 'string' ? body.city.trim() : '';
  const preferred_date = typeof body.preferred_date === 'string' ? body.preferred_date.trim() : '';
  const preferred_time = typeof body.preferred_time === 'string' ? body.preferred_time.trim() : '';
  const vehicle = typeof body.vehicle === 'string' ? body.vehicle.trim() : null;
  const notes = typeof body.notes === 'string' ? body.notes.trim() : null;

  if (!name || !phone || !service || !city || !preferred_date || !preferred_time) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 422 });
  }

  const { data, error } = await createAdminClient()
    .from('bookings')
    .insert([{ name, phone, email: email || null, service, city, preferred_date, preferred_time, vehicle: vehicle || null, notes: notes || null }])
    .select()
    .single();

  if (error) {
    console.error('[Booking] Insert error:', error.message);
    return NextResponse.json({ error: 'Failed to save booking.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data.id }, { status: 201 });
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
