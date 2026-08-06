import type { Metadata, Viewport } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { NAP, SITE_URL, RATINGS, GEO } from '@/lib/siteConfig';
import { buildLocalBusinessSchema, buildWebSiteSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sansanich Car Detailing | North Port, FL | Mobile & In-Shop',
    template: '%s | Sansanich Car Detailing',
  },
  description:
    `Professional mobile and in-shop car detailing in North Port, FL. Interior, exterior, ceramic coating, paint correction & more. 5.0★ rated. Open 24 hours. Serving Port Charlotte, Venice, Sarasota & all of Southwest Florida. Call ${NAP.phoneDisplay}.`,
  keywords: [
    'car detailing North Port FL',
    'mobile car detailing North Port',
    'ceramic coating North Port FL',
    'paint correction Florida',
    'auto detailing Southwest Florida',
    'interior detailing North Port',
    'exterior detailing Florida',
  ],
  verification: {
    google: 'l-y1kfICGoZPY1L5ljiujI6Qz30kDGmJ_4ezb1rg5YM',
  },
  authors: [{ name: NAP.name }],
  creator: NAP.name,
  publisher: NAP.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: NAP.name,
    title: 'Sansanich Car Detailing | 5★ Mobile & In-Shop | North Port, FL',
    description:
      `Mobile & in-shop car detailing in North Port, FL and surrounding areas. 5.0★ / ${RATINGS.reviewCount} reviews. Open 24 hours. Ceramic coating, paint correction & more.`,
    images: [
      {
        // Square logo works for all OG card types; replace with a 1200×630
        // hero image when available for richer link previews.
        url: '/logo.webp',
        width: 480,
        height: 480,
        alt: `${NAP.name} — Premium Mobile Auto Detailing in North Port, FL`,
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Sansanich Car Detailing | North Port, FL',
    description:
      'Mobile & in-shop car detailing. 5.0★ rated. Open 24 hours. Serving North Port & all of Southwest Florida.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  // favicon.ico in /src/app/ is served automatically by Next.js App Router.
  // We declare the PNG variants here so browsers & crawlers see them all.
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
};

// Viewport / theme-color exported separately per Next.js App Router convention
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#d4a93a' },
    { media: '(prefers-color-scheme: light)', color: '#d4a93a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const webSiteSchema = buildWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <head>
        {/* DNS prefetch + preconnect for Google Fonts CDN */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload the logo — prevents LCP penalty since it appears in the header */}
        <link
          rel="preload"
          as="image"
          href="/logo.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Geo meta tags — local SEO signal for North Port, FL */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port, Florida" />
        <meta name="geo.position" content={`${GEO.latitude};${GEO.longitude}`} />
        <meta name="ICBM" content={`${GEO.latitude}, ${GEO.longitude}`} />

        {/* GTM placeholder — replace GTM-XXXXXX with real ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');` }} /> */}

        {/* JSON-LD — LocalBusiness entity (every page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* JSON-LD — WebSite entity (sitelinks search box eligibility) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="bg-[#080808] text-[#f2f2f2] antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        {/* Skip to main content for keyboard/screen reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
