'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '@/components/ui/primary-button';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { ImageReveal } from '@/components/motion/image-reveal';
import { SectionHeading } from '@/components/sections/section-heading';
import { StatsGrid } from '@/components/sections/stats-grid';
import { CTASection } from '@/components/sections/cta-section';
import { ServiceCard } from '@/components/services/service-card';
import { services, infrastructureCapabilities } from '@/lib/services';
import { SITE } from '@/lib/constants';

const heroImage =
  'https://images.pexels.com/photos/37088016/pexels-photo-37088016.jpeg?auto=compress&cs=tinysrgb&w=1920';
const heroSecondary =
  'https://images.pexels.com/photos/4036764/pexels-photo-4036764.jpeg?auto=compress&cs=tinysrgb&w=800';
const heroTertiary =
  'https://images.pexels.com/photos/7260884/pexels-photo-7260884.jpeg?auto=compress&cs=tinysrgb&w=800';
const brandIntroImage =
  'https://images.pexels.com/photos/2371910/pexels-photo-2371910.jpeg?auto=compress&cs=tinysrgb&w=1200';
const projectImage =
  'https://images.pexels.com/photos/13795730/pexels-photo-13795730.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-brand-dark grain">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          style={prefersReducedMotion ? undefined : { y: heroY }}
        >
          <Image
            src={heroImage}
            alt="Outdoor advertising billboard along a highway"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 md:px-12"
          style={prefersReducedMotion ? undefined : { opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange"
          >
            <span className="h-px w-8 bg-brand-orange" />
            21st Century Advertising Agency · Odisha
          </motion.span>

          <h1 className="font-display text-display-xl text-white text-balance">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Making Brands
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block text-brand-orange"
            >
              Impossible to Miss.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty md:text-xl"
          >
            From high-impact outdoor advertising to precision signage and institutional branding, we deliver visibility through strategic media, in-house technology, and reliable execution across Odisha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <PrimaryButton href="/services">Explore Our Capabilities</PrimaryButton>
            <SecondaryButton
              href="/contact"
              className="border-white/30 text-white hover:border-white hover:bg-white hover:text-brand-navy"
            >
              Start a Conversation
            </SecondaryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-brand-orange" />
              Established 1992
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-brand-orange" />
              500+ Owned Media Assets
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-brand-orange" />
              All 30 Districts of Odisha
            </span>
          </motion.div>
        </motion.div>

        {/* Floating Image Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-12 bottom-24 hidden xl:block"
        >
          <div className="relative w-64 overflow-hidden">
            <ImageReveal
              src={heroSecondary}
              alt="Illuminated billboard display at night"
              aspectRatio="aspect-[3/4]"
              sizes="256px"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-80 bottom-44 hidden xl:block"
        >
          <div className="relative w-48 overflow-hidden">
            <ImageReveal
              src={heroTertiary}
              alt="Bank building signage"
              aspectRatio="aspect-[3/4]"
              sizes="192px"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== BRAND INTRODUCTION ===== */}
      <section className="relative overflow-hidden bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title={<>Visibility backed by capability.</>}
                description="21st Century Advertising Agency is a full-service outdoor media, institutional branding, signage, printing, and fabrication agency. What began as a local signage business has evolved into a Pan-Odisha network — powered by owned media infrastructure and in-house production capabilities."
              />
              <ScrollReveal delay={0.15}>
                <div className="mt-8">
                  <PrimaryButton href="/about">About Our Journey</PrimaryButton>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <ImageReveal
                src={brandIntroImage}
                alt="Billboard structure on a rural road under a clear sky"
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== KEY CAPABILITIES ===== */}
      <section className="bg-brand-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Four capabilities, one trusted partner.</>}
            description="From highway hoardings to bank facades, every service is backed by in-house production and a 30-district network."
            theme="dark"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCALE AND REACH ===== */}
      <section className="relative overflow-hidden bg-brand-dark grain py-24 md:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 bg-brand-orange/8 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionHeading
                eyebrow="Scale & Reach"
                title={<>A network built for Pan-Odisha visibility.</>}
                description="Our owned media assets and production infrastructure span the state — from the coastal districts to the western highlands."
                theme="dark"
              />
            </div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-white/60">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-brand-orange" />
                  Head office in Berhampur, branch office in Bhubaneswar
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-brand-orange" />
                  Owned hoardings on national & state highways
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-brand-orange" />
                  In-house printing and fabrication
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-16">
            <StatsGrid stats={[...SITE.stats]} />
          </div>
        </div>
      </section>

      {/* ===== INFRASTRUCTURE PREVIEW ===== */}
      <section className="bg-brand-warm-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="In-House Infrastructure"
            title={<>Production capabilities that set us apart.</>}
            description="Owning our printing and fabrication infrastructure means better quality control, faster turnaround, and reduced reliance on external vendors."
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
          <ScrollReveal delay={0.15}>
            <div className="mt-12 text-center">
              <PrimaryButton href="/infrastructure">Explore Our Infrastructure</PrimaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEATURED PROJECT ===== */}
      <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <ImageReveal
                src={projectImage}
                alt="Highway in India at night with traffic and infrastructure"
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
            <div>
              <SectionHeading
                eyebrow="Featured Project"
                title={<>Government Scheme Hoardings Across Odisha</>}
                theme="dark"
              />
              <ScrollReveal delay={0.1}>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Client</p>
                    <p className="mt-1 text-lg text-white/80">
                      Information & Public Relations Department, Government of Odisha
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Scope</p>
                    <p className="mt-1 text-white/70">
                      Display of government scheme hoardings at different locations across all 30 districts of Odisha.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Outcome</p>
                    <p className="mt-1 text-white/70">
                      Workmanship and quality were found highly satisfactory, and the project was completed within the stipulated time.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-brand-orange transition-colors hover:text-brand-orange-light"
                  >
                    View the Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <CTASection
        headline="Have a brand that deserves to be seen?"
        description="Let's discuss your next advertising, branding, or signage requirement."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  );
}
