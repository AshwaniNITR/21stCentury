'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ImageReveal } from '@/components/motion/image-reveal';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import type { ServiceItem } from '@/lib/services';

interface ServiceCardProps {
  service: Pick<ServiceItem, 'number' | 'title' | 'shortDescription' | 'image' | 'alt' | 'id'>;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={`/services#${service.id}`} className="group block">
        <div className="relative overflow-hidden">
          <ImageReveal
            src={service.image}
            alt={service.alt}
            aspectRatio="aspect-[4/5]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="font-display text-4xl font-extrabold text-white/20">
              {service.number}
            </span>
            <h3 className="mt-2 font-display text-xl font-bold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60 text-pretty">
              {service.shortDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange opacity-0 transition-all duration-300 group-hover:opacity-100">
              Learn More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
