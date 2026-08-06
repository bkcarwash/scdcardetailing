'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { NAP } from '@/lib/siteConfig';

export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-t border-[#2a2a2a] safe-area-inset"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="flex items-stretch h-16">
        <a
          href={`tel:${NAP.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#d4a93a] text-black font-bold text-sm uppercase tracking-wide active:bg-[#b8891e] transition-colors"
          aria-label={`Call us now at ${NAP.phoneDisplay}`}
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <div className="w-px bg-[#a8821e]" aria-hidden="true" />
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-wide active:bg-[#2a2a2a] transition-colors"
          aria-label="Get a free quote"
        >
          <Calendar size={18} className="text-[#d4a93a]" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
