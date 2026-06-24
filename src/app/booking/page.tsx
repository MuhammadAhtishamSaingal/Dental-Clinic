import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Calendar, ShieldCheck, HelpCircle, PhoneCall } from 'lucide-react';

interface Props {
  searchParams: Promise<{
    service?: string;
    doctor?: string;
  }>;
}

export const metadata: Metadata = {
  title: 'Book an Appointment Online | Premium Dental Clinic',
  description:
    'Schedule your visit online. Pick a dental service, choose a preferred date and time, and submit your booking details in under 2 minutes.',
  alternates: {
    canonical: 'https://premiumdental.com/booking',
  },
};

export default async function BookingPage({ searchParams }: Props) {
  const { service, doctor } = await searchParams;

  const steps = [
    {
      icon: Calendar,
      title: 'Submit Request',
      desc: 'Fill out your name, contact info, and select your preferred scheduling time slot.'
    },
    {
      icon: PhoneCall,
      title: 'Quick Call Confirmation',
      desc: 'Our administrative coordinator will call or SMS you within 1 business hour to finalize your time slot.'
    },
    {
      icon: ShieldCheck,
      title: 'Visit Our Clinic',
      desc: 'Arrive at our clinic lounge, enjoy check-in, and begin your expert dental care.'
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/30">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <AppointmentForm
                preselectedService={service}
                preselectedDoctor={doctor}
              />
            </div>

            {/* Right Column: Information & Policies */}
            <div className="lg:col-span-5 space-y-8">
              {/* Process Guide */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h3 className="font-extrabold text-lg text-brand-dark mb-6">
                  Booking Process Steps
                </h3>
                <div className="space-y-6">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-brand-dark">{step.title}</h4>
                          <p className="text-slate-500 text-xs mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Insurance check box */}
              <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-3xl p-8 text-white shadow-md relative overflow-hidden">
                <h3 className="font-extrabold text-lg">Insurance & Billing Questions?</h3>
                <p className="text-white/80 text-xs sm:text-sm mt-3 leading-relaxed">
                  We are in-network with Aetna, Cigna, Delta Dental, MetLife, and major PPO plans. 
                  Our front desk directly submits all claims. If you do not have insurance, we provide flexible, interest-free payment programs.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-xl w-fit">
                  <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>No Consultation Fee for First Exam</span>
                </div>
              </div>

              {/* Booking FAQ snippet */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h3 className="font-extrabold text-lg text-brand-dark mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>Appointment F.A.Q.</span>
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div>
                    <h5 className="font-bold text-brand-dark">Can I cancel my slot?</h5>
                    <p className="text-slate-500 mt-1">
                      Yes, please notify us at least 24 hours in advance to reschedule or cancel your slot without incurring fee holds.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark">What should I bring?</h5>
                    <p className="text-slate-500 mt-1">
                      Please bring a photo ID and your current dental insurance card (if applicable).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
