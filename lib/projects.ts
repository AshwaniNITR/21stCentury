export interface ProjectCaseStudyData {
  slug: string;
  title: string;
  client: string;
  overview: string;
  scope: string[];
  coverage: string;
  approach: string;
  assessment: string;
  image: string;
  alt: string;
  category: string;
}

export const featuredProject: ProjectCaseStudyData = {
  slug: 'government-scheme-hoardings-odisha',
  title: 'Government Scheme Hoardings Across Odisha',
  client: 'Information & Public Relations Department, Government of Odisha',
  overview:
    'Display of government scheme hoardings at different locations across all 30 districts of Odisha, ensuring consistent visibility for public welfare programmes across urban and rural areas.',
  scope: [
    'Strategic placement of government scheme hoardings',
    'Coverage across all 30 districts of Odisha',
    'Installation at high-visibility urban and rural locations',
    'Quality-controlled production and timely execution',
  ],
  coverage:
    'All 30 districts of Odisha — from major urban centres to rural junctions.',
  approach:
    'The project required coordinated production and installation across a vast geographical area. Our owned media infrastructure and in-house printing capabilities enabled consistent quality across every location, regardless of distance from our production base.',
  assessment:
    'Workmanship and quality were found highly satisfactory, and the project was completed within the stipulated time.',
  image:
    'https://images.pexels.com/photos/13795730/pexels-photo-13795730.jpeg?auto=compress&cs=tinysrgb&w=1600',
  alt: 'Highway in India at night with traffic and infrastructure',
  category: 'Government Campaign',
};

export const serviceExamples = [
  {
    title: 'Bank Facade & ATM Branding',
    description:
      'Complete exterior branding for bank branches and ATM kiosks — including facade boards, LED lettering, and vinyl wraps.',
    image:
      'https://images.pexels.com/photos/9218590/pexels-photo-9218590.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Bank building with illuminated facade lighting at night',
    category: 'Institutional Branding',
  },
  {
    title: 'Large-Format Printing',
    description:
      'In-house solvent and eco-solvent printing for flex, vinyl, and backlit film — produced to institutional quality standards.',
    image:
      'https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Professional printing machine producing custom artwork',
    category: 'Printing',
  },
  {
    title: 'Highway Hoarding Network',
    description:
      'Strategically positioned hoardings along national and state highways across Odisha for maximum visibility.',
    image:
      'https://images.pexels.com/photos/4036764/pexels-photo-4036764.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Billboard display along a road at night',
    category: 'Outdoor Advertising',
  },
];
