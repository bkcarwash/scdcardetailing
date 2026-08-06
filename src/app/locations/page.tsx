import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { CITIES, NAP, SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Car Detailing Service Areas | SW Florida | Sansanich',
  description:
    'Sansanich Car Detailing serves 11 cities across Southwest Florida from our North Port base. Mobile detailing to Port Charlotte, Venice, Sarasota, Englewood, Punta Gorda & more.',
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: 'Mobile Car Detailing Service Areas | SW Florida | Sansanich',
    description:
      'Mobile car detailing serving North Port, Port Charlotte, Venice, Sarasota, Englewood, Punta Gorda, Wellen Park, Nokomis, Osprey, Rotonda West & Arcadia, FL.',
    url: `${SITE_URL}/locations`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Locations', url: `${SITE_URL}/locations` },
]);

export default function LocationsPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Locations' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              {CITIES.length} Cities Served
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mobile Car Detailing{' '}
              <span className="text-gradient-gold">Service Areas</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Based in North Port, FL, we serve {CITIES.length} cities across Southwest Florida. Our fully equipped mobile rig brings professional detailing to your driveway — no shop visit required. If you don&apos;t see your city, call us — we may still be able to reach you.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <SectionHeading
          badge="Coverage"
          title="Cities We"
          titleHighlight="Serve"
          subtitle="Click any city to see details about our service in that area, local neighborhoods we cover, and how to book."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-[#111] border border-[#1e1e1e] rounded-xl p-6 flex flex-col hover:border-[rgba(212,169,58,0.35)] hover:bg-[#141414] transition-all duration-200"
            >
              {/* Location pin */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center">
                  <MapPin size={18} className="text-[#d4a93a]" />
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#333] group-hover:text-[#d4a93a] group-hover:translate-x-1 transition-all duration-200 mt-1"
                />
              </div>

              {/* City name */}
              <h2
                className="text-white text-xl mb-1"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {city.name}
              </h2>
              <p className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wide mb-3">
                {city.state}
              </p>

              {/* Distance */}
              <p className="text-[#666] text-xs mb-4 capitalize">{city.distance}</p>

              {/* Intro snippet */}
              <p className="text-[#a0a0a0] text-sm leading-relaxed line-clamp-3 flex-1">
                {city.intro}
              </p>

              {/* Neighborhoods preview */}
              <div className="mt-4 pt-4 border-t border-[#1a1a1a]">
                <div className="flex flex-wrap gap-1.5">
                  {city.neighborhoods.slice(0, 3).map((hood) => (
                    <span
                      key={hood}
                      className="text-xs px-2 py-0.5 bg-[#1a1a1a] border border-[#222] rounded-full text-[#555]"
                    >
                      {hood}
                    </span>
                  ))}
                  {city.neighborhoods.length > 3 && (
                    <span className="text-xs px-2 py-0.5 text-[#444]">
                      +{city.neighborhoods.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Map section */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="Our Location"
          title="Based in"
          titleHighlight="North Port, FL"
          subtitle="Our home base is in North Port — the heart of our service area. We can reach most Southwest Florida locations within 30–45 minutes."
        />
        <div className="max-w-4xl mx-auto">
          {/* Map placeholder */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin size={40} className="text-[#d4a93a] mx-auto mb-4" />
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {NAP.address.full}
              </h3>
              <p className="text-[#a0a0a0] text-sm mb-4">
                An interactive map is available on our contact page.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors text-sm"
              >
                Get directions →
              </Link>
            </div>
          </div>

          {/* Address card */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#666] mb-2">Address</p>
              <p className="text-white text-sm">{NAP.address.street}</p>
              <p className="text-white text-sm">{NAP.address.city}, {NAP.address.state} {NAP.address.zip}</p>
            </div>
            <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#666] mb-2">Phone</p>
              <a
                href="tel:+19418008198"
                className="text-[#d4a93a] font-semibold hover:text-[#e8c96b] transition-colors"
              >
                {NAP.phoneDisplay}
              </a>
              <p className="text-[#555] text-xs mt-1">Call or text anytime</p>
            </div>
            <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#666] mb-2">Hours</p>
              <p className="text-white font-semibold">Open 24 Hours</p>
              <p className="text-[#555] text-xs mt-1">7 days a week</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Don't See Your City?"
        subheading="Call us — we serve a wide area across Southwest Florida and may still be able to come to you."
        primaryCta={{ label: 'Call (941) 800-8198', href: 'tel:+19418008198' }}
      />
    </>
  );
}
