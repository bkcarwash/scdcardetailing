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
      <div className="flex items-stretch h-[4.5rem]">
        {/* Call — primary, gold, takes more width */}
        <a
          href={`tel:${NAP.phone}`}
          className="flex-[3] flex flex-col items-center justify-center gap-0.5 bg-[#d4a93a] text-black active:bg-[#b8891e] transition-colors"
          aria-label={`Call SCD Car Detailing at ${NAP.phoneDisplay}`}
        >
          <div className="flex items-center gap-2">
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <Phone size={18} />
            <span className="font-bold text-sm uppercase tracking-wide">Call Now</span>
          </div>
          <span className="text-xs font-semibold opacity-80">{NAP.phoneDisplay}</span>
        </a>

        <div className="w-px bg-[#a8821e]" aria-hidden="true" />

        {/* Book — secondary */}
        <Link
          href="/book"
          className="flex-[2] flex flex-col items-center justify-center gap-0.5 bg-[#1a1a1a] text-white active:bg-[#2a2a2a] transition-colors"
          aria-label="Book online"
        >
          <Calendar size={18} className="text-[#d4a93a]" />
          <span className="font-bold text-xs uppercase tracking-wide">Book Online</span>
        </Link>
      </div>
    </div>
  );
}
