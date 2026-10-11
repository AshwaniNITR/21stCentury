'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  overlay?: boolean;
}

export function ImageReveal({
  src,
  alt,
  width = 1600,
  height = 900,
  className,
  imageClassName,
  priority = false,
  sizes = '100vw',
  aspectRatio = 'aspect-[16/10]',
  overlay = false,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-brand-dark',
        aspectRatio,
        className
      )}
    >
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? undefined : { clipPath: 'inset(0 100% 0 0)' }}
        animate={
          prefersReducedMotion
            ? undefined
            : isInView
            ? { clipPath: 'inset(0 0% 0 0)' }
            : undefined
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          initial={prefersReducedMotion ? undefined : { scale: 1.15 }}
          animate={prefersReducedMotion ? undefined : isInView ? { scale: 1 } : undefined}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn('object-cover', imageClassName)}
          />
        </motion.div>
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
      )}
    </div>
  );
}
