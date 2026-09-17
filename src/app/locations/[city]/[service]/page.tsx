import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { CITIES, NAP, HOURS, GEO, SITE_URL } from '@/lib/siteConfig';
import { getCityServicePage, getAllCityServiceParams } from '@/lib/cityServicePages';

type PageProps = {
  params: Promise<{ city: string; service: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ city: string; service: string }[]> {
  return getAllCityServiceParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const page = getCityServicePage(citySlug, serviceSlug);
  if (!page) return {};

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: `${SITE_URL}/locations/${citySlug}/${serviceSlug}` },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: `${SITE_URL}/locations/${citySlug}/${serviceSlug}`,
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const page = getCityServicePage(citySlug, serviceSlug);
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!page || !city) notFound();

  const pageUrl = `${SITE_URL}/locations/${citySlug}/${serviceSlug}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}/locations` },
    { name: city.name, url: `${SITE_URL}/locations/${citySlug}` },
    { name: page.serviceName, url: pageUrl },
  ]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: NAP.name,
    alternateName: NAP.shortName,
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${page.serviceName} in ${city.name}, ${city.state}`,
    description: page.intro,
    url: pageUrl,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: NAP.name,
      telephone: NAP.phone,
    },
    areaServed: {
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    },
    offers: {
      '@type': 'Offer',
      description: page.priceRange,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.quick-answer', '[data-speakable]'],
    },
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={buildFAQSchema(page.faqs)} />
      <JsonLd schema={speakableSchema} />

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
              { label: city.name, href: `/locations/${citySlug}` },
              { label: page.serviceName },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              {page.badge}
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              {page.h1}{' '}
              <span className="text-gradient-gold">{page.h1Highlight}</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-4">{page.intro}</p>

            {/* Quick Answer — targets AI Overviews and featured snippets */}
            <div className="quick-answer mb-6 p-4 bg-[rgba(212,169,58,0.06)] border border-[rgba(212,169,58,0.2)] rounded-xl text-sm text-[#c8c8c8] leading-relaxed">
              <span className="font-semibold text-[#d4a93a]">Quick Answer: </span>
              <span data-speakable>{page.quickAnswer}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${NAP.phone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(212,169,58,0.3)]"
                data-speakable
              >
                <Phone size={16} /> Call for {city.name} {page.serviceName}
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

      {/* Benefits + Service Info */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              badge={`Serving ${city.name}`}
              title="Why Choose Sansanich for"
              titleHighlight={page.serviceName}
              centered={false}
            />
            <ul className="space-y-4">
              {page.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#d4a93a] shrink-0 mt-0.5" />
                  <span className="text-[#a0a0a0] text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Inline call CTA */}
            <div className="mt-8">
              <a
                href={`tel:${NAP.phone}`}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(212,169,58,0.25)]"
              >
                <Phone size={15} /> {NAP.phoneDisplay}
              </a>
              <p className="text-[#555] text-xs mt-2">Open 24 hours — call or text anytime</p>
            </div>
          </div>

          {/* Service info card */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7">
            <h3
              className="text-white text-xl mb-5"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {page.serviceName} — {city.name}
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#d4a93a] shrink-0 mt-0.5" />
                <span className="text-[#a0a0a0] text-sm">
                  Serving all of {city.name} and DeSoto County
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wide w-14 shrink-0">
                  Price
                </span>
                <span className="text-[#a0a0a0] text-sm">{page.priceRange}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wide w-14 shrink-0">
                  Time
                </span>
                <span className="text-[#a0a0a0] text-sm">{page.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wide w-14 shrink-0">
                  Method
                </span>
                <span className="text-[#a0a0a0] text-sm">Mobile — we come to you</span>
              </div>
            </div>

            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6 pb-6 border-b border-[#1e1e1e]">
              {page.localContext}
            </p>

            <div>
              <p className="text-[#666] text-xs mb-2 uppercase tracking-wide font-semibold">
                Book {page.serviceName} in {city.name}
              </p>
              <a
                href={`tel:${NAP.phone}`}
                className="block text-[#d4a93a] hover:text-[#e8c96b] font-bold transition-colors text-lg"
                data-speakable
              >
                {NAP.phoneDisplay}
              </a>
              <p className="text-[#555] text-xs mt-1">Open 24 hours — call or text</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="Questions"
          title={`${city.name} ${page.serviceName}`}
          titleHighlight="FAQ"
          subtitle={`Common questions about ${page.serviceName.toLowerCase()} in ${city.name}, FL.`}
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={page.faqs} />
        </div>
      </SectionWrapper>

      {/* Internal links */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[rgba(212,169,58,0.25)] transition-colors">
            <p className="text-[#666] text-xs uppercase tracking-wide font-semibold mb-3">
              Full Service Details
            </p>
            <h3
              className="text-white text-base mb-2"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {page.serviceName}
            </h3>
            <p className="text-[#a0a0a0] text-sm mb-4">
              Full pricing, process, and FAQ for this service across all Southwest Florida locations.
            </p>
            <Link
              href={`/services/${page.servicePageSlug}`}
              className="inline-flex items-center gap-2 text-[#d4a93a] hover:text-[#e8c96b] text-sm font-semibold transition-colors"
            >
              View service page <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[rgba(212,169,58,0.25)] transition-colors">
            <p className="text-[#666] text-xs uppercase tracking-wide font-semibold mb-3">
              All Services in {city.name}
            </p>
            <h3
              className="text-white text-base mb-2"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {city.name} Detailing
            </h3>
            <p className="text-[#a0a0a0] text-sm mb-4">
              All 14 of our professional detailing services are available throughout {city.name} and DeSoto County.
            </p>
            <Link
              href={`/locations/${citySlug}`}
              className="inline-flex items-center gap-2 text-[#d4a93a] hover:text-[#e8c96b] text-sm font-semibold transition-colors"
            >
              View {city.name} page <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        heading={`Call for ${city.name} ${page.serviceName} — Open 24 Hours`}
        subheading={`Mobile service throughout ${city.name} and DeSoto County. Call or text ${NAP.phoneDisplay} — same-day available.`}
      />
    </>
  );
}
