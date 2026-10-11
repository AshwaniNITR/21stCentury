import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { ImageReveal } from '@/components/motion/image-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { infrastructureCapabilities, inHouseAdvantages } from '@/lib/services';
import { ShieldCheck, Layers, TrendingDown, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Infrastructure & Capabilities — Owned Media & In-House Production',
  description:
    '500+ owned outdoor media assets, in-house solvent and eco-solvent printing, and a fabrication workshop in Berhampur — built to produce and equipped to deliver.',
  alternates: { canonical: '/infrastructure' },
};

const heroImage =
  'https://images.pexels.com/photos/6416204/pexels-photo-6416204.jpeg?auto=compress&cs=tinysrgb&w=1920';

const advantageIcons = { ShieldCheck, Layers, TrendingDown, Zap };

const mediaTypes = [
  'Flex',
  'Vinyl',
  'Backlit film',
  'One-way vision',
  'Reflective media',
];

const hoardingLocations = [
  'National highways',
  'State highways',
  'Major junctions',
  'High-footfall commercial zones',
  'Eastern and Southern Odisha',
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure & Capabilities"
        title="Built to produce. Equipped to deliver."
        description="Owned media assets, in-house printing, and a fabrication workshop — the infrastructure that differentiates us from agencies that outsource."
        image={heroImage}
        alt="Concrete elevated roadways over highway between greenery"
      >
        <Breadcrumbs
          theme="dark"
          items={[{ label: 'Home', href: '/' }, { label: 'Infrastructure' }]}
        />
      </PageHero>

      {/* Section 1: Owned Media Network */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Owned Media Network"
                title={<>500+ premium hoardings across Odisha.</>}
                description="Our owned outdoor media network is positioned for maximum visibility — on highways, at junctions, and in commercial zones where your audience travels and gathers."
              />
              <ScrollReveal delay={0.1}>
                <div className="mt-8 space-y-3">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-navy">Strategically located at:</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {hoardingLocations.map((loc) => (
                      <li key={loc} className="flex items-start gap-2.5 text-sm text-brand-navy">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand-orange" />
                        {loc}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-6 text-sm leading-relaxed text-brand-gray">
                  Our service capability extends across all 30 districts of Odisha, with a concentration in Eastern and Southern Odisha where our production base is located.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid gap-4">
              <ScrollReveal>
                <ImageReveal
                  src="https://images.pexels.com/photos/2371916/pexels-photo-2371916.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Billboard frame standing against a clear blue sky"
                  aspectRatio="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <ScrollReveal delay={0.08}>
                  <ImageReveal
                    src="https://images.pexels.com/photos/8655746/pexels-photo-8655746.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blank billboard in a cityscape"
                    aspectRatio="aspect-square"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <ImageReveal
                    src="https://images.pexels.com/photos/36519146/pexels-photo-36519146.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Empty billboard on a street with yellow frame"
                    aspectRatio="aspect-square"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Advanced Printing Division */}
      <section className="bg-brand-dark grain py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <ImageReveal
                src="https://images.pexels.com/photos/17536002/pexels-photo-17536002.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Close-up of ink cartridges inside a digital inkjet printer"
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
            <div>
              <SectionHeading
                eyebrow="Advanced Printing Division"
                title={<>In-house solvent & eco-solvent printing.</>}
                description="Our printing division operates high-resolution solvent and eco-solvent machines — giving us complete control over output quality, colour accuracy, and turnaround time."
                theme="dark"
              />
              <ScrollReveal delay={0.1}>
                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-orange">Supported Media</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {mediaTypes.map((media) => (
                      <span
                        key={media}
                        className="border border-white/15 px-4 py-2 text-sm text-white/70"
                      >
                        {media}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-6 space-y-2 text-sm leading-relaxed text-white/60">
                  <p>Our printing process delivers high-definition output with weather resistance, UV resistance, and long-term durability — using environmentally compliant eco-solvent inks where applicable.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Fabrication Workshop */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Fabrication Workshop"
                title={<>Precision metal & signage fabrication in Berhampur.</>}
                description="Our Berhampur fabrication workshop produces facade boards, internal and external glow signage, ACP cladding, acrylic LED lettering, and ATM branding — built for Indian outdoor conditions."
              />
              <ScrollReveal delay={0.1}>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {[
                    'Facade boards',
                    'Internal & external glow signage',
                    'ACP cladding',
                    'Acrylic LED lettering',
                    'ATM branding',
                    'Custom structural fabrication',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-brand-navy">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <ImageReveal
                  src="https://images.pexels.com/photos/5845980/pexels-photo-5845980.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Welder working with sparks in an industrial workshop"
                  aspectRatio="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why In-House Technology Matters */}
      <section className="bg-brand-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Why It Matters"
            title={<>The advantage of in-house technology.</>}
            description="Owning production infrastructure isn't just about cost — it's about control, consistency, and reliability."
            theme="dark"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {inHouseAdvantages.map((adv, index) => {
              const Icon = advantageIcons[adv.icon as keyof typeof advantageIcons];
              return (
                <ScrollReveal key={adv.title} delay={index * 0.08}>
                  <div className="h-full border border-white/10 bg-white/5 p-8 transition-colors hover:border-brand-orange/40">
                    {Icon && <Icon className="h-8 w-8 text-brand-orange" strokeWidth={1.5} />}
                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {adv.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {adv.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability Grid */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Capability Overview"
            title={<>A closer look at our equipment.</>}
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infrastructureCapabilities.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 0.08}>
                <div className="group">
                  <ImageReveal
                    src={cap.image}
                    alt={cap.alt}
                    aspectRatio="aspect-square"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Built to produce. Equipped to deliver."
        description="See how our in-house infrastructure can support your next campaign or branding project."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'View Our Credentials', href: '/credentials' }}
      />
    </>
  );
}
