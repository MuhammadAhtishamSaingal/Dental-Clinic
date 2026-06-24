'use client';

import React from 'react';
import { Cpu, ShieldCheck, Heart, CircleDollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description: 'We utilize state-of-the-art 3D imaging, digital scanners, and dental lasers to make procedures faster, highly precise, and completely pain-free.'
    },
    {
      icon: ShieldCheck,
      title: 'Expert Care Team',
      description: 'Our doctors are active members of international academies, continuously training in the latest aesthetic and surgical techniques.'
    },
    {
      icon: Heart,
      title: 'Anxiety-Free Dentistry',
      description: 'We prioritize your absolute comfort with custom sedation options, relaxing treatment rooms, and a gentle, caring patient-first staff.'
    },
    {
      icon: CircleDollarSign,
      title: 'Flexible Financing',
      description: 'Enjoy easy, interest-free payment plans through CareCredit. We accept most major PPO dental insurances and file claims for you.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
            Why Choose Our Clinic
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
            Setting the Standard in Modern, Premium Dental Care
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            We merge luxury aesthetics with absolute clinical precision, providing you and your family with an unmatched dental experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-brand-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
