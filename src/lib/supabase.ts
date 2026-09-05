import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Public client — used by the customer booking form (anon insert only)
export const supabase = createClient(url, anonKey);

// Admin client — used only in server-side API routes (service role)
export function createAdminClient() {
  return createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
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
