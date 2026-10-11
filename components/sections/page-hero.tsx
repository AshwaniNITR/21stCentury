'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image: string;
  alt: string;
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  theme = 'dark',
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className={cn(
        'relative flex min-h-[70vh] items-end overflow-hidden grain',
        theme === 'dark' ? 'bg-brand-dark' : 'bg-brand-warm-white'
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? undefined : { y }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40"
        style={prefersReducedMotion ? undefined : { opacity }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {eyebrow && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange"
              >
                <span className="h-px w-8 bg-brand-orange" />
                {eyebrow}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-lg text-white text-balance"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty md:text-xl"
              >
                {description}
              </motion.p>
            )}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
