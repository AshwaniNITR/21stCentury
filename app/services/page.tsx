import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ServiceSection } from '@/components/services/service-section';
import { CTASection } from '@/components/sections/cta-section';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services — Outdoor Advertising, Branding, Printing & Signage',
  description:
    'Outdoor advertising (OOH), institutional & bank branding, high-quality printing solutions, and custom fabrication & signage — all backed by in-house production across Odisha.',
  alternates: { canonical: '/services' },
};

const heroImage =
  'https://images.pexels.com/photos/32459947/pexels-photo-32459947.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Four capabilities. One partner."
        description="From highway hoardings to bank facades, every service is backed by in-house production and a 30-district network across Odisha."
        image={heroImage}
        alt="Vibrant city view with modern architecture and advertisement signs"
      >
        <Breadcrumbs
          theme="dark"
          items={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        />
      </PageHero>

      {/* Services Overview */}
      <section className="bg-brand-warm-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Full-service outdoor media, branding, and production.</>}
            description="Each service below is a core capability of 21st Century Advertising Agency — not an outsourced offering. Explore the details, then reach out to discuss your specific requirement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex flex-col gap-3 border-t-2 border-brand-orange bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <span className="font-display text-3xl font-extrabold text-brand-orange/20">
                  {service.number}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray">
                  {service.shortDescription}
                </p>
                <span className="mt-auto pt-3 text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Jump to section →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <div className="bg-brand-warm-white">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* CTA */}
      <CTASection
        headline="Ready to start your next project?"
        description="Whether it's a single hoarding or a statewide campaign, our team is ready to help."
        primaryCta={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCta={{ label: 'View Our Infrastructure', href: '/infrastructure' }}
      />
    </>
  );
}
