import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { ContactForm } from '@/components/contact/contact-form';
import { SITE } from '@/lib/constants';
import { Mail, Phone, MapPin, MessageCircle, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — Start a Conversation',
  description:
    'Contact 21st Century Advertising Agency for outdoor advertising, institutional branding, printing, and signage projects across Odisha. Offices in Berhampur and Bhubaneswar.',
  alternates: { canonical: '/contact' },
};

const heroImage =
  'https://images.pexels.com/photos/14780175/pexels-photo-14780175.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's make your next campaign count."
        description="Tell us about your advertising, printing, signage, or institutional branding requirement. Our team will help you discuss the next steps."
        image={heroImage}
        alt="Vibrant city street at night with traffic lights and light trails"
      >
        <Breadcrumbs
          theme="dark"
          items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />
      </PageHero>

      {/* Contact Form + Info */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            {/* Form */}
            <div>
              <SectionHeading
                eyebrow="Inquiry Form"
                title={<>Send us a message.</>}
                description="Fill out the form below with your project details. Fields marked with * are required."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy">
                    Direct Contact
                  </h3>
                  <div className="mt-5 space-y-4">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="group flex items-start gap-3 text-sm text-brand-navy transition-colors hover:text-brand-orange"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.5} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Email</p>
                        <p className="mt-0.5 break-all">{SITE.email}</p>
                      </div>
                    </a>
                    {SITE.phones.map((phone, i) => (
                      <a
                        key={phone}
                        href={`tel:+91${phone}`}
                        className="group flex items-start gap-3 text-sm text-brand-navy transition-colors hover:text-brand-orange"
                      >
                        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.5} />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
                            Phone {SITE.phones.length > 1 ? i + 1 : ''}
                          </p>
                          <p className="mt-0.5">+91 {phone}</p>
                        </div>
                      </a>
                    ))}
                    {SITE.whatsapp.map((wa, i) => (
                      <a
                        key={wa}
                        href={`https://wa.me/${wa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange"
                      >
                        <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                        WhatsApp +91 {SITE.phones[i]}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="border-t border-brand-navy/10 pt-6">
                  <h3 className="font-display text-lg font-bold text-brand-navy">
                    Office Locations
                  </h3>
                  <div className="mt-5 space-y-5">
                    {/* Head Office */}
                    <div className="flex items-start gap-3">
                      <Building className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.5} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
                          {SITE.offices.head.label} — {SITE.offices.head.city}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-navy">
                          {SITE.offices.head.address}
                        </p>
                      </div>
                    </div>
                    {/* Branch Office */}
                    <div className="flex items-start gap-3">
                      <Building className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.5} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
                          {SITE.offices.branch.label} — {SITE.offices.branch.city}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-navy">
                          {SITE.offices.branch.address}
                        </p>
                      </div>
                    </div>
                    {/* Registered Office */}
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" strokeWidth={1.5} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
                          {SITE.offices.registered.label} — {SITE.offices.registered.city}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-navy">
                          {SITE.offices.registered.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="border-t border-brand-navy/10 pt-6">
                  <div className="bg-brand-navy p-6">
                    <p className="text-sm font-semibold text-white">
                      Established 1992 · 500+ Owned Media Assets · All 30 Districts of Odisha
                    </p>
                    <p className="mt-2 text-xs text-white/50">
                      We respond to inquiries within 1-2 business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Prefer to talk directly?"
        description="Call our team or send a WhatsApp message — we're happy to discuss your project in detail."
        primaryCta={{ label: `Call ${SITE.phones[0]}`, href: `tel:+91${SITE.phones[0]}` }}
        secondaryCta={{ label: 'WhatsApp Us', href: `https://wa.me/${SITE.whatsapp[0]}` }}
      />
    </>
  );
}
