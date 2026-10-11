export const SITE = {
  name: '21st Century Advertising Agency',
  shortName: '21st Century',
  tagline: 'Advertising Agency',
  established: '1992',
  url: 'https://21stcenturyadvertising.in',
  description:
    'Making brands impossible to miss. Outdoor advertising, institutional branding, printing, and fabrication across all 30 districts of Odisha since 1992.',
  offices: {
    head: {
      city: 'Berhampur',
      label: 'Head Office',
      address:
        'Giri Road Main Road, Near Oriental Insurance Office, Berhampur, Ganjam, Odisha',
    },
    branch: {
      city: 'Bhubaneswar',
      label: 'Branch Office',
      address:
        'Sri Jagannath Enclave, B-2, Flat No. 206, Sailesh Bihar, Near Damana Hata, Bhubaneswar, Odisha',
    },
    registered: {
      city: 'Berhampur',
      label: 'Registered Office',
      address:
        'Giri Road, Ground Floor, Oriental Insurance Office, Near Geeta Bhawan, Berhampur-760005, Odisha',
    },
  },
  email: 'anup67.satspaty@gmail.com',
  phones: ['9437069309', '7978773672'],
  whatsapp: ['919437069309', '917978773672'],
  stats: [
    { value: 500, suffix: '+', label: 'Owned Outdoor Media Assets' },
    { value: 30, suffix: '', label: 'Districts of Odisha Covered' },
    { value: 1992, suffix: '', label: 'Year Established', isYear: true },
  ],
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

export const DISTRICTS = [
  'Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh',
  'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur',
  'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar',
  'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh',
  'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh',
] as const;
