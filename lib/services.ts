export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  items: string[];
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: 'outdoor-advertising',
    number: '01',
    title: 'Outdoor Advertising (OOH)',
    shortDescription:
      'High-impact outdoor visibility through a network of owned hoardings across Odisha.',
    description:
      'Maximise your brand visibility through strategically placed outdoor advertising across Odisha. Our owned media network spans national highways, state highways, major junctions, and high-footfall commercial zones — giving your campaigns the reach and frequency they need.',
    image:
      'https://images.pexels.com/photos/37088016/pexels-photo-37088016.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Outdoor advertising billboard along a highway',
    icon: 'Megaphone',
    items: [
      'Outdoor hoarding campaigns',
      'Unipole and gantry displays',
      'Pole kiosk advertising',
      'Road median branding',
      'Wall painting',
      'Road direction signages',
    ],
  },
  {
    id: 'institutional-bank-branding',
    number: '02',
    title: 'Institutional & Bank Branding',
    shortDescription:
      'Complete facade and interior branding for banks, institutions, and government offices.',
    description:
      'Deliver a consistent, professional brand presence across all your branches and offices. From facade signage to interior vinyl branding, we handle every detail with precision — using weather-resistant materials and high-quality eco-solvent printing for lasting durability.',
    image:
      'https://images.pexels.com/photos/7260884/pexels-photo-7260884.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Bank building with illuminated signage on facade',
    icon: 'Building2',
    items: [
      'Complete front facade branding',
      'Non-lit boards',
      'Glow signboards',
      'Bank logo and name boards in Odia',
      'ACP panelling',
      'LED and acrylic lettering',
      'ATM interior and exterior branding',
      'Glass films',
      'Interior vinyl branding',
    ],
  },
  {
    id: 'high-quality-printing',
    number: '03',
    title: 'High-Quality Printing Solutions',
    shortDescription:
      'In-house solvent and eco-solvent printing for flex, vinyl, backlit film, and more.',
    description:
      'Our in-house printing division gives us complete control over quality and turnaround. Using high-resolution solvent and eco-solvent machines, we produce weather-resistant, UV-resistant output across a wide range of media — reducing dependence on third-party vendors and ensuring consistent results.',
    image:
      'https://images.pexels.com/photos/17536002/pexels-photo-17536002.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Close-up of industrial inkjet printing process',
    icon: 'Printer',
    items: [
      'High-resolution solvent printing',
      'Eco-solvent printing',
      'Flex printing',
      'Vinyl printing',
      'Backlit film printing',
      'One-way vision printing',
      'Reflective media printing',
    ],
  },
  {
    id: 'fabrication-signage',
    number: '04',
    title: 'Fabrication & Signage',
    shortDescription:
      'Custom fabrication of facade boards, glow signage, ACP cladding, and acrylic LED lettering.',
    description:
      'From our Berhampur fabrication workshop, we produce durable, precisely engineered signage built for Indian outdoor conditions. Our team handles everything from structural fabrication to final installation — ensuring each sign meets institutional quality standards.',
    image:
      'https://images.pexels.com/photos/1058113/pexels-photo-1058113.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Illuminated LED acrylic lettering on a building facade',
    icon: 'Hammer',
    items: [
      'Front facade non-lit boards',
      'Internal and external glow signboards',
      'ACP cladding with acrylic LED letters',
      'Bank logo and name boards in Odia',
      'ATM branding',
    ],
  },
];

export const infrastructureCapabilities = [
  {
    title: 'High-Resolution Solvent Printing',
    description:
      'Durable, weather-resistant output for long-term outdoor campaigns on flex and vinyl media.',
    image:
      'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Industrial solvent printing machine in operation',
  },
  {
    title: 'Eco-Solvent Printing',
    description:
      'High-definition, environmentally compliant output suitable for close-viewing applications.',
    image:
      'https://images.pexels.com/photos/20042071/pexels-photo-20042071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Roll of vinyl printing material in a print shop',
  },
  {
    title: 'Fabrication Workshop',
    description:
      'Structural fabrication for facade boards, unipoles, and custom signage — built to last.',
    image:
      'https://images.pexels.com/photos/5845980/pexels-photo-5845980.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Welder working in a metal fabrication workshop',
  },
  {
    title: 'Signage Manufacturing',
    description:
      'Precision production of glow signboards, ACP cladding, and acrylic LED lettering.',
    image:
      'https://images.pexels.com/photos/12944739/pexels-photo-12944739.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Illuminated signboard with LED backlighting',
  },
];

export const inHouseAdvantages = [
  {
    title: 'Better Quality Control',
    description:
      'Every stage of production — from printing to fabrication to installation — is managed in-house under direct supervision.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Reduced Third-Party Dependency',
    description:
      'Owning our printing and fabrication infrastructure means we do not rely on external vendors for critical milestones.',
    icon: 'Layers',
  },
  {
    title: 'Cost-Effectiveness',
    description:
      'In-house production eliminates vendor markups, delivering better value without compromising on quality.',
    icon: 'TrendingDown',
  },
  {
    title: 'Faster Turnaround',
    description:
      'Direct control over production scheduling enables tighter timelines and reliable delivery dates.',
    icon: 'Zap',
  },
];
