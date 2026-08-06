import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { LocationsStrip } from '@/components/sections/LocationsStrip';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { JsonLd } from '@/components/ui/JsonLd';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { buildFAQSchema } from '@/lib/schema';
import { FAQS, SITE_URL } from '@/lib/siteConfig';
import { HOME_PREVIEW_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Sansanich Car Detailing | Mobile & In-Shop | North Port, FL',
  description:
    'Professional mobile & in-shop car detailing in North Port, FL. Interior, exterior, ceramic coating, paint correction & more. 5.0★ rated. Open 24 hours. Serving all of Southwest Florida.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Sansanich Car Detailing | 5★ Mobile & In-Shop | North Port, FL',
    description:
      'Mobile & in-shop car detailing in North Port, FL. Ceramic coating, paint correction, interior & exterior detailing. Open 24 hours. Call (941) 800-8198.',
    url: SITE_URL,
  },
};

const homeFaqs = FAQS.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(homeFaqs)} />

      <Hero />
      <TrustSignals />
      <ServicesGrid />
      <WhyChooseUs />

      {/* Gallery preview section */}
      <section className="py-20 bg-[#0a0a0a]" aria-label="Before and after results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              Real Results
            </span>
            <h2 className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
              See the <span className="text-gradient-gold">Difference</span>
            </h2>
            <p className="mt-4 text-[#a0a0a0] max-w-xl mx-auto">
              Every vehicle we touch is transformed. These are real results from real customers in North Port and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {HOME_PREVIEW_IMAGES.map((img) => (
              <div
                key={img.label}
                className="relative aspect-video rounded-xl overflow-hidden border border-[#1e1e1e] group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={img.blur}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs text-white font-semibold uppercase tracking-wider">{img.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors duration-200 text-sm font-medium"
            >
              View full gallery →
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <LocationsStrip />

      <SectionWrapper className="bg-[#0a0a0a]">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about our mobile detailing service in North Port and Southwest Florida."
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={homeFaqs} />
        </div>
        <div className="mt-10 text-center">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors duration-200 text-sm font-medium"
          >
            See all FAQs →
          </a>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
