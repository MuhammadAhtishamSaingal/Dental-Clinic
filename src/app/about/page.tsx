import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/CTASection';
import { Target, Award, Shield, Smile } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Premium Dental Clinic Group',
  description:
    'Learn about our clinic philosophy, state-of-the-art facilities, certifications, and our mission to provide elite, pain-free dental care.',
  alternates: {
    canonical: 'https://premiumdental.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Safety & Disinfection',
      desc: 'We follow stringent CDC and ADA sterilization guidelines. Every instrument goes through advanced multi-stage autoclaving and medical disinfection.'
    },
    {
      icon: Target,
      title: 'Technical Precision',
      desc: 'By investing in 3D CBCT imaging, surgical guides, and computer-guided laser tools, we minimize human margin of error and maximize restoration lifetime.'
    },
    {
      icon: Award,
      title: 'Continuing Education',
      desc: 'Dentistry is constantly evolving. Our specialists undergo 100+ hours of advanced post-graduate fellowship training every year.'
    },
    {
      icon: Smile,
      title: 'Patient-First Focus',
      desc: 'We understand dental anxiety is real. We provide luxury sedation plans, ambient-lit surgical rooms, and a gentle care framework to keep you comfortable.'
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Intro Hero Section */}
        <section className="bg-brand-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
              About Our Group
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              Dedicated to Setting the Standard in Oral Healthcare
            </h1>
            <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
              Founded in 2011, Premium Dental Clinic was established to create a sanctuary where state-of-the-art diagnostic technology meets artistic cosmetic restoration. We treat patients with a combination of elite technical skill and absolute, comforting care.
            </p>
          </div>
        </section>

        {/* Narrative & Visual Showcase */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story text */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Our Philosophy: Trust-Built, Precision-Driven Dental Care
              </h2>
              <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                We believe a dental clinic visit shouldn\'t be something you dread. From the moment you step into our lounge, you are greeted with calming aromatherapy, a warm beverage bar, and a friendly administrative team that handles all insurance claims on your behalf.
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                But premium comfort is only half of the equation. In the treatment room, we operate with maximum precision. We utilize advanced digital impression systems—say goodbye to uncomfortable tray putty—and high-definition intraoral cameras so you can see exactly what our doctors see, putting you in full control of your oral health choices.
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Whether you need simple preventative care or a multi-implant full arch rebuild, we treat your teeth with long-term biology in mind, preserving as much natural tooth structure as possible.
              </p>
            </div>

            {/* Visual Image */}
            <div className="relative h-[480px] rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="Clinic Interior - Dental Consultation"
                className="object-cover w-full h-full"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-4 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
                Our Core Clinic Principles
              </h2>
              <p className="text-slate-500 text-sm mt-4">
                These four values guide every single diagnostic plan and surgery we execute.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-slate-100 rounded-3xl p-8 flex gap-6 items-start shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-brand-dark mb-2">{v.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dynamic CTA */}
        <CTASection />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
