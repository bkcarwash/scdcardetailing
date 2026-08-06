// JSON-LD schema generators — all pull from siteConfig for NAP consistency.
// Every schema uses @id to anchor the business entity so Google Knowledge Graph
// can deduplicate across pages. See: schema.org/LocalBusiness

import {
  SITE_URL,
  NAP,
  HOURS,
  SOCIAL,
  RATINGS,
  GEO,
  CITIES,
  type Service,
  type FAQ,
} from './siteConfig';

// Stable entity IRI — used as the @id for the business on every page.
// Google uses this to merge all page-level mentions into one Knowledge Panel entity.
const BUSINESS_ID = `${SITE_URL}/#business`;

// Canonical logo entity
const LOGO_OBJECT = {
  '@type': 'ImageObject',
  '@id': `${SITE_URL}/#logo`,
  url: `${SITE_URL}/logo.webp`,
  contentUrl: `${SITE_URL}/logo.webp`,
  width: 480,
  height: 480,
  caption: NAP.name,
};

// ---------------------------------------------------------------------------
// LocalBusiness — injected in root layout, present on every page
// ---------------------------------------------------------------------------
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    '@id': BUSINESS_ID,

    // Core identity
    name: NAP.name,
    description:
      'Professional mobile and in-shop car detailing in North Port, FL and throughout Southwest Florida. Services include interior detailing, exterior detailing, ceramic coating, paint correction, headlight restoration, and more. Open 24 hours, 7 days a week.',
    url: SITE_URL,

    // Logo & images
    logo: LOGO_OBJECT,
    image: [
      `${SITE_URL}/logo.webp`,
      `${SITE_URL}/android-chrome-512x512.png`,
    ],

    // Contact
    telephone: NAP.phone,
    email: 'info@sansanichcardetailing.com',

    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.zip,
      addressCountry: NAP.address.country,
    },

    // Geographic coords
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },

    // Map link
    hasMap: `https://www.google.com/maps/search/Sansanich+Car+Detailing+4457+Langsom+Ln+North+Port+FL+34286`,

    // Hours — both string format (fast parsing) and spec format (rich results)
    openingHours: HOURS.openingHours,
    openingHoursSpecification: HOURS.daysOfWeek.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${day}`,
      opens: HOURS.opens,
      closes: HOURS.closes,
    })),

    // Pricing & payment
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',

    // Service area — all 11 cities
    areaServed: CITIES.map((city) => ({
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    })),

    // Vehicle types (keywords Google extracts for automotive entities)
    knowsAbout: [
      'Car Detailing',
      'Mobile Car Detailing',
      'Ceramic Coating',
      'Paint Correction',
      'Interior Detailing',
      'Exterior Detailing',
      'Auto Detailing',
      'Headlight Restoration',
    ],

    // Ratings
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(RATINGS.ratingValue),
      reviewCount: String(RATINGS.reviewCount),
      bestRating: String(RATINGS.bestRating),
      worstRating: String(RATINGS.worstRating),
    },

    // Cross-platform entity links — helps Google merge them into one entity
    sameAs: [
      SOCIAL.instagram,
      'https://www.google.com/maps/search/Sansanich+Car+Detailing+North+Port+FL',
    ],
  };
}

// ---------------------------------------------------------------------------
// Service — injected on /services/[slug] pages
// ---------------------------------------------------------------------------
export function buildServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.name,
    description: service.longDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: NAP.name,
      telephone: NAP.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: NAP.address.street,
        addressLocality: NAP.address.city,
        addressRegion: NAP.address.state,
        postalCode: NAP.address.zip,
        addressCountry: NAP.address.country,
      },
    },
    areaServed: CITIES.map((city) => ({
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    })),
    offers: {
      '@type': 'Offer',
      price: service.priceRange.replace('Starting at $', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: service.priceRange,
    },
  };
}

// ---------------------------------------------------------------------------
// FAQPage schema
// ---------------------------------------------------------------------------
export function buildFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList schema
// ---------------------------------------------------------------------------
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// HowTo schema — injected on service detail pages
// ---------------------------------------------------------------------------
export function buildHowToSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/services/${service.slug}#howto`,
    name: `How ${service.name} Works at Sansanich Car Detailing`,
    description: service.longDescription,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: service.priceRange.replace('Starting at $', ''),
    },
    totalTime: `PT${service.duration.replace(/[^0-9]/g, '')}H`,
    step: service.howTo.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.step,
      text: s.description,
    })),
  };
}

// ---------------------------------------------------------------------------
// WebSite schema — for sitelinks search box eligibility
// ---------------------------------------------------------------------------
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: NAP.name,
    description:
      'Professional mobile & in-shop car detailing in North Port, FL and Southwest Florida.',
    publisher: {
      '@id': BUSINESS_ID,
    },
    inLanguage: 'en-US',
  };
}
