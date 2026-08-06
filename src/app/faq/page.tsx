import type { Metadata } from 'next';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { buildFAQSchema } from '@/lib/schema';
import { FAQS, NAP, SITE_URL } from '@/lib/siteConfig';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Car Detailing FAQ | Sansanich Car Detailing North Port FL',
  description:
    'Answers to the most common questions about mobile car detailing in North Port and SW Florida — pricing, services, scheduling, ceramic coating, and more.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'Car Detailing FAQ | Sansanich Car Detailing — North Port, FL',
    description:
      'Everything you need to know about mobile car detailing: pricing, what\'s included, how to book, and how we serve North Port and SW Florida.',
    url: `${SITE_URL}/faq`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'FAQ', url: `${SITE_URL}/faq` },
]);

// Group FAQs by category
const FAQ_CATEGORIES = ['General', 'Pricing', 'Mobile Detailing', 'Services', 'Booking'] as const;

function groupFaqs() {
  const groups: Record<string, typeof FAQS> = {};
  for (const cat of FAQ_CATEGORIES) {
    const items = FAQS.filter((f) => f.category === cat);
    if (items.length > 0) groups[cat] = items;
  }
  // Catch any without a category
  const uncategorized = FAQS.filter((f) => !f.category);
  if (uncategorized.length > 0) groups['Other'] = uncategorized;
  return groups;
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  General: 'Basic questions about who we are, where we serve, and how we work.',
  Pricing: 'What to expect in terms of cost for our services in North Port and Southwest Florida.',
  'Mobile Detailing': 'How mobile detailing works and what you need to prepare.',
  Services: 'Details about our service offerings and what each one involves.',
  Booking: 'How to schedule your appointment.',
};

export default function FAQPage() {
  const faqGroups = groupFaqs();
  const faqSchema = buildFAQSchema(FAQS);

  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              {FAQS.length} Questions Answered
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently Asked{' '}
              <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Everything you need to know about mobile car detailing in North Port and Southwest Florida. Can&apos;t find what you&apos;re looking for?{' '}
              <a
                href={`tel:${NAP.phone}`}
                className="text-[#d4a93a] hover:text-[#e8c96b] transition-colors"
              >
                Call us at {NAP.phoneDisplay}
              </a>{' '}
              — we&apos;re available 24 hours, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ sections by category */}
      {Object.entries(faqGroups).map(([category, faqs], i) => (
        <SectionWrapper
          key={category}
          className={i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#0d0d0d]'}
          id={`faq-${category.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              badge={`${faqs.length} Question${faqs.length !== 1 ? 's' : ''}`}
              title={category}
              subtitle={CATEGORY_DESCRIPTIONS[category]}
              centered={false}
            />
            <FAQAccordion faqs={faqs} />
          </div>
        </SectionWrapper>
      ))}

      {/* Quick contact note */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
            <h2
              className="text-white text-2xl mb-4"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              Still Have Questions?
            </h2>
            <p className="text-[#a0a0a0] mb-6 leading-relaxed">
              Our team is available around the clock. Give us a call or text and we&apos;ll answer any question about our services, pricing, or scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${NAP.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide"
              >
                📞 {NAP.phoneDisplay}
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#2a2a2a] text-white rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors text-sm font-medium"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
