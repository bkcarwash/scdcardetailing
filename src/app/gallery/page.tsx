import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/images';
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
          subtitle="Real results from our North Port detailing jobs. Every image is a real customer vehicle."
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-[#1e1e1e]">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/interior-detailing-before-truck-north-port-sansanich-car-detailing-01-800w.webp"
                alt="Dodge Ram truck interior BEFORE professional interior detailing"
                fill
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAgABUB8JaQAApyhm6eAAP5BF+ErLg/hFLOy485gAc3rGW0AAA=="
                sizes="(max-width: 768px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-red-400">Before</span>
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-800w.webp"
                alt="Ford F-250 truck black leather interior AFTER professional interior detailing in North Port, FL"
                fill
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAgABUB8JaQAAupQl4AA/XYSvyhZMoCOkMc9mCcflyJcNgAAAA=="
                sizes="(max-width: 768px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-green-400">After</span>
            </div>
          </div>
          <p className="text-center text-[#666] text-xs mt-3">
            Two different vehicles — the standard of challenge we accept and the result we deliver every time.
          </p>
        </div>
      </SectionWrapper>

      {/* Gallery Grid */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge={`${GALLERY_IMAGES.length} Real Photos`}
          title="Our Work"
          titleHighlight="by Service"
          subtitle="Real results from our North Port detailing jobs. Every image is a real customer vehicle."
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['All', 'Interior', 'Exterior', 'Paint'].map((cat) => (
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
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className="group relative aspect-square rounded-xl overflow-hidden border border-[#1e1e1e] hover:border-[rgba(212,169,58,0.3)] transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading={i < 8 ? 'eager' : 'lazy'}
                placeholder="blur"
                blurDataURL={img.blur}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[#d4a93a] text-xs font-semibold uppercase tracking-wider block">
                  {img.category}
                </span>
                <span className="text-white text-xs">{img.label}</span>
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
