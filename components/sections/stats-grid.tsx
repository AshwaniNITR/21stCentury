'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '@/components/motion/animated-counter';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  isYear?: boolean;
}

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <ScrollReveal key={stat.label} delay={index * 0.1}>
          <div className="relative">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-2 border-brand-orange pl-6"
            >
              <div className="font-display text-5xl font-extrabold text-white md:text-6xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isYear={stat.isYear}
                />
              </div>
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
