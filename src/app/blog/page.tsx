import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/CTASection';
import { blogsData } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Oral Health Blog & Dental Tips | Premium Clinic',
  description:
    'Read dental articles and oral hygiene tips. Expert guides on orthodontic braces, dental implants recovery, morning breath prevention, and veneers care.',
  alternates: {
    canonical: 'https://premiumdental.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-brand-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
              Dental Education
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
              Oral Health Insights & Treatment Guides
            </h1>
            <p className="text-slate-500 text-sm sm:text-md mt-6 leading-relaxed">
              Explore professional articles written by our board-certified clinical team. Learn how to prevent dental conditions, recover from surgery, and keep your teeth bright and strong.
            </p>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogsData.map((post) => (
                <div key={post.slug}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
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
