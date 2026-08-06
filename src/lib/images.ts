export type SiteImage = {
  src: string;
  src800: string;
  alt: string;
  blur: string;
};

export const HERO_HOME: SiteImage = {
  src: '/images/hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing-1920w.webp',
  src800: '/images/hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing-800w.webp',
  alt: 'Glossy black sedan with mirror-like paint finish after professional detailing by Sansanich Car Detailing in North Port, FL',
  blur: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAgABUB8JYwCdADzfmH1AAD6DcF0Ub1qctYd296FQb8U0Tm8uyAA',
};

export const HERO_SERVICES: SiteImage = {
  src: '/images/hero-lifted-black-truck-north-port-fl-sansanich-car-detailing-1920w.webp',
  src800: '/images/hero-lifted-black-truck-north-port-fl-sansanich-car-detailing-800w.webp',
  alt: 'Lifted black Dodge Ram truck fully detailed by Sansanich Car Detailing in North Port, FL',
  blur: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAgABUB8JQBOgCKe4sMAAMtLQwQmRNe1M2IVIKBSgduE12q1EZIz3EwwAA==',
};

// Service-specific hero images
export const SERVICE_IMAGES: Record<string, SiteImage> = {
  'interior-detailing': {
    src: '/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-1200w.webp',
    src800: '/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-800w.webp',
    alt: 'Immaculate black leather interior of Ford F-250 Super Duty truck after professional interior detailing in North Port, FL by Sansanich Car Detailing',
    blur: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAgABUB8JaQAAupQl4AA/XYSvyhZMoCOkMc9mCcflyJcNgAAAA==',
  },
  'exterior-detailing': {
    src: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-1200w.webp',
    src800: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Deep gloss black Audi paint with mirror-like tree reflections after paint correction by Sansanich Car Detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAgABUB8JZQCdAEfUitENlAAAPsaZ8zEAlGH4hiv7l4CDIM1qhqAAAA=',
  },
  'full-car-detailing': {
    src: '/images/exterior-detailing-black-silverado-truck-north-port-sansanich-car-detailing-01-1200w.webp',
    src800: '/images/exterior-detailing-black-silverado-truck-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Black Chevy Silverado 2500HD truck exterior detail completed at customer home in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAgABUB8JZQAAlp9nUeAAP5EnPp3PpGDonf8+H3WSByuY4cA9wD3F4uoA08oQAA=',
  },
  'hand-washing': {
    src: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-1200w.webp',
    src800: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-800w.webp',
    alt: 'Mobile car detailing in action — white Nissan covered in foam during hand wash at customer home in North Port, FL by Sansanich Car Detailing',
    blur: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgABUB8JQBOgBtqji2ZAAD0b/IVAiPrtdEuqqll7jltWv2JMB/gjDt9U40Kor48FBYAAAA=',
  },
  'waxing-polishing': {
    src: '/images/hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing-1200w.webp',
    src800: '/images/hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing-800w.webp',
    alt: 'Glossy black sedan with mirror-like paint finish after waxing and polishing by Sansanich Car Detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAgABUB8JYwCdADzfmH1AAD6DcF0Ub1qctYd296FQb8U0Tm8uyAA',
  },
  'paint-correction': {
    src: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-1200w.webp',
    src800: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Deep gloss black Audi paint with mirror-like reflections after paint correction by Sansanich Car Detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAgABUB8JZQCdAEfUitENlAAAPsaZ8zEAlGH4hiv7l4CDIM1qhqAAAA=',
  },
  'upholstery-leather-cleaning': {
    src: '/images/interior-detailing-after-suv-beige-leather-north-port-sansanich-01-1200w.webp',
    src800: '/images/interior-detailing-after-suv-beige-leather-north-port-sansanich-01-800w.webp',
    alt: 'Nissan Murano beige tan leather interior cleaned and conditioned in North Port, FL by Sansanich Car Detailing',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAgABUB8JZwAAlr0kJFgAPOxl9KZdDmZg4a7Ba7wEF1QL+nClEgAAAA=',
  },
};

