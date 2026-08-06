import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CITIES } from '@/lib/siteConfig';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export function LocationsStrip() {
  return (
    <SectionWrapper className="bg-[#0a0a0a]" id="locations">
      <SectionHeading
        badge="Service Area"
        title="We Come to"
        titleHighlight="You"
        subtitle="Mobile detailing across North Port and all of Southwest Florida. No need to drive to a shop — we bring the shop to your driveway."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/locations/${city.slug}`}
            className="group flex flex-col items-center gap-2 p-4 bg-[#111] border border-[#1e1e1e] rounded-xl hover:border-[#d4a93a]/40 hover:bg-[#141414] transition-all duration-200 text-center"
          >
            <MapPin
              size={18}
              className="text-[#555] group-hover:text-[#d4a93a] transition-colors duration-200"
              aria-hidden="true"
            />
            <div>
              <p className="text-[#a0a0a0] group-hover:text-white text-sm font-medium transition-colors duration-200">
                {city.name}
              </p>
              <p className="text-[#444] text-xs">{city.state}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/locations"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#a0a0a0] rounded-lg hover:border-[#d4a93a] hover:text-[#d4a93a] transition-colors duration-200 text-sm font-medium"
        >
          View all service areas
        </Link>
      </div>
    </SectionWrapper>
  );
}
