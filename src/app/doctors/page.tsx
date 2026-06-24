import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoctorCard from '@/components/DoctorCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/CTASection';
import { doctorsData } from '@/data/doctors';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Dental Specialists & Surgeons | Premium Clinic',
  description:
    'Meet our board-certified dentists and oral surgeons. Expert dental implants, cosmetic smile makeovers, and orthodontic care from Columbia and UPenn graduates.',
  alternates: {
    canonical: 'https://premiumdental.com/doctors',
  },
};

export default function DoctorsPage() {
  const credentials = [
    'Board-Certified Specialists',
    'Ivy League Clinical Education',
    'Members of AACD & AAOMS',
    '100+ Combined Years of Clinical Practice',
    'Sedation Certified Clinicians',
    'Advanced Guided 3D Implant Surgeons'
  ];

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-brand-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
              Medical Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              Experienced, Board-Certified Dental Specialists
            </h1>
            <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
              Our clinic comprises world-class dental specialists, orthodontists, and maxillofacial surgeons. We bring years of university hospital practice and research to deliver precise, pain-free outcomes.
            </p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctorsData.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>

        {/* Credentials trust indicators */}
        <section className="py-16 px-4 bg-brand-light border-t border-slate-100">
          <div className="max-w-5xl mx-auto bg-white border border-slate-50 rounded-[32px] p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight leading-snug">
                  Uncompromised Standards in Clinical Excellence
                </h3>
                <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                  We don\'t believe in generalist solutions. Each case is routed to the exact doctor holding specialized fellowships in that discipline, ensuring high success rates.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA booking banner */}
        <CTASection />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
