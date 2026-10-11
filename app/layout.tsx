import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { organizationStructuredData, localBusinessStructuredData } from '@/lib/seo';

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL = 'https://21stcenturyadvertising.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '21st Century Advertising Agency | Outdoor Media, Signage & Branding in Odisha',
    template: '%s | 21st Century Advertising Agency',
  },
  description:
    'Established in 1992. 500+ owned outdoor media assets across all 30 districts of Odisha. Outdoor advertising, institutional & bank branding, high-quality printing, and fabrication.',
  keywords: [
    'outdoor advertising Odisha',
    'hoardings Berhampur',
    'billboard advertising Bhubaneswar',
    'bank branding Odisha',
    'signage fabrication',
    'large format printing',
    'institutional branding India',
  ],
  authors: [{ name: '21st Century Advertising Agency' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: '21st Century Advertising Agency',
    title: '21st Century Advertising Agency | Outdoor Media, Signage & Branding in Odisha',
    description:
      'Making brands impossible to miss. Outdoor advertising, institutional branding, printing, and fabrication across all 30 districts of Odisha since 1992.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '21st Century Advertising Agency',
    description:
      'Outdoor media, signage & branding across Odisha since 1992.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
