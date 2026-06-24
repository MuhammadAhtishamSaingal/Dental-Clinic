import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Premium Dental Clinic',
  description:
    'Have questions or need assistance? Fill out our contact form, find our Midtown Manhattan clinic on Google Maps, or call our booking desk directly.',
  alternates: {
    canonical: 'https://premiumdental.com/contact',
  },
};

export default function ContactPage() {
  const channels = [
    {
      icon: Phone,
      title: 'Phone Consultation',
      value: '+1 (800) 555-0199',
      href: 'tel:+18005550199',
      label: 'Call Booking Hotline'
    },
    {
      icon: MessageSquare,
      title: 'Real-Time WhatsApp Chat',
      value: '+1 (800) 555-0199',
      href: 'https://wa.me/18005550199',
      label: 'Open WhatsApp Chat'
    },
    {
      icon: Mail,
      title: 'General Support Email',
      value: 'appointments@premiumdental.com',
      href: 'mailto:appointments@premiumdental.com',
      label: 'Write an Email'
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/20">
        {/* Intro */}
        <section className="bg-brand-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
              Reach Out
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              We are Here to Support Your Dental Journey
            </h1>
            <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
              Have questions regarding specific dental procedures, scheduling, pricing options, or insurance coverage? Contact our administration or front desk desk. We are ready to help.
            </p>
          </div>
        </section>

        {/* Contact Form & Side Details */}
        <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick connection widgets */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="font-extrabold text-lg text-brand-dark">Instant Channels</h3>
              {channels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-dark">{channel.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{channel.value}</p>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-brand-teal text-xs font-bold hover:text-brand-teal-hover transition-colors inline-block mt-2"
                      >
                        {channel.label} &rarr;
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clinic hours */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-extrabold text-lg text-brand-dark mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-teal" />
                <span>Operating Hours</span>
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold">Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="font-bold text-brand-dark">Sunday</span>
                  <span className="text-red-500 font-bold">Emergency Cases Only</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-extrabold text-lg text-brand-dark mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-teal" />
                <span>Clinic Location</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                123 Medical Plaza, Suite 400, New York, NY 10016 <br />
                <span className="text-slate-400 mt-1 block">Cross streets: 5th Ave and 34th St (Midtown)</span>
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="px-4 py-8 max-w-7xl mx-auto">
          <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4286129881643!2d-73.9882236845938!3d40.74844447932828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1652435759367!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Dental Clinic Location Google Map"
            ></iframe>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
