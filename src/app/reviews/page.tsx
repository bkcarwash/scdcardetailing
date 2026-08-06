import type { Metadata } from 'next';
import { Star, ExternalLink } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { CTASection } from '@/components/sections/CTASection';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { TESTIMONIALS, RATINGS, NAP, SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Customer Reviews | 5.0★ Car Detailing | Sansanich — North Port, FL',
  description:
    'Read verified 5-star customer reviews for Sansanich Car Detailing in North Port, FL. 20 Google reviews. See what our customers say about our mobile detailing service.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: 'Customer Reviews | 5.0★ Rated | Sansanich Car Detailing',
    description:
      '20 verified 5-star Google reviews for Sansanich Car Detailing in North Port, FL. Ceramic coating, paint correction, interior & exterior detailing.',
    url: `${SITE_URL}/reviews`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Reviews', url: `${SITE_URL}/reviews` },
]);

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: NAP.name,
  telephone: NAP.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.state,
    postalCode: NAP.address.zip,
    addressCountry: NAP.address.country,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: RATINGS.ratingValue,
    reviewCount: RATINGS.reviewCount,
    bestRating: RATINGS.bestRating,
    worstRating: RATINGS.worstRating,
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
    reviewBody: t.text,
  })),
};

const GOOGLE_MAPS_SEARCH =
  'https://www.google.com/search?q=Sansanich+Car+Detailing+North+Port+FL+reviews';

export default function ReviewsPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={aggregateRatingSchema} />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Reviews' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
              Verified Google Reviews
            </span>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Customer{' '}
              <span className="text-gradient-gold">Reviews</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Don&apos;t take our word for it. Our customers across North Port, Port Charlotte, Venice, and Southwest Florida consistently give us 5 stars — here&apos;s what they say.
            </p>
          </div>
        </div>
      </section>

      {/* Big Rating Display */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Rating number */}
          <div className="text-center shrink-0">
            <div
              className="text-[#d4a93a] leading-none mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 15vw, 9rem)' }}
            >
              {RATINGS.ratingValue.toFixed(1)}
            </div>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={28} className="text-[#d4a93a] fill-[#d4a93a]" />
              ))}
            </div>
            <p className="text-[#a0a0a0] text-sm">
              Based on{' '}
              <span className="text-white font-semibold">{RATINGS.reviewCount} reviews</span>
            </p>
            <p className="text-[#666] text-xs mt-1">Google</p>
          </div>

          {/* Rating breakdown */}
          <div className="flex-1 w-full max-w-md">
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stars === 5 ? RATINGS.reviewCount : 0;
                const pct = stars === 5 ? 100 : 0;
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-14 shrink-0">
                      <span className="text-[#a0a0a0] text-sm">{stars}</span>
                      <Star size={12} className="text-[#d4a93a] fill-[#d4a93a]" />
                    </div>
                    <div className="flex-1 h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#d4a93a] rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[#666] text-xs w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-[#111] border border-[#1e1e1e] rounded-xl">
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Every single one of our {RATINGS.reviewCount} Google reviews is a 5-star rating. We maintain this record by treating every vehicle — and every customer — as our most important.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Grid */}
      <SectionWrapper className="bg-[#0d0d0d]">
        <SectionHeading
          badge="What Customers Say"
          title="Real Reviews from"
          titleHighlight="Real Customers"
          subtitle="These represent a sample of our Google reviews from customers in North Port and surrounding Southwest Florida communities."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 flex flex-col hover:border-[rgba(212,169,58,0.2)] transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#d4a93a] fill-[#d4a93a]" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-[#a0a0a0] text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author & service */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e1e]">
                <div className="w-9 h-9 rounded-full bg-[rgba(212,169,58,0.15)] border border-[rgba(212,169,58,0.3)] flex items-center justify-center shrink-0">
                  <span className="text-[#d4a93a] text-xs font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                  {testimonial.service && (
                    <p className="text-[#555] text-xs">{testimonial.service}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Google Reviews Note */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.25)] flex items-center justify-center mx-auto mb-4">
              <Star size={22} className="text-[#d4a93a] fill-[#d4a93a]" />
            </div>
            <h2
              className="text-white text-2xl mb-3"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              Read All {RATINGS.reviewCount} Reviews on Google
            </h2>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              These represent a sample of our Google reviews. Search &ldquo;Sansanich Car Detailing&rdquo; on Google to read all {RATINGS.reviewCount} verified reviews — every one is a 5-star rating.
            </p>
            <a
              href={GOOGLE_MAPS_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-colors text-sm uppercase tracking-wide"
            >
              View on Google
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Ready to Join Our Happy Customers?"
        subheading="Book your mobile detailing appointment today and experience the service that has earned us a perfect 5-star rating."
      />
    </>
  );
}
