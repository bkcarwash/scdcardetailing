import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Star } from 'lucide-react';
import { NAP, HOURS, SOCIAL, RATINGS, SERVICES, CITIES } from '@/lib/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]" aria-label="Site footer">
      {/* Top CTA bar */}
      <div className="bg-[#d4a93a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-black text-lg uppercase tracking-wide">
              Ready for a showroom-clean vehicle?
            </p>
            <p className="text-black/70 text-sm">Open 24 hours — mobile service comes to you.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${NAP.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white font-bold rounded-md hover:bg-[#1a1a1a] transition-colors text-sm uppercase tracking-wide"
            >
              <Phone size={15} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-black/20 text-black font-bold rounded-md hover:bg-black/30 transition-colors text-sm uppercase tracking-wide border border-black/30"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6" aria-label="Sansanich Car Detailing — Home">
              <Image
                src="/logo.webp"
                alt="Sansanich Car Detailing logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                sizes="48px"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-xl tracking-widest text-white uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Sansanich
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#d4a93a] uppercase font-medium">
                  Car Detailing
                </span>
              </div>
            </Link>

            <div className="space-y-3 text-sm text-[#666]">
              <address className="not-italic flex items-start gap-2">
                <MapPin size={14} className="text-[#d4a93a] mt-0.5 shrink-0" />
                <span>{NAP.address.full}</span>
              </address>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#d4a93a] shrink-0" />
                <a
                  href={`tel:${NAP.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {NAP.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#d4a93a] shrink-0" />
                <span>{HOURS.display}</span>
              </div>
            </div>

            {/* Rating badge */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#d4a93a] fill-[#d4a93a]"
                  />
                ))}
              </div>
              <span className="text-sm text-[#a0a0a0]">
                {RATINGS.ratingValue}.0 / {RATINGS.reviewCount} reviews
              </span>
            </div>

            {/* Social */}
            <div className="mt-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#d4a93a] transition-colors"
                aria-label="Follow Sansanich Car Detailing on Instagram"
              >
                {/* Instagram icon SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <span>{SOCIAL.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#666] hover:text-[#d4a93a] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-5">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-sm text-[#666] hover:text-[#d4a93a] transition-colors"
                  >
                    {city.name}, FL
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact / Quote', href: '/contact' },
                { label: 'All Services', href: '/services' },
                { label: 'Service Areas', href: '/locations' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#666] hover:text-[#d4a93a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#444]">
          <p>
            © {currentYear} {NAP.name}. All rights reserved.
          </p>
          <p>
            {NAP.address.full} &bull;{' '}
            <a href={`tel:${NAP.phone}`} className="hover:text-[#d4a93a] transition-colors">
              {NAP.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
