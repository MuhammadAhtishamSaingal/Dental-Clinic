'use client';

import React from 'react';
import { Syringe, Sparkles, Zap, Activity } from 'lucide-react';
import Link from 'next/link';

export default function AestheticsSection() {
  const treatments = [
    {
      icon: Syringe,
      title: 'Injectables',
      description: 'Botox, dermal fillers, and skin boosters designed to smooth fine lines, restore volume, and highlight natural contours.',
      details: ['Botox & Dysport', 'Hyaluronic Acid Fillers', 'Skin Boosters (Profhilo)']
    },
    {
      icon: Zap,
      title: 'Laser Therapies',
      description: 'Advanced medical laser resurfacing and photo-rejuvenation to treat hyperpigmentation, acne scars, and uneven texture.',
      details: ['CO2 Fractional Laser', 'IPL Photofacial', 'Laser Skin Tightening']
    },
    {
      icon: Sparkles,
      title: 'Facial Treatments',
      description: 'Premium medical-grade facials and chemical peels customized to cleanse, exfoliate, and deeply hydrate the skin.',
      details: ['Medical Hydrafacials', 'Glycolic & Salicylic Peels', 'Microdermabrasion']
    },
    {
      icon: Activity,
      title: 'Body Contouring',
      description: 'Non-invasive fat reduction and body sculpting treatments that target stubborn areas and promote skin tightening.',
      details: ['Non-Surgical Lipolysis', 'RF Skin Tightening', 'Cellulite Reduction']
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden reveal">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f3e883] mb-3">
            Premium Aesthetics
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3e883] leading-tight">
            Advanced Aesthetic & Facial Treatments
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Enhance your natural beauty with our state-of-the-art non-surgical cosmetic therapies, executed by board-certified skin and aesthetic specialists.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="bg-brand-light border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col justify-between group reveal"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm mb-6 border border-slate-50">
                    <Icon className="w-6 h-6 text-[#f3e883]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-xl text-[#f3e883] mb-3">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {t.description}
                  </p>

                  {/* List of sub-services */}
                  <ul className="space-y-2 mb-8">
                    {t.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f3e883]"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/booking"
                  className="py-2.5 px-6 rounded-full bg-[#f3e883] text-black hover:bg-[#e5d96a] text-xs font-bold transition-all text-center cursor-pointer shadow-sm hover:shadow-md"
                >
                  Consult Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
