// JSON-LD schema generators — all pull from siteConfig for NAP consistency.

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

const BUSINESS_TYPES = ['LocalBusiness', 'AutomotiveBusiness'];

// Base LocalBusiness schema used on every page
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': BUSINESS_TYPES,
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
    openingHoursSpecification: HOURS.daysOfWeek.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${day}`,
      opens: HOURS.opens,
      closes: HOURS.closes,
    })),
    priceRange: '$$',
    areaServed: CITIES.map((city) => ({
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    })),
    sameAs: [SOCIAL.instagram],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATINGS.ratingValue,
      reviewCount: RATINGS.reviewCount,
      bestRating: RATINGS.bestRating,
      worstRating: RATINGS.worstRating,
    },
    image: `${SITE_URL}/og-image.jpg`,
  };
}

// Service schema for individual service pages
export function buildServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.longDescription,
    provider: {
      '@type': 'LocalBusiness',
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
    areaServed: CITIES.map((city) => `${city.name}, ${city.state}`),
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

// FAQ schema
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

// Breadcrumb schema
export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
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

// HowTo schema for service pages
export function buildHowToSchema(
  service: Service
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How ${service.name} Works`,
    description: service.longDescription,
    step: service.howTo.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.step,
      text: s.description,
    })),
  };
}
