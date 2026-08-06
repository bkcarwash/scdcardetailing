import { Star, Clock, MapPin, Shield, Smartphone, Award } from 'lucide-react';
import { RATINGS, HOURS, CITIES } from '@/lib/siteConfig';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

const SIGNALS = [
  {
    icon: Star,
    value: `${RATINGS.ratingValue}.0★`,
    label: 'Google Rating',
    sub: `${RATINGS.reviewCount} verified reviews`,
  },
  {
    icon: Clock,
    value: '24/7',
    label: HOURS.display,
    sub: 'Book any time, day or night',
  },
  {
    icon: MapPin,
    value: `${CITIES.length}+`,
    label: 'Cities Served',
    sub: 'All of Southwest Florida',
  },
  {
    icon: Smartphone,
    value: 'Mobile',
    label: 'We Come to You',
    sub: 'Home, office, or anywhere',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Satisfaction',
    sub: 'Quality guaranteed',
  },
  {
    icon: Award,
    value: 'Pro Grade',
    label: 'Products & Tools',
    sub: 'Professional-grade only',
  },
];

export function TrustSignals() {
  return (
    <SectionWrapper className="bg-[#0d0d0d] border-y border-[#1a1a1a]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {SIGNALS.map((signal) => {
          const Icon = signal.icon;
          return (
            <div
              key={signal.label}
              className="flex flex-col items-center text-center gap-3 p-4"
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(212,169,58,0.1)] border border-[rgba(212,169,58,0.2)] flex items-center justify-center">
                <Icon size={20} className="text-[#d4a93a]" aria-hidden="true" />
              </div>
              <div>
                <div
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                >
                  {signal.value}
                </div>
                <div className="text-[#a0a0a0] text-xs font-semibold uppercase tracking-wide mt-0.5">
                  {signal.label}
                </div>
                <div className="text-[#555] text-xs mt-0.5">{signal.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
