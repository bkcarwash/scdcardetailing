import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { NAP, HOURS } from '@/lib/siteConfig';

type CTASectionProps = {
  heading?: string;
  subheading?: string;
  showBook?: boolean;
};

export function CTASection({
  heading = "Get a Showroom-Clean Vehicle Today",
  subheading = "Call or text anytime — we're open 24 hours. Mobile service comes to your home or office.",
  showBook = true,
}: CTASectionProps) {
  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,169,58,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,169,58,0.4)] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,169,58,0.4)] to-transparent" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#d4a93a] text-xs font-bold uppercase tracking-widest mb-4">
          {HOURS.display} — Call or Text Anytime
        </p>

        <h2
          className="text-white mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {heading}
        </h2>

        <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* PRIMARY — Call Now (gold, dominant) */}
          <a
            href={`tel:${NAP.phone}`}
            className="flex items-center gap-3 px-8 py-4 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-all duration-200 uppercase tracking-wide text-sm shadow-[0_4px_30px_rgba(212,169,58,0.4)] hover:shadow-[0_4px_50px_rgba(212,169,58,0.65)] min-w-[240px] justify-center"
            aria-label={`Call SCD Car Detailing at ${NAP.phoneDisplay}`}
          >
            <Phone size={18} />
            <span>Call {NAP.phoneDisplay}</span>
          </a>

          {/* SECONDARY — Book Online */}
          {showBook && (
            <Link
              href="/book"
              className="flex items-center gap-2 px-8 py-4 border border-[#2a2a2a] text-white font-bold rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-all duration-200 uppercase tracking-wide text-sm min-w-[200px] justify-center"
            >
              <Calendar size={16} />
              Book Online
            </Link>
          )}
        </div>

        <p className="mt-6 text-[#555] text-xs">
          Open 24/7 · North Port · Port Charlotte · Venice · Sarasota · Punta Gorda & more
        </p>
      </div>
    </section>
  );
}
