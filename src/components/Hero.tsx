'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck, Phone, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setOffset(window.scrollY * 0.12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white pt-12 pb-24 px-4 overflow-hidden border-b border-slate-50">
      {/* Visual background details */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#f3e883]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <div className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-800 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Rating Trust Badge */}
          <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3.5 py-1.5 rounded-full mb-6 text-[11px] font-bold uppercase tracking-wider shadow-md">
            <Star className="w-3.5 h-3.5 text-[#000000] fill-current" />
            <span className="text-white tops">Top-Rated Dental Clinic in Karachi</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f3e883] leading-none">
            Welcome to <span className="text-white">Beverly Hills Clinic </span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed max-w-xl">
            At Beverly Hills Clinic, we offer the highest standard of dental and aesthetic care in a serene, state-of-the-art environment. Our expert team is dedicated to providing personalized, exceptional service to every patient who walks through our doors.</p>

          {/* Core CTAs */}
          <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start mt-8 w-full">
            <Link
              href="/booking"
              className="bg-brand-teal hover:bg-brand-teal-hover text-black px-8 py-4 rounded-full font-extrabold text-sm sm:text-md shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/35 transition-all cursor-pointer flex items-center gap-2 hover:scale-104"
            >
              <CalendarCheck className="w-4.5 h-4.5 text-black" />
              <span className="text-black">Book Appointment</span>
            </Link>
            <a
              href="tel:+923070984307"
              className="border border-[#f3e883]/30 hover:border-[#f3e883] text-[#f3e883] hover:text-black bg-transparent px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-104"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Value Highlights */}
          <div className="flex items-center gap-6 mt-12 text-xs font-bold text-slate-400 uppercase tracking-wider flex-wrap justify-center lg:justify-start">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#f3e883]" />
              <span>FDA-Approved Tech</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#f3e883]" />
              <span>Anxiety-Free Option</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image & Overlay Cards */}
        <div className={`lg:col-span-6 relative w-full flex justify-center transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          {/* Main Hero Image wrapper for parallax */}
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-brand-blue/10 border-4 border-white">
            <div
              className="w-full h-full relative transition-transform duration-100 ease-out"
              style={{ transform: `translateY(${offset}px)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="Premium Patient Care - Dental Clinic"
                fill
                priority={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Trust Card Overlay */}
          <div className="absolute -bottom-6 left-4 sm:left-12 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-4 sm:p-5 shadow-2xl flex items-center gap-3.5 max-w-[260px] animate-float">
            <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center text-brand-teal">
              <Star className="w-5 h-5 fill-current text-[#f3e883]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm text-brand-dark">10,000+</span>
              <span className="text-[10px] beautifil text-slate-400 font-bold uppercase tracking-wider">
                Beautiful Smiles Restored
              </span>
            </div>
          </div>

          {/* Floating Action Card Overlay */}
          <div className="absolute -top-6 right-4 bg-brand-light/95 backdrop-blur-md text-white rounded-3xl p-4 shadow-2xl flex items-center gap-3.5 max-w-[200px] border border-white/10 hidden sm:flex">
            <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-brand-teal">
              <span className="text-xs font-black text-[#f3e883]">99%</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs text-[#f3e883]">Patient Success</span>
              <span className="text-[9px] text-slate-400 font-semibold leading-normal">
                Satisfaction Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
