'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  theme?: 'dark' | 'light';
}

export function CTASection({
  headline,
  description,
  primaryCta,
  secondaryCta,
  theme = 'dark',
}: CTASectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === 'dark';

  return (
    <section
      className={cn(
        'relative overflow-hidden px-6 py-24 md:px-12 md:py-32',
        isDark ? 'bg-brand-dark grain' : 'bg-brand-navy'
      )}
    >
      {isDark && (
        <div className="absolute right-0 top-0 h-96 w-96 bg-brand-orange/10 blur-3xl" />
      )}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <h2
            className={cn(
              'font-display text-display-md text-balance',
              isDark ? 'text-white' : 'text-white'
            )}
          >
            {headline}
          </h2>
        </ScrollReveal>
        {description && (
          <ScrollReveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70 text-pretty">
              {description}
            </p>
          </ScrollReveal>
        )}
        <ScrollReveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-2.5 bg-brand-orange px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-brand-orange-dark"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </motion.div>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2.5 border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
