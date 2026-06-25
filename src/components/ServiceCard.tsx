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
    <div className="group bg-[#232425] border border-[#f3e883]/10 rounded-[32px] p-5 sm:p-6 hover:shadow-[0_12px_40px_rgba(243,232,131,0.06)] hover:border-[#f3e883]/25 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between reveal">
      <div>
        {/* Premium Image on Top */}
        <div className="relative w-full h-44 rounded-[24px] overflow-hidden mb-5 border border-[#f3e883]/5">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#232425]/60 to-transparent pointer-events-none"></div>
        </div>

        {/* Header Row (Icon + Title) */}
        <div className="flex items-center gap-3 mb-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#2c2d2e] border border-[#f3e883]/10 flex items-center justify-center text-[#f3e883] group-hover:bg-[#f3e883] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-inner shrink-0">
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 text-current" />
          </div>
          <h3 className="font-extrabold text-base sm:text-lg text-[#f3e883] tracking-tight font-display">
            {service.title}
          </h3>
        </div>

        {/* Short description */}
        <p className="text-[#d0cbbf] text-xs sm:text-sm leading-relaxed mb-5 font-sans">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer link */}
      <Link
        href={`/services/${service.slug}`}
        className="w-full py-2.5 px-5 rounded-full bg-[#f3e883] text-black hover:bg-[#e5d96a] text-xs font-bold tracking-wide transition-all duration-300 text-center cursor-pointer shadow-[0_4px_12px_rgba(243,232,131,0.15)] hover:shadow-[0_8px_24px_rgba(243,232,131,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2 mt-auto"
      >
        <span className="learns" >Learn More</span>
        <Icons.ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

