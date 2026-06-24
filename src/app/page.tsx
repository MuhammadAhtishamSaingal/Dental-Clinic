import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmergencyBanner from '@/components/EmergencyBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import Testimonials from '@/components/Testimonials';
import InsurancePartners from '@/components/InsurancePartners';
import GoogleReviews from '@/components/GoogleReviews';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import JsonLdSchema from '@/components/JsonLdSchema';

import { servicesData } from '@/data/services';
import { doctorsData } from '@/data/doctors';
import { blogsData } from '@/data/blogs';
import { faqsData } from '@/data/faqs';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Premium Dental Clinic | General, Cosmetic & Implant Dentistry',
  description:
    'Experience world-class, anxiety-free dental care. Offering dental implants, teeth whitening, veneers, Invisalign, and 24/7 emergency dental care in Karachi, Pakistan.',
  alternates: {
    canonical: 'https://premiumdental.com',
  },
  openGraph: {
    title: 'Premium Dental Clinic | General, Cosmetic & Implant Dentistry',
    description:
      'Experience world-class, anxiety-free dental care. Offering dental implants, teeth whitening, veneers, Invisalign, and 24/7 emergency dental care in Karachi, Pakistan.',
    url: 'https://premiumdental.com',
    siteName: 'Premium Dental Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Premium Dental Clinic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Dental Clinic | General, Cosmetic & Implant Dentistry',
    description:
      'Experience world-class, anxiety-free dental care. Offering dental implants, teeth whitening, veneers, Invisalign, and 24/7 emergency dental care in Karachi, Pakistan.',
    images: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function Home() {
  // General Local Business Schema Data
  const localBusinessData = {
    name: 'Premium Dental Clinic Group',
    description: 'Elite dental care providing general, restorative, cosmetic, and emergency treatments.',
  };

  return (
    <>
      {/* Dynamic SEO JSON-LD Schemas */}
      <JsonLdSchema type="MedicalClinic" data={localBusinessData} />
      <JsonLdSchema type="FAQPage" data={{ faqs: faqsData.slice(0, 4) }} />

      {/* Page Header */}
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Emergency Care Banner */}
        <EmergencyBanner />

        {/* Section 3: About Clinic Overview */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop"
                    alt="Dental cleaning"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-44 rounded-3xl overflow-hidden border border-slate-100 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=400&auto=format&fit=crop"
                    alt="Doctor checking tooth"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-44 rounded-3xl overflow-hidden border border-slate-100 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&auto=format&fit=crop"
                    alt="Invisalign scan"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
                    alt="Modern reception room"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right text overview */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                About Our Clinic
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                Where Science Meets Cosmetic Artistry
              </h2>
              <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
                At our state-of-the-art clinic, we believe that exceptional dentistry is built on a foundation of trust, comfort, and unmatched expertise. 
                Led by Dr. Sarah Mitchell, our team of board-certified dental specialists provides comprehensive, anxiety-free treatments tailored to your unique smile targets.
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                From simple diagnostic checkups to complex multi-tooth cosmetic veneers and guided implant surgery, we utilize FDA-approved, cutting-edge equipment to guarantee outstanding comfort and longevity.
              </p>

              {/* Stat callouts */}
              <div className="grid grid-cols-3 gap-6 sm:gap-8 w-full mt-8 pt-8 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="font-extrabold text-2xl sm:text-3xl text-brand-blue">15+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-2xl sm:text-3xl text-brand-blue">10k+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">
                    Happy Patients
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-2xl sm:text-3xl text-brand-blue">99.8%</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">
                    Success Rate
                  </span>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-1 text-sm font-bold text-brand-teal hover:text-brand-teal-hover transition-colors group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 5: Services Overview */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                  Our Specializations
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                  Advanced Dental Solutions for All Patient Needs
                </h2>
              </div>
              <Link
                href="/services"
                className="py-3 px-6 rounded-full border border-slate-200 hover:border-slate-300 font-bold text-xs sm:text-sm text-slate-700 bg-white transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                View All 18 Services
              </Link>
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.slice(0, 6).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Meet Our Doctors */}
        <section className="py-24 px-4 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                Expert Medical Team
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                Meet Our Board-Certified Dental Specialists
              </h2>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Our clinicians combine rigorous international fellowships with years of reconstructive experience to ensure the highest standards of safety.
              </p>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctorsData.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Before & After Smile Gallery */}
        <BeforeAfterGallery />

        {/* Section 8: Patient Testimonials */}
        <Testimonials />

        {/* Section 9: Insurance Partners */}
        <InsurancePartners />

        {/* Section 10: Google Reviews Trust Widget */}
        <GoogleReviews />

        {/* Section 11: FAQ Section */}
        <section className="py-24 px-4 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                Got Questions?
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Get answers to commonly asked questions about bookings, insurance policies, payment plans, and treatments.
              </p>
            </div>

            {/* Accordion list */}
            <FAQAccordion items={faqsData.slice(0, 4)} />

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-teal hover:text-brand-teal-hover transition-colors group"
              >
                <span>Read Full FAQ Document</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 12: Latest Blogs */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                  Dental Insights
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                  Latest Articles & Patient Oral Health Tips
                </h2>
              </div>
              <Link
                href="/blog"
                className="py-3 px-6 rounded-full border border-slate-200 hover:border-slate-300 font-bold text-xs sm:text-sm text-slate-700 bg-white transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                View Oral Blog
              </Link>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogsData.map((post) => (
                <div key={post.slug}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 13: Appointment Booking CTA */}
        <CTASection />

        {/* Section 14: Contact Information Overview & Section 15: Google Maps */}
        <section className="py-24 px-4 bg-white border-t border-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            {/* Left Contact Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                  Get in Touch
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-none">
                  Visit Our Clinic
                </h2>
                <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                  Our state-of-the-art office is conveniently located in Clifton, Karachi. We offer dedicated parking and full accessibility support.
                </p>

                {/* Details list */}
                <div className="flex flex-col gap-6 mt-10 text-slate-600 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-xs sm:text-sm">Location Address</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        123 Medical Plaza, Block 5, Clifton, Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-xs sm:text-sm">Booking Hotline</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        <a href="tel:+923070984307" className="hover:text-brand-teal transition-colors">
                          +92 307 0984307
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-xs sm:text-sm">General Email</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        <a
                          href="mailto:appointments@premiumdental.com"
                          className="hover:text-brand-teal transition-colors"
                        >
                          appointments@premiumdental.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-xs sm:text-sm">Clinic Working Hours</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                        Monday - Saturday: 9:00 AM - 6:00 PM <br />
                        Saturday: 9:00 AM - 2:00 PM <br />
                        <span className="text-brand-teal font-semibold">Sunday: Closed (Emergency Cases Only)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 flex gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-sm transition-colors text-center"
                >
                  Contact Form
                </Link>
                <Link
                  href="/booking"
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-sm transition-colors text-center"
                >
                  Book Online
                </Link>
              </div>
            </div>

            {/* Right Map Column (Section 15: Google Maps Frame) */}
            <div className="lg:col-span-7 rounded-[32px] overflow-hidden border border-slate-100 shadow-xl relative min-h-[350px]">
              {/* Google Maps iFrame */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.365319808383!2d67.0306126!3d24.8162232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33db0a9fd1d1d%3A0x86bb8be128d5781!2sClifton%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen={false}
                loading="lazy"
                title="Clinic Map Location"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Call trigger */}
      <WhatsAppButton />

      {/* Page Footer */}
      <Footer />
    </>
  );
}
