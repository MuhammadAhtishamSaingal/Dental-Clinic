import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Premium Dental Clinic',
  description: 'Learn how we collect, store, protect, and handle your medical and contact information in compliance with HIPAA and data protection laws.',
  alternates: {
    canonical: 'https://premiumdental.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/10 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-3xl p-6 sm:p-12 shadow-sm text-slate-600 text-sm sm:text-md space-y-6">
          <h1 className="text-3xl font-extrabold text-brand-dark tracking-tight leading-tight border-b border-slate-100 pb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 font-bold text-xs">Last Updated: June 24, 2026</p>

          <p>
            At Premium Dental Clinic, we take the confidentiality of your personal and medical information seriously. 
            This Privacy Policy outlines how we collect, use, store, and safeguard your data when you visit our website, submit appointment requests, or contact us through online forms.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">1. HIPAA & Medical Records Privacy</h2>
          <p>
            As a healthcare provider, all patient health information (PHI) collected offline or online is strictly governed by the Health Insurance Portability and Accountability Act (HIPAA) and corresponding medical confidentiality laws. 
            Any medical details or symptoms shared in booking forms are kept confidential, encrypted, and only accessed by authorized clinical practitioners.
          </p>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">2. Information We Collect</h2>
          <p>
            When utilizing our website, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Contact Data:</strong> Name, email address, phone number when submitting forms.</li>
            <li><strong>Appointment Preferences:</strong> Selected services, date, time slots, and optional text notes.</li>
            <li><strong>Device & Analytics Data:</strong> IP addresses, browser types, and referral sources collected via analytical platforms to improve page speeds.</li>
          </ul>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">3. How We Use Your Data</h2>
          <p>
            We process your information to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Book, modify, and confirm your scheduled dental appointments.</li>
            <li>Respond to support or general inquiry requests.</li>
            <li>Send email confirmations and reminder SMS texts.</li>
            <li>Ensure website functionality, performance, and security.</li>
          </ul>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">4. Sharing Your Information</h2>
          <p>
            We **never** sell, trade, or rent your personal contact information or health history details to third-party marketing companies. 
            Information is only shared under standard medical procedures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With your insurance provider to process claims.</li>
            <li>With specialized clinical labs for fabricating custom crowns, bridges, or clear aligners.</li>
            <li>If required by federal law or regulatory enforcement.</li>
          </ul>

          <h2 className="text-xl font-extrabold text-brand-dark mt-8 pt-4">5. Contact Information</h2>
          <p>
            If you have questions regarding our HIPAA compliance or wish to review your records data, contact our coordinator at:
            <br />
            <strong>Email:</strong> privacy@premiumdental.com
            <br />
            <strong>Phone:</strong> +1 (800) 555-0199
          </p>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
