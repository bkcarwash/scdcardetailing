import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle, Clock, DollarSign, RotateCcw } from 'lucide-react';
import { SERVICE_IMAGES } from '@/lib/images';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { buildServiceSchema, buildHowToSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { SERVICES, SERVICE_SLUGS, SITE_URL } from '@/lib/siteConfig';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} | Sansanich Car Detailing — North Port, FL`,
    description: `${service.shortDescription} ${service.priceRange}. Mobile & in-shop service in North Port, FL and throughout SW Florida. Call (941) 800-8198.`,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: `${service.name} | Sansanich Car Detailing`,
      description: service.shortDescription,
      url: `${SITE_URL}/services/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = buildServiceSchema(service);
  const howToSchema = buildHowToSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: service.name, url: `${SITE_URL}/services/${slug}` },
  ]);

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={howToSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(212,169,58,0.05) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Service hero image */}
        {SERVICE_IMAGES[slug] && (
          <div className="absolute inset-0">
            <Image
              src={SERVICE_IMAGES[slug].src}
              alt={SERVICE_IMAGES[slug].alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={SERVICE_IMAGES[slug].blur}
              className="object-cover object-center opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/40" />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {service.name}
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
              {service.shortDescription}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.3)] rounded-full">
                <DollarSign size={14} className="text-[#d4a93a]" />
                <span className="text-[#d4a93a] text-sm font-bold">{service.priceRange}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#1e1e1e] rounded-full">
                <Clock size={14} className="text-[#666]" />
                <span className="text-[#a0a0a0] text-sm">{service.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#1e1e1e] rounded-full">
                <RotateCcw size={14} className="text-[#666]" />
                <span className="text-[#a0a0a0] text-sm">{service.frequency}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="Overview"
            title={`What Is ${service.name}?`}
            centered={false}
          />
          <p className="text-[#a0a0a0] text-lg leading-relaxed">{service.whatIsIt}</p>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              badge="Included"
              title="What's"
              titleHighlight="Included"
              centered={false}
            />
            <ul className="space-y-3">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[#d4a93a] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#a0a0a0] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
            <h3
              className="text-white text-xl mb-4"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              Ready to Book?
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              We offer {service.name.toLowerCase()} as mobile service (we come to you) or in-shop throughout North Port and Southwest Florida. Available 24 hours, 7 days a week.
            </p>
            <div className="space-y-3">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+19418008198"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-[#2a2a2a] text-white rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors text-sm font-medium"
              >
                📞 Call (941) 800-8198
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <SectionHeading
          badge="The Process"
          title="How It"
          titleHighlight="Works"
          subtitle={`Our ${service.name.toLowerCase()} process, step by step. No guesswork — just professional results.`}
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {service.howTo.map((step, i) => (
              <div
                key={step.step}
                className="flex gap-5 bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[rgba(212,169,58,0.2)] transition-colors"
              >
                <div className="shrink-0">
                  <div
                    className="w-9 h-9 rounded-full bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.3)] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span
                      className="text-[#d4a93a] text-sm font-bold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-base mb-1"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                  >
                    {step.step}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ for this service */}
      {service.faq.length > 0 && (
        <SectionWrapper className="bg-[#0d0d0d]">
          <SectionHeading
            badge="Questions"
            title={`${service.name} FAQ`}
            subtitle="Common questions about this service, answered honestly."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={service.faq} />
          </div>
        </SectionWrapper>
      )}

      <CTASection
        heading={`Book ${service.name} in North Port, FL`}
        subheading={`Mobile or in-shop — we bring professional ${service.name.toLowerCase()} to you throughout Southwest Florida. Available 24 hours.`}
      />
    </>
  );
}