// Gallery grid — ordered by visual impact
export const GALLERY_IMAGES: (SiteImage & { label: string; category: string })[] = [
  {
    src: '/images/hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing-800w.webp',
    src800: '/images/hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing-800w.webp',
    alt: 'Glossy black sedan with mirror-like paint after professional detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAgABUB8JYwCdADzfmH1AAD6DcF0Ub1qctYd296FQb8U0Tm8uyAA',
    label: 'Paint Correction',
    category: 'Paint',
  },
  {
    src: '/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-800w.webp',
    src800: '/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-800w.webp',
    alt: 'Immaculate black leather truck interior after professional interior detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAgABUB8JaQAAupQl4AA/XYSvyhZMoCOkMc9mCcflyJcNgAAAA==',
    label: 'Interior Detail',
    category: 'Interior',
  },
  {
    src: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-800w.webp',
    src800: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-800w.webp',
    alt: 'Mobile hand wash with foam at customer home in North Port, FL — Sansanich Car Detailing',
    blur: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgABUB8JQBOgBtqji2ZAAD0b/IVAiPrtdEuqqll7jltWv2JMB/gjDt9U40Kor48FBYAAAA=',
    label: 'Hand Wash',
    category: 'Exterior',
  },
  {
    src: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Mirror-like gloss on black Audi paint and wheel after paint correction in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAgABUB8JZQCdAEfUitENlAAAPsaZ8zEAlGH4hiv7l4CDIM1qhqAAAA=',
    label: 'Paint Gloss',
    category: 'Paint',
  },
  {
    src: '/images/interior-detailing-after-luxury-suv-audi-north-port-sansanich-01-800w.webp',
    src800: '/images/interior-detailing-after-luxury-suv-audi-north-port-sansanich-01-800w.webp',
    alt: 'Audi Q5 luxury SUV leather interior after professional interior detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgABUB8JYwCdADbVGZw0AD9uxTPVRzt/UfFrE7+X96oFR2ArJuWROQH5AAA',
    label: 'Luxury Interior',
    category: 'Interior',
  },
  {
    src: '/images/mobile-detailing-suv-foam-wash-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/mobile-detailing-suv-foam-wash-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Cadillac Escalade during mobile foam wash in North Port, FL by Sansanich Car Detailing',
    blur: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAgABUB8JYwCdADz4SGdgAD9Us0aZWKGRP31l/oogmT618HQaopO042AAA==',
    label: 'Mobile SUV Wash',
    category: 'Exterior',
  },
  {
    src: '/images/interior-detailing-after-suv-beige-leather-north-port-sansanich-01-800w.webp',
    src800: '/images/interior-detailing-after-suv-beige-leather-north-port-sansanich-01-800w.webp',
    alt: 'Nissan Murano beige leather interior professionally cleaned in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAgABUB8JZwAAlr0kJFgAPOxl9KZdDmZg4a7Ba7wEF1QL+nClEgAAAA=',
    label: 'Leather Conditioning',
    category: 'Interior',
  },
  {
    src: '/images/exterior-detailing-black-silverado-truck-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/exterior-detailing-black-silverado-truck-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Black Chevy Silverado after full exterior detail in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAgABUB8JZQAAlp9nUeAAP5EnPp3PpGDonf8+H3WSByuY4cA9wD3F4uoA08oQAA=',
    label: 'Exterior Detail',
    category: 'Exterior',
  },
  {
    src: '/images/wheel-tire-detail-truck-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/wheel-tire-detail-truck-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Clean black off-road truck wheel and tire after detail in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgABUB8JYwCw7DdrJcTAADifk236r2wGAdZRUgyqUo7a6+TKq8ix5OypAAA',
    label: 'Wheel & Tire',
    category: 'Exterior',
  },
  {
    src: '/images/interior-detailing-after-truck-chevy-north-port-sansanich-02-800w.webp',
    src800: '/images/interior-detailing-after-truck-chevy-north-port-sansanich-02-800w.webp',
    alt: 'Clean Chevrolet Silverado black leather truck interior after detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAgABUB8JZwAAppm+kgA/n5AvpQ/Iz8Gefk3Xzpe16vS5YgAAAAA',
    label: 'Truck Interior',
    category: 'Interior',
  },
  {
    src: '/images/exterior-detailing-white-sedan-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/exterior-detailing-white-sedan-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'White Nissan Altima sedan freshly exterior detailed in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgABUB8JZQAAvxWSTkZgAD7cpLpgNL5YeEJPrhBGbp6v5PKzdjU5A28gAAA',
    label: 'Sedan Detail',
    category: 'Exterior',
  },
  {
    src: '/images/interior-carpet-clean-detail-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/interior-carpet-clean-detail-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Vacuumed and shampooed rear carpet and floor mats after interior detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAgABUB8JZwAApn5hIAA/SBdLwVKsoMgVdGmsbSoIgrep35a+2EAAAA=',
    label: 'Carpet & Mats',
    category: 'Interior',
  },
  {
    src: '/images/interior-detailing-after-suv-mazda-north-port-sansanich-01-800w.webp',
    src800: '/images/interior-detailing-after-suv-mazda-north-port-sansanich-01-800w.webp',
    alt: 'Mazda CX-5 black leather interior professionally cleaned in North Port, FL',
    blur: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAgABUB8JZwAAp1sRSAAAP4+PTCrueaA2HYlTQ+t2Q2dR51sYsTIeAAAAA==',
    label: 'SUV Interior',
    category: 'Interior',
  },
  {
    src: '/images/mobile-detailing-truck-foam-wash-north-port-sansanich-car-detailing-02-800w.webp',
    src800: '/images/mobile-detailing-truck-foam-wash-north-port-sansanich-car-detailing-02-800w.webp',
    alt: 'Ford F-150 truck covered in foam during mobile hand wash in North Port, FL',
    blur: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAgABUB8JQBOgB5qmDAA90nipb7etfkfmOU1cwwDi+D47Eh8eirHIIAAAA==',
    label: 'Truck Foam Wash',
    category: 'Exterior',
  },
  {
    src: '/images/interior-cargo-trunk-clean-suv-north-port-sansanich-car-detailing-02-800w.webp',
    src800: '/images/interior-cargo-trunk-clean-suv-north-port-sansanich-car-detailing-02-800w.webp',
    alt: 'Spotless cargo trunk of Nissan Murano after full interior detail in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAgABUB8JZQAAxPBXrKAAPqPV0XQXN7uGsaitcu26MTn+4KKZHJ8vAA=',
    label: 'Cargo Area',
    category: 'Interior',
  },
  {
    src: '/images/interior-detailing-before-truck-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/interior-detailing-before-truck-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Dodge Ram truck interior before professional cleaning — the type of detail challenge we take on daily',
    blur: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAgABUB8JaQAApyhm6eAAP5BF+ErLg/hFLOy485gAc3rGW0AAA==',
    label: 'Before Detail',
    category: 'Interior',
  },
];

