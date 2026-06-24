'use client';

import React from 'react';
import { Sparkles, Calendar, Coffee, HeartHandshake } from 'lucide-react';

export default function PersonalizedCareSection() {
  const offerings = [
    {
      title: 'Tailored Treatment Plans',
      desc: 'We map every procedural milestone around your long-term biology and personal smile goals. You get absolute visibility over choices and costs.',
      icon: Calendar,
    },
    {
      title: 'Comfort-First Lounges',
      desc: 'Featuring aromatherapy, herbal teas, custom warm coffee options, and soundproof rooms to soothe dental anxiety completely.',
      icon: Coffee,
    },
    {
      title: 'Gentle Care Commitment',
      desc: 'Our staff are certified in gentle, anxiety-free care techniques, guaranteeing a relaxing diagnostic and recovery framework.',
      icon: HeartHandshake,
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden reveal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Visual graphic & stats */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="bg-gradient-to-br from-[#232425] to-[#1c1d1e] border border-slate-200/5 rounded-[40px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <Sparkles className="w-10 h-10 text-[#f3e883] mb-6 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug text-[#f3e883]">
              Every Smile is Unique. Your Plan Should Be Too.
            </h3>
            <p className="text-slate-300 text-sm mt-4 leading-relaxed font-medium">
              We reject generalist, assembly-line procedures. Our lead specialists coordinate directly on your dental restoration to guarantee flawless, customized fits.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="font-extrabold text-2xl text-[#f3e883]">1-on-1</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Specialist Focus</p>
              </div>
              <div>
                <span className="font-extrabold text-2xl text-[#f3e883]">100%</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Anxiety-Free Option</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Details */}
        <div className="lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f3e883] mb-3">
            Patient-First Strategy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3e883] leading-tight mb-8">
            Personalized Care & Tailored Smile Strategies
          </h2>
          <div className="space-y-8">
            {offerings.map((o, idx) => {
              const Icon = o.icon;
              return (
                <div key={idx} className="flex gap-4 items-start reveal">
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#f3e883]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md text-[#f3e883]">{o.title}</h4>
                    <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{o.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
