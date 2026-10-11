'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isTransparent
            ? 'bg-transparent'
            : 'bg-brand-warm-white/95 backdrop-blur-md shadow-sm border-b border-brand-navy/5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          {/* Logo / Wordmark */}
          <Link href="/" className="group flex items-center" aria-label="21st Century Advertising Agency — Home">
            <div className={cn('flex flex-col leading-none transition-colors', isTransparent ? 'text-white' : 'text-brand-navy')}>
              <span className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
                21<span className="text-brand-orange">st</span> CENTURY
              </span>
              <span className={cn('mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.25em] md:text-xs', isTransparent ? 'text-white/60' : 'text-brand-gray')}>
                {SITE.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-semibold transition-colors',
                    isTransparent
                      ? isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                      : isActive
                        ? 'text-brand-orange'
                        : 'text-brand-navy/70 hover:text-brand-navy'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-orange"
                      transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(
                'group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300',
                isTransparent
                  ? 'border border-white/30 text-white hover:bg-white hover:text-brand-navy'
                  : 'bg-brand-orange text-white hover:bg-brand-orange-dark'
              )}
            >
              Discuss a Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              'lg:hidden transition-colors',
              isTransparent ? 'text-white' : 'text-brand-navy'
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-brand-dark/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] h-full w-full max-w-sm bg-brand-warm-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-brand-navy/10 px-6 py-4">
                <span className="font-display text-lg font-extrabold text-brand-navy">
                  21<span className="text-brand-orange">st</span> CENTURY
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-navy"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" strokeWidth={2} />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-8">
                {NAV_LINKS.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center justify-between border-b border-brand-navy/5 py-4 text-lg font-semibold transition-colors',
                          isActive ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-40" strokeWidth={2} />
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-orange px-6 py-4 text-sm font-bold uppercase tracking-wider text-white"
                >
                  Discuss a Project
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </nav>
              <div className="px-6 pb-8">
                <p className="text-sm text-brand-gray">Established 1992 · Berhampur & Bhubaneswar, Odisha</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
