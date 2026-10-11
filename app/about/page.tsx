import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { ImageReveal } from '@/components/motion/image-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { PrimaryButton } from '@/components/ui/primary-button';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { DISTRICTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us — 21st Century Advertising Agency',
  description:
    'Established in 1992, 21st Century Advertising Agency has grown from a local signage house into a Pan-Odisha advertising and branding network with owned media and in-house production.',
  alternates: { canonical: '/about' },
};

const heroImage =
  'https://images.pexels.com/photos/2371910/pexels-photo-2371910.jpeg?auto=compress&cs=tinysrgb&w=1920';
const storyImage =
  'https://images.pexels.com/photos/16695395/pexels-photo-16695395.jpeg?auto=compress&cs=tinysrgb&w=1200';

const timeline = [
  {
    year: '1992',
    title: 'The Beginning',
    description:
      'Founded as a local signage business in Berhampur, Odisha — focused on quality craftsmanship and reliable delivery.',
  },
  {
    year: 'Growth',
    title: 'Building the Network',
    description:
      'Expanded across Odisha, acquiring owned media assets and building a network of hoardings on highways and at major junctions.',
  },
  {
    year: 'Capability',
    title: 'In-House Production',
    description:
      'Invested in high-resolution solvent and eco-solvent printing machines and a fabrication workshop — bringing production in-house.',
  },
  {
    year: 'Today',
    title: 'Pan-Odisha Presence',
    description:
      '500+ owned outdoor media assets, coverage across all 30 districts of Odisha, and a client base spanning government, banks, and institutions.',
  },
];

const approaches = [
  {
    title: 'Owned Media Infrastructure',
    description: '500+ owned hoardings across Odisha give us direct control over placement and availability.',
    icon: 'Network',
  },
  {
    title: 'In-House Production',
    description: 'Printing, fabrication, and signage manufacturing under one roof — no vendor dependencies.',
    icon: 'Factory',
  },
  {
    title: 'Quality Control',
    description: 'Every stage of production is supervised in-house, ensuring consistent institutional-grade results.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Timely Execution',
    description: 'Direct control over scheduling and logistics enables reliable delivery across districts.',
    icon: 'Clock',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on experience. Driven by visibility."
        description="From a local signage house to a Pan-Odisha advertising and branding network — three decades of making brands impossible to miss."
        image={heroImage}
        alt="Billboard structure standing on a rural road under a clear sky"
      >
        <Breadcrumbs
          theme="dark"
          items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        />
      </PageHero>

      {/* Company Story */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title={<>From signage to statewide visibility.</>}
                description="Established in 1992, 21st Century Advertising Agency began as a local signage business in Berhampur, Odisha. Over the years, the company evolved into a Pan-Odisha advertising and branding network — combining owned media infrastructure with in-house production capabilities."
              />
              <ScrollReveal delay={0.15}>
                <p className="mt-5 text-base leading-relaxed text-brand-gray">
                  Today, we serve government departments, banks, and institutions across the state — delivering outdoor advertising, institutional branding, high-quality printing, and custom fabrication from our Berhampur and Bhubaneswar offices.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <ImageReveal
                src={storyImage}
                alt="Tall billboard structure against a cloudy sky"
                aspectRatio="aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Our Journey"
            title={<>Three decades of evolution.</>}
            theme="dark"
            align="center"
          />
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 h-full w-px bg-white/10" />
                  <div className="absolute -left-[18px] top-0 h-3 w-3 bg-brand-orange" />
                  <span className="font-display text-2xl font-extrabold text-brand-orange">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Full-service outdoor media & branding.</>}
            description="Four core capabilities, each backed by in-house infrastructure and a 30-district network."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Outdoor Media', desc: '500+ owned hoardings, unipoles, pole kiosks, and wall paintings across Odisha.' },
              { title: 'Institutional Branding', desc: 'Complete facade, ATM, and interior branding for banks and institutions.' },
              { title: 'Printing', desc: 'In-house solvent and eco-solvent printing across flex, vinyl, and specialty media.' },
              { title: 'Fabrication & Signage', desc: 'Custom facade boards, glow signboards, ACP cladding, and acrylic LED lettering.' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="border-t-2 border-brand-orange bg-white p-6">
                  <h3 className="font-display text-lg font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-brand-dark grain py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Our Approach"
            title={<>Why institutions trust us.</>}
            description="We do not outsource what matters most. Every critical capability is owned, managed, and supervised in-house."
            theme="dark"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approaches.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-orange/40">
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="border-l-4 border-brand-orange bg-white p-8 md:p-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">Vision</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-brand-navy md:text-3xl text-balance">
                  To be Odisha's most trusted and visible brand communication partner.
                </h3>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border-l-4 border-brand-navy bg-white p-8 md:p-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">Mission</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-brand-navy md:text-3xl text-balance">
                  To deliver maximum visibility, durable quality, and timely execution through owned media and in-house technology.
                </h3>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Geographical Reach */}
      <section className="bg-brand-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Geographical Reach"
            title={<>All 30 districts of Odisha.</>}
            description="With offices in Berhampur and Bhubaneswar, our network covers every district in the state — from coastal plains to northern highlands."
            theme="dark"
            align="center"
          />
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              {DISTRICTS.map((district, index) => (
                <ScrollReveal key={district} delay={index * 0.02}>
                  <span className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:border-brand-orange hover:text-white">
                    <span className="h-1.5 w-1.5 bg-brand-orange" />
                    {district}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Want to discuss your requirements?"
        description="Tell us about your advertising, branding, or signage project — our team is ready to help."
        primaryCta={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCta={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  );
}
