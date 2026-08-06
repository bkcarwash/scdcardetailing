'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '@/lib/siteConfig';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check (spam bots fill hidden fields)
    if (data.get('_honey')) return;

    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    const newErrors: Record<string, string> = {};
    if (!name || name.length < 2) newErrors.name = 'Please enter your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address.';
    if (!message || message.length < 10)
      newErrors.message = 'Please describe what service you need (at least 10 characters).';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: data.get('service'),
          vehicle: data.get('vehicle'),
          message,
        }),
      });

      if (res.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-4">
        <CheckCircle size={48} className="text-[#22c55e]" />
        <h3 className="text-white text-xl font-semibold" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
          Request Received!
        </h3>
        <p className="text-[#a0a0a0] max-w-sm">
          We&apos;ll get back to you as soon as possible. For immediate assistance, call{' '}
          <a href="tel:+19418008198" className="text-[#d4a93a] hover:text-[#e8c96b]">
            (941) 800-8198
          </a>.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-2 text-sm text-[#666] hover:text-[#a0a0a0] underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, filled by bots */}
      <input
        type="text"
        name="_honey"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute opacity-0 pointer-events-none"
        autoComplete="off"
      />

      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid sm:grid-cols-2 gap-4'}>
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wide text-[#a0a0a0] mb-1.5">
            Full Name <span className="text-[#d4a93a]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-white text-sm placeholder:text-[#444] focus:outline-none focus:border-[#d4a93a] focus:ring-1 focus:ring-[#d4a93a] transition-colors"
            placeholder="John Smith"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-[#ef4444] flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wide text-[#a0a0a0] mb-1.5">
            Email Address <span className="text-[#d4a93a]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-white text-sm placeholder:text-[#444] focus:outline-none focus:border-[#d4a93a] focus:ring-1 focus:ring-[#d4a93a] transition-colors"
            placeholder="john@example.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-[#ef4444] flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid sm:grid-cols-2 gap-4'}>
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wide text-[#a0a0a0] mb-1.5">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-white text-sm placeholder:text-[#444] focus:outline-none focus:border-[#d4a93a] focus:ring-1 focus:ring-[#d4a93a] transition-colors"
            placeholder="(941) 555-0000"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wide text-[#a0a0a0] mb-1.5">
            Service Needed
          </label>
          <select
            id="contact-service"
            name="service"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-white text-sm focus:outline-none focus:border-[#d4a93a] focus:ring-1 focus:ring-[#d4a93a] transition-colors appearance-none"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure">Not sure — let&apos;s discuss</option>
          </select>
        </div>
      </div>

      {/* Vehicle type */}
      <div>
        <label htmlFor="contact-vehicle" className="block text-xs font-semibold uppercase tracking-wide text-[#a0a0a0] mb-1.5">
          Vehicle Type
        </label>
        <input
          id="contact-vehicle"
          name="vehicle"
          type="text"
          className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-white text-sm placeholder:text-[#444] focus:outline-none focus:border-[#d4a93a] focus:ring-1 focus:ring-[#d4a93a] transition-colors"
          placeholder="e.g. 2020 Toyota Camry, pickup truck, SUV..."
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wide text-[#a0a0a0] mb-1.5">
          Message / Details <span className="text-[#d4a93a]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={compact ? 3 : 5}
          className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-white text-sm placeholder:text-[#444] focus:outline-none focus:border-[#d4a93a] focus:ring-1 focus:ring-[#d4a93a] transition-colors resize-y"
          placeholder="Describe your vehicle, the service you need, your location, and any specific concerns..."
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-[#ef4444] flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.message}
          </p>
        )}
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-[rgba(239,68,68,0.1)] border border-[#ef4444]/30 rounded-lg text-sm text-[#ef4444]">
          <AlertCircle size={16} />
          Something went wrong. Please try again or call us at (941) 800-8198.
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#d4a93a] text-black font-bold text-sm uppercase tracking-wide rounded-lg hover:bg-[#e8c96b] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(212,169,58,0.3)]"
      >
        {state === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send My Request
          </>
        )}
      </button>

      <p className="text-xs text-[#444] text-center">
        We respond within a few hours. For immediate service, call{' '}
        <a href="tel:+19418008198" className="text-[#d4a93a] hover:text-[#e8c96b]">
          (941) 800-8198
        </a>.
      </p>
    </form>
  );
}
