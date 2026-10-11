'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from 'framer-motion';
import { viewportOnce } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'h2' | 'h3' | 'p';
}

export function ScrollReveal({
  children,
  variants,
  className,
  delay = 0,
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inViewOptions = viewportOnce as Parameters<typeof useInView>[1];
  const isInView = useInView(ref, inViewOptions);
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  const defaultVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={prefersReducedMotion ? undefined : (variants ?? defaultVariants)}
      initial={prefersReducedMotion ? undefined : 'hidden'}
      animate={isInView ? 'visible' : undefined}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
