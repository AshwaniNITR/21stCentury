import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { institutionalCredentials, statutoryCompliance, statusLabels } from '@/lib/credentials';
import { Landmark, Building2, FileText, CreditCard, Factory, Store, Users, FileCheck, MapPin, Receipt, ShieldCheck, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credentials & Compliance — Government, Banking & Institutional',
  description:
    'Credentials and compliance for 21st Century Advertising Agency — I&PR Department Government of Odisha, SBI, Odisha Grameen Bank, Canara Bank, GST, MSME, and statutory registrations.',
  alternates: { canonical: '/credentials' },
};

const heroImage =
  'https://images.pexels.com/photos/16760546/pexels-photo-16760546.jpeg?auto=compress&cs=tinysrgb&w=1920';

const credentialIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Landmark,
  Building2,
};

const complianceIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Receipt,
  Factory,
  CreditCard,
  FileText,
  Store,
  Users,
  FileCheck,
  MapPin,
};

const statusStyles = {
  confirmed: { dot: 'bg-green-500', label: 'text-green-400' },
  stated: { dot: 'bg-brand-orange', label: 'text-brand-orange' },
  pending: { dot: 'bg-yellow-500', label: 'text-yellow-400' },
};

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credentials & Compliance"
        title="Built for institutional trust."
        description="Our credentials, compliance registrations, and client engagements — presented accurately for government, banking, and corporate procurement teams."
        image={heroImage}
        alt="Historic bank facade with classic architectural columns"
      >
        <Breadcrumbs
          theme="dark"
          items={[{ label: 'Home', href: '/' }, { label: 'Credentials' }]}
        />
      </PageHero>

      {/* Section 1: Institutional Credentials */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Government & Institutional Engagements"
            title={<>Engagements and stated credentials.</>}
            description="The following information is drawn directly from the company profile. We distinguish confirmed engagements from applications or pending status — and do not overstate our credentials."
          />

          <div className="mt-14 space-y-6">
            {institutionalCredentials.map((cred, index) => {
              const Icon = credentialIcons[cred.icon] || Building2;
              const style = statusStyles[cred.status];
              return (
                <ScrollReveal key={cred.organization} delay={index * 0.08}>
                  <div className="grid gap-4 border-l-2 border-brand-navy/10 bg-white p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-navy text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-brand-navy">
                          {cred.organization}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                          {cred.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 md:flex-col md:items-end md:gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                      <span className={`text-xs font-bold uppercase tracking-wider ${style.label}`}>
                        {statusLabels[cred.status]}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 rounded-sm border-l-4 border-brand-orange bg-brand-orange/5 p-5">
              <p className="text-sm leading-relaxed text-brand-navy">
                <strong>Note:</strong> For the I&PR Department, Government of Odisha, the company profile states recognition / empanelment in connection with government advertisements and hoarding display. We do not claim a confirmed approval status beyond what is documented. Specific verification can be provided upon request.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Statutory Compliance */}
      <section className="bg-brand-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Statutory & Tender-Related Compliance"
            title={<>Registered, compliant, and procurement-ready.</>}
            description="The following registrations and compliance documentation are stated in the company profile. Registration numbers, validity dates, and scanned certificates can be furnished upon request."
            theme="dark"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statutoryCompliance.map((item, index) => {
              const Icon = complianceIcons[item.icon] || FileText;
              return (
                <ScrollReveal key={item.label} delay={index * 0.05}>
                  <div className="flex h-full flex-col items-start gap-4 border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-orange/40">
                    <Icon className="h-7 w-7 text-brand-orange" strokeWidth={1.5} />
                    <span className="text-sm font-semibold leading-snug text-white">
                      {item.label}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex items-start gap-3 rounded-sm border-l-4 border-white/30 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-white/60">
                We do not display registration numbers, validity dates, or downloadable certificates on this website unless supplied by the company. These can be verified and shared directly with procurement teams during the tender or empanelment process.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Trust & Procurement Readiness */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Trust & Procurement Readiness"
            title={<>Ready for government e-Marketplace and bank tenders.</>}
            description="Our focus on documentation, execution quality, and compliance aligns with the requirements of institutional procurement — including GeM and bank tender processes."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ScrollReveal>
              <div className="border-t-2 border-brand-orange bg-white p-8">
                <Award className="h-8 w-8 text-brand-navy" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">
                  Documentation Focus
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  We maintain the statutory registrations, tax returns, and compliance documentation that institutional procurement teams require — and can furnish them on request.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="border-t-2 border-brand-orange bg-white p-8">
                <ShieldCheck className="h-8 w-8 text-brand-navy" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">
                  Execution Quality
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  Our in-house production and owned media network enable consistent quality across all 30 districts — demonstrated in our completed government project.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <div className="border-t-2 border-brand-orange bg-white p-8">
                <Clock className="h-8 w-8 text-brand-navy" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">
                  Timely Delivery
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  The I&PR Department project was completed within the stipulated time — a track record we bring to every institutional engagement.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-sm leading-relaxed text-brand-gray">
              We do not claim active GeM seller status or eligibility for a specific tender without supporting documentation. Please contact us directly to discuss your procurement requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Looking for an advertising partner for your institution?"
        description="We are ready to support your tender, empanelment, or branding requirements with the right documentation and execution capability."
        primaryCta={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCta={{ label: 'View Our Projects', href: '/projects' }}
      />
    </>
  );
}
