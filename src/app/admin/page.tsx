'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Booking } from '@/lib/supabase';

// ─── helpers ────────────────────────────────────────────────────────────────

const STATUS_CYCLE: Record<Booking['status'], Booking['status']> = {
  pending: 'confirmed',
  confirmed: 'completed',
  completed: 'cancelled',
  cancelled: 'pending',
};

const STATUS_STYLE: Record<Booking['status'], string> = {
  pending:   'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  confirmed: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  completed: 'bg-green-500/10 text-green-400 border-green-500/30',
  cancelled: 'bg-red-500/10 text-red-400 border-red-500/30',
};

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  });
}

function fmtCreated(dateStr: string) {
  return new Date(dateStr).toLocaleString('en-US', {
    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true,
  });
}

function copyText(b: Booking) {
  const lines = [
    '📋 BOOKING REQUEST — Sansanich Car Detailing',
    `Name:    ${b.name}`,
    `Phone:   ${b.phone}`,
    b.email ? `Email:   ${b.email}` : null,
    `Service: ${b.service}`,
    `City:    ${b.city}`,
    `Date:    ${fmt(b.preferred_date)}`,
    `Time:    ${b.preferred_time}`,
    b.vehicle ? `Vehicle: ${b.vehicle}` : null,
    b.notes ? `Notes:   ${b.notes}` : null,
    `Status:  ${b.status.toUpperCase()}`,
    `Booked:  ${fmtCreated(b.created_at)}`,
  ].filter(Boolean).join('\n');
  navigator.clipboard.writeText(lines);
}

// ─── password gate ───────────────────────────────────────────────────────────

