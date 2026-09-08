import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { CITIES, CITY_SLUGS, SERVICES, FAQS, NAP, HOURS, GEO, SITE_URL } from '@/lib/siteConfig';

type CityPageProps = {
  params: Promise<{ city: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ city: string }[]> {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return {};

  return {
    title: city.meta.title,
    description: city.meta.description,
    alternates: { canonical: `${SITE_URL}/locations/${citySlug}` },
    openGraph: {
      title: city.meta.title,
      description: city.meta.description,
      url: `${SITE_URL}/locations/${citySlug}`,
    },
  };
}

export default async function CityPage({
  params,
}: CityPageProps) {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}/locations` },
    { name: city.name, url: `${SITE_URL}/locations/${citySlug}` },
  ]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    name: NAP.name,
    telephone: NAP.phone,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.zip,
      addressCountry: NAP.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: HOURS.daysOfWeek.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${day}`,
      opens: HOURS.opens,
      closes: HOURS.closes,
    })),
    areaServed: {
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    },
    priceRange: '$$',
  };

  // Use city-specific FAQs when available, fall back to general FAQs
  const cityFaqs = city.cityFaqs && city.cityFaqs.length > 0
    ? city.cityFaqs
    : FAQS.slice(0, 5);

  // Build city-specific selling points using landmarks and neighborhoods
  const cityPoints = [
    `We are based in North Port — typically ${city.distance}, meaning fast arrival times and same-day availability for most ${city.name} locations.`,
    `We know ${city.name}'s unique environment — ${city.landmarks[0] ? `near landmarks like ${city.landmarks[0]}` : 'the local roads and conditions'} — and how Florida's climate affects your vehicle's paint and interior.`,
    `Our mobile unit is fully self-contained: we supply our own water and power, so we can detail your vehicle at home, at work, or in any parking area throughout ${city.name}.`,
    `We serve all neighborhoods in ${city.name}, including ${city.neighborhoods.slice(0, 3).join(', ')}${city.neighborhoods.length > 3 ? ', and more' : ''}.`,
  ];

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={buildFAQSchema(cityFaqs)} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(212,169,58,0.04) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Locations', href: '/locations' },
              { label: city.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              Mobile Car Detailing
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {city.tagline.replace('Mobile Car Detailing in ', '').replace(', FL', '')}
              <span className="text-gradient-gold"> Car Detailing</span>
              <span className="text-white">, {city.state}</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-4">{city.intro}</p>

            {/* Quick Answer — targets AI Overviews and featured snippets */}
            <div className="mb-6 p-4 bg-[rgba(212,169,58,0.06)] border border-[rgba(212,169,58,0.2)] rounded-xl text-sm text-[#c8c8c8] leading-relaxed">
              <span className="font-semibold text-[#d4a93a]">Quick Answer: </span>
              Sansanich Car Detailing offers professional mobile car detailing in {city.name}, FL — interior detailing from $150, exterior from $120, ceramic coating from $500. We come to your home or office. Open 24 hours. Call{' '}
              <a href="tel:+19418008198" className="text-[#d4a93a] font-semibold hover:text-[#e8c96b] transition-colors">{NAP.phoneDisplay}</a>.
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19418008198"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(212,169,58,0.3)]"
              >
                📞 Call for {city.name} Detailing
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#2a2a2a] text-white rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors text-sm font-medium"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in this city */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              badge={`Serving ${city.name}`}
              title={`Why Choose Sansanich in`}
              titleHighlight={city.name}
              centered={false}
            />
            <ul className="space-y-4">
              {cityPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#d4a93a] shrink-0 mt-0.5" />
                  <span className="text-[#a0a0a0] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Landmarks */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7">
            <h3
              className="text-white text-xl mb-5"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {city.name} Local Knowledge
            </h3>
            <div className="space-y-3 mb-6">
              {city.landmarks.map((landmark) => (
                <div key={landmark} className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#d4a93a] shrink-0" />
                  <span className="text-[#a0a0a0] text-sm">{landmark}</span>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-[#1e1e1e]">
              <p className="text-[#666] text-xs mb-3 uppercase tracking-wide font-semibold">
                Contact for {city.name}
              </p>
              <a
                href="tel:+19418008198"
                className="text-[#d4a93a] hover:text-[#e8c96b] font-bold transition-colors"
              >
                {NAP.phoneDisplay}
              </a>
              <p className="text-[#555] text-xs mt-1">Open 24 hours — call or text</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="Available in {city.name}"
          title="Our Services in"
          titleHighlight={city.name}
          subtitle={`All 14 of our professional detailing services are available to ${city.name} residents — mobile or in-shop.`}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-3 bg-[#111] border border-[#1e1e1e] rounded-xl p-4 hover:border-[rgba(212,169,58,0.3)] hover:bg-[#141414] transition-all duration-200"
            >
              <span className="text-2xl shrink-0">{service.icon}</span>
              <span className="text-[#a0a0a0] text-sm group-hover:text-white transition-colors flex-1">
                {service.name}
              </span>
              <ArrowRight
                size={14}
                className="text-[#333] group-hover:text-[#d4a93a] shrink-0 transition-colors"
              />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Neighborhoods */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="Coverage"
            title="Neighborhoods We Serve"
            titleHighlight={`in ${city.name}`}
            subtitle={`We serve all areas of ${city.name} — here are some of the specific neighborhoods our mobile team regularly covers.`}
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {city.neighborhoods.map((hood) => (
              <span
                key={hood}
                className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#1e1e1e] rounded-full text-sm text-[#a0a0a0] hover:border-[rgba(212,169,58,0.25)] transition-colors"
              >
                <MapPin size={12} className="text-[#d4a93a]" />
                {hood}
              </span>
            ))}
          </div>
          <p className="text-center text-[#555] text-sm mt-6">
            Don&apos;t see your neighborhood? Call us — we likely serve your area.{' '}
            <a href="tel:+19418008198" className="text-[#d4a93a] hover:text-[#e8c96b] transition-colors">
              {NAP.phoneDisplay}
            </a>
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="Questions"
          title={`${city.name} Detailing`}
          titleHighlight="FAQ"
          subtitle={`Common questions about our mobile detailing service in ${city.name}, FL.`}
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={cityFaqs} />
        </div>
      </SectionWrapper>

      <CTASection
        heading={`Call for ${city.name} Car Detailing — Open 24 Hours`}
        subheading={`Mobile service throughout ${city.name} and all of Southwest Florida. Call or text (941) 800-8198 — same-day available.`}
      />
    </>
  );
}
