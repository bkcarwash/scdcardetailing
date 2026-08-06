import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Detailing Gallery | Before & After | Sansanich Car Detailing',
  description:
    'Browse before & after photos of our car detailing work in North Port, FL. Interior detailing, ceramic coating, paint correction, exterior detailing, and more.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Detailing Gallery | Sansanich Car Detailing — North Port, FL',
    description:
      'Before & after results from our mobile and in-shop car detailing services in North Port and SW Florida.',
    url: `${SITE_URL}/gallery`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Gallery', url: `${SITE_URL}/gallery` },
]);

const GALLERY_ITEMS = [
  { label: 'Interior Detail', category: 'Interior', gradient: 'from-[#1a0800] to-[#0a0500]', accent: '#4a1f00' },
  { label: 'Ceramic Coating', category: 'Exterior', gradient: 'from-[#001a0a] to-[#000a05]', accent: '#004a1a' },
  { label: 'Paint Correction', category: 'Paint', gradient: 'from-[#00081a] to-[#000410]', accent: '#00144a' },
  { label: 'Exterior Hand Wash', category: 'Exterior', gradient: 'from-[#1a0e00] to-[#0a0700]', accent: '#4a2e00' },
  { label: 'Headlight Restoration', category: 'Restoration', gradient: 'from-[#0d001a] to-[#06000a]', accent: '#2a004a' },
  { label: 'Full Detail Package', category: 'Full Detail', gradient: 'from-[#001a15] to-[#000a08]', accent: '#004a3a' },
  { label: 'Leather Conditioning', category: 'Interior', gradient: 'from-[#1a1000] to-[#0a0800]', accent: '#4a3000' },
  { label: 'Wheel & Tire Detail', category: 'Exterior', gradient: 'from-[#0a001a] to-[#05000a]', accent: '#1a004a' },
  { label: 'Engine Bay Clean', category: 'Engine', gradient: 'from-[#1a0500] to-[#0a0200]', accent: '#4a0f00' },
  { label: 'Stain Removal', category: 'Interior', gradient: 'from-[#001a1a] to-[#000a0a]', accent: '#004a4a' },
  { label: 'Clay Bar Treatment', category: 'Paint', gradient: 'from-[#0a1a00] to-[#050a00]', accent: '#1a4a00' },
  { label: 'Pet Hair Removal', category: 'Interior', gradient: 'from-[#1a001a] to-[#0a000a]', accent: '#4a004a' },
];

const CATEGORIES = ['All', 'Interior', 'Exterior', 'Paint', 'Full Detail', 'Restoration', 'Engine'];

export default function GalleryPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              Real Results
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Detailing{' '}
              <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Every vehicle we touch gets the same meticulous attention. Browse our before & after results from interior detailing, ceramic coating, paint correction, and more — all completed on real customer vehicles in North Port and SW Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Slider placeholder */}
      {/*
        NOTE: BeforeAfterSlider is imported from @/components/sections/BeforeAfterSlider.
        To activate it, add client images to /public/gallery/before/ and /public/gallery/after/
        then replace the placeholder div below with:
        <BeforeAfterSlider
          beforeSrc="/gallery/before/sample-before.jpg"
          afterSrc="/gallery/after/sample-after.jpg"
          label="Paint Correction — Before & After"
        />
      */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <SectionHeading
          badge="Before & After"
          title="See the"
          titleHighlight="Transformation"
          subtitle="Real before and after results from our North Port customers. Add your images to /public/gallery/ to activate the interactive slider."
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
            {/* Left half — "before" */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-gradient-to-br from-[#1a0a00] to-[#0d0500] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#555] text-xs uppercase tracking-widest mb-2">Before</p>
                  <p className="text-[#333] text-sm">Customer photo here</p>
                </div>
              </div>
              {/* Divider */}
              <div className="w-px bg-[#d4a93a] opacity-60 relative z-10">
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#d4a93a] flex items-center justify-center shadow-lg">
                  <span className="text-black text-xs font-bold">↔</span>
                </div>
              </div>
              <div className="w-1/2 bg-gradient-to-br from-[#001a08] to-[#000d04] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#555] text-xs uppercase tracking-widest mb-2">After</p>
                  <p className="text-[#333] text-sm">Customer photo here</p>
                </div>
              </div>
            </div>
            {/* Overlay note */}
            <div className="relative z-20 text-center">
              <div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-sm border border-[#2a2a2a] rounded-xl px-6 py-4">
                <p className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wider mb-1">
                  Before &amp; After Slider
                </p>
                <p className="text-[#666] text-xs">
                  Add client images to /public/gallery/ to enable
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery Grid */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge={`${GALLERY_ITEMS.length} Service Types`}
          title="Our Work"
          titleHighlight="by Service"
          subtitle="From quick hand washes to multi-day ceramic coating projects — we photograph every job and will add real images here as our gallery grows."
        />

        {/* Category filter — static labels for display */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                cat === 'All'
                  ? 'bg-[rgba(212,169,58,0.15)] border-[rgba(212,169,58,0.4)] text-[#d4a93a]'
                  : 'bg-[#111] border-[#1e1e1e] text-[#666]'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`group relative aspect-square rounded-xl bg-gradient-to-br ${item.gradient} border border-[#1e1e1e] overflow-hidden hover:border-[rgba(212,169,58,0.3)] transition-all duration-300`}
            >
              {/* Placeholder image area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-lg opacity-20"
                  style={{ background: item.accent }}
                />
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wider block">
                  {item.category}
                </span>
                <span className="text-white text-xs">{item.label}</span>
              </div>

              {/* Coming soon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50">
                <span className="text-[#d4a93a] text-xs uppercase tracking-widest">
                  Photo Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#111] border border-[#1e1e1e] rounded-xl">
            <span className="text-[#d4a93a] text-lg">📸</span>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">Follow us on Instagram</p>
              <a
                href="https://www.instagram.com/sansanichcardetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] text-xs hover:text-[#d4a93a] transition-colors"
              >
                @sansanichcardetailing — see our latest work
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services link */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#a0a0a0] mb-6 leading-relaxed">
            Interested in a specific service? Browse our full list of detailing services to learn what&apos;s included, how long it takes, and pricing.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide"
          >
            View All Services →
          </Link>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
