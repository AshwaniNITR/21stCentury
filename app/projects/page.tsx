import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { ImageReveal } from '@/components/motion/image-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PrimaryButton } from '@/components/ui/primary-button';
import { featuredProject, serviceExamples } from '@/lib/projects';
import { MapPin, CheckCircle2, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Experience — Case Studies & Service Examples',
  description:
    'Government scheme hoardings across all 30 districts of Odisha for the I&PR Department, Government of Odisha — plus service examples across outdoor advertising, branding, and printing.',
  alternates: { canonical: '/projects' },
};

const heroImage =
  'https://images.pexels.com/photos/11718450/pexels-photo-11718450.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Experience"
        title="Documented work. Real results."
        description="Our portfolio is grounded in verified projects from the company profile — presented honestly, without fabricated outcomes or invented clients."
        image={heroImage}
        alt="Long exposure light trails on a highway at night"
      >
        <Breadcrumbs
          theme="dark"
          items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        />
      </PageHero>

      {/* Featured Project — Case Study */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              <span className="h-px w-8 bg-brand-orange" />
              Featured Case Study
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-sm text-brand-navy text-balance">
              {featuredProject.title}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <ScrollReveal>
              <ImageReveal
                src={featuredProject.image}
                alt={featuredProject.alt}
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>

            {/* Details */}
            <div className="flex flex-col gap-8">
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Client</p>
                  <p className="mt-2 text-lg font-semibold text-brand-navy">
                    {featuredProject.client}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Project Overview</p>
                  <p className="mt-2 text-base leading-relaxed text-brand-gray">
                    {featuredProject.overview}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Scope of Work</p>
                  <ul className="mt-3 space-y-2">
                    {featuredProject.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-brand-navy">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Geographical Coverage</p>
                  <p className="mt-2 flex items-center gap-2 text-base text-brand-navy">
                    <MapPin className="h-4 w-4 text-brand-orange" strokeWidth={2} />
                    {featuredProject.coverage}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Execution Approach & Assessment */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="h-full border-l-4 border-brand-navy bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-navy">Execution Approach</p>
                <p className="mt-3 text-base leading-relaxed text-brand-gray">
                  {featuredProject.approach}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-full border-l-4 border-brand-orange bg-white p-8">
                <Quote className="h-8 w-8 text-brand-orange/30" strokeWidth={1.5} />
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-brand-orange">Client's Stated Assessment</p>
                <p className="mt-3 text-lg font-semibold leading-relaxed text-brand-navy text-balance">
                  &ldquo;{featuredProject.assessment}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-xs text-brand-gray">
              We do not publish project dates, budgets, media impressions, or independently verified testimonials beyond what is stated in the company profile.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Examples */}
      <section className="bg-brand-dark grain py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Service Examples"
            title={<>Capabilities in action.</>}
            description="The following examples illustrate the types of work we deliver. These are representative service categories — ready to be replaced with client-approved project images."
            theme="dark"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {serviceExamples.map((example, index) => (
              <ScrollReveal key={example.title} delay={index * 0.1}>
                <div className="group">
                  <ImageReveal
                    src={example.image}
                    alt={example.alt}
                    aspectRatio="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="mt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {example.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-white">
                      {example.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {example.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-xs text-white/40">
              These images are representative stock photographs. They can be replaced with actual client-approved project photographs as they become available.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Have a similar requirement?"
        description="Whether it's a government campaign, bank branding, or a custom signage project — we'd like to hear about it."
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'Explore Our Services', href: '/services' }}
      />
    </>
  );
}
