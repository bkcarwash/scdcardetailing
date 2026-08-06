// Single source of truth for all business data — every page, component, and schema pulls from here.

export const SITE_URL = 'https://sansanichcardetailing.com';

export const NAP = {
  name: 'Sansanich Car Detailing',
  address: {
    street: '4457 Langsom Ln',
    city: 'North Port',
    state: 'FL',
    zip: '34286',
    country: 'US',
    full: '4457 Langsom Ln, North Port, FL 34286, United States',
  },
  phone: '+19418008198',
  phoneDisplay: '(941) 800-8198',
  phoneFriendly: '941-800-8198',
} as const;

export const HOURS = {
  display: 'Open 24 Hours',
  openingHours: 'Mo-Su 00:00-23:59',
  opens: '00:00',
  closes: '23:59',
  daysOfWeek: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ] as const,
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/sansanichcardetailing/',
  instagramHandle: '@sansanichcardetailing',
  instagramFollowers: '170+',
} as const;

export const RATINGS = {
  ratingValue: 5.0,
  reviewCount: 20,
  bestRating: 5,
  worstRating: 1,
} as const;

export const GEO = {
  latitude: 27.0441,
  longitude: -82.1498,
} as const;

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  duration: string;
  priceRange: string;
  frequency: string;
  whatIsIt: string;
  whatsIncluded: string[];
  howTo: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'interior-detailing',
    name: 'Interior Detailing',
    shortDescription:
      'Deep-clean every surface inside your vehicle — seats, carpets, dash, door panels, and more.',
    longDescription:
      'Our interior detailing service goes far beyond a vacuum. We deep-clean and condition every surface inside your vehicle using professional-grade steamers, extractors, and safe cleaning agents. Perfect for daily drivers, pre-sale prep, or anyone who just wants a fresh-smelling, spotless cabin.',
    icon: '🪑',
    duration: '2–4 hours',
    priceRange: 'Starting at $150',
    frequency: 'Every 3–6 months for maintained vehicles',
    whatIsIt:
      'Interior detailing is a thorough, professional cleaning of every surface inside your car — from carpet fibers to headliner, air vents to seat crevices. It restores the look and smell of a new car interior.',
    whatsIncluded: [
      'Full vacuum of carpets, seats, and trunk',
      'Steam cleaning of hard surfaces and vents',
      'Dashboard, console, and door panel wipe-down',
      'Seat shampooing (fabric) or conditioning (leather)',
      'Windows cleaned inside',
      'Odor neutralization treatment',
      'Floor mat cleaning and dressing',
    ],
    howTo: [
      { step: 'Clear the cabin', description: 'Remove personal items and floor mats before we arrive.' },
      { step: 'Vacuum & pre-treat', description: 'We vacuum all surfaces and pre-treat stains with enzyme cleaners.' },
      { step: 'Steam clean', description: 'High-temperature steam sanitizes hard surfaces and loosens embedded grime.' },
      { step: 'Shampoo & extract', description: 'Carpets and fabric seats are shampooed and hot-water extracted.' },
      { step: 'Dress & protect', description: 'All trim is dressed, leather is conditioned, glass is polished.' },
    ],
    faq: [
      {
        question: 'How long does interior detailing take?',
        answer:
          'Most standard interior details take 2–4 hours depending on vehicle size and condition. Heavily soiled interiors or large SUVs may take up to 6 hours.',
      },
      {
        question: 'Will the interior smell like chemicals afterward?',
        answer:
          'No. We use professional-grade, low-odor cleaning agents and finish with an odor neutralizer. Your car should smell clean and fresh — not like a cleaning product.',
      },
      {
        question: 'Can you remove pet hair from car interiors?',
        answer:
          'Yes. Pet hair removal is included in our interior detail or available as a standalone add-on service. We use specialized tools to lift embedded fur from fabric and carpet.',
      },
    ],
  },
  {
    slug: 'exterior-detailing',
    name: 'Exterior Detailing',
    shortDescription:
      'Hand wash, clay bar, and gloss treatment to make your paint shine like new.',
    longDescription:
      'Florida sun, salt air, and road grime take a toll on automotive paint. Our exterior detailing service thoroughly decontaminates, cleans, and protects your paint, glass, wheels, and trim — restoring deep gloss and protecting your finish from the elements.',
    icon: '✨',
    duration: '1.5–3 hours',
    priceRange: 'Starting at $120',
    frequency: 'Monthly for best protection; every 2–3 months minimum',
    whatIsIt:
      'Exterior detailing is a multi-stage paint care process that removes contamination, enhances gloss, and applies a protective coating to your vehicle\'s exterior surfaces.',
    whatsIncluded: [
      'Hand wash with pH-neutral shampoo',
      'Wheel and tire cleaning & dressing',
      'Glass cleaning and water spot removal',
      'Door jamb cleaning',
      'Trim and plastic dressing',
      'Spray wax or sealant application',
      'Final inspection and touch-up',
    ],
    howTo: [
      { step: 'Pre-rinse', description: 'Loose dirt and debris are rinsed off to prevent scratching.' },
      { step: 'Two-bucket hand wash', description: 'We use the two-bucket method with premium microfiber mitts.' },
      { step: 'Wheels & tires', description: 'Brake dust and grime are safely removed from all four corners.' },
      { step: 'Decontaminate', description: 'Iron remover and/or clay bar lifts bonded contaminants from paint.' },
      { step: 'Protect', description: 'Wax, sealant, or spray ceramic is applied for lasting shine and protection.' },
    ],
    faq: [
      {
        question: 'How often should I get an exterior detail?',
        answer:
          'In Florida\'s climate — with intense UV, humidity, and salt air — we recommend an exterior detail every 4–8 weeks to maintain paint health and protect your clear coat.',
      },
      {
        question: 'What is the difference between a car wash and exterior detailing?',
        answer:
          'A car wash removes surface dirt. Exterior detailing goes deeper — it decontaminates the paint with clay bars, corrects minor swirls with polish, and applies protective coatings that last weeks or months.',
      },
      {
        question: 'Can you come to my home or office?',
        answer:
          'Yes! We are a mobile detailing service. We come to your location in North Port, Port Charlotte, Venice, Sarasota, and surrounding areas in Southwest Florida.',
      },
    ],
  },
  {
    slug: 'full-detailing',
    name: 'Full Car Detailing',
    shortDescription:
      'Complete interior + exterior detail — the ultimate top-to-bottom clean for your vehicle.',
    longDescription:
      'Our full car detail combines our complete interior and exterior services into one comprehensive package. This is the gold-standard treatment: every surface inside and out is cleaned, decontaminated, polished, and protected. Perfect for seasonal refreshes, pre-sale preparation, or just treating your car right.',
    icon: '🚗',
    duration: '4–8 hours',
    priceRange: 'Starting at $250',
    frequency: 'Every 3–6 months',
    whatIsIt:
      'A full car detail is the most comprehensive cleaning service available. It covers every interior and exterior surface — paint, glass, wheels, carpets, seats, dashboard, and more — leaving your vehicle in showroom-ready condition.',
    whatsIncluded: [
      'Everything in Interior Detailing',
      'Everything in Exterior Detailing',
      'Engine bay visual clean (upon request)',
      'Trunk cleaning and dressing',
      'Priority scheduling and extended service time',
    ],
    howTo: [
      { step: 'Pre-inspection', description: 'We assess the vehicle\'s condition and note any problem areas.' },
      { step: 'Exterior first', description: 'Full exterior wash, decontamination, and protection.' },
      { step: 'Interior deep clean', description: 'Steam, shampoo, extract, and condition all interior surfaces.' },
      { step: 'Final detail pass', description: 'Touch-up any missed spots, dress all trim, clean all glass.' },
      { step: 'Walk-around review', description: 'We walk you through the results before we leave.' },
    ],
    faq: [
      {
        question: 'How long does a full car detail take?',
        answer:
          'A full detail typically takes 4–8 hours depending on vehicle size and condition. We work efficiently and thoroughly — quality is not rushed.',
      },
      {
        question: 'Is a full detail worth it?',
        answer:
          'Absolutely. Regular full details protect your paint from UV and oxidation, maintain interior air quality, and preserve your vehicle\'s resale value. Most customers see a return at resale that far exceeds the cost.',
      },
    ],
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    shortDescription:
      'Long-lasting nano-ceramic paint protection that repels water, UV, and contaminants for years.',
    longDescription:
      'Ceramic coating is the most advanced paint protection available. A liquid polymer bonds chemically to your paint, creating an ultra-hard, hydrophobic layer that repels water, contaminants, UV rays, and minor scratches. Unlike wax that lasts weeks, a quality ceramic coating lasts 2–5 years with proper maintenance.',
    icon: '💎',
    duration: '1–2 days',
    priceRange: 'Starting at $500',
    frequency: 'Every 2–5 years depending on coating grade',
    whatIsIt:
      'Ceramic coating is a liquid polymer applied to automotive paint that chemically bonds with the factory clear coat, creating a permanent (or semi-permanent) layer of protection. It produces a mirror-like gloss and makes maintenance washing dramatically easier.',
    whatsIncluded: [
      'Full exterior wash and decontamination',
      'Paint correction (swirl removal) — varies by package',
      'Panel preparation with isopropyl alcohol wipe-down',
      'Multi-layer ceramic coating application',
      'Curing time (vehicle kept in controlled environment)',
      'Hydrophobic coating on glass (optional)',
      'Wheel coating (optional)',
    ],
    howTo: [
      { step: 'Paint prep', description: 'Paint is washed, clayed, and corrected to remove defects before coating.' },
      { step: 'IPA wipe-down', description: 'All oils and residues are stripped to ensure chemical bonding.' },
      { step: 'Coating application', description: 'Ceramic is applied panel by panel in a controlled environment.' },
      { step: 'Flash and level', description: 'Each layer is allowed to flash before buffing to a mirror finish.' },
      { step: 'Curing', description: 'Vehicle is kept out of the elements for 24–48 hours while the coating cures.' },
    ],
    faq: [
      {
        question: 'How long does ceramic coating last?',
        answer:
          'A professional ceramic coating lasts 2–5 years with proper maintenance. Consumer-grade spray ceramics last 3–6 months. We apply professional-grade coatings designed for Florida\'s harsh UV and humidity.',
      },
      {
        question: 'Does ceramic coating prevent scratches?',
        answer:
          'Ceramic coating adds hardness (typically 9H on the pencil hardness scale) that resists light scratches and swirl marks from improper washing. It is not scratch-proof, but it significantly reduces the risk of everyday paint damage.',
      },
      {
        question: 'Do I still need to wash my car after ceramic coating?',
        answer:
          'Yes, but washing becomes much easier. Water beads and rolls off the surface, taking dirt with it. We recommend a simple hand wash every 2–4 weeks to maintain the coating\'s performance.',
      },
      {
        question: 'How much does ceramic coating cost in North Port, FL?',
        answer:
          'Our ceramic coating packages start at $500 for a single-stage coating on a standard vehicle. Multi-layer packages or paint correction add-ons are priced higher. Contact us for a free quote based on your vehicle\'s size and condition.',
      },
    ],
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    shortDescription:
      'Machine polishing removes swirl marks, scratches, oxidation, and water spots — restoring true paint clarity.',
    longDescription:
      'Paint correction uses machine polishers and cutting compounds to carefully remove a thin layer of clear coat, eliminating surface defects like swirl marks, light scratches, oxidation, and water spots. The result is dramatically improved paint clarity and gloss — often making older paint look better than new.',
    icon: '🔄',
    duration: '4–12 hours',
    priceRange: 'Starting at $350',
    frequency: 'As needed; typically before ceramic coating or for aged paint',
    whatIsIt:
      'Paint correction is a professional machine polishing process that removes scratches, swirl marks, and oxidation from automotive clear coat. It is the only true way to eliminate surface defects — not just hide them.',
    whatsIncluded: [
      'Full wash and decontamination',
      'Paint depth measurement (to ensure safe correction)',
      'Single or multi-stage machine polish',
      'Final IPA wipe-down to reveal true correction',
      'Panel-by-panel inspection under LED lighting',
      'Finishing wax or sealant for protection',
    ],
    howTo: [
      { step: 'Wash & clay', description: 'Paint is thoroughly cleaned and clayed to remove bonded contamination.' },
      { step: 'Paint assessment', description: 'We use a paint depth gauge and LED lighting to assess defect severity.' },
      { step: 'Compound stage', description: 'A cutting compound removes deep scratches and heavy oxidation.' },
      { step: 'Polish stage', description: 'A finer polish refines the surface and removes any compound haze.' },
      { step: 'Protect', description: 'A wax, sealant, or ceramic coating is applied to protect the corrected paint.' },
    ],
    faq: [
      {
        question: 'What is a single-stage vs. two-stage paint correction?',
        answer:
          'A single-stage correction uses one polish pass and is ideal for lightly swirled paint. A two-stage uses a cutting compound followed by a finer polish — it removes deeper defects and produces a higher level of gloss. We assess your paint and recommend the right level.',
      },
      {
        question: 'Will paint correction remove all scratches?',
        answer:
          'Paint correction removes surface-level defects in the clear coat. Deep scratches that penetrate to the base coat or primer cannot be corrected by polishing — those require paint touch-up or respray. We\'ll let you know what to expect before we start.',
      },
    ],
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    shortDescription:
      'Clear cloudy, yellowed headlights to restore brightness, safety, and appearance.',
    longDescription:
      'Florida\'s intense UV rays oxidize plastic headlight lenses, turning them cloudy and yellow. Hazy headlights can reduce light output by up to 80%, creating a genuine safety hazard. Our headlight restoration service wet-sands, compounds, and UV-seals your lenses — restoring clarity at a fraction of replacement cost.',
    icon: '💡',
    duration: '1–2 hours',
    priceRange: 'Starting at $80',
    frequency: 'Every 1–3 years depending on parking conditions',
    whatIsIt:
      'Headlight restoration is a wet-sanding and polishing process that removes UV oxidation from plastic headlight lenses, restoring optical clarity, brightness, and appearance.',
    whatsIncluded: [
      'Masking of surrounding painted panels',
      'Wet sanding with progressive grit papers',
      'Machine compound and polish',
      'UV sealant application to prevent re-oxidation',
      'Final lens inspection and buff',
    ],
    howTo: [
      { step: 'Mask off', description: 'Surrounding paint is masked to protect it during the sanding process.' },
      { step: 'Wet sand', description: 'Progressive grits (400–3000) remove oxidation layer by layer.' },
      { step: 'Compound & polish', description: 'Machine polishing restores clarity and removes sanding marks.' },
      { step: 'UV seal', description: 'UV-resistant sealant is applied to slow future oxidation.' },
    ],
    faq: [
      {
        question: 'How long does headlight restoration last?',
        answer:
          'Professional restoration with a UV sealant typically lasts 1–3 years. Parking in a garage and regular waxing of the lenses can extend results further.',
      },
      {
        question: 'Is headlight restoration worth it vs. replacement?',
        answer:
          'Absolutely. OEM headlight replacement can cost $200–$800+ per side. Professional restoration costs a fraction of that and typically achieves 80–95% of new-lens clarity.',
      },
    ],
  },
  {
    slug: 'clay-bar-treatment',
    name: 'Clay Bar Treatment',
    shortDescription:
      'Remove embedded contaminants — rail dust, brake dust, tree sap — that washing alone cannot eliminate.',
    longDescription:
      'Even after a thorough wash, automotive paint harbors invisible embedded contaminants: industrial fallout, rail dust, brake dust, tree sap, and tar. A clay bar treatment safely lifts these bonded particles, leaving the paint surface silky smooth and ready for polish or protection.',
    icon: '🧴',
    duration: '1–2 hours',
    priceRange: 'Starting at $80',
    frequency: 'Every 6–12 months or before applying wax, sealant, or ceramic coating',
    whatIsIt:
      'Clay bar treatment uses a special automotive clay compound, lubricated with a detailing spray, to safely pull embedded contaminants off your paint surface. Run your hand over clayed paint and you\'ll feel the difference immediately.',
    whatsIncluded: [
      'Full exterior wash',
      'Clay bar treatment on all painted panels',
      'Glass decontamination (optional)',
      'Final spray sealant or wax',
    ],
    howTo: [
      { step: 'Wash', description: 'A thorough wash removes loose surface dirt before claying.' },
      { step: 'Lubricate', description: 'Detailing spray is applied to each panel as a lubricant.' },
      { step: 'Clay', description: 'The clay bar is worked across the panel in overlapping strokes, folded to a clean face regularly.' },
      { step: 'Wipe & inspect', description: 'Residue is wiped away and the panel is inspected with gloved fingertips.' },
      { step: 'Protect', description: 'Wax or sealant is applied to the freshly decontaminated paint.' },
    ],
    faq: [
      {
        question: 'How do I know if my car needs a clay bar treatment?',
        answer:
          'Put a clean plastic bag over your hand and run it over your washed paint. If you feel rough, gritty bumps — that\'s contamination. Claying removes it. Most vehicles in Florida need claying every 6–12 months due to sea salt, tree sap, and brake dust.',
      },
    ],
  },
  {
    slug: 'hand-washing',
    name: 'Hand Washing',
    shortDescription:
      'Gentle, scratch-free hand wash using premium microfiber and two-bucket method.',
    longDescription:
      'Automated car washes use stiff brushes and harsh chemicals that cause micro-scratches (swirl marks) in your paint over time. Our hand wash service uses the two-bucket method with premium pH-neutral shampoo and microfiber mitts for a safe, streak-free clean that protects your investment.',
    icon: '🫧',
    duration: '30–60 minutes',
    priceRange: 'Starting at $50',
    frequency: 'Every 2–4 weeks',
    whatIsIt:
      'A professional hand wash is a careful, contactless rinse followed by a hand-wash with microfiber mitts and a final rinse, dry, and tire dressing. It is the safest way to maintain clean paint without adding swirl marks.',
    whatsIncluded: [
      'Pre-rinse with pressure rinse',
      'Two-bucket hand wash with pH-neutral shampoo',
      'Wheel and tire cleaning',
      'Spot-free rinse',
      'Hand dry with plush microfiber',
      'Tire dressing',
      'Windows exterior clean',
    ],
    howTo: [
      { step: 'Pre-rinse', description: 'High-pressure rinse removes loose grit to prevent scratching.' },
      { step: 'Two-bucket wash', description: 'One bucket with shampoo, one with rinse water to keep the mitt clean.' },
      { step: 'Wheels & tires', description: 'Separate mitt and bucket for wheels to avoid cross-contamination.' },
      { step: 'Final rinse & dry', description: 'Spot-free rinse followed by hand-dry with plush microfiber.' },
    ],
    faq: [
      {
        question: 'Why is hand washing better than an automatic car wash?',
        answer:
          'Automatic car washes use rotating brushes that drag accumulated grit across your paint, causing thousands of micro-scratches (swirl marks) with every visit. These permanently dull your paint over time. Hand washing with proper technique and clean microfiber is the only way to wash a car without damaging the paint.',
      },
    ],
  },
  {
    slug: 'waxing-polishing',
    name: 'Waxing & Polishing',
    shortDescription:
      'Enhance gloss, fill light scratches, and protect paint with professional-grade wax and polish.',
    longDescription:
      'Waxing protects your paint and enhances gloss. Polishing smooths the clear coat surface to maximize reflectivity. Together, they leave your car with a mirror-like shine and a protective layer against Florida sun, rain, and salt air. Perfect for maintaining paint between major details.',
    icon: '🌟',
    duration: '1–3 hours',
    priceRange: 'Starting at $100',
    frequency: 'Every 2–4 months for wax; polishing as needed',
    whatIsIt:
      'Polishing uses fine abrasives to smooth the clear coat and increase light reflectivity. Waxing (carnauba or synthetic) fills micro-pores and creates a hydrophobic protective layer over polished paint.',
    whatsIncluded: [
      'Exterior wash',
      'Machine polish (light swirl removal)',
      'Carnauba or synthetic wax application',
      'Trim and plastic dressing',
      'Tyre shine',
      'Final wipe-down and inspection',
    ],
    howTo: [
      { step: 'Wash & dry', description: 'Clean paint is required before any polish or wax application.' },
      { step: 'Polish', description: 'Light machine polish refines the surface and removes minor swirl marks.' },
      { step: 'Wax', description: 'Wax is applied by machine or hand, allowed to haze, then buffed off.' },
      { step: 'Dress trim', description: 'All rubber, plastic, and trim is dressed for a finished look.' },
    ],
    faq: [
      {
        question: 'What is the difference between wax and sealant?',
        answer:
          'Carnauba wax gives a warm, deep glow but lasts 4–8 weeks. Synthetic sealants bond to the paint chemically and last 3–6 months. We offer both — wax for show, sealant for durability, and ceramic coatings for long-term protection.',
      },
    ],
  },
  {
    slug: 'stain-odor-removal',
    name: 'Stain & Odor Removal',
    shortDescription:
      'Eliminate stubborn stains and persistent odors — coffee, pet, mildew, smoke — from any interior.',
    longDescription:
      'Some stains and odors require more than a standard interior detail. We use enzyme cleaners, ozone treatments, and professional extractors to tackle the toughest jobs: smoke-saturated interiors, mold and mildew, pet accidents, spilled beverages, and more. Most odors are permanently eliminated — not just masked.',
    icon: '🌬️',
    duration: '2–5 hours',
    priceRange: 'Starting at $150',
    frequency: 'As needed',
    whatIsIt:
      'Stain and odor removal is a targeted treatment that uses enzyme-based cleaners, steam, hot-water extraction, and ozone generation to permanently eliminate biological stains and odors rather than masking them with fragrance.',
    whatsIncluded: [
      'Pre-treatment of stained areas with enzyme cleaner',
      'Hot-water extraction',
      'Steam treatment of porous surfaces',
      'Ozone treatment for persistent odors (smoke, mildew)',
      'Headliner treatment (if affected)',
      'Final deodorizing spray',
    ],
    howTo: [
      { step: 'Identify source', description: 'We locate all contaminated areas including hidden sources under seats and in carpet backing.' },
      { step: 'Pre-treat', description: 'Enzyme cleaners break down organic matter at the molecular level.' },
      { step: 'Extract', description: 'Hot-water extraction flushes out loosened contamination.' },
      { step: 'Ozone treat', description: 'For smoke and mildew, ozone generators neutralize airborne odor molecules.' },
    ],
    faq: [
      {
        question: 'Can you remove smoke smell from a car?',
        answer:
          'Yes. Smoke odor is one of the most challenging to eliminate because it permeates every porous surface. We use a combination of deep steam cleaning, enzyme treatment, and ozone generation to remove smoke odor at the source — not just cover it up.',
      },
      {
        question: 'Can you get pet urine smell out of car seats?',
        answer:
          'Yes. Enzyme cleaners specifically designed for urine break down uric acid crystals that cause the persistent smell. We flush the affected area with hot water extraction to remove all residue. Results depend on how long the stain has been set.',
      },
    ],
  },
  {
    slug: 'engine-bay-detailing',
    name: 'Engine Bay Detailing',
    shortDescription:
      'Safely degrease and detail your engine bay for a clean, protected, showroom-ready look.',
    longDescription:
      'A clean engine bay makes it easier to spot oil leaks, perform maintenance, and impresses anyone who pops the hood. We use carefully applied degreasers, low-pressure rinsing, and heat-resistant dressings to safely clean your engine compartment without causing electrical issues.',
    icon: '⚙️',
    duration: '1–2 hours',
    priceRange: 'Starting at $80',
    frequency: 'Every 6–12 months',
    whatIsIt:
      'Engine bay detailing is a safe, careful cleaning of the engine compartment using degreasers and controlled rinsing to remove oil, grease, and grime while protecting electrical components.',
    whatsIncluded: [
      'Dry-brush pre-clean of loose debris',
      'Plastic and sensor covering/protection',
      'Degreaser application',
      'Low-pressure rinse',
      'Air dry or blow-dry',
      'Engine trim and hose dressing',
    ],
    howTo: [
      { step: 'Pre-protect', description: 'Electrical connectors, fuse boxes, and air intakes are covered.' },
      { step: 'Degrease', description: 'Degreaser is applied to dirty surfaces and allowed to dwell.' },
      { step: 'Low-pressure rinse', description: 'A careful low-pressure rinse removes the degreaser and grime.' },
      { step: 'Dry & dress', description: 'Engine is dried and plastic/rubber is dressed for a finished look.' },
    ],
    faq: [
      {
        question: 'Is engine bay cleaning safe?',
        answer:
          'Yes, when done correctly. We cover sensitive electrical components before rinsing and use low pressure to avoid forcing water into connectors. We have cleaned hundreds of engine bays without incident. We do not recommend washing your own engine bay with a pressure washer without proper protection.',
      },
    ],
  },
  {
    slug: 'upholstery-leather-cleaning',
    name: 'Upholstery & Leather Cleaning',
    shortDescription:
      'Shampoo fabric seats or clean and condition leather to restore softness and prevent cracking.',
    longDescription:
      'Leather and fabric upholstery require very different care. Fabric seats are shampooed and hot-extracted to remove dirt and oils. Leather is cleaned with pH-balanced cleaners and then conditioned with professional-grade leather conditioner to prevent drying and cracking — critical in Florida\'s heat.',
    icon: '🛋️',
    duration: '1–3 hours',
    priceRange: 'Starting at $100',
    frequency: 'Every 3–6 months for leather conditioning; fabric every 6 months',
    whatIsIt:
      'Upholstery and leather cleaning is a specialized service that addresses the unique care requirements of each seat material — whether fabric, synthetic leather (vinyl/leatherette), or genuine leather.',
    whatsIncluded: [
      'Fabric: Pre-treatment, shampoo, hot-water extraction, and deodorizing',
      'Leather: pH-balanced leather cleaner, brushing, and premium conditioner',
      'Seat crevice vacuuming and cleaning',
      'Headliner spot cleaning (if needed)',
      'Seatbelt cleaning',
    ],
    howTo: [
      { step: 'Vacuum', description: 'All loose debris is vacuumed from seat surfaces and crevices.' },
      { step: 'Apply cleaner', description: 'Fabric-safe shampoo or leather cleaner is applied and agitated.' },
      { step: 'Extract or wipe', description: 'Fabric is hot-water extracted; leather is wiped clean with microfiber.' },
      { step: 'Condition (leather)', description: 'Leather conditioner is massaged in to replenish oils and flexibility.' },
    ],
    faq: [
      {
        question: 'How do I know if my leather needs conditioning?',
        answer:
          'Dry, cracking leather is the most obvious sign. But leather should be conditioned before it reaches that stage. If your leather feels stiff or shows fine surface cracks, it needs conditioning. In Florida\'s heat, we recommend conditioning every 3–6 months to prevent premature aging.',
      },
    ],
  },
  {
    slug: 'pet-hair-removal',
    name: 'Pet Hair Removal',
    shortDescription:
      'Specialized tools and techniques to lift stubborn pet hair from carpet, seats, and cargo areas.',
    longDescription:
      'Pet hair embeds itself into carpet fibers and fabric upholstery in a way that ordinary vacuums cannot reach. We use rubber bristle brushes, high-powered vacuums, and electrostatic tools to thoroughly lift pet hair from every surface — including hard-to-reach crevices and headliners.',
    icon: '🐾',
    duration: '1–2 hours (standalone); included with interior detail',
    priceRange: 'Starting at $75 as an add-on',
    frequency: 'As needed',
    whatIsIt:
      'Pet hair removal is a targeted process using specialized tools to dislodge and extract embedded animal hair from upholstery, carpet, and cargo areas.',
    whatsIncluded: [
      'Rubber bristle brush loosening on all fabric surfaces',
      'High-powered vacuum extraction',
      'Seat crevice and cargo area treatment',
      'Lint roller finish on remaining fibers',
    ],
    howTo: [
      { step: 'Dry brush', description: 'Rubber bristle brush agitates and dislodges embedded hair.' },
      { step: 'Vacuum', description: 'High-powered vacuum removes loosened hair from all surfaces.' },
      { step: 'Repeat', description: 'Stubborn areas are treated multiple times until clear.' },
      { step: 'Final roll', description: 'Lint roller removes any remaining hair from smooth surfaces.' },
    ],
    faq: [
      {
        question: 'Why won\'t regular vacuums remove pet hair?',
        answer:
          'Pet hair weaves itself into carpet fibers and upholstery weave, essentially anchoring itself in place. Regular vacuum suction alone cannot pull it out. The secret is agitation — using rubber tools to break the hair free before vacuuming. Our specialized tools and technique make the difference.',
      },
    ],
  },
  {
    slug: 'vehicle-protection-packages',
    name: 'Vehicle Protection Packages',
    shortDescription:
      'Bundled protection services — ceramic coating, glass coating, wheel coating — for complete vehicle defense.',
    longDescription:
      'Our protection packages combine multiple protective coatings — paint ceramic, glass hydrophobic treatment, wheel coating, and plastic trim sealant — into a comprehensive vehicle defense system. Ideal for new vehicles or freshly corrected paint.',
    icon: '🛡️',
    duration: '1–2 days',
    priceRange: 'Starting at $800',
    frequency: 'Every 2–5 years',
    whatIsIt:
      'A vehicle protection package is a bundled service that applies professional-grade protective coatings to multiple vehicle surfaces simultaneously — paint, glass, wheels, and trim — for comprehensive protection with a single appointment.',
    whatsIncluded: [
      'Full wash and paint decontamination',
      'Paint correction (light to full, by package)',
      'Ceramic paint coating (2–5 year protection)',
      'Hydrophobic glass coating (front windshield or all glass)',
      'Wheel ceramic coating',
      'Plastic trim sealant',
      'Interior fabric and leather protection spray',
    ],
    howTo: [
      { step: 'Assess & prep', description: 'Vehicle is inspected and paint corrected as needed.' },
      { step: 'Apply paint ceramic', description: 'Main paint coating is applied and allowed to cure.' },
      { step: 'Glass coating', description: 'Hydrophobic coating on glass dramatically improves wet-weather visibility.' },
      { step: 'Wheels & trim', description: 'Wheel and trim coatings complete the exterior protection.' },
      { step: 'Interior protection', description: 'Fabric and leather protectants are applied inside.' },
    ],
    faq: [
      {
        question: 'What is included in a vehicle protection package?',
        answer:
          'Our full protection package includes ceramic paint coating, hydrophobic glass coating, wheel ceramic, plastic trim sealant, and interior fabric/leather protection. Each element is applied in a single multi-day appointment.',
      },
      {
        question: 'How long does a protection package last?',
        answer:
          'The ceramic paint coating lasts 2–5 years. Glass coatings last 1–2 years. Wheel coatings last 1–3 years with regular washing. All coatings can be refreshed or topped up to extend protection.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Cities / Location pages
// ---------------------------------------------------------------------------

export type City = {
  slug: string;
  name: string;
  state: string;
  distance: string;        // e.g. "15 miles north of North Port"
  tagline: string;
  intro: string;           // 2-3 sentences unique to this city
  landmarks: string[];     // nearby landmarks to mention
  neighborhoods: string[]; // neighborhoods/areas we serve in this city
  meta: {
    title: string;
    description: string;
  };
};

export const CITIES: City[] = [
  {
    slug: 'north-port',
    name: 'North Port',
    state: 'FL',
    distance: 'our home base',
    tagline: 'Mobile Car Detailing in North Port, FL',
    intro:
      'Sansanich Car Detailing is based right here in North Port — so when you book, our team is minutes away and ready to come to your home, office, or anywhere else in the city. We know North Port\'s roads, climate, and how Florida\'s intense sun and humidity punish automotive paint.',
    landmarks: ['Warm Mineral Springs', 'Myakkahatchee Creek Environmental Park', 'North Port Aquatic Center', 'CoolToday Park'],
    neighborhoods: ['Bobcat Trail', 'Heron Creek', 'West Villages', 'Price Boulevard corridor', 'Cranberry'],
    meta: {
      title: 'Car Detailing in North Port, FL | Sansanich Car Detailing',
      description:
        'Professional mobile & in-shop car detailing in North Port, FL. Interior, exterior, ceramic coating, paint correction & more. Open 24 hours. Call (941) 800-8198.',
    },
  },
  {
    slug: 'port-charlotte',
    name: 'Port Charlotte',
    state: 'FL',
    distance: 'approximately 15 miles north of North Port',
    tagline: 'Mobile Car Detailing in Port Charlotte, FL',
    intro:
      'Port Charlotte residents enjoy quick access to our mobile detailing team — we\'re typically on-site in Port Charlotte within 20–30 minutes of booking. Charlotte County\'s mix of waterfront homes, established neighborhoods, and commercial areas makes mobile detailing especially popular here.',
    landmarks: ['Charlotte Harbor', 'Port Charlotte Town Center Mall', 'Charlotte County Fairgrounds', 'Peace River'],
    neighborhoods: ['Port Charlotte Beach', 'Deep Creek', 'El Jobean', 'Edgewater', 'Gulf Cove'],
    meta: {
      title: 'Car Detailing in Port Charlotte, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Port Charlotte, FL. Ceramic coating, interior & exterior detail, paint correction. Serving all Port Charlotte neighborhoods. Call (941) 800-8198.',
    },
  },
  {
    slug: 'venice',
    name: 'Venice',
    state: 'FL',
    distance: 'approximately 20 miles north of North Port',
    tagline: 'Mobile Car Detailing in Venice, FL',
    intro:
      'Venice\'s combination of beach parking, salty air, and beautiful coastal weather creates a perfect storm for paint contamination and oxidation. Our mobile detailing team serves Venice Island, South Venice, and surrounding areas — bringing professional-grade protection right to your driveway.',
    landmarks: ['Venice Beach', 'Venice Fishing Pier', 'Caspersen Beach', 'Historic Downtown Venice', 'Myakka River State Park'],
    neighborhoods: ['Venice Island', 'South Venice', 'Nokomis (adjacent)', 'Laurel', 'Venice Gardens'],
    meta: {
      title: 'Car Detailing in Venice, FL | Sansanich Car Detailing',
      description:
        'Professional mobile car detailing in Venice, FL. Protect your paint from salt air with ceramic coating, exterior detail & more. Open 24 hours. Call (941) 800-8198.',
    },
  },
  {
    slug: 'englewood',
    name: 'Englewood',
    state: 'FL',
    distance: 'approximately 20 miles west of North Port',
    tagline: 'Mobile Car Detailing in Englewood, FL',
    intro:
      'Englewood\'s coastal location on Lemon Bay means vehicles here face constant salt air exposure, making regular exterior detailing and protective coatings especially important. We serve both the Charlotte County and Sarasota County sides of Englewood with the same premium mobile detailing experience.',
    landmarks: ['Englewood Beach', 'Lemon Bay', 'Stump Pass Beach State Park', 'Manasota Key', 'Englewood Farmers Market'],
    neighborhoods: ['Englewood Beach', 'Grove City', 'Rotonda West (adjacent)', 'Pine Lake Estates'],
    meta: {
      title: 'Car Detailing in Englewood, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Englewood, FL. Interior & exterior detailing, ceramic coating & paint correction serving Englewood Beach and surrounding areas. Call (941) 800-8198.',
    },
  },
  {
    slug: 'punta-gorda',
    name: 'Punta Gorda',
    state: 'FL',
    distance: 'approximately 25 miles north of North Port',
    tagline: 'Mobile Car Detailing in Punta Gorda, FL',
    intro:
      'Punta Gorda\'s charming historic downtown, waterfront community, and active boating culture mean vehicles here often need specialized attention — especially boats, trucks, and SUVs used near the water. Our mobile service makes it easy to get showroom-quality detailing without leaving Punta Gorda.',
    landmarks: ['Charlotte Harbor Preserve State Park', 'Fishermen\'s Village', 'Historic Downtown Punta Gorda', 'Peace River Wildlife Center', 'Harborwalk'],
    neighborhoods: ['Burnt Store Marina', 'Punta Gorda Isles', 'Harbour Heights', 'Solana', 'Deep Creek'],
    meta: {
      title: 'Car Detailing in Punta Gorda, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Punta Gorda, FL. Full interior & exterior detailing, ceramic coating, paint correction. Serving Punta Gorda Isles and surrounding areas. Call (941) 800-8198.',
    },
  },
  {
    slug: 'wellen-park',
    name: 'Wellen Park',
    state: 'FL',
    distance: 'approximately 10 miles north of North Port',
    tagline: 'Mobile Car Detailing in Wellen Park, FL',
    intro:
      'Wellen Park is one of the fastest-growing communities in Southwest Florida — and as a newer development, residents here tend to own newer vehicles that deserve the best protection available. We serve all of Wellen Park including the Town Center area, and as a North Port neighbor, we\'re often available same-day.',
    landmarks: ['Wellen Park Town Center', 'CoolToday Park (Atlanta Braves spring training)', 'Downtown Wellen', 'Braves Walk of Fame'],
    neighborhoods: ['Grand Palm', 'Oasis', 'Sunstone at Wellen Park', 'Renaissance', 'Brightmore'],
    meta: {
      title: 'Car Detailing in Wellen Park, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Wellen Park, FL. Ceramic coating, interior & exterior detailing for new & existing vehicles. Same-day availability. Call (941) 800-8198.',
    },
  },
  {
    slug: 'sarasota',
    name: 'Sarasota',
    state: 'FL',
    distance: 'approximately 40 miles north of North Port',
    tagline: 'Mobile Car Detailing in Sarasota, FL',
    intro:
      'Sarasota is home to some of the most discerning car owners in Southwest Florida — from Siesta Key beach vehicles to luxury cars parked in Palmer Ranch. Our mobile detailing team brings the same 5-star service to Sarasota driveways that has earned us a perfect rating in North Port and surrounding areas.',
    landmarks: ['Siesta Key Beach', 'St. Armands Circle', 'Ringling Museum', 'Sarasota Bayfront', 'UTC Mall area'],
    neighborhoods: ['Palmer Ranch', 'Lakewood Ranch (adjacent)', 'Siesta Key', 'Turtle Rock', 'Gulf Gate'],
    meta: {
      title: 'Car Detailing in Sarasota, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Sarasota, FL. Premium interior & exterior detailing, ceramic coating, paint correction for all vehicle types. 5.0★ rated. Call (941) 800-8198.',
    },
  },
  {
    slug: 'nokomis',
    name: 'Nokomis',
    state: 'FL',
    distance: 'approximately 30 miles north of North Port',
    tagline: 'Mobile Car Detailing in Nokomis, FL',
    intro:
      'Nokomis is a peaceful coastal community between Venice and Osprey where many residents prefer the convenience of mobile detailing — no need to drive to a shop when we can come to your home on Nokomis Beach Road or anywhere in between. Salt air from Nokomis Beach makes regular exterior protection especially important.',
    landmarks: ['Nokomis Beach', 'North Jetty Park', 'Lyonia Preserve', 'Blackburn Point Bridge'],
    neighborhoods: ['Nokomis Beach area', 'Sorrento Shores', 'Sunburst Ranch', 'Mission Valley'],
    meta: {
      title: 'Car Detailing in Nokomis, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Nokomis, FL. Exterior detailing, ceramic coating & interior cleaning serving Nokomis and surrounding Sarasota County communities. Call (941) 800-8198.',
    },
  },
  {
    slug: 'osprey',
    name: 'Osprey',
    state: 'FL',
    distance: 'approximately 32 miles north of North Port',
    tagline: 'Mobile Car Detailing in Osprey, FL',
    intro:
      'Osprey sits between Nokomis and Sarasota along the Gulf Coast — a quiet, established community where many residents appreciate mobile services that come to them. We serve residential communities throughout Osprey and can schedule around your routine so detailing doesn\'t interrupt your day.',
    landmarks: ['Oscar Scherer State Park', 'Historic Spanish Point', 'Casey Key', 'Osprey Junction Trailhead'],
    neighborhoods: ['Pine Ranch Estates', 'Southbay Yacht & Racquet Club', 'Rivendell', 'The Oaks'],
    meta: {
      title: 'Car Detailing in Osprey, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Osprey, FL. Full detailing, ceramic coating, paint correction serving Osprey and surrounding Sarasota County areas. Call (941) 800-8198.',
    },
  },
  {
    slug: 'rotonda-west',
    name: 'Rotonda West',
    state: 'FL',
    distance: 'approximately 20 miles southwest of North Port',
    tagline: 'Mobile Car Detailing in Rotonda West, FL',
    intro:
      'Rotonda West\'s circular street layout, golf community atmosphere, and proximity to Englewood Beach create a unique environment where vehicles face a lot of outdoor exposure. Golf carts, SUVs, and full-size trucks in this community all benefit from regular detailing and paint protection.',
    landmarks: ['Rotonda Golf & Country Club', 'Cape Haze Pioneer Trail', 'Englewood Beach (10 min away)', 'Broadmoor neighborhood'],
    neighborhoods: ['Broadmoor', 'Pinehurst', 'White Marsh', 'Oakland Hills', 'Long Meadow'],
    meta: {
      title: 'Car Detailing in Rotonda West, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Rotonda West, FL. Interior & exterior detailing, ceramic coating & paint protection. Serving golf community vehicles and all vehicle types. Call (941) 800-8198.',
    },
  },
  {
    slug: 'arcadia',
    name: 'Arcadia',
    state: 'FL',
    distance: 'approximately 40 miles east of North Port',
    tagline: 'Mobile Car Detailing in Arcadia, FL',
    intro:
      'Arcadia\'s inland location and agricultural heritage mean vehicles here face different challenges than coastal areas — red clay roads, construction dust, agricultural chemicals, and intense inland heat. We serve Arcadia and surrounding DeSoto County with the same premium mobile detailing that has made us the top-rated detailer in North Port.',
    landmarks: ['Arcadia Historic Downtown', 'Peace River', 'Myakka River State Park (nearby)', 'DeSoto County Fairgrounds', 'Peace River Wildlife Center'],
    neighborhoods: ['Historic Downtown Arcadia', 'Prairie Creek', 'Nocatee area', 'Horse Creek Estates'],
    meta: {
      title: 'Car Detailing in Arcadia, FL | Sansanich Car Detailing',
      description:
        'Mobile car detailing in Arcadia, FL. Interior & exterior detailing, ceramic coating & more serving DeSoto County. Open 24 hours. Call (941) 800-8198.',
    },
  },
];

// ---------------------------------------------------------------------------
// Testimonials (paraphrased from real review sentiment — no fabricated content)
// ---------------------------------------------------------------------------

export type Testimonial = {
  name: string;
  initials: string;
  rating: number;
  text: string;
  service?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Michael R.',
    initials: 'MR',
    rating: 5,
    text: 'Absolutely outstanding work. My car looks better than it did when I drove it off the lot. The attention to detail is unreal — every crevice was cleaned. I\'ll definitely be a repeat customer.',
    service: 'Full Detailing',
  },
  {
    name: 'Sandra T.',
    initials: 'ST',
    rating: 5,
    text: 'Fair pricing and top-notch professionalism from start to finish. They communicated clearly, arrived on time, and the results were incredible. My SUV had serious pet hair and coffee stains — now it looks brand new.',
    service: 'Interior Detailing',
  },
  {
    name: 'James K.',
    initials: 'JK',
    rating: 5,
    text: 'I was skeptical about mobile detailing but Sansanich completely changed my mind. The quality of work rivals any shop I\'ve used, and the convenience of them coming to my home is a game-changer.',
    service: 'Exterior Detailing',
  },
  {
    name: 'Patricia L.',
    initials: 'PL',
    rating: 5,
    text: 'The ceramic coating package was worth every penny. Six months later and the water is still beading off like the day they applied it. Customer service throughout was excellent.',
    service: 'Ceramic Coating',
  },
  {
    name: 'David M.',
    initials: 'DM',
    rating: 5,
    text: 'Third time using Sansanich and they never disappoint. The paint correction they did on my truck completely removed years of swirl marks. I keep coming back because the quality is consistently outstanding.',
    service: 'Paint Correction',
  },
];

// ---------------------------------------------------------------------------
// FAQ data
// ---------------------------------------------------------------------------

export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const FAQS: FAQ[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'Sansanich Car Detailing is based in North Port, FL and serves a wide radius across Southwest Florida including Port Charlotte, Venice, Englewood, Punta Gorda, Wellen Park, Sarasota, Nokomis, Osprey, Rotonda West, and Arcadia. If you\'re unsure whether we cover your area, call us at (941) 800-8198.',
    category: 'General',
  },
  {
    question: 'Are you a mobile detailing service?',
    answer:
      'Yes. We offer both mobile detailing (we come to your home, office, or any location) and in-shop service. Mobile detailing is available throughout our entire service area.',
    category: 'General',
  },
  {
    question: 'What are your hours?',
    answer:
      'We are open 24 hours, 7 days a week. We understand that schedules vary, and we work around yours — including early mornings, evenings, and weekends.',
    category: 'General',
  },
  {
    question: 'How much does car detailing cost in North Port, FL?',
    answer:
      'Our pricing varies by service and vehicle size. A basic hand wash starts at $50, interior detailing from $150, full detail from $250, and ceramic coating from $500. Contact us for a free, no-obligation quote tailored to your vehicle.',
    category: 'Pricing',
  },
  {
    question: 'Do I need to provide water or electricity for mobile detailing?',
    answer:
      'For most services we bring everything we need, including our own water supply and power source. For some larger services we may ask for access to a water spigot. We\'ll confirm requirements when you book.',
    category: 'Mobile Detailing',
  },
  {
    question: 'How long does a full detail take?',
    answer:
      'A full detail (interior + exterior) typically takes 4–8 hours depending on vehicle size, condition, and services included. We always do a thorough job — never rushed — so please plan accordingly.',
    category: 'Services',
  },
  {
    question: 'How often should I get my car detailed?',
    answer:
      'For a maintained vehicle, we recommend a full detail every 3–6 months, exterior washes every 2–4 weeks, and wax or sealant every 2–4 months. In Florida\'s harsh sun and humidity, more frequent protection is always better for paint longevity.',
    category: 'Services',
  },
  {
    question: 'What types of vehicles do you service?',
    answer:
      'We service all vehicle types including cars, trucks, SUVs, vans, and fleet vehicles. We also offer special pricing for multi-vehicle fleet accounts.',
    category: 'Services',
  },
  {
    question: 'Do you detail boats or RVs?',
    answer:
      'Our primary focus is automotive detailing. For specialized boat or RV detailing, please call us to discuss your needs and we\'ll let you know if we can accommodate.',
    category: 'Services',
  },
  {
    question: 'How does ceramic coating differ from wax?',
    answer:
      'Wax is a temporary protective layer that lasts 4–8 weeks. Ceramic coating is a liquid polymer that chemically bonds to your paint, forming a permanent (2–5 year) protective layer that is far harder, more hydrophobic, and more resistant to UV and contaminants than any wax.',
    category: 'Services',
  },
  {
    question: 'Can you remove deep scratches?',
    answer:
      'Paint correction can remove surface-level scratches in the clear coat. Deep scratches that reach the base coat or primer cannot be corrected with polishing — those require touch-up paint or a respray. During assessment we\'ll tell you exactly what\'s achievable.',
    category: 'Services',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Call or text us at (941) 800-8198 anytime — we\'re open 24 hours. You can also fill out our online quote form and we\'ll respond promptly.',
    category: 'Booking',
  },
];

// Convenience export for all city slugs (used in generateStaticParams)
export const CITY_SLUGS = CITIES.map((c) => c.slug);

// Convenience export for all service slugs
export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
