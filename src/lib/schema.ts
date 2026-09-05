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
  SERVICES,
  MAPS,
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
    alternateName: NAP.shortName,
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

    // Map link — points directly to verified GMB listing
    hasMap: MAPS.placeUrl,

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

    // Cross-platform entity links — helps Google merge them into one Knowledge Panel entity
    sameAs: [
      SOCIAL.instagram,
      MAPS.placeUrl,
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
// Home page schema — LocalBusiness with makesOffer + hasOfferCatalog
// Extends the base entity with service offerings for rich home page markup.
// ---------------------------------------------------------------------------
export function buildHomePageSchema() {
  const offerCatalog = {
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/#services`,
    name: 'Car Detailing Services — Sansanich Car Detailing',
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}/services/${s.slug}#service`,
        name: s.name,
        description: s.shortDescription,
        url: `${SITE_URL}/services/${s.slug}`,
      },
      price: s.priceRange.replace('Starting at $', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: s.priceRange,
      areaServed: CITIES.map((city) => ({
        '@type': 'City',
        name: `${city.name}, ${city.state}`,
      })),
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    '@id': BUSINESS_ID,
    name: NAP.name,
    url: SITE_URL,
    telephone: NAP.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.zip,
      addressCountry: NAP.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(RATINGS.ratingValue),
      reviewCount: String(RATINGS.reviewCount),
      bestRating: String(RATINGS.bestRating),
      worstRating: String(RATINGS.worstRating),
    },
    hasOfferCatalog: offerCatalog,
    makesOffer: offerCatalog.itemListElement,
  };
}

// ---------------------------------------------------------------------------
// SpeakableSpecification — signals content relevant for Google Assistant / AIO
// ---------------------------------------------------------------------------
export function buildSpeakableSchema(pageUrl: string, cssSelectors: string[] = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors.length > 0 ? cssSelectors : ['h1', '.quick-answer', '[data-speakable]'],
    },
  };
}

// ---------------------------------------------------------------------------
// ItemList schema — for locations overview and services overview pages
// ---------------------------------------------------------------------------
export function buildItemListSchema(items: { name: string; url: string; description: string }[], listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

// ---------------------------------------------------------------------------
// ContactPage schema — signals phone number as primary action for AI/voice
// ---------------------------------------------------------------------------
export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#contactpage`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${NAP.name}`,
    description: `Call, text, or message ${NAP.name} for a free quote on mobile or in-shop car detailing in Southwest Florida.`,
    mainEntity: {
      '@type': ['LocalBusiness', 'AutomotiveBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: NAP.name,
      telephone: NAP.phone,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: NAP.phone,
          contactType: 'customer service',
          contactOption: ['TollFree', 'HearingImpairedSupported'],
          areaServed: 'US-FL',
          availableLanguage: 'English',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            opens: '00:00',
            closes: '23:59',
            dayOfWeek: HOURS.daysOfWeek,
          },
        },
        {
          '@type': 'ContactPoint',
          telephone: NAP.phone,
          contactType: 'reservations',
          availableLanguage: 'English',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            opens: '00:00',
            closes: '23:59',
            dayOfWeek: HOURS.daysOfWeek,
          },
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: NAP.address.street,
        addressLocality: NAP.address.city,
        addressRegion: NAP.address.state,
        postalCode: NAP.address.zip,
        addressCountry: NAP.address.country,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// Organization schema — for /about page entity reinforcement
// ---------------------------------------------------------------------------
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: NAP.name,
    legalName: NAP.name,
    alternateName: NAP.shortName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.webp`,
      width: 480,
      height: 480,
    },
    description:
      'Sansanich Car Detailing is a professional mobile and in-shop automotive detailing company based in North Port, Florida. The business serves 11 cities across Southwest Florida with ceramic coating, paint correction, interior detailing, exterior detailing, and more. Open 24 hours, 7 days a week. 5.0-star Google rated.',
    telephone: NAP.phone,
    email: 'info@sansanichcardetailing.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.zip,
      addressCountry: NAP.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'North Port, Florida',
    },
    areaServed: CITIES.map((city) => ({
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    })),
    knowsAbout: [
      'Car Detailing',
      'Mobile Car Detailing',
      'Ceramic Coating',
      'Paint Correction',
      'Interior Detailing',
      'Exterior Detailing',
      'Headlight Restoration',
      'Engine Bay Cleaning',
      'Auto Detailing',
      'Paint Protection',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(RATINGS.ratingValue),
      reviewCount: String(RATINGS.reviewCount),
      bestRating: String(RATINGS.bestRating),
    },
    sameAs: [
      SOCIAL.instagram,
      MAPS.placeUrl,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: NAP.phone,
      contactType: 'customer service',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        opens: '00:00',
        closes: '23:59',
        dayOfWeek: HOURS.daysOfWeek,
      },
    },
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
    alternateName: NAP.shortName,
    description:
      'Professional mobile & in-shop car detailing in North Port, FL and Southwest Florida.',
    publisher: {
      '@id': BUSINESS_ID,
    },
    inLanguage: 'en-US',
  };
}
