'use client';

import { Star, Quote, Phone } from 'lucide-react';
import { TESTIMONIALS, RATINGS, NAP } from '@/lib/siteConfig';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

function ReviewCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col p-6 bg-[#111] border border-[#1e1e1e] rounded-xl relative"
    >
      <Quote
        size={28}
        className="text-[#d4a93a] opacity-30 mb-4"
        aria-hidden="true"
      />

      <p className="text-[#a0a0a0] text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1e1e1e]">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-[#d4a93a] flex items-center justify-center text-black font-bold text-sm"
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{testimonial.name}</p>
            {testimonial.service && (
              <p className="text-[#555] text-xs">{testimonial.service}</p>
            )}
          </div>
        </div>
        <div
          className="flex"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={12} className="text-[#d4a93a] fill-[#d4a93a]" />
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}

export function Testimonials() {
  return (
    <SectionWrapper className="bg-[#0d0d0d]" id="reviews">
      {/* Aggregate rating header */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 p-8 bg-[#111] border border-[#1e1e1e] rounded-2xl">
        <div className="text-center sm:text-left">
          <div
            className="text-7xl font-bold text-gradient-gold leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {RATINGS.ratingValue}.0
          </div>
          <div className="flex justify-center sm:justify-start mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="text-[#d4a93a] fill-[#d4a93a]" />
            ))}
          </div>
          <p className="text-[#666] text-sm mt-1">
            Based on {RATINGS.reviewCount} Google Reviews
          </p>
        </div>
        <div className="hidden sm:block w-px h-20 bg-[#2a2a2a]" aria-hidden="true" />
        <div className="text-center sm:text-left">
          <p className="text-white text-lg font-semibold mb-1">
            Perfect 5-star record
          </p>
          <p className="text-[#666] text-sm max-w-xs leading-relaxed">
            Every single customer review gives us 5 stars. Our reputation for
            quality and professionalism speaks for itself.
          </p>
        </div>
      </div>

      <SectionHeading
        badge="Customer Reviews"
        title="What Our"
        titleHighlight="Clients Say"
        subtitle="Don't take our word for it. Here's what real customers in North Port and surrounding areas say about Sansanich Car Detailing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <ReviewCard key={testimonial.name} testimonial={testimonial} index={i} />
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`tel:${NAP.phone}`}
          className="flex items-center gap-3 px-8 py-4 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-all duration-200 uppercase tracking-wide text-sm shadow-[0_4px_30px_rgba(212,169,58,0.35)]"
          aria-label={`Call SCD Car Detailing at ${NAP.phoneDisplay}`}
        >
          <Phone size={18} />
          Call {NAP.phoneDisplay}
        </a>
        <a
          href="/reviews"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors duration-200 text-sm font-medium"
        >
          Read all reviews
        </a>
      </div>
    </SectionWrapper>
  );
}
