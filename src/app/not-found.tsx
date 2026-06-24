import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Stethoscope, ArrowRight, Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center py-24 px-4 bg-slate-50/25 text-center">
        <div className="max-w-md w-full bg-white border border-slate-100 p-8 sm:p-12 rounded-[36px] shadow-xl shadow-brand-blue/5 relative overflow-hidden">
          {/* Decorative graphic */}
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-brand-teal/5 blur-xl"></div>

          {/* Visual alert */}
          <div className="w-16 h-16 rounded-3xl bg-brand-light text-brand-teal flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Stethoscope className="w-8 h-8 animate-bounce" />
          </div>

          {/* Texts */}
          <h1 className="text-6xl sm:text-7xl font-black text-brand-blue tracking-tighter">404</h1>
          <h2 className="text-xl sm:text-2xl font-black text-brand-dark mt-4">Page Not Found</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
            The page you are looking for does not exist or has been relocated to another address. Use the links below to return to safety!
          </p>

          {/* Quick links */}
          <div className="flex flex-col gap-3 mt-8 text-left">
            <Link
              href="/"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-light hover:bg-brand-blue hover:text-white transition-colors group font-bold text-xs sm:text-sm text-slate-700"
            >
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 shrink-0" />
                <span>Go to Home Page</span>
              </div>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-light hover:bg-brand-blue hover:text-white transition-colors group font-bold text-xs sm:text-sm text-slate-700"
            >
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 shrink-0" />
                <span>Browse Our Treatments</span>
              </div>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+923070984307"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 hover:border-brand-teal text-slate-700 hover:text-brand-blue transition-colors group font-bold text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-brand-teal" />
                <span>Call Scheduling Desk</span>
              </div>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
