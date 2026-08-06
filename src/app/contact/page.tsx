import type { Metadata } from 'next';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { ContactForm } from '@/components/ContactForm';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { NAP, HOURS, SOCIAL, MAPS, SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact & Get a Free Quote | Sansanich Car Detailing — (941) 800-8198',
  description:
    'Contact Sansanich Car Detailing in North Port, FL. Get a free quote for mobile or in-shop car detailing. Call (941) 800-8198 — available 24 hours, 7 days a week.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Sansanich Car Detailing | Free Quote | (941) 800-8198',
    description:
      'Get a free quote for professional car detailing in North Port, FL. Mobile & in-shop service. Open 24 hours.',
    url: `${SITE_URL}/contact`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Contact', url: `${SITE_URL}/contact` },
]);

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Address',
    content: NAP.address.full,
    href: 'https://maps.google.com/?q=4457+Langsom+Ln+North+Port+FL+34286',
    linkLabel: 'Get Directions',
  },
  {
    icon: Phone,
    label: 'Phone',
    content: NAP.phoneDisplay,
    href: `tel:${NAP.phone}`,
    linkLabel: 'Call Now',
  },
  {
    icon: Clock,
    label: 'Hours',
    content: HOURS.display,
    subContent: 'Call or text us any time — 7 days a week',
    href: null,
    linkLabel: null,
  },
  {
    icon: ExternalLink,
    label: 'Instagram',
    content: SOCIAL.instagramHandle,
    href: SOCIAL.instagram,
    linkLabel: 'Follow Us',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-12 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <div className="mt-8 max-w-2xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              Free Quotes — No Obligation
            </span>
            <h1
              className="text-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Us /{' '}
              <span className="text-gradient-gold">Get a Free Quote</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Tell us about your vehicle and what you need — we&apos;ll respond with a quote and available times. We respond within a few hours. For immediate service, call{' '}
              <a
                href="tel:+19418008198"
                className="text-[#d4a93a] hover:text-[#e8c96b] transition-colors font-semibold"
              >
                {NAP.phoneDisplay}
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

            {/* Left — Contact info + map */}
            <div className="space-y-8">
              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center shrink-0">
                        <item.icon size={15} className="text-[#d4a93a]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#666]">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-white text-sm font-medium mb-1">{item.content}</p>
                    {item.subContent && (
                      <p className="text-[#555] text-xs">{item.subContent}</p>
                    )}
                    {item.href && item.linkLabel && (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-block mt-2 text-xs text-[#d4a93a] hover:text-[#e8c96b] transition-colors"
                        aria-label={`${item.linkLabel} — ${item.label}`}
                      >
                        {item.linkLabel} →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Hours detail */}
              <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6">
                <h3
                  className="text-white text-lg mb-4"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                >
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {HOURS.daysOfWeek.map((day) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-[#a0a0a0] text-sm">{day}</span>
                      <span className="text-[#d4a93a] text-sm font-semibold">
                        {HOURS.display}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 pt-4 border-t border-[#1e1e1e] text-[#555] text-xs leading-relaxed">
                  We work around your schedule — early mornings, evenings, and weekends. Mobile availability depends on weather and current bookings.
                </p>
              </div>

              {/* GMB Map embed */}
              <div className="rounded-xl overflow-hidden border border-[#1e1e1e]">
                <iframe
                  src={MAPS.embedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Sansanich Car Detailing — North Port, FL"
                />
                <div className="bg-[#111] px-5 py-3 flex items-center justify-between gap-4">
                  <p className="text-[#666] text-xs truncate">{NAP.address.full}</p>
                  <a
                    href={MAPS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#d4a93a] hover:text-[#e8c96b] transition-colors shrink-0"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Contact form */}
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 sm:p-8">
              <div className="mb-7">
                <h2
                  className="text-white text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                >
                  Send Us a Message
                </h2>
                <p className="text-[#a0a0a0] text-sm">
                  Fill out the form below and we&apos;ll respond within a few hours with availability and pricing.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick note */}
      <section className="py-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[rgba(212,169,58,0.05)] border border-[rgba(212,169,58,0.2)] rounded-xl">
            <Clock size={18} className="text-[#d4a93a] shrink-0" />
            <p className="text-[#a0a0a0] text-sm">
              <strong className="text-white">We respond within a few hours.</strong>{' '}
              For immediate service, call us at{' '}
              <a
                href="tel:+19418008198"
                className="text-[#d4a93a] hover:text-[#e8c96b] transition-colors font-semibold"
              >
                (941) 800-8198
              </a>{' '}
              — we&apos;re available 24 hours, 7 days a week.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
