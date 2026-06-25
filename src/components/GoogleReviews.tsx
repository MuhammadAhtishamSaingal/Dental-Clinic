'use client';

import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';

export default function GoogleReviews() {
  return (
    <section className="py-16 px-4 bg-white reveal">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-light to-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-brand-blue/5 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-brand-teal/5 blur-xl"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-brand-blue/5 blur-xl"></div>

        {/* Left column: Star badge and rating */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
          <div className="flex items-center gap-2">
            {/* Google colored letter icon placeholder */}
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-black text-lg border border-slate-50">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#34A853]">g</span>
              <span className="text-[#4285F4]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Maps Reviews</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              4.9<span className="text-slate-300">/5.0</span>
            </h3>
            <div className="flex items-center gap-1 text-amber-500 my-1 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Based on over <span className="font-bold text-brand-dark">520+ patient testimonials</span>.
            </p>
          </div>
        </div>

        {/* Right column: Description & Call Action */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg gap-6 relative z-10">
          <h4 className="font-extrabold text-xl text-brand-dark leading-snug">
            Your Smile is in Trusted Hands
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            We hold ourselves to strict standards of excellence. Patients love our clean clinic environment, advanced equipment, painless procedures, and friendly administration.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-brand-teal" />
              <span className='finsus'>Find us on Maps</span>
            </a>
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 hover:border-slate-300 text-slate-700 bg-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className='reviewss'>Write a Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
