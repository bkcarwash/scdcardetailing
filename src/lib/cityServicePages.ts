// Exact-match keyword landing pages for city + service combinations.
// Each entry becomes a statically generated page at /locations/[city]/[service].

export type CityServicePage = {
  citySlug: string;
  serviceSlug: string;        // URL slug for this page
  servicePageSlug: string;    // corresponding /services/[slug] page
  serviceName: string;        // e.g. "Ceramic Coating" — used in headings
  badge: string;
  h1: string;                 // first part of H1 (plain text)
  h1Highlight: string;        // second part of H1 (gold gradient)
  meta: {
    title: string;
    description: string;
  };
  quickAnswer: string;
  intro: string;
  priceRange: string;
  duration: string;
  benefits: string[];
  localContext: string;
  faqs: { question: string; answer: string }[];
};

export const CITY_SERVICE_PAGES: CityServicePage[] = [
  // ─── Arcadia ──────────────────────────────────────────────────────────────

  {
    citySlug: 'arcadia',
    serviceSlug: 'ceramic-coating',
    servicePageSlug: 'ceramic-coating',
    serviceName: 'Ceramic Coating',
    badge: 'Mobile Ceramic Coating',
    h1: 'Ceramic Coating in',
    h1Highlight: 'Arcadia, FL',
    meta: {
      title: 'Ceramic Coating Arcadia FL | Mobile | From $500 | Open 24 Hrs',
      description:
        'Professional ceramic coating in Arcadia, FL. Mobile service — we come to your DeSoto County home or business. 2–5 year paint protection from UV, red clay dust & heat. From $500. Call (941) 800-8198.',
    },
    quickAnswer:
      'Ceramic coating in Arcadia, FL starts at $500. Sansanich Car Detailing offers professional mobile ceramic coating throughout DeSoto County — we come to your location. Protects against intense UV, red clay road dust, and Florida heat. Open 24 hours. Call (941) 800-8198.',
    intro:
      "Arcadia's inland climate is harder on automotive paint than most people expect — intense UV without coastal breezes, red clay road dust from DeSoto County's agricultural roads, and extreme heat cycles accelerate paint oxidation and fade. Ceramic coating is the most effective protection available, and we bring it directly to your home, farm, or business anywhere in Arcadia.",
    priceRange: 'Starting at $500',
    duration: '1–2 days',
    benefits: [
      'Mobile service — we come to you anywhere in Arcadia or DeSoto County',
      "Protection against Arcadia's intense inland UV and heat cycles",
      'Repels red clay road dust and agricultural chemical residue',
      'Hydrophobic surface makes post-rain cleaning effortless',
      '2–5 year protection — far outlasting wax or sealant',
      'Enhances paint gloss and color depth for years',
    ],
    localContext:
      "Arcadia sits at the heart of DeSoto County — one of Florida's most active agricultural regions. Vehicles here accumulate red clay, fertilizer residue, and construction dust that standard wax can't withstand. Our ceramic coating bonds chemically to your paint, forming a hard protective shell that repels these contaminants and dramatically reduces the effort needed to keep your vehicle clean.",
    faqs: [
      {
        question: 'How much does ceramic coating cost in Arcadia, FL?',
        answer:
          'Ceramic coating in Arcadia, FL starts at $500 for a single-stage coating on a standard vehicle. Larger vehicles, trucks, and multi-layer packages are priced higher. A travel fee may apply for DeSoto County. Call (941) 800-8198 for a free quote.',
      },
      {
        question: 'Do you offer mobile ceramic coating in Arcadia, FL?',
        answer:
          'Yes. We are a fully mobile service — our unit carries its own water and power. We can apply ceramic coating at your home, farm, or business anywhere in Arcadia or DeSoto County. Open 24 hours. Call (941) 800-8198.',
      },
      {
        question: 'Why is ceramic coating especially valuable for vehicles in Arcadia?',
        answer:
          "Arcadia's inland location means intense UV exposure without the humidity buffering of the coast, plus red clay road dust and agricultural chemical residue. Ceramic coating creates a hard, hydrophobic barrier that standard wax simply cannot match for these conditions.",
      },
      {
        question: "How long does ceramic coating last in Arcadia's climate?",
        answer:
          "A professional ceramic coating lasts 2–5 years in Florida's climate with proper maintenance. Vehicles parked outdoors in Arcadia's intense sun benefit most from the UV-blocking properties of ceramic.",
      },
      {
        question: 'What is the difference between mobile ceramic coating and shop ceramic coating in Arcadia?',
        answer:
          'The finish quality is identical. Our mobile unit provides a controlled application environment. The difference is convenience — we come to your Arcadia location rather than you driving to a shop. Same professional process, same results.',
      },
    ],
  },

  {
    citySlug: 'arcadia',
    serviceSlug: 'paint-correction',
    servicePageSlug: 'paint-correction',
    serviceName: 'Car Paint Correction',
    badge: 'Paint Restoration Service',
    h1: 'Car Paint Correction in',
    h1Highlight: 'Arcadia, FL',
    meta: {
      title: 'Car Paint Correction Arcadia FL | Paint Restoration Service | From $350 | Open 24 Hrs',
      description:
        'Professional car paint correction & paint restoration service in Arcadia, FL. Remove swirl marks, scratches & oxidation via machine polishing. Mobile service — DeSoto County. From $350. Call (941) 800-8198.',
    },
    quickAnswer:
      'Car paint correction in Arcadia, FL starts at $350. Sansanich Car Detailing provides professional paint restoration service throughout DeSoto County — removing swirl marks, scratches, and oxidation via machine polishing. Mobile service available. Open 24 hours. Call (941) 800-8198.',
    intro:
      "Paint correction — also called paint restoration service — uses machine polishing to remove clear coat defects, restoring true paint clarity and gloss. For vehicles in Arcadia exposed to red clay roads, harsh UV, and agricultural dust, paint correction is the most effective way to reverse paint damage and make your vehicle look new again. We bring the full process directly to your DeSoto County location.",
    priceRange: 'Starting at $350',
    duration: '4–12 hours',
    benefits: [
      "Removes swirl marks, light scratches, and oxidation caused by Arcadia's roads and UV",
      'Machine polishing restores true paint clarity — not just temporary shine',
      'Paint correction before ceramic coating maximizes gloss and coating longevity',
      'Mobile service — we come to your Arcadia home or business',
      'Paint depth measurement ensures safe, risk-free correction',
      'Available standalone or bundled with ceramic coating protection',
    ],
    localContext:
      "DeSoto County vehicles often show heavy oxidation on horizontal panels (hood, roof, trunk lid) from constant direct sun exposure. Red clay dust and agricultural chemical fallout embed into the paint surface over time. Our paint correction process systematically removes these defects using a paint depth gauge to guide safe polishing — restoring paint that most owners assume is permanently damaged.",
    faqs: [
      {
        question: 'How much does car paint correction cost in Arcadia, FL?',
        answer:
          'Car paint correction in Arcadia, FL starts at $350 for a single-stage polish on a standard vehicle. Two-stage correction for heavily oxidized or scratched paint is priced higher. Call (941) 800-8198 for a free assessment and quote.',
      },
      {
        question: 'What is a car paint restoration service in Arcadia, FL?',
        answer:
          'Paint restoration service (also called paint correction) uses machine polishing to remove defects from your clear coat — swirl marks, fine scratches, oxidation, and water spots. The result is dramatically improved paint clarity and gloss without repainting.',
      },
      {
        question: "Can paint correction fix damage from Arcadia's red clay roads?",
        answer:
          'Yes. Red clay road dust embeds into paint and contributes to micro-scratches and surface contamination. Our process includes clay bar decontamination followed by machine polishing to remove resulting surface defects and restore clarity.',
      },
      {
        question: 'Do you offer mobile paint correction in Arcadia, FL?',
        answer:
          'Yes. Our mobile unit travels to your Arcadia home or business. We set up on-site and perform the full paint correction process at your location. Open 24 hours. Call (941) 800-8198.',
      },
      {
        question: 'Should I get paint correction before ceramic coating in Arcadia?',
        answer:
          'Yes — always. Ceramic coating locks in whatever is on the paint surface. Doing paint correction first ensures the coating is applied over defect-free paint, maximizing the gloss and longevity of both services.',
      },
    ],
  },

  {
    citySlug: 'arcadia',
    serviceSlug: 'headlight-restoration',
    servicePageSlug: 'headlight-restoration',
    serviceName: 'Headlight Restoration',
    badge: 'Headlight Restoration',
    h1: 'Headlight Restoration in',
    h1Highlight: 'Arcadia, FL',
    meta: {
      title: 'Headlight Restoration Arcadia FL | From $80 | Mobile | Open 24 Hrs',
      description:
        'Professional headlight restoration in Arcadia, FL. Clear cloudy, yellowed headlights for improved safety & appearance. Mobile service throughout DeSoto County. From $80. Call (941) 800-8198.',
    },
    quickAnswer:
      'Headlight restoration in Arcadia, FL starts at $80. Sansanich Car Detailing clears cloudy, yellowed headlights via wet-sanding and UV sealing — restoring up to 95% of original brightness. Mobile service throughout DeSoto County. Open 24 hours. Call (941) 800-8198.',
    intro:
      "Arcadia's inland Florida sun is among the most intense in the state — and it destroys plastic headlight lenses faster than many drivers realize. Hazy, yellowed headlights reduce light output by up to 80%, creating a genuine safety hazard on DeSoto County's rural roads. Our mobile headlight restoration service restores full clarity at a fraction of the cost of lens replacement.",
    priceRange: 'Starting at $80',
    duration: '1–2 hours',
    benefits: [
      'Restores up to 95% of original headlight clarity — major safety improvement',
      'Costs a fraction of OEM lens replacement ($200–$800+ per side)',
      "UV sealant applied to slow future oxidation from Arcadia's intense sun",
      'Mobile service — we come to your Arcadia home or business',
      'Completed in 1–2 hours with no shop visit required',
      'Results visible immediately — dramatic before/after improvement',
    ],
    localContext:
      "Arcadia's intense inland UV exposure accelerates headlight oxidation faster than coastal areas. On DeSoto County's rural roads and the US-17 corridor, clear and bright headlights are a safety necessity — not just cosmetic. Our wet-sand and UV-seal process restores lenses to near-new clarity and includes a UV-resistant sealant formulated for Florida's harsh sun conditions.",
    faqs: [
      {
        question: 'How much does headlight restoration cost in Arcadia, FL?',
        answer:
          'Headlight restoration in Arcadia, FL starts at $80 for both headlights — a fraction of OEM replacement cost ($200–$800+ per side). A small travel fee may apply for DeSoto County. Call (941) 800-8198.',
      },
      {
        question: 'Why do headlights get cloudy so fast in Arcadia, FL?',
        answer:
          "Florida's UV index is among the highest in the US, and Arcadia's inland position means less cloud cover and humidity buffering than coastal areas. UV radiation breaks down the UV-protective coating on plastic headlight lenses, causing oxidation and cloudiness within 2–5 years.",
      },
      {
        question: "How long does headlight restoration last in Arcadia's climate?",
        answer:
          'With a UV sealant application, headlight restoration typically lasts 1–3 years. Parking in a garage, using a car cover, and periodic waxing of the lenses can extend results. We recommend resealing every 1–2 years in Arcadia.',
      },
      {
        question: 'Is headlight restoration worth it vs. replacement in Arcadia?',
        answer:
          'Absolutely. Professional restoration achieves 80–95% of new-lens clarity at $80 vs. $200–$800+ per side for OEM replacements. For most vehicles on DeSoto County roads, restoration is the clear choice.',
      },
      {
        question: 'Do you offer mobile headlight restoration in Arcadia, FL?',
        answer:
          'Yes. We travel to your home, farm, or business throughout Arcadia and DeSoto County. Restoration takes 1–2 hours on-site. Open 24 hours. Call (941) 800-8198.',
      },
    ],
  },

  {
    citySlug: 'arcadia',
    serviceSlug: 'car-polishing-waxing',
    servicePageSlug: 'waxing-polishing',
    serviceName: 'Car Polishing and Waxing',
    badge: 'Polishing & Waxing',
    h1: 'Car Polishing and Waxing in',
    h1Highlight: 'Arcadia, FL',
    meta: {
      title: 'Car Polishing and Waxing Arcadia FL | From $100 | Mobile | Open 24 Hrs',
      description:
        'Professional car polishing and waxing in Arcadia, FL. Enhance gloss, protect paint & remove light swirls. Mobile service throughout DeSoto County. From $100. Call (941) 800-8198.',
    },
    quickAnswer:
      'Car polishing and waxing in Arcadia, FL starts at $100. Sansanich Car Detailing provides mobile polishing and waxing throughout DeSoto County — enhancing gloss and protecting paint from UV, red clay, and Florida heat. Open 24 hours. Call (941) 800-8198.',
    intro:
      "Car polishing smooths and refines your paint surface, removing light swirls and maximizing color depth. Waxing lays a protective layer over the polished paint, shielding it from Arcadia's UV rays, red clay road dust, and Florida heat. Together, polishing and waxing deliver a mirror-like finish and real paint protection — brought directly to your Arcadia or DeSoto County location.",
    priceRange: 'Starting at $100',
    duration: '1–3 hours',
    benefits: [
      'Removes light swirl marks and enhances paint clarity',
      "Carnauba or synthetic wax protects against Arcadia's UV and heat",
      'Mobile service — we come to your DeSoto County home or business',
      'Completed in 1–3 hours with no shop visit required',
      'Protects against red clay road dust and agricultural chemical exposure',
      'Refreshes and maintains paint between major details',
    ],
    localContext:
      "Arcadia vehicles exposed to DeSoto County's red clay roads and direct inland sun benefit greatly from regular polishing and waxing cycles. Polishing removes the surface haze that accumulates from UV and dust, while wax creates a sacrificial barrier that takes the environmental punishment rather than your paint. For Arcadia's conditions, we recommend waxing every 2–3 months.",
    faqs: [
      {
        question: 'How much does car polishing and waxing cost in Arcadia, FL?',
        answer:
          'Car polishing and waxing in Arcadia, FL starts at $100 for a standard vehicle. Larger trucks, SUVs, or vehicles needing heavier correction are priced higher. Call (941) 800-8198 for a free quote.',
      },
      {
        question: 'What is the difference between car polishing and waxing?',
        answer:
          'Polishing uses fine abrasives to smooth the clear coat — removing light swirls and increasing reflectivity. Waxing applies a protective coating (carnauba or synthetic) over the polished surface to shield paint from UV, dust, and contaminants. Polishing enhances; waxing protects.',
      },
      {
        question: 'How often should I wax my car in Arcadia, FL?',
        answer:
          "In Arcadia's climate, we recommend waxing every 2–3 months. The combination of intense UV, red clay dust, and temperature swings degrades wax protection faster than cooler climates. A synthetic sealant lasts 3–6 months if you prefer less frequent applications.",
      },
      {
        question: 'Is waxing or ceramic coating better for Arcadia vehicles?',
        answer:
          'Ceramic coating offers far superior and longer-lasting protection (2–5 years vs. 4–8 weeks for wax). However, waxing is a more affordable entry point at $100+ vs. $500+ for ceramic. For vehicles driven on Arcadia\'s red clay roads regularly, ceramic coating offers the best long-term value.',
      },
      {
        question: 'Do you offer mobile car polishing and waxing in Arcadia, FL?',
        answer:
          'Yes. We bring all equipment to your Arcadia home, farm, or business. Mobile service available throughout DeSoto County. Open 24 hours. Call (941) 800-8198.',
      },
    ],
  },

  {
    citySlug: 'arcadia',
    serviceSlug: 'tire-cleaning-dressing',
    servicePageSlug: 'exterior-detailing',
    serviceName: 'Tire Cleaning and Dressing',
    badge: 'Tire Cleaning & Dressing',
    h1: 'Tire Cleaning and Dressing in',
    h1Highlight: 'Arcadia, FL',
    meta: {
      title: 'Tire Cleaning and Dressing Arcadia FL | Mobile | Open 24 Hrs',
      description:
        'Professional tire cleaning and dressing in Arcadia, FL. Remove red clay, brake dust & grime — restore deep black finish. Mobile service throughout DeSoto County. Call (941) 800-8198.',
    },
    quickAnswer:
      'Tire cleaning and dressing in Arcadia, FL is available standalone or as part of any exterior detail package. Sansanich Car Detailing removes red clay, brake dust, and grime from tires and applies professional dressing for a deep, lasting black finish. Mobile service throughout DeSoto County. Open 24 hours. Call (941) 800-8198.',
    intro:
      "Arcadia's red clay roads are notorious for coating tires and wheels with a stubborn rust-colored residue that standard washing leaves behind. Our tire cleaning and dressing service uses dedicated tire cleaners, stiff brushes, and professional dressing products to strip the grime, restore the tire's natural black, and leave a clean, protected finish that resists future buildup — brought directly to your DeSoto County location.",
    priceRange: 'Included in exterior detail; standalone add-on from $50',
    duration: '30–60 minutes',
    benefits: [
      "Removes stubborn red clay and brake dust specific to Arcadia's roads",
      'Professional tire dressing restores a deep, lasting black finish',
      'Protects rubber from cracking and browning caused by UV and ozone',
      'Mobile service — we come to your DeSoto County home or business',
      'Available standalone or included in any exterior detail package',
      'Completed in 30–60 minutes with no shop visit required',
    ],
    localContext:
      "DeSoto County's red clay soil is one of the most challenging substances for vehicle tires — it bonds to rubber and dries to a stubborn rust-brown coating that makes any vehicle look dirty regardless of how clean the rest of it is. Our dedicated tire cleaning process removes this bonded clay and restores the tire's original black. We then apply a non-sling dressing formulated for longevity in Florida's heat and UV conditions.",
    faqs: [
      {
        question: 'How much does tire cleaning and dressing cost in Arcadia, FL?',
        answer:
          'Tire cleaning and dressing is included in our exterior detail packages. As a standalone service, pricing starts from $50. Mobile service available throughout DeSoto County. Call (941) 800-8198 for exact pricing.',
      },
      {
        question: 'What is tire dressing and what does it do?',
        answer:
          "Tire dressing is a professional product applied to clean tires that restores a deep, rich black finish and protects rubber from UV degradation and ozone cracking. We use a non-sling formula so it won't transfer onto your vehicle's paint.",
      },
      {
        question: "How do you remove Arcadia's red clay from tires?",
        answer:
          "Red clay bonds to tire rubber and requires a dedicated tire cleaner (not car shampoo) and a stiff tire brush to break the bond. Our professional-grade tire cleaners lift bonded clay, rinse clean, and leave the rubber ready for dressing.",
      },
      {
        question: "How long does tire dressing last in Arcadia's climate?",
        answer:
          "Tire dressing typically lasts 1–4 weeks depending on driving conditions. Arcadia's red clay roads and heat will shorten longevity compared to pavement-only driving. We recommend tire dressing with every wash cycle to maintain the look and protect rubber.",
      },
      {
        question: 'Do you offer mobile tire cleaning in Arcadia, FL?',
        answer:
          'Yes. We travel to your home, farm, or business anywhere in Arcadia and DeSoto County. Tire cleaning and dressing can be booked standalone or as part of a full exterior detail. Open 24 hours. Call (941) 800-8198.',
      },
    ],
  },
];

export function getCityServicePage(citySlug: string, serviceSlug: string): CityServicePage | undefined {
  return CITY_SERVICE_PAGES.find((p) => p.citySlug === citySlug && p.serviceSlug === serviceSlug);
}

export function getAllCityServiceParams(): { city: string; service: string }[] {
  return CITY_SERVICE_PAGES.map((p) => ({ city: p.citySlug, service: p.serviceSlug }));
}
