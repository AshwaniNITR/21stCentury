import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark';
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <ScrollReveal>
          <span
            className={cn(
              'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]',
              isDark ? 'text-brand-orange' : 'text-brand-orange'
            )}
          >
            <span className="h-px w-8 bg-brand-orange" />
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.05}>
        <h2
          className={cn(
            'font-display text-display-sm text-balance',
            isDark ? 'text-white' : 'text-brand-navy'
          )}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.1}>
          <p
            className={cn(
              'max-w-2xl text-lg leading-relaxed text-pretty',
              align === 'center' && 'mx-auto',
              isDark ? 'text-white/70' : 'text-brand-gray'
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
