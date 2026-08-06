import { SITE_URL, SERVICE_SLUGS } from '@/lib/siteConfig';
import { GALLERY_IMAGES, SERVICE_IMAGES, HERO_HOME, HERO_SERVICES, ABOUT_MOBILE_IMAGE } from '@/lib/images';

const GEO = 'North Port, Florida, United States';

type ImageEntry = { loc: string; title: string; caption: string };
type UrlEntry = { page: string; images: ImageEntry[] };

function img(slug: string, alt: string, title?: string): ImageEntry {
  return {
    loc: `${SITE_URL}/images/${slug}`,
    title: title ?? alt.slice(0, 100),
    caption: alt,
  };
}

function xml(entries: UrlEntry[]): string {
  const urls = entries
    .map(({ page, images }) => {
      const imgTags = images
        .map(
          (i) =>
            `    <image:image>\n      <image:loc>${i.loc}</image:loc>\n      <image:title>${i.title}</image:title>\n      <image:caption>${i.caption}</image:caption>\n      <image:geo_location>${GEO}</image:geo_location>\n    </image:image>`,
        )
        .join('\n');
      return `  <url>\n    <loc>${SITE_URL}${page}</loc>\n${imgTags}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>`;
}

export function GET() {
  const heroSlug = HERO_HOME.src.replace('/images/', '');
  const servicesSlug = HERO_SERVICES.src.replace('/images/', '');
  const mobileSlug = ABOUT_MOBILE_IMAGE.src.replace('/images/', '');

  const entries: UrlEntry[] = [
    // Homepage
    {
      page: '/',
      images: [img(heroSlug, HERO_HOME.alt, 'Sansanich Car Detailing — North Port, FL')],
    },
    // Gallery — all images
    {
      page: '/gallery',
      images: GALLERY_IMAGES.map((g) => img(g.src.replace('/images/', ''), g.alt)),
    },
    // About
    {
      page: '/about',
      images: [img(mobileSlug, ABOUT_MOBILE_IMAGE.alt)],
    },
    // Services overview
    {
      page: '/services',
      images: [img(servicesSlug, HERO_SERVICES.alt)],
    },
    // Individual service pages
    ...SERVICE_SLUGS.filter((slug) => SERVICE_IMAGES[slug]).map((slug) => ({
      page: `/services/${slug}`,
      images: [img(SERVICE_IMAGES[slug].src.replace('/images/', ''), SERVICE_IMAGES[slug].alt)],
    })),
  ];

  return new Response(xml(entries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
