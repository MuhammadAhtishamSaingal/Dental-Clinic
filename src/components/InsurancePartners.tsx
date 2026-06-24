'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function InsurancePartners() {
  const partners = [
    'Aetna PPO',
    'Cigna Dental',
    'Delta Dental PPO',
    'MetLife Dental',
    'Guardian PPO',
    'UnitedHealthcare'
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left tagline */}
        <div className="flex items-center gap-3 shrink-0 text-center md:text-left flex-col md:flex-row">
          <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-teal">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-brand-dark text-md leading-normal">
              In-Network Insurance Partners
            </h4>
            <p className="text-slate-400 text-xs font-semibold">
              We process claims directly for maximum coverage
            </p>
          </div>
        </div>

        {/* Brand Badges */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-brand-light border border-slate-100 rounded-2xl px-5 py-3 text-slate-600 font-bold text-xs sm:text-sm shadow-sm hover:border-brand-teal/30 hover:bg-white hover:text-brand-blue transition-all"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
