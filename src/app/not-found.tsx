import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Sansanich Car Detailing',
  description: 'The page you were looking for could not be found. Visit our home page or contact Sansanich Car Detailing directly.',
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: 'Home', href: '/', description: 'Back to our main page' },
  { label: 'Services', href: '/services', description: 'Browse all 14 detailing services' },
  { label: 'Locations', href: '/locations', description: 'See our SW Florida service areas' },
  { label: 'Contact', href: '/contact', description: 'Get a free quote or call us' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080808] flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center">
        {/* 404 number */}
        <div
          className="text-gradient-gold leading-none mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem, 20vw, 12rem)',
          }}
          aria-hidden="true"
        >
          404
        </div>

        {/* Message */}
        <h1
          className="text-white text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Page Not Found
        </h1>
        <p className="text-[#a0a0a0] text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-3 bg-[#111] border border-[#1e1e1e] rounded-xl px-5 py-4 hover:border-[rgba(212,169,58,0.35)] hover:bg-[#141414] transition-all duration-200"
            >
              <div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                >
                  {link.label}
                </p>
                <p className="text-[#555] text-xs mt-0.5">{link.description}</p>
              </div>
              <ArrowRight
                size={16}
                className="text-[#333] group-hover:text-[#d4a93a] group-hover:translate-x-1 transition-all duration-200 shrink-0"
              />
            </Link>
          ))}
        </div>

        {/* Phone */}
        <div className="border-t border-[#1a1a1a] pt-8">
          <p className="text-[#555] text-sm mb-4">
            Need help right now? Call us — we&apos;re available 24 hours.
          </p>
          <a
            href={`tel:${NAP.phone}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(212,169,58,0.3)]"
            aria-label={`Call Sansanich Car Detailing at ${NAP.phoneDisplay}`}
          >
            <Phone size={16} />
            {NAP.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
