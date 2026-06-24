'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, Phone, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-brand-dark overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,150,0.15),transparent)] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-brand-teal/15 text-brand-teal px-4 py-1.5 rounded-full border border-brand-teal/25 text-xs font-bold uppercase tracking-wider mb-8">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Easy Online Scheduling</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Achieve Your Perfect, Confident Smile?
        </h2>
        
        <p className="text-slate-400 text-sm sm:text-md mt-6 leading-relaxed max-w-xl mx-auto font-medium">
          Request an appointment online in under 2 minutes. Our team will contact you shortly to confirm your preferred slot.
        </p>

        {/* Benefits list */}
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-slate-300 mt-8 mb-12">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span>Accepting New Patients</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span>Emergency Slots Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span>Direct Billing to Insurance</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/booking"
            className="bg-brand-teal hover:bg-brand-teal-hover text-white px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-all shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/35 cursor-pointer"
          >
            Book Appointment Online
          </Link>
          <a
            href="tel:+923070984307"
            className="border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-extrabold text-sm sm:text-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5 text-brand-teal" />
            <span>Call +92 307 0984307</span>
          </a>
        </div>
      </div>
    </section>
  );
}
