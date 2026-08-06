'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, Clock, MapPin, ChevronDown } from 'lucide-react';
import { NAP, HOURS, RATINGS } from '@/lib/siteConfig';
import { motion } from 'framer-motion';
import { HERO_HOME } from '@/lib/images';

const MotionDiv = motion.div;

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background — real hero photo with dark overlay */}
      <Image
        src={HERO_HOME.src}
        alt={HERO_HOME.alt}
        fill
        priority
        placeholder="blur"
        blurDataURL={HERO_HOME.blur}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
      <div className="absolute inset-0 carbon-texture opacity-60" aria-hidden="true" />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,169,58,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative lines */}
      <div
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(212,169,58,0.2)] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(212,169,58,0.2)] to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Trust badges row */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {/* Rating badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.25)]">
            <div className="flex" aria-label={`Rated ${RATINGS.ratingValue} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="text-[#d4a93a] fill-[#d4a93a]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#d4a93a] uppercase tracking-wide">
              {RATINGS.ratingValue}.0 / {RATINGS.reviewCount} Google Reviews
            </span>
          </div>

          {/* Open 24h badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.04)] border border-[#2a2a2a]">
            <Clock size={13} className="text-[#d4a93a]" />
            <span className="text-xs font-semibold text-[#a0a0a0] uppercase tracking-wide">
              {HOURS.display}
            </span>
          </div>

          {/* Location badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.04)] border border-[#2a2a2a]">
            <MapPin size={13} className="text-[#d4a93a]" />
            <span className="text-xs font-semibold text-[#a0a0a0] uppercase tracking-wide">
              North Port, FL & Surrounding Areas
            </span>
          </div>
        </MotionDiv>

        {/* Headline */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            className="text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="block">Premium</span>
            <span className="block text-gradient-gold">Car Detailing</span>
            <span className="block text-[0.85em]">North Port, FL</span>
          </h1>
        </MotionDiv>

        {/* Subheadline */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg sm:text-xl text-[#a0a0a0] leading-relaxed">
            Mobile & in-shop detailing that comes to{' '}
            <strong className="text-white font-medium">your home or office</strong> across
            North Port, Port Charlotte, Venice, Sarasota & all of Southwest Florida.
          </p>
        </MotionDiv>

        {/* CTA buttons */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={`tel:${NAP.phone}`}
            className="group flex items-center gap-3 px-8 py-4 bg-[#d4a93a] text-black font-bold text-base uppercase tracking-wide rounded-lg hover:bg-[#e8c96b] transition-all duration-200 shadow-[0_4px_30px_rgba(212,169,58,0.35)] hover:shadow-[0_4px_40px_rgba(212,169,58,0.55)] min-w-[220px] justify-center"
            aria-label={`Call us at ${NAP.phoneDisplay}`}
          >
            <Phone size={18} className="group-hover:scale-110 transition-transform" />
            <span>{NAP.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-base uppercase tracking-wide rounded-lg border-2 border-[#2a2a2a] hover:border-[#d4a93a] hover:text-[#d4a93a] transition-all duration-200 min-w-[220px] justify-center"
          >
            Get a Free Quote
          </Link>
        </MotionDiv>

        {/* Service highlights */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#666]"
        >
          {[
            'Interior Detailing',
            'Exterior Detailing',
            'Ceramic Coating',
            'Paint Correction',
            'Headlight Restoration',
            'Full Detail Packages',
          ].map((service) => (
            <span key={service} className="flex items-center gap-1.5">
              <span className="text-[#d4a93a]" aria-hidden="true">✓</span>
              {service}
            </span>
          ))}
        </MotionDiv>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]">
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
