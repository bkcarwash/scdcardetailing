import { CheckCircle2, Phone } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { NAP } from '@/lib/siteConfig';

const REASONS = [
  {
    title: '5.0-Star Rated',
    description:
      'Every single customer has given us a perfect 5-star review. Our reputation is our most prized asset and we protect it with every job.',
  },
  {
    title: 'Mobile & Convenient',
    description:
      'We bring professional detailing to your home, office, or any location. No dropping off and picking up — your schedule, your location.',
  },
  {
    title: 'Open 24 Hours',
    description:
      'Need a detail before an early morning event or after a late flight? We\'re available any time of day or night, 365 days a year.',
  },
  {
    title: 'Professional-Grade Products',
    description:
      'We only use professional-grade chemicals, microfiber tools, and equipment — the same products used by top detailing shops.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'No hidden fees or surprise charges. We quote upfront, work efficiently, and deliver what we promise every time.',
  },
  {
    title: 'Experienced & Professional',
    description:
      'Our team is trained, professional, and takes genuine pride in their work. Punctual, courteous, and respectful of your property.',
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-[#0d0d0d]" id="why-us">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div>
          <SectionHeading
            badge="Why Choose Us"
            title="North Port's Most"
            titleHighlight="Trusted Detailer"
            centered={false}
            subtitle="Here's what sets Sansanich Car Detailing apart from every other option in Southwest Florida."
          />

          <ul className="space-y-5 mt-8" role="list">
            {REASONS.map((reason) => (
              <li key={reason.title} className="flex items-start gap-4">
                <CheckCircle2
                  size={20}
                  className="text-[#d4a93a] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3
                    className="text-white text-base font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-body)', letterSpacing: 'normal' }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats column */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '5.0★', label: 'Average Google Rating', sub: 'Perfect score' },
            { value: '20+', label: 'Verified Reviews', sub: 'Real customers' },
            { value: '24/7', label: 'Availability', sub: 'Any time, any day' },
            { value: '11+', label: 'Cities Served', sub: 'All of SW Florida' },
            { value: '100%', label: 'Mobile Service', sub: 'We come to you' },
            { value: 'Pro', label: 'Grade Products', sub: 'Professional only' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-[#111] border border-[#1e1e1e] rounded-xl text-center"
            >
              <div
                className="text-3xl text-gradient-gold mb-1"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {stat.value}
              </div>
              <div className="text-white text-xs font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-[#555] text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pay-per-call CTA */}
      <div className="mt-14 rounded-2xl bg-[#111] border border-[rgba(212,169,58,0.2)] p-8 text-center">
        <p className="text-[#d4a93a] text-xs font-bold uppercase tracking-widest mb-3">Open 24 Hours — Call or Text Anytime</p>
        <a
          href={`tel:${NAP.phone}`}
          className="inline-flex items-center gap-3 text-3xl font-bold text-white hover:text-[#d4a93a] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-label={`Call SCD Car Detailing at ${NAP.phoneDisplay}`}
          data-speakable
        >
          <Phone size={28} className="text-[#d4a93a]" />
          {NAP.phoneDisplay}
        </a>
        <p className="text-[#555] text-sm mt-3">North Port · Port Charlotte · Venice · Sarasota · Punta Gorda & all of SW Florida</p>
      </div>
    </SectionWrapper>
  );
}
