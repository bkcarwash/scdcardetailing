import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { NAP, SITE_URL, RATINGS } from '@/lib/siteConfig';
import { buildLocalBusinessSchema } from '@/lib/schema';

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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sansanich Car Detailing — Premium Mobile Auto Detailing in North Port, FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sansanich Car Detailing | North Port, FL',
    description:
      'Mobile & in-shop car detailing. 5.0★ rated. Open 24 hours. Serving North Port & all of Southwest Florida.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const schema = buildLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Global JSON-LD LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* GTM placeholder — replace GTM-XXXXXX with real ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXX');` }} /> */}
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
