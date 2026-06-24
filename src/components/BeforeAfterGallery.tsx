'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryCase {
  title: string;
  treatment: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export default function BeforeAfterGallery() {
  const cases: GalleryCase[] = [
    {
      title: 'Complete Smile Makeover',
      treatment: '10 Porcelain Veneers',
      beforeUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop',
      afterUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&auto=format&fit=crop',
      description: 'Corrected severe tooth chipping, uneven lengths, and deep internal staining using handcrafted ultra-thin veneers.'
    },
    {
      title: 'Orthodontic Alignment',
      treatment: '14 Months Invisalign Clear Aligners',
      beforeUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop',
      afterUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop',
      description: 'Resolved heavy crowding in the upper arch and corrected a minor crossbite without visible brackets.'
    },
    {
      title: 'Full Arch Restoration',
      treatment: 'Dental Implants & Zirconia Bridges',
      beforeUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400&auto=format&fit=crop',
      afterUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop',
      description: 'Replaced missing molars, fully restored chewing force, and rebuilt natural gum line contouring.'
    }
  ];

  // Active state tracker for each case to toggle view
  const [activeViews, setActiveViews] = useState<Record<number, 'before' | 'after'>>({
    0: 'after',
    1: 'after',
    2: 'after'
  });

  const toggleView = (index: number, state: 'before' | 'after') => {
    setActiveViews(prev => ({ ...prev, [index]: state }));
  };

  return (
    <section className="py-20 px-4 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
            Transforming Smiles
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
            Before & After Smile Gallery
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Take a look at real clinical outcomes from our patient cases. Tap buttons to toggle between pre-treatment and final results.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const currentView = activeViews[index] || 'after';
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col"
              >
                {/* Visual container */}
                <div className="relative h-64 w-full bg-slate-50 overflow-hidden">
                  <Image
                    src={currentView === 'before' ? item.beforeUrl : item.afterUrl}
                    alt={`${item.title} - ${currentView}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-opacity duration-300"
                  />
                  {/* View Label overlay */}
                  <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/10">
                    {currentView === 'before' ? 'Before Treatment' : 'After Result'}
                  </div>
                </div>

                {/* Info & Toggles */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-extrabold text-lg text-brand-dark">{item.title}</h3>
                  <p className="text-brand-teal text-xs font-bold uppercase tracking-wider mb-4">
                    {item.treatment}
                  </p>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Toggle Controls */}
                  <div className="grid grid-cols-2 gap-2 bg-brand-light p-1 rounded-xl">
                    <button
                      onClick={() => toggleView(index, 'before')}
                      className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        currentView === 'before'
                          ? 'bg-brand-blue text-white shadow-sm'
                          : 'text-slate-500 hover:text-brand-dark'
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => toggleView(index, 'after')}
                      className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        currentView === 'after'
                          ? 'bg-brand-teal text-white shadow-sm'
                          : 'text-slate-500 hover:text-brand-dark'
                      }`}
                    >
                      After Smile
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
