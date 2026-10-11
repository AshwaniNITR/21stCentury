'use client';

import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isYear?: boolean;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  isYear = false,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        const display = isYear ? Math.round(latest) : Math.round(latest);
        ref.current.textContent = `${prefix}${display.toLocaleString('en-IN')}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, isYear]);

  return (
    <span ref={ref} className={className}>
      {prefersReducedMotion ? `${prefix}${value.toLocaleString('en-IN')}${suffix}` : `${prefix}0${suffix}`}
    </span>
  );
}
