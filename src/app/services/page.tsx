import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/CTASection';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Specialist Dental Services | Premium Clinic',
  description:
    'Explore our 18 clinical dental treatments including general cleanings, porcelain veneers, dental implants, root canal therapy, braces, and Invisalign.',
  alternates: {
    canonical: 'https://premiumdental.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-brand-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
              Dental Treatments
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              Comprehensive Oral Solutions for All Life Stages
            </h1>
            <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
              We provide 18 specialized dental services spanning preventative family care, cosmetic smile makeovers, and advanced surgical restorations. Select any treatment to view the details, benefits, and surgical procedures.
            </p>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Actions */}
        <CTASection />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