// About page images
export const ABOUT_MOBILE_IMAGE: SiteImage = {
  src: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-1200w.webp',
  src800: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-800w.webp',
  alt: 'Sansanich Car Detailing mobile service in action — foam hand wash at a customer home in North Port, FL',
  blur: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgABUB8JQBOgBtqji2ZAAD0b/IVAiPrtdEuqqll7jltWv2JMB/gjDt9U40Kor48FBYAAAA=',
};

export const ABOUT_ESCALADE_IMAGE: SiteImage = {
  src: '/images/mobile-detailing-suv-foam-wash-north-port-sansanich-car-detailing-01-1200w.webp',
  src800: '/images/mobile-detailing-suv-foam-wash-north-port-sansanich-car-detailing-01-800w.webp',
  alt: 'Cadillac Escalade being detailed on-site by Sansanich Car Detailing in North Port, FL',
  blur: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAgABUB8JYwCdADz4SGdgAD9Us0aZWKGRP31l/oogmT618HQaopO042AAA==',
};

// Home preview gallery (6 images)
export const HOME_PREVIEW_IMAGES: (SiteImage & { label: string })[] = [
  {
    src: '/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-800w.webp',
    src800: '/images/interior-detailing-after-truck-black-leather-north-port-sansanich-01-800w.webp',
    alt: 'Black leather truck interior after professional interior detailing in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAgABUB8JaQAAupQl4AA/XYSvyhZMoCOkMc9mCcflyJcNgAAAA==',
    label: 'Interior Detail',
  },
  {
    src: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/paint-correction-gloss-detail-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Deep gloss black Audi paint after paint correction in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAgABUB8JZQCdAEfUitENlAAAPsaZ8zEAlGH4hiv7l4CDIM1qhqAAAA=',
    label: 'Paint Correction',
  },
  {
    src: '/images/exterior-detailing-white-sedan-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/exterior-detailing-white-sedan-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'White Nissan sedan after exterior detail in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgABUB8JZQAAvxWSTkZgAD7cpLpgNL5YeEJPrhBGbp6v5PKzdjU5A28gAAA',
    label: 'Exterior Detail',
  },
  {
    src: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-800w.webp',
    src800: '/images/mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01-800w.webp',
    alt: 'Mobile hand wash foam wash at customer driveway in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgABUB8JQBOgBtqji2ZAAD0b/IVAiPrtdEuqqll7jltWv2JMB/gjDt9U40Kor48FBYAAAA=',
    label: 'Hand Wash',
  },
  {
    src: '/images/wheel-tire-detail-truck-north-port-sansanich-car-detailing-01-800w.webp',
    src800: '/images/wheel-tire-detail-truck-north-port-sansanich-car-detailing-01-800w.webp',
    alt: 'Detailed black truck wheel and tire in North Port, FL',
    blur: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgABUB8JYwCw7DdrJcTAADifk236r2wGAdZRUgyqUo7a6+TKq8ix5OypAAA',
    label: 'Wheel & Tire',
  },
  {
    src: '/images/interior-detailing-after-suv-beige-leather-north-port-sansanich-01-800w.webp',
    src800: '/images/interior-detailing-after-suv-beige-leather-north-port-sansanich-01-800w.webp',
    alt: 'Nissan Murano beige leather interior after full interior detail in North Port, FL',
    blur: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAgABUB8JZwAAlr0kJFgAPOxl9KZdDmZg4a7Ba7wEF1QL+nClEgAAAA=',
    label: 'Leather Conditioning',
  },
];
