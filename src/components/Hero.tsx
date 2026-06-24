'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck, Phone, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-24 px-4 overflow-hidden border-b border-slate-50">
      {/* Visual background details */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Rating Trust Badge */}
          <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3.5 py-1.5 rounded-full mb-6 text-[11px] font-bold uppercase tracking-wider shadow-md">
            <Star className="w-3.5 h-3.5 text-[#FBBC05] fill-current" />
            <span>Top-Rated Dental Clinic in New York</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark leading-none">
            Your Premium Home For <span className="text-brand-blue">Flawless Dentistry</span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed max-w-xl">
            Experience state-of-the-art general, cosmetic, and surgical oral care inside a luxurious, comfortable clinic. Our board-certified specialists build healthy, dazzling smiles for life.
          </p>

          {/* Core CTAs */}
          <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start mt-8 w-full">
            <Link
              href="/booking"
              className="bg-brand-teal hover:bg-brand-teal-hover text-white px-8 py-4 rounded-full font-extrabold text-sm sm:text-md shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/35 transition-all cursor-pointer flex items-center gap-2"
            >
              <CalendarCheck className="w-4.5 h-4.5" />
              <span>Book Appointment</span>
            </Link>
            <a
              href="tel:+18005550199"
              className="border border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50 px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Value Highlights */}
          <div className="flex items-center gap-6 mt-12 text-xs font-bold text-slate-400 uppercase tracking-wider flex-wrap justify-center lg:justify-start">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>FDA-Approved Tech</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>Anxiety-Free Option</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image & Overlay Cards */}
        <div className="lg:col-span-6 relative w-full flex justify-center">
          {/* Main Hero Image */}
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-brand-blue/10 border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
              alt="Premium Patient Care - Dental Clinic"
              fill
              priority={true} // Compilation sets fetchpriority="high" and preloads
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating Trust Card Overlay */}
          <div className="absolute -bottom-6 left-4 sm:left-12 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-4 sm:p-5 shadow-2xl flex items-center gap-3.5 max-w-[260px] animate-float">
            <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center text-brand-teal">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm text-brand-dark">10,000+</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Beautiful Smiles Restored
              </span>
            </div>
          </div>

          {/* Floating Action Card Overlay */}
          <div className="absolute -top-6 right-4 bg-brand-blue/95 backdrop-blur-md text-white rounded-3xl p-4 shadow-2xl flex items-center gap-3.5 max-w-[200px] border border-white/10 hidden sm:flex">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal">
              <span className="text-xs font-black">99%</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs">Patient Success</span>
              <span className="text-[9px] text-slate-300 font-semibold leading-normal">
                Satisfaction Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
