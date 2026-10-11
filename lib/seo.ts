import type { Metadata } from 'next';

export const pageMetadata: Record<string, Metadata> = {};

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '21st Century Advertising Agency',
  description:
    'Outdoor advertising, institutional branding, printing, and fabrication agency in Odisha. Established 1992. 500+ owned media assets across all 30 districts.',
  foundingDate: '1992',
  email: 'anup67.satspaty@gmail.com',
  telephone: ['+91-9437069309', '+91-7978773672'],
  address: [
    {
      '@type': 'PostalAddress',
      name: 'Head Office',
      addressLocality: 'Berhampur',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
      streetAddress: 'Giri Road Main Road, Near Oriental Insurance Office, Berhampur, Ganjam, Odisha',
    },
    {
      '@type': 'PostalAddress',
      name: 'Branch Office',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
      streetAddress:
        'Sri Jagannath Enclave, B-2, Flat No. 206, Sailesh Bihar, Near Damana Hata, Bhubaneswar, Odisha',
    },
  ],
  areaServed: 'Odisha, India',
};

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '21st Century Advertising Agency',
  image: 'https://21stcenturyadvertising.in/og-image.jpg',
  '@id': 'https://21stcenturyadvertising.in',
  url: 'https://21stcenturyadvertising.in',
  telephone: '+91-9437069309',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berhampur',
    addressRegion: 'Odisha',
    addressCountry: 'IN',
    streetAddress: 'Giri Road Main Road, Near Oriental Insurance Office, Berhampur, Ganjam, Odisha',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.3149',
    longitude: '84.7936',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};
