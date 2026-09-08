import { Phone } from 'lucide-react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { NAP } from '@/lib/siteConfig';

const STEPS = [
  {
    number: '01',
    title: 'Call or Text to Book',
    description: (
      <>
        Call or text{' '}
        <a
          href="tel:+19418008198"
          className="text-[#d4a93a] font-semibold hover:text-[#e8c96b] transition-colors"
        >
          (941) 800-8198
        </a>{' '}
        anytime — or use our online booking form. Tell us your vehicle, location, and what you need. We confirm your slot within the hour.
      </>
    ),
    icon: '📞',
  },
  {
    number: '02',
    title: 'We Come to You',
    description: 'Our fully equipped mobile setup arrives at your home, office, or wherever your vehicle is parked across Southwest Florida. No drop-off, no waiting around.',
    icon: '🚐',
  },
  {
    number: '03',
    title: 'Professional Detail On-Site',
    description: 'We bring everything — pressure washer, DA polisher, steam cleaner, professional chemicals. Two-bucket wash, clay bar decontamination, machine polish, interior steam clean — every step done properly.',
    icon: '✨',
  },
  {
    number: '04',
    title: 'Drive Away Proud',
    description: 'Walk around the vehicle with us. Ask questions. Then take back a car that looks the way it should. Most jobs are same-day — you get your vehicle back the same afternoon.',
    icon: '🚗',
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper className="bg-[#080808]">
      <SectionHeading
        badge="The Process"
        title="How Mobile Detailing"
        titleHighlight="Works"
        subtitle="Four steps from booking to a showroom finish — all done at your location, on your schedule."
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Connector line — desktop only */}
        <div
          className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(212,169,58,0.3)] to-transparent"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-[104px] h-[104px] rounded-full bg-[#0d0d0d] border border-[rgba(212,169,58,0.25)] flex items-center justify-center">
                  <span className="text-4xl" aria-hidden="true">{step.icon}</span>
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#d4a93a] flex items-center justify-center text-black text-xs font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                  aria-hidden="true"
                >
                  {step.number.replace('0', '')}
                </span>
              </div>

              <h3
                className="text-white text-lg mb-3"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                {step.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call CTA bar */}
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`tel:${NAP.phone}`}
          className="flex items-center gap-3 px-8 py-4 bg-[#d4a93a] text-black font-bold rounded-lg hover:bg-[#e8c96b] transition-all duration-200 uppercase tracking-wide text-sm shadow-[0_4px_30px_rgba(212,169,58,0.35)]"
          aria-label={`Call SCD Car Detailing at ${NAP.phoneDisplay}`}
        >
          <Phone size={18} />
          Call Now: {NAP.phoneDisplay}
        </a>
        <p className="text-[#555] text-sm">Open 24 hours · Same-day available</p>
      </div>
    </SectionWrapper>
  );
}
