'use client';

import React from 'react';
import { Layers, ShieldCheck, Star, Sparkles } from 'lucide-react';

export default function FacilitiesSection() {
  const highlights = [
    {
      title: '3D CBCT Digital Imaging',
      desc: 'Our ultra-low dose diagnostic scans yield pin-sharp 3D bone visualization, vital for guided implant placements and complex root canal safety.',
      icon: Layers,
    },
    {
      title: 'Computer-Guided Surgery',
      desc: 'Using dynamic navigation systems, we plan surgical insertions virtually to within 0.1mm, minimizing tissue incisions and speeding up recovery.',
      icon: Sparkles,
    },
    {
      title: 'Medical Grade Autoclaving',
      desc: 'Class-B biological sterilizers monitor and document sterilization values under CDC regulations, protecting patients from cross-infection risks.',
      icon: ShieldCheck,
    },
    {
      title: 'Luxury Clinic Environment',
      desc: 'Our surgery suites are fully air-conditioned and feature ergonomic aromatherapy, warm beverage stations, and soothing ambient lighting.',
      icon: Star,
    }
  ];

  return (
    <section className="py-24 px-4 bg-brand-light relative overflow-hidden reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f3e883] mb-3">
            Elite Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3e883] leading-tight">
            State-of-the-Art Facilities & Technology
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Discover a clinic designed around safety, absolute comfort, and bleeding-edge digital diagnostics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-50 rounded-[32px] p-8 shadow-sm flex gap-6 items-start hover:shadow-md transition-all duration-300 reveal"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#f3e883]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#f3e883] mb-2">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
