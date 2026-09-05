import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, CheckCircle, Shield, Star, Users, Zap } from 'lucide-react';
import { ABOUT_MOBILE_IMAGE } from '@/lib/images';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema';
import { NAP, HOURS, SITE_URL, SOCIAL, MAPS } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About Sansanich Car Detailing | North Port, FL Auto Detailer',
  description:
    'Learn about Sansanich Car Detailing — a passion-driven mobile and in-shop auto detailing business based in North Port, FL. Real expertise, real results, serving all of Southwest Florida.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Sansanich Car Detailing | North Port, FL',
    description:
      'Mobile & in-shop auto detailing based in North Port, FL. Serving SW Florida with 5.0★ rated ceramic coating, paint correction, interior & exterior detailing.',
    url: `${SITE_URL}/about`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'About', url: `${SITE_URL}/about` },
]);
const organizationSchema = buildOrganizationSchema();

const VALUES = [
  {
    icon: Star,
    title: 'Uncompromising Quality',
    description:
      'We use professional-grade products — the same tools and chemicals used by top detailers nationwide. We never cut corners or rush a job to fit in another booking.',
  },
  {
    icon: Shield,
    title: 'Professionalism',
    description:
      'From the first call to the final walk-around, we communicate clearly, arrive on time, and treat your vehicle with the same care we would give our own.',
  },
  {
    icon: Zap,
    title: 'Transparency',
    description:
      'No surprise charges, no upselling you services you don\'t need. We assess your vehicle honestly, give you a clear quote, and deliver exactly what we promised.',
  },
  {
    icon: Users,
    title: 'Genuine Convenience',
    description:
      'We built this business around your schedule, not ours. Mobile service to your home or office, 24 hours a day — because your time matters.',
  },
];

