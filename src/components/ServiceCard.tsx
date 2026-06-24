'use client';

import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { ServiceDetail } from '@/data/services';

interface ServiceCardProps {
  service: ServiceDetail;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Safe dynamic resolution of Lucide icons
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <div className="group relative bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Decorative top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div>
        {/* Icon container */}
        <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-350 shadow-sm mb-6">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-xl text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer link */}
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1 text-sm font-bold text-brand-teal hover:text-brand-teal-hover transition-colors group/link mt-auto"
      >
        <span>Learn More</span>
        <Icons.ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
