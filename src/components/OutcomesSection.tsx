'use client';

import React from 'react';
import { Search, Compass, CheckCircle } from 'lucide-react';

export default function OutcomesSection() {
  const steps = [
    {
      step: '01',
      title: 'Evaluation',
      subTitle: 'Comprehensive Diagnostics',
      desc: 'Our process begins with ultra-high definition intraoral scanning, 3D CBCT digital scans, and photographic mapping of your dental and facial proportions.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Planning',
      subTitle: 'Digital Mockups & Simulation',
      desc: 'Using computer-aided digital design software, we virtually simulate your post-treatment smile alignment and veneer shapes, letting you preview outcomes before surgery.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Execution',
      subTitle: 'Guided Procedures & Artistry',
      desc: 'Using laser-guided equipment and custom surgical guides, our board-certified experts execute your procedures with micro-precision for stable, gorgeous results.',
      icon: CheckCircle,
    }
  ];

  return (
    <section className="py-24 px-4 bg-brand-light relative overflow-hidden reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f3e883] mb-3">
            Clinical Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3e883] leading-tight">
            Commitment to Perfect Outcomes
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Our structured, digital three-step process guarantees consistent clinical excellence and absolute patient peace of mind.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-50 rounded-[32px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 reveal"
              >
                <div>
                  {/* Step counter */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-black text-slate-200">{s.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#f3e883]" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-xl text-[#f3e883]">{s.title}</h3>
                  <h4 className="text-xs font-bold text-[#f3e883] uppercase tracking-wider mt-1 mb-4">{s.subTitle}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
