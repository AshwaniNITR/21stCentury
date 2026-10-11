'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark grain">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-brand-orange/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-extrabold text-white">
                21<span className="text-brand-orange">st</span> CENTURY
              </span>
              <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/50">
                {SITE.tagline}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Making brands impossible to miss across Odisha since 1992. Outdoor media, institutional branding, printing, and fabrication — all in-house.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Offices</h3>
            <div className="space-y-5">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MapPin className="h-4 w-4 text-brand-orange" />
                  {SITE.offices.head.label} — {SITE.offices.head.city}
                </p>
                <p className="mt-1.5 pl-6 text-sm leading-relaxed text-white/60">
                  {SITE.offices.head.address}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MapPin className="h-4 w-4 text-brand-orange" />
                  {SITE.offices.branch.label} — {SITE.offices.branch.city}
                </p>
                <p className="mt-1.5 pl-6 text-sm leading-relaxed text-white/60">
                  {SITE.offices.branch.address}
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-orange"
              >
                <Mail className="h-4 w-4 text-brand-orange" />
                <span className="break-all">{SITE.email}</span>
              </a>
              {SITE.phones.map((phone, i) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  <Phone className="h-4 w-4 text-brand-orange" />
                  <span>+91 {phone}</span>
                </a>
              ))}
              <a
                href={`https://wa.me/${SITE.whatsapp[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 21st Century Advertising Agency. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Established 1992 · Berhampur & Bhubaneswar, Odisha, India
          </p>
        </div>
      </div>
    </footer>
  );
}