const VEHICLE_TYPES = [
  { label: 'Cars', detail: 'Sedans, coupes, sports cars' },
  { label: 'Trucks', detail: 'Half-ton, three-quarter-ton, heavy duty' },
  { label: 'SUVs', detail: 'Compact, mid-size, full-size' },
  { label: 'Vans', detail: 'Minivans, cargo vans, passenger vans' },
  { label: 'Fleets', detail: 'Multi-vehicle accounts, commercial' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={organizationSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              North Port, FL — Est. in SW Florida
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About{' '}
              <span className="text-gradient-gold">Sansanich Car Detailing</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed" data-speakable>
              Sansanich Car Detailing is a professional mobile and in-shop automotive detailing company based in North Port, Florida. We serve 11 cities across Southwest Florida — including Port Charlotte, Venice, Sarasota, and Punta Gorda — with ceramic coating, paint correction, interior detailing, and more. Open 24 hours, 7 days a week. Rated 5.0 stars on Google. Call (941) 800-8198 anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              badge="Our Story"
              title="Built on a Passion"
              titleHighlight="for Paint Care"
              centered={false}
            />
            <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
              <p>
                Sansanich Car Detailing was born out of a simple frustration: it was nearly impossible to find a detailer in North Port who combined genuine skill with reliable professionalism. Appointments were missed, results were inconsistent, and the process was a headache. So we decided to do it ourselves — the right way.
              </p>
              <p>
                We started as a mobile-first business because we understood that most people in Southwest Florida don't have time to drop their car off and wait. We come to you — at home, at the office, or wherever your vehicle is — and we bring every piece of professional equipment needed to do the job to the highest standard.
              </p>
              <p>
                Today, Sansanich is a 5.0-star rated detailer with 20+ verified Google reviews from customers across North Port, Port Charlotte, Venice, Punta Gorda, Sarasota, and beyond. Every vehicle we touch reflects our reputation — and we take that seriously.
              </p>
              <p>
                We are a real business with a real location in North Port. We live here, work here, and care about the community we serve. When you call us, you talk to the people who will actually be working on your car.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Mobile detailing in action */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={ABOUT_MOBILE_IMAGE.src}
                alt={ABOUT_MOBILE_IMAGE.alt}
                fill
                placeholder="blur"
                blurDataURL={ABOUT_MOBILE_IMAGE.blur}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">Mobile service — we come to you</span>
            </div>
            {/* NAP Card */}
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
              <h3
                className="text-white text-2xl mb-6"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                Find Us
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#d4a93a]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#666] mb-1">Address</p>
                    <p className="text-white text-sm leading-relaxed">{NAP.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#d4a93a]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#666] mb-1">Phone</p>
                    <a
                      href={`tel:${NAP.phone}`}
                      className="text-[#d4a93a] hover:text-[#e8c96b] font-semibold transition-colors"
                    >
                      {NAP.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#d4a93a]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#666] mb-1">Hours</p>
                    <p className="text-white font-semibold">{HOURS.display}</p>
                    <p className="text-[#a0a0a0] text-sm">7 days a week — call or text anytime</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#1e1e1e]">
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#d4a93a] transition-colors text-sm"
                  >
                    <span className="text-lg">📸</span>
                    {SOCIAL.instagramHandle}
                    <span className="text-[#555]">({SOCIAL.instagramFollowers} followers)</span>
                  </a>
                </div>
              </div>

              {/* GMB Map */}
              <div className="rounded-xl overflow-hidden border border-[#1e1e1e]">
                <iframe
                  src={MAPS.embedUrl}
                  width="100%"
                  height="220"
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
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="What We Stand For"
          title="Our Core"
          titleHighlight="Values"
          subtitle="Every decision we make — from the products we use to the way we communicate — is guided by these four commitments."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[rgba(212,169,58,0.25)] transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center mb-4">
                <value.icon size={22} className="text-[#d4a93a]" />
              </div>
              <h3
                className="text-white text-lg mb-3"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {value.title}
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why We Started */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="The Mission"
            title="Why We Started"
            titleHighlight="Sansanich"
          />
          <div className="space-y-4 text-[#a0a0a0] leading-relaxed text-center">
            <p>
              North Port is one of the fastest-growing cities in Florida. Thousands of new residents arrive every year, and most of them own vehicles they care about. Yet the local detailing market — when we started — was dominated by drive-through washes that left swirl marks, or shops that treated every car like a number.
            </p>
            <p>
              We set out to build something different: a detailing business where every job is personal, every customer is treated with respect, and the results are good enough that we're proud to put our name on them. Florida's intense UV, humidity, and salt air are genuinely hard on paint — and we believe every vehicle owner in Southwest Florida deserves access to professional-grade protection.
            </p>
            <p>
              That belief is what drives us every day. And it's why we offer 24-hour availability, mobile service, and transparent pricing — because protecting your investment shouldn't be complicated.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Vehicle Types */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="What We Service"
          title="Vehicle Types"
          titleHighlight="We Serve"
          subtitle="From daily drivers to fleet vehicles, we have the tools and expertise to detail any vehicle type."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {VEHICLE_TYPES.map((v) => (
            <div
              key={v.label}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 text-center hover:border-[rgba(212,169,58,0.25)] transition-colors"
            >
              <CheckCircle size={20} className="text-[#d4a93a] mx-auto mb-3" />
              <p
                className="text-white font-semibold text-base mb-1"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {v.label}
              </p>
              <p className="text-[#666] text-xs">{v.detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Service Area */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            badge="Coverage"
            title="Our Service"
            titleHighlight="Area"
            subtitle="Based in North Port, we serve a wide radius across Southwest Florida — and our mobile setup means we can reach you wherever you are."
          />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'North Port', 'Port Charlotte', 'Venice', 'Englewood', 'Punta Gorda',
              'Wellen Park', 'Sarasota', 'Nokomis', 'Osprey', 'Rotonda West', 'Arcadia',
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-[#111] border border-[#1e1e1e] rounded-full text-sm text-[#a0a0a0]"
              >
                {city}, FL
              </span>
            ))}
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors text-sm font-medium"
          >
            View all service areas →
          </Link>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Ready to Experience the Sansanich Difference?"
        subheading="Book mobile detailing that comes to your home or office. We're in North Port and ready when you are."
      />
    </>
  );
}
