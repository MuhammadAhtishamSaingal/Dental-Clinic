'use client';

import React from 'react';
import { AlertTriangle, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-rose-500 text-white py-8 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left info */}
        <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
          <div className="p-3 bg-white/10 rounded-2xl animate-pulse">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl sm:text-2xl tracking-tight">
              Dental Emergency? We Can Help!
            </h3>
            <p className="text-white/80 text-sm mt-0.5 max-w-xl font-medium">
              Severe toothache, broken fillings, or swelling? We reserve daily priority slots for emergency patients. Walk-ins welcome.
            </p>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="tel:+18005550199"
            className="bg-white text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md flex items-center gap-2 group"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: +1 (800) 555-0199</span>
          </a>
          <Link
            href="/booking?emergency=true"
            className="border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-1 group"
          >
            <span>Book Emergency Slot</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
