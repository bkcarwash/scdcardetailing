import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

const STATS = [
  { value: '5', label: 'Years in Business' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '20+', label: 'Verified Reviews' },
  { value: '24/7', label: 'Available' },
];

const TECHNIQUES = [
  {
    name: 'Two-Bucket Wash Method',
    description:
      'One bucket for clean soapy water, one for rinsing the mitt. Eliminates the grit swirl that drive-through washes grind into your clear coat on every visit.',
  },
  {
    name: 'Clay Bar Decontamination',
    description:
      'Industrial fallout, rail dust, tree sap, and brake particles bond to paint and can\'t be washed off. Clay bar pulls them out before any polish or coating touches the surface.',
  },
  {
    name: 'Machine Polishing',
    description:
      'A dual-action polisher removes light scratches and oxidation without the heat and risk of a rotary. The result is a genuinely corrected finish, not just a waxed-over one.',
  },
  {
    name: 'Ceramic Coating Application',
    description:
      'Applied in a controlled environment, wiped to a high-spot-free cure, then allowed to bond fully before the vehicle is exposed to the elements. Florida UV demands it.',
  },
  {
    name: 'Steam Cleaning',
    description:
      'High-temperature steam sanitizes upholstery, breaks down embedded grease in crevices, and kills bacteria without harsh chemicals. Especially effective on fabric seats and door jambs.',
  },
  {
    name: 'Enzyme & Iron Decontamination',
    description:
      'pH-balanced enzyme treatments dissolve organic stains; iron fallout remover dissolves ferrous contamination that turns purple on contact. No guesswork — chemistry does the work.',
  },
];

export function ExpertiseStory() {
  return (
    <SectionWrapper className="bg-[#0d0d0d]">
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 max-w-3xl mx-auto">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-[#d4a93a] text-4xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {stat.value}
            </p>
            <p className="text-[#666] text-xs uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Story + techniques */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — narrative */}
        <div>
          <SectionHeading
            badge="5 Years of Real Experience"
            title="Expertise Built"
            titleHighlight="Vehicle by Vehicle"
            centered={false}
          />
          <div className="space-y-4 text-[#a0a0a0] leading-relaxed text-sm">
            <p>
              Over five years and hundreds of vehicles, we have worked through every scenario the Florida climate can create: oxidized clear coat from relentless UV, salt-air corrosion from coastal drives, mold growing in door seals after a wet season, and swirl marks left behind by well-meaning automated washes.
            </p>
            <p>
              We are not a franchise location following a laminated checklist. Every vehicle we touch is assessed as an individual. The ceramic coating job on a black Dodge Charger requires different prep than a white daily-driver SUV — and we treat them that way.
            </p>
            <p>
              Our mobile setup is not a compromise. We carry the same dual-action polishers, steam cleaners, and professional-grade chemicals that dedicated shops use. The difference is that we bring everything to your driveway — which means your car never sits in a queue.
            </p>
            <p>
              That commitment is why every one of our 20+ Google reviews is five stars. We do not ask for reviews. We earn them by doing the job properly the first time.
            </p>
          </div>
        </div>

        {/* Right — techniques grid */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[#d4a93a] mb-6"
          >
            Techniques We Use
          </p>
          <div className="space-y-4">
            {TECHNIQUES.map((t) => (
              <div
                key={t.name}
                className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[rgba(212,169,58,0.2)] transition-colors"
              >
                <h4
                  className="text-white text-sm font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                >
                  {t.name}
                </h4>
                <p className="text-[#666] text-xs leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
