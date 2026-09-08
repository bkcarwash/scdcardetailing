import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { SERVICES, SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Car Detailing Services | Sansanich Car Detailing — North Port, FL',
  description:
    'Professional mobile & in-shop car detailing services in North Port, FL. Interior, exterior, ceramic coating, paint correction, headlight restoration & more. Starting from $50.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Car Detailing Services | Sansanich — North Port, FL',
    description:
      '14 professional car detailing services available mobile or in-shop throughout Southwest Florida. Ceramic coating, paint correction, full details & more.',
    url: `${SITE_URL}/services`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Services', url: `${SITE_URL}/services` },
]);

const VEHICLE_TYPES = [
  { label: 'Cars', icon: '🚗', examples: 'Sedans, coupes, sports cars, hatchbacks' },
  { label: 'Trucks', icon: '🛻', examples: 'Half-ton, ¾-ton, heavy duty, work trucks' },
  { label: 'SUVs', icon: '🚙', examples: 'Compact, mid-size, full-size, crossovers' },
  { label: 'Vans', icon: '🚐', examples: 'Minivans, passenger vans, cargo vans' },
  { label: 'Fleets', icon: '🏢', examples: 'Multi-vehicle accounts, commercial fleets' },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              {SERVICES.length} Services Available
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Professional Car{' '}
              <span className="text-gradient-gold">Detailing Services</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Comprehensive mobile and in-shop detailing services in North Port, FL and throughout Southwest Florida. From a quick hand wash to a full ceramic coating — we bring professional-grade results to your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <SectionHeading
          badge="All Services"
          title="Everything Your Vehicle"
          titleHighlight="Needs"
          subtitle="Each service is available as mobile (we come to you) or in-shop. Mix and match to build your perfect detail package."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-[#111] border border-[#1e1e1e] rounded-xl p-6 flex flex-col hover:border-[rgba(212,169,58,0.35)] hover:bg-[#141414] transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{service.icon}</span>
                <ArrowRight
                  size={18}
                  className="text-[#333] group-hover:text-[#d4a93a] group-hover:translate-x-1 transition-all duration-200"
                />
              </div>

              {/* Name */}
              <h2
                className="text-white text-xl mb-2"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {service.name}
              </h2>

              {/* Short description */}
              <p className="text-[#a0a0a0] text-sm leading-relaxed flex-1 mb-5">
                {service.shortDescription}
              </p>

              {/* Price & Duration */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(212,169,58,0.08)] border border-[rgba(212,169,58,0.15)] rounded-full">
                  <DollarSign size={11} className="text-[#d4a93a]" />
                  <span className="text-[#d4a93a] text-xs font-semibold">{service.priceRange}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] border border-[#222] rounded-full">
                  <Clock size={11} className="text-[#666]" />
                  <span className="text-[#666] text-xs">{service.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Vehicle Types */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="We Service"
          title="All Vehicle"
          titleHighlight="Types"
          subtitle="Our equipment and techniques are calibrated for every class of vehicle — from compact cars to commercial fleets."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {VEHICLE_TYPES.map((v) => (
            <div
              key={v.label}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 text-center hover:border-[rgba(212,169,58,0.25)] transition-colors"
            >
              <span className="text-3xl block mb-3">{v.icon}</span>
              <p
                className="text-white font-semibold text-base mb-2"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {v.label}
              </p>
              <p className="text-[#555] text-xs leading-relaxed">{v.examples}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why mobile */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="Mobile Service"
            title="We Come"
            titleHighlight="to You"
            subtitle="Our fully equipped mobile rig carries everything needed for any service — water, power, products, and tools. No shop visit required."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'We supply our own water and power for most services',
              'Available at your home, office, apartment, or parking lot',
              'Open 24 hours — early mornings, evenings, weekends',
              'All of Southwest Florida covered from our North Port base',
              'No appointment hassle — call or text to book',
              'Same high standard as in-shop, delivered to your door',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-[#d4a93a] shrink-0 mt-0.5" />
                <span className="text-[#a0a0a0] text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Not Sure Which Service You Need?"
        subheading="Call us — we'll recommend the right service and give you a free quote on the spot."
      />
    </>
  );
}