function PasswordGate({ onAuth }: { onAuth: (pw: string) => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState(false);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    setErr(false);
    const res = await fetch('/api/admin/bookings', {
      headers: { 'x-admin-password': pw },
    });
    if (res.ok) {
      sessionStorage.setItem('admin_pw', pw);
      onAuth(pw);
    } else {
      setErr(true);
    }
  }

  return (
    <main className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.25)] flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Admin Access
          </h1>
          <p className="text-[#666] text-sm mt-1">Sansanich Car Detailing</p>
        </div>
        <form onSubmit={check} className="space-y-4">
          <input
            type="password"
            autoFocus
            placeholder="Enter admin password"
            value={pw}
            onChange={e => { setPw(e.target.value); setErr(false); }}
            className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none transition-colors ${err ? 'border-red-500' : 'border-[#2a2a2a] focus:border-[#d4a93a]'}`}
          />
          {err && <p className="text-red-400 text-xs">Incorrect password.</p>}
          <button
            type="submit"
            className="w-full py-3 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}

// ─── main dashboard ──────────────────────────────────────────────────────────

type Filter = 'all' | Booking['status'];

export default function AdminPage() {
  const [pw, setPw] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<Filter>('all');
  const [copied, setCopied] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  // Restore session
  useEffect(() => {
    const saved = sessionStorage.getItem('admin_pw');
    if (saved) setPw(saved);
  }, []);

  const load = useCallback(async (password: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/bookings', {
        headers: { 'x-admin-password': password },
      });
      if (!res.ok) { setPw(null); sessionStorage.removeItem('admin_pw'); return; }
      setBookings(await res.json());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (pw) load(pw);
  }, [pw, load]);

  async function deleteBooking(id: string) {
    if (!pw) return;
    setDeleting(id);
    await fetch(`/api/admin/bookings/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    });
    setBookings(b => b.filter(x => x.id !== id));
    setConfirmDelete(null);
    setDeleting(null);
  }

  async function cycleStatus(b: Booking) {
    if (!pw) return;
    const next = STATUS_CYCLE[b.status];
    await fetch(`/api/admin/bookings/${b.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': pw },
      body: JSON.stringify({ status: next }),
    });
    setBookings(prev => prev.map(x => x.id === b.id ? { ...x, status: next } : x));
  }

  function handleCopy(b: Booking) {
    copyText(b);
    setCopied(b.id);
    setTimeout(() => setCopied(null), 2000);
  }

  if (!pw) return <PasswordGate onAuth={pw => { sessionStorage.setItem('admin_pw', pw); setPw(pw); }} />;

  const filtered = filter === 'all' ? bookings : bookings.filter(b => b.status === filter);
  const today = new Date().toISOString().split('T')[0];
  const counts = {
    all: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
    today: bookings.filter(b => b.preferred_date === today).length,
  };

  return (
    <main className="min-h-screen bg-[#080808] pb-16">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-[#080808]/95 backdrop-blur border-b border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
              BOOKINGS ADMIN
            </h1>
            <p className="text-[#555] text-xs">Sansanich Car Detailing</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => load(pw)}
              className="text-[#666] hover:text-[#d4a93a] transition-colors text-sm px-3 py-1.5 border border-[#222] rounded-lg"
            >
              ↻ Refresh
            </button>
            <button
              onClick={() => { setPw(null); sessionStorage.removeItem('admin_pw'); }}
              className="text-[#555] hover:text-red-400 transition-colors text-xs"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { label: 'Total', val: counts.all, color: 'text-white' },
            { label: 'Pending', val: counts.pending, color: 'text-yellow-400' },
            { label: 'Confirmed', val: counts.confirmed, color: 'text-blue-400' },
            { label: 'Completed', val: counts.completed, color: 'text-green-400' },
            { label: 'Cancelled', val: counts.cancelled, color: 'text-red-400' },
            { label: 'Today', val: counts.today, color: 'text-[#d4a93a]' },
          ].map(s => (
            <div key={s.label} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-3 text-center">
              <p className={`text-2xl font-bold ${s.color}`} style={{ fontFamily: 'var(--font-display)' }}>{s.val}</p>
              <p className="text-[#555] text-xs uppercase tracking-wide mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'pending', 'confirmed', 'completed', 'cancelled'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors border ${
                filter === f
                  ? 'bg-[#d4a93a] text-black border-[#d4a93a]'
                  : 'text-[#666] border-[#222] hover:border-[#444] hover:text-[#999]'
              }`}
            >
              {f} {f === 'all' ? `(${counts.all})` : `(${counts[f]})`}
            </button>
          ))}
        </div>

        {/* Booking list */}
        {loading ? (
          <div className="text-center py-20 text-[#444]">Loading bookings…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-[#444]">
            {filter === 'all' ? 'No bookings yet.' : `No ${filter} bookings.`}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(b => (
              <div key={b.id} className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-5 hover:border-[#2a2a2a] transition-colors">
                {/* Top row: name + status */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h2 className="text-white font-bold text-lg leading-tight">{b.name}</h2>
                    <a
                      href={`tel:${b.phone.replace(/\D/g, '')}`}
                      className="text-[#d4a93a] hover:text-[#e8c96b] font-semibold text-base transition-colors"
                    >
                      {b.phone}
                    </a>
                    {b.email && (
                      <p className="text-[#666] text-xs mt-0.5">{b.email}</p>
                    )}
                  </div>
                  {/* Status badge — click to cycle */}
                  <button
                    onClick={() => cycleStatus(b)}
                    title="Click to change status"
                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border transition-all hover:opacity-80 ${STATUS_STYLE[b.status]}`}
                  >
                    {b.status}
                  </button>
                </div>

                {/* Details grid */}
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm mb-4">
                  <div className="flex gap-2">
                    <span className="text-[#555] w-14 shrink-0">Service</span>
                    <span className="text-[#d0d0d0] font-medium">{b.service}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#555] w-14 shrink-0">City</span>
                    <span className="text-[#d0d0d0]">{b.city}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#555] w-14 shrink-0">Date</span>
                    <span className="text-[#d4a93a] font-semibold">{fmt(b.preferred_date)}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#555] w-14 shrink-0">Time</span>
                    <span className="text-[#d0d0d0]">{b.preferred_time}</span>
                  </div>
                  {b.vehicle && (
                    <div className="flex gap-2">
                      <span className="text-[#555] w-14 shrink-0">Vehicle</span>
                      <span className="text-[#d0d0d0]">{b.vehicle}</span>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <span className="text-[#555] w-14 shrink-0">Booked</span>
                    <span className="text-[#555]">{fmtCreated(b.created_at)}</span>
                  </div>
                </div>

                {b.notes && (
                  <div className="mb-4 p-3 bg-[#141414] border border-[#1e1e1e] rounded-lg">
                    <p className="text-xs text-[#555] uppercase tracking-wide mb-1">Notes</p>
                    <p className="text-[#a0a0a0] text-sm">{b.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3 pt-1">
                  {/* Copy */}
                  <button
                    onClick={() => handleCopy(b)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all border ${
                      copied === b.id
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-[#161616] text-[#a0a0a0] border-[#252525] hover:border-[#d4a93a] hover:text-[#d4a93a]'
                    }`}
                  >
                    {copied === b.id ? '✓ Copied!' : '📋 Copy'}
                  </button>

                  {/* Call shortcut */}
                  <a
                    href={`tel:${b.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide bg-[#161616] text-[#a0a0a0] border border-[#252525] hover:border-[#d4a93a] hover:text-[#d4a93a] transition-all"
                  >
                    📞 Call
                  </a>

                  {/* Delete */}
                  {confirmDelete === b.id ? (
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-red-400 text-xs">Delete?</span>
                      <button
                        onClick={() => deleteBooking(b.id)}
                        disabled={deleting === b.id}
                        className="px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold hover:bg-red-500/20 transition-colors disabled:opacity-50"
                      >
                        {deleting === b.id ? '…' : 'Yes, delete'}
                      </button>
                      <button
                        onClick={() => setConfirmDelete(null)}
                        className="px-3 py-1.5 text-[#555] text-xs hover:text-[#888] transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmDelete(b.id)}
                      className="ml-auto px-3 py-2 text-[#444] hover:text-red-400 transition-colors text-xs"
                      title="Delete booking"
                    >
                      🗑 Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
