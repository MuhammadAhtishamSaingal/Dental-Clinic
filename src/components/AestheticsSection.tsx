'use client';

import React from 'react';
import { Syringe, Sparkles, Zap, Activity, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AestheticsSection() {
  const treatments = [
    {
      icon: Syringe,
      title: 'Injectables',
      description: 'Botox, dermal fillers, and skin boosters designed to smooth fine lines, restore volume, and highlight natural contours.',
      details: ['Botox & Dysport', 'Hyaluronic Acid Fillers', 'Skin Boosters (Profhilo)'],
      imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Zap,
      title: 'Laser Therapies',
      description: 'Advanced medical laser resurfacing and photo-rejuvenation to treat hyperpigmentation, acne scars, and uneven texture.',
      details: ['CO2 Fractional Laser', 'IPL Photofacial', 'Laser Skin Tightening'],
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Sparkles,
      title: 'Facial Treatments',
      description: 'Premium medical-grade facials and chemical peels customized to cleanse, exfoliate, and deeply hydrate the skin.',
      details: ['Medical Hydrafacials', 'Glycolic & Salicylic Peels', 'Microdermabrasion'],
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Activity,
      title: 'Body Contouring',
      description: 'Non-invasive fat reduction and body sculpting treatments that target stubborn areas and promote skin tightening.',
      details: ['Non-Surgical Lipolysis', 'RF Skin Tightening', 'Cellulite Reduction'],
      imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1c1d] relative overflow-hidden reveal">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#f3e883]/[0.02] blur-3xl pointer-events-none"></div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f3e883]/[0.02] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#f3e883]/[0.03] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3e883] mb-4">
            Premium Aesthetics
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#f3e883] leading-tight tracking-tight font-display">
            Advanced Aesthetic & Facial Treatments
          </h2>
          <div className="w-12 h-[2px] bg-[#f3e883] mx-auto my-6 opacity-80"></div>
          <p className="text-[#d0cbbf] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Enhance your natural beauty with our state-of-the-art non-surgical cosmetic therapies, executed by board-certified skin and aesthetic specialists.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {treatments.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="bg-[#232425] border border-[#f3e883]/10 rounded-[32px] p-5 sm:p-6 hover:shadow-[0_12px_40px_rgba(243,232,131,0.06)] hover:border-[#f3e883]/25 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between group reveal"
              >
                <div>
                  {/* Premium Image on Top */}
                  <div className="relative w-full h-44 rounded-[24px] overflow-hidden mb-5 border border-[#f3e883]/5">
                    <img
                      src={t.imageUrl}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#232425]/60 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Header Row (Icon + Title) */}
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#2c2d2e] border border-[#f3e883]/10 flex items-center justify-center text-[#f3e883] group-hover:bg-[#f3e883] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-inner shrink-0">
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 text-current" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#f3e883] tracking-tight font-display">
                      {t.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#d0cbbf] text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                    {t.description}
                  </p>

                  {/* List of sub-services */}
                  <ul className="space-y-2 mb-6">
                    {t.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-[#d0cbbf]/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#f3e883] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href="/booking"
                  className="w-full py-2.5 px-5 rounded-full bg-[#f3e883] text-black hover:bg-[#e5d96a] text-xs font-bold tracking-wide transition-all duration-300 text-center cursor-pointer shadow-[0_4px_12px_rgba(243,232,131,0.15)] hover:shadow-[0_8px_24px_rgba(243,232,131,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2 mt-auto"
                >
                  <span className="consalt">Consult Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


