import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Premium Dental Clinic',
  description: 'Understand the terms of service, appointment cancellation policies, payment rules, and liability disclaimers for our dental clinic group.',
  alternates: {
    canonical: 'https://premiumdental.com/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/10 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-3xl p-6 sm:p-12 shadow-sm text-slate-600 text-sm sm:text-md space-y-6">
          <h1 className="text-3xl font-extrabold text-brand-dark tracking-tight leading-tight border-b border-slate-100 pb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 font-bold text-xs">Last Updated: June 24, 2026</p>

          <p>
            Welcome to the Premium Dental Clinic website. By browsing or utilizing our online booking tools, forms, and services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">1. Appointment Booking Policy</h2>
          <p>
            Submitting a booking request via our online form does **not** guarantee an immediate reservation. 
            All requests represent preferences. An appointment is only finalized and locked once our coordination team contacts you (via phone call or SMS) and explicitly confirms your scheduled slot.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">2. Cancellation & Rescheduling</h2>
          <p>
            We respect your schedule and request that you respect ours. We require at least **24 hours notice** for any cancellations or changes to your scheduled appointment. 
            Failure to notify us in advance may result in a booking hold or scheduling restriction for future appointments.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">3. Medical Disclaimers</h2>
          <p>
            All educational information, blogs, and descriptions provided on this website are for general informational purposes only. 
            They do **not** constitute professional medical diagnosis, advice, or treatment plans. 
            Always seek direct consultation from a licensed dentist or doctor regarding any medical symptoms or oral discomfort.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">4. Payment & Billing Responsibilities</h2>
          <p>
            While our administrative team will submit claims to your dental insurance provider as a convenience, you remain ultimately responsible for all co-pays, deductibles, or any costs not covered by your plan. 
            All cash payments or financing arrangements (e.g. CareCredit) must be completed or set up at the front desk prior to executing specialized clinical treatments.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of Pakistan, without regard to conflict of law principles. Any legal disputes arising from website usage will be resolved in courts located in Karachi.
          </p>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
