import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLdSchema from '@/components/JsonLdSchema';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { servicesData } from '@/data/services';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate metadata dynamically for each service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://premiumdental.com/services/${slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://premiumdental.com/services/${slug}`,
      images: [{ url: service.imageUrl }],
    },
  };
}

// Build all 18 service paths during static generation
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* FAQ structured data schema for SEO */}
      <JsonLdSchema type="FAQPage" data={{ faqs: service.faqs }} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-light py-20 px-4 relative overflow-hidden border-b border-slate-50">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                <Link href="/services" className="hover:text-brand-teal transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-brand-teal">{service.title}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight leading-tight">
                Specialist {service.title}
              </h1>
              <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link
                  href={`/booking?service=${encodeURIComponent(service.title)}`}
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md shadow-brand-teal/15 hover:shadow-lg transition-all cursor-pointer"
                >
                  Book Treatment Session
                </Link>
                <Link
                  href="/contact"
                  className="border border-slate-200 hover:border-slate-300 text-slate-700 bg-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative h-80 lg:h-[400px] w-full rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="object-cover w-full h-full"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Benefits & Value Proposition Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual numbers badge */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-blue to-brand-teal rounded-[40px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              <Sparkles className="w-10 h-10 text-brand-teal mb-6 animate-pulse" />
              <h3 className="text-2xl font-black tracking-tight leading-snug">
                Why Have Your {service.title} At Our Clinic?
              </h3>
              <p className="text-white/80 text-sm mt-4 leading-relaxed font-medium">
                We combine clinically superior materials, expert post-operative tracking, and board-certified practitioners to deliver beautiful, life-long smiles.
              </p>
              <div className="flex items-center gap-2 mt-8 text-xs font-bold text-brand-teal uppercase tracking-widest bg-white/10 p-3 rounded-2xl w-fit">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Satisfaction Rate</span>
              </div>
            </div>

            {/* Benefits lists */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-extrabold text-brand-dark mb-8">
                Key Benefits & Treatment Outcomes
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm sm:text-md">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Process Steps Section */}
        <section className="py-24 px-4 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                Treatment Path
              </p>
              <h3 className="text-3xl font-extrabold text-brand-dark">
                The {service.title} Process
              </h3>
              <p className="text-slate-500 text-sm mt-4">
                Learn what to expect during your diagnostic sessions and treatment appointments.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {service.process.map((step, idx) => (
                <div
                  key={step.step}
                  className="bg-white border border-slate-50 rounded-3xl p-8 shadow-sm flex flex-col relative"
                >
                  {/* Step counter */}
                  <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue flex items-center justify-center font-black text-sm mb-6">
                    {step.step}
                  </div>
                  <h4 className="font-extrabold text-lg text-brand-dark mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Specific to the Service */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
                FAQ
              </p>
              <h3 className="text-3xl font-extrabold text-brand-dark">
                Service Frequently Asked Questions
              </h3>
            </div>

            <FAQAccordion items={service.faqs} />
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="py-20 px-4 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,168,150,0.1),transparent)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to schedule your {service.title}?
            </h3>
            <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Book your consultation online or dial our booking hotline to discuss customized pricing and plans.
            </p>
            <div className="flex gap-4 justify-center items-center mt-8 flex-wrap">
              <Link
                href={`/booking?service=${encodeURIComponent(service.title)}`}
                className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-colors cursor-pointer"
              >
                Schedule Consult
              </Link>
              <a
                href="tel:+18005550199"
                className="border border-slate-700 hover:border-slate-500 bg-slate-800 text-white font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                Call Hotline
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
