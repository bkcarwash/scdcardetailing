'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAP, SERVICES, CITIES } from '@/lib/siteConfig';

const TIME_SLOTS = [
  'Morning (7 AM – 11 AM)',
  'Afternoon (11 AM – 3 PM)',
  'Evening (3 PM – 7 PM)',
  'Late Evening (after 7 PM)',
  'Flexible — any time',
];

type Field = {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  preferred_date: string;
  preferred_time: string;
  vehicle: string;
  notes: string;
};

const EMPTY: Field = {
  name: '', phone: '', email: '', service: '', city: '',
  preferred_date: '', preferred_time: '', vehicle: '', notes: '',
};

export default function BookPage() {
  const [form, setForm] = useState<Field>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const set = (key: keyof Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j.error || 'Something went wrong.');
      }
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  const inputClass =
    'w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#d4a93a] transition-colors';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wide text-[#888] mb-1.5';

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[rgba(212,169,58,0.15)] border border-[rgba(212,169,58,0.4)] flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="text-white text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Booking Received!
          </h1>
          <p className="text-[#a0a0a0] text-sm mb-2">
            We&apos;ll call or text you at <span className="text-white font-semibold">{form.phone || 'your number'}</span> shortly to confirm.
          </p>
          <p className="text-[#666] text-sm mb-8">
            Questions? Call us anytime at{' '}
            <a href={`tel:${NAP.phone}`} className="text-[#d4a93a] hover:text-[#e8c96b] transition-colors font-semibold">
              {NAP.phoneDisplay}
            </a>
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-3 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors text-sm"
          >
            Book another appointment
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] py-16 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6 text-[#666] hover:text-[#d4a93a] transition-colors text-sm">
            ← Back to home
          </Link>
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
            Book Online
          </span>
          <h1 className="text-white text-4xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Request an Appointment
          </h1>
          <p className="text-[#a0a0a0] text-sm">
            Fill in the details below and we&apos;ll confirm your booking by phone or text.
            Open 24 hours — we&apos;ll get back to you fast.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          {/* Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Your Name *</label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={set('name')}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="(941) 555-0000"
                value={form.phone}
                onChange={set('phone')}
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email <span className="text-[#555] normal-case">(optional)</span></label>
            <input
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={set('email')}
              className={inputClass}
            />
          </div>

          {/* Service */}
          <div>
            <label className={labelClass}>Service Needed *</label>
            <select required value={form.service} onChange={set('service')} className={inputClass}>
              <option value="">Select a service…</option>
              {SERVICES.map(s => (
                <option key={s.slug} value={s.name}>{s.name} — {s.priceRange}</option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className={labelClass}>Your Location / City *</label>
            <select required value={form.city} onChange={set('city')} className={inputClass}>
              <option value="">Select your city…</option>
              {CITIES.map(c => (
                <option key={c.slug} value={c.name}>{c.name}, {c.state}</option>
              ))}
              <option value="Other">Other (specify in notes)</option>
            </select>
          </div>

          {/* Date + Time */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Preferred Date *</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={form.preferred_date}
                onChange={set('preferred_date')}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Preferred Time *</label>
              <select required value={form.preferred_time} onChange={set('preferred_time')} className={inputClass}>
                <option value="">Select a time…</option>
                {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Vehicle */}
          <div>
            <label className={labelClass}>Vehicle <span className="text-[#555] normal-case">(year, make, model — optional)</span></label>
            <input
              type="text"
              placeholder="e.g. 2022 Toyota Camry"
              value={form.vehicle}
              onChange={set('vehicle')}
              className={inputClass}
            />
          </div>

          {/* Notes */}
          <div>
            <label className={labelClass}>Additional Notes <span className="text-[#555] normal-case">(optional)</span></label>
            <textarea
              rows={3}
              placeholder="Any special requests, access instructions, or details about your vehicle's condition…"
              value={form.notes}
              onChange={set('notes')}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Error */}
          {status === 'error' && (
            <p className="text-red-400 text-sm bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded-lg px-4 py-3">
              {errMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(212,169,58,0.3)]"
          >
            {status === 'loading' ? 'Submitting…' : 'Request Appointment'}
          </button>

          <p className="text-center text-[#555] text-xs">
            Or call / text us directly:{' '}
            <a href={`tel:${NAP.phone}`} className="text-[#d4a93a] hover:text-[#e8c96b] transition-colors font-semibold">
              {NAP.phoneDisplay}
            </a>{' '}
            — open 24 hours
          </p>
        </form>
      </div>
    </main>
  );
}
