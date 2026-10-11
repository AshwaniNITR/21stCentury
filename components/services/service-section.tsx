'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Megaphone, Building2, Printer, Hammer } from 'lucide-react';
import { ImageReveal } from '@/components/motion/image-reveal';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import type { ServiceItem } from '@/lib/services';
import { cn } from '@/lib/utils';

const iconMap = {
  Megaphone,
  Building2,
  Printer,
  Hammer,
};

interface ServiceSectionProps {
  service: ServiceItem;
  index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isReversed = index % 2 === 1;
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div
      id={service.id}
      className="scroll-mt-24 border-b border-brand-navy/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className={cn('grid items-center gap-12 lg:grid-cols-2', isReversed && 'lg:[&>*:first-child]:order-2')}>
          {/* Image */}
          <ScrollReveal>
            <ImageReveal
              src={service.image}
              alt={service.alt}
              aspectRatio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>

          {/* Content */}
          <div className={cn('flex flex-col', isReversed ? 'lg:pr-8' : 'lg:pl-8')}>
            <ScrollReveal>
              <div className="mb-5 flex items-center gap-4">
                <span className="font-display text-5xl font-extrabold text-brand-orange/20">
                  {service.number}
                </span>
                <div className="flex h-12 w-12 items-center justify-center bg-brand-navy text-white">
                  {Icon && <Icon className="h-6 w-6" strokeWidth={1.5} />}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h3 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
                {service.title}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-brand-gray">
                {service.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-navy">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange transition-colors hover:text-brand-orange-dark"
                >
                  Discuss This Requirement
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
