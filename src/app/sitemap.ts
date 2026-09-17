import type { MetadataRoute } from 'next';
import { SITE_URL, SERVICE_SLUGS, CITY_SLUGS } from '@/lib/siteConfig';
import { getAllCityServiceParams } from '@/lib/cityServicePages';

// Real build date — NOT `new Date()`. A timestamp that changes every build
// signals to Googlebot that every page "changed" constantly, which dilutes
// crawl budget and signals. Bump this manually when content actually changes.
const LAST_MODIFIED = new Date('2026-08-06');

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages — ordered by SEO priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/reviews`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Service pages — high commercial intent, high priority
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Location pages — local SEO pages, near-equal to service pages
  const locationPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // City + service exact-match keyword pages
  const cityServicePages: MetadataRoute.Sitemap = getAllCityServiceParams().map(({ city, service }) => ({
    url: `${SITE_URL}/locations/${city}/${service}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...cityServicePages];
}
