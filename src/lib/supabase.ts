import { createClient } from '@supabase/supabase-js';

// Admin client — used only in server-side API routes (service role, bypasses RLS)
// Created lazily inside each route so env vars are read at request time, not build time.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

export type Booking = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  city: string;
  preferred_date: string;
  preferred_time: string;
  vehicle: string | null;
  notes: string | null;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
};
