import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export function Breadcrumbs({ items, theme = 'light', className }: BreadcrumbsProps) {
  const isDark = theme === 'dark';
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'flex flex-wrap items-center gap-2 text-sm',
        isDark ? 'text-white/60' : 'text-brand-gray',
        className
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  'transition-colors hover:text-brand-orange',
                  isDark ? 'hover:text-brand-orange' : 'hover:text-brand-orange'
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? (isDark ? 'text-white' : 'text-brand-navy') : ''}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="h-3.5 w-3.5 opacity-40" />}
          </span>
        );
      })}
    </nav>
  );
}
