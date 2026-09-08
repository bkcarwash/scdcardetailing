import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { SERVICES, NAP } from '@/lib/siteConfig';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export function ServicesGrid() {
  return (
    <SectionWrapper id="services" className="bg-[#0a0a0a]">
      <SectionHeading
        badge="What We Do"
        title="Professional Detailing"
        titleHighlight="Services"
        subtitle="From a quick hand wash to full ceramic coating — every service is performed with professional-grade products and meticulous attention to detail."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {SERVICES.map((service, i) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group relative flex flex-col p-6 bg-[#111] border border-[#1e1e1e] rounded-xl hover:border-[#d4a93a]/40 hover:bg-[#141414] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(212,169,58,0.1)]"
          >
            {/* Icon */}
            <span className="text-3xl mb-4 block" aria-hidden="true">
              {service.icon}
            </span>

            <h3
              className="text-white text-lg mb-2 group-hover:text-[#d4a93a] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {service.name}
            </h3>

            <p className="text-[#666] text-sm leading-relaxed flex-1 mb-4">
              {service.shortDescription}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1e1e1e]">
              <span className="text-xs text-[#555]">{service.priceRange}</span>
              <ArrowRight
                size={16}
                className="text-[#d4a93a] group-hover:translate-x-1 transition-transform duration-200"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Vehicle types note */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {['Cars', 'Trucks', 'SUVs', 'Vans', 'Fleets'].map((type) => (
          <span
            key={type}
            className="px-3 py-1.5 bg-[#111] border border-[#1e1e1e] rounded-full text-xs text-[#666]"
          >
            {type}
          </span>
        ))}
        <span className="px-3 py-1.5 bg-[rgba(212,169,58,0.08)] border border-[rgba(212,169,58,0.2)] rounded-full text-xs text-[#d4a93a]">
          Mobile to you
        </span>
        <span className="px-3 py-1.5 bg-[rgba(212,169,58,0.08)] border border-[rgba(212,169,58,0.2)] rounded-full text-xs text-[#d4a93a]">
          In-shop available
        </span>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`tel:${NAP.phone}`}
          className="flex items-center gap-2 px-7 py-3.5 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-all duration-200 uppercase tracking-wide text-sm shadow-[0_4px_20px_rgba(212,169,58,0.3)]"
          aria-label={`Call SCD Car Detailing at ${NAP.phoneDisplay}`}
        >
          <Phone size={16} />
          Call to Book: {NAP.phoneDisplay}
        </a>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors duration-200 text-sm font-medium"
        >
          View all services
          <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  );
}
