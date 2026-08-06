'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAP, SERVICES, CITIES, SITE_URL } from '@/lib/siteConfig';

const NAV_LINKS = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Locations', href: '/locations', hasDropdown: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const SERVICE_LINKS = SERVICES.slice(0, 8).map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
}));

const CITY_LINKS = CITIES.slice(0, 6).map((c) => ({
  label: c.name,
  href: `/locations/${c.slug}`,
}));

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2a2a2a] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight group"
            aria-label="Sansanich Car Detailing — Home"
          >
            <span
              className="font-display text-xl lg:text-2xl tracking-widest text-white uppercase group-hover:text-gold transition-colors duration-200"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sansanich
            </span>
            <span className="text-[10px] lg:text-xs tracking-[0.25em] text-[#d4a93a] uppercase font-medium">
              Car Detailing
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-[#a0a0a0] hover:text-white transition-colors duration-200"
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        activeDropdown === link.label && 'rotate-180'
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm text-[#a0a0a0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'absolute top-full left-0 mt-1 w-56 bg-[#161616] border border-[#2a2a2a] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-200',
                      activeDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                  >
                    <ul className="py-2">
                      {(link.label === 'Services' ? SERVICE_LINKS : CITY_LINKS).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-[#a0a0a0] hover:text-white hover:bg-[#2a2a2a] transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t border-[#2a2a2a] mt-2 pt-2">
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-[#d4a93a] hover:text-[#e8c96b] transition-colors duration-150"
                        >
                          View all {link.label} →
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${NAP.phone}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#d4a93a] hover:text-[#e8c96b] transition-colors duration-200"
              aria-label={`Call us at ${NAP.phoneDisplay}`}
            >
              <Phone size={15} />
              <span>{NAP.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#d4a93a] text-black text-sm font-bold rounded-md hover:bg-[#e8c96b] transition-colors duration-200 uppercase tracking-wide"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${NAP.phone}`}
              className="p-2 text-[#d4a93a]"
              aria-label={`Call ${NAP.phoneDisplay}`}
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#a0a0a0] hover:text-white transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden bg-[#0f0f0f] border-t border-[#2a2a2a] overflow-y-auto max-h-[calc(100dvh-4rem)] transition-all duration-300',
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none h-0'
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-base text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a] rounded-md transition-colors duration-150"
              >
                {link.label}
              </Link>
              {link.label === 'Services' && (
                <div className="ml-4 mt-1 space-y-1">
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-[#666] hover:text-[#a0a0a0] transition-colors duration-150"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-[#2a2a2a]">
            <a
              href={`tel:${NAP.phone}`}
              className="flex items-center gap-3 px-3 py-3 text-base font-semibold text-[#d4a93a]"
            >
              <Phone size={18} />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block w-full text-center px-5 py-3 bg-[#d4a93a] text-black font-bold rounded-md hover:bg-[#e8c96b] transition-colors uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
