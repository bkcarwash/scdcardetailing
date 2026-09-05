import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

function authorized(req: NextRequest): boolean {
  return req.headers.get('x-admin-password') === process.env.ADMIN_PASSWORD;
}

type RouteContext = { params: Promise<{ id: string }> };

export async function DELETE(req: NextRequest, { params }: RouteContext): Promise<NextResponse> {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const { id } = await params;
  const admin = createAdminClient();
  const { error } = await admin.from('bookings').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PATCH(req: NextRequest, { params }: RouteContext): Promise<NextResponse> {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const allowed = ['pending', 'confirmed', 'completed', 'cancelled'];
  const status = typeof body.status === 'string' ? body.status : '';
  if (!allowed.includes(status)) {
    return NextResponse.json({ error: 'Invalid status.' }, { status: 422 });
  }

  const admin = createAdminClient();
  const { error } = await admin.from('bookings').update({ status }).eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
