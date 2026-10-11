'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: PrimaryButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(
    'group inline-flex items-center gap-2.5 bg-brand-orange px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-brand-orange-dark',
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Link href={href} className={classes} onClick={onClick}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={prefersReducedMotion || disabled ? undefined : { scale: 1.02 }}
      whileTap={prefersReducedMotion || disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}
      onClick={onClick}
    >
      {inner}
    </motion.button>
  );
}

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function SecondaryButton({
  children,
  href,
  className,
  onClick,
}: SecondaryButtonProps) {
  const classes = cn(
    'group inline-flex items-center gap-2.5 border border-brand-navy/20 bg-transparent px-7 py-4 text-sm font-bold uppercase tracking-wider text-brand-navy transition-all duration-300 hover:border-brand-navy hover:bg-brand-navy hover:text-white',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        <span>{children}</span>
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </button>
  );
}
