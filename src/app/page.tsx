import type { Metadata } from 'next';
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
            {[
              { label: 'Interior Detail', bg: 'from-[#1a0800] to-[#0a0500]' },
              { label: 'Ceramic Coating', bg: 'from-[#001a0a] to-[#000a05]' },
              { label: 'Paint Correction', bg: 'from-[#00081a] to-[#000410]' },
              { label: 'Exterior Hand Wash', bg: 'from-[#1a0e00] to-[#0a0700]' },
              { label: 'Headlight Restoration', bg: 'from-[#0d001a] to-[#06000a]' },
              { label: 'Full Detail Package', bg: 'from-[#001a15] to-[#000a08]' },
            ].map((item) => (
              <div
                key={item.label}
                className={`aspect-video rounded-xl bg-gradient-to-br ${item.bg} border border-[#1e1e1e] flex items-end p-4`}
              >
                <span className="text-xs text-[#555]">{item.label}</span>
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
