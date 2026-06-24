import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/CTASection';
import { faqsData } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Premium Dental',
  description:
    'Got questions? Read our full FAQ documentation. Learn about booking procedures, insurance compatibility, pricing, financing models, and custom dental plans.',
  alternates: {
    canonical: 'https://premiumdental.com/faq',
  },
};

export default function FAQPage() {
  // Get all unique categories
  const categories = Array.from(new Set(faqsData.map((item) => item.category).filter(Boolean))) as string[];

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-brand-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
              FAQ Document
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              Frequently Asked Clinic Questions
            </h1>
            <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
              Find quick answers regarding our booking guidelines, payment methods, insurance processing, child care, and medical procedures. If you have other questions, contact us via email or WhatsApp!
            </p>
          </div>
        </section>

        {/* FAQ Categories Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-16">
            {categories.map((category) => {
              const filteredFaqs = faqsData.filter((item) => item.category === category);
              return (
                <div key={category} className="space-y-6">
                  <div className="border-b border-slate-100 pb-3 mb-6">
                    <h3 className="text-lg font-black uppercase tracking-wider text-brand-blue">
                      {category}
                    </h3>
                  </div>
                  <FAQAccordion items={filteredFaqs} />
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
