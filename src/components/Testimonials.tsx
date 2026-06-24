'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviewsData } from '@/data/reviews';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-brand-light relative overflow-hidden reveal">
      {/* Subtle grid accent */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
            Patient Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
            Hear From Our Happy Patients
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Discover what our patients say about their clinical journeys, from complex surgical procedures to aesthetic smile modifications.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote details */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8 relative italic">
                  <Quote className="w-8 h-8 text-brand-teal/10 absolute -top-4 -left-4 shrink-0 pointer-events-none" />
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Patient info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-slate-100 relative overflow-hidden">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-sm text-brand-dark">{item.name}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{item.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
