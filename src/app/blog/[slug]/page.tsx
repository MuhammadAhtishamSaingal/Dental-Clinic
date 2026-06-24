import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLdSchema from '@/components/JsonLdSchema';
import Link from 'next/link';
import { Calendar, User, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { blogsData } from '@/data/blogs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | Dental Clinic Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://premiumdental.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://premiumdental.com/blog/${slug}`,
      images: [{ url: post.imageUrl }],
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other recommended articles
  const recommendations = blogsData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Dynamic SEO structured data schema */}
      <JsonLdSchema type="BlogPosting" data={post} />

      <Header />

      <main className="flex-grow bg-slate-50/20 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Main Article Column */}
          <article className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-brand-blue/5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
              <Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-brand-teal line-clamp-1">{post.title}</span>
            </div>

            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Articles</span>
            </Link>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Metadata bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-semibold border-y border-slate-100 py-4 my-8">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-300" />
                <span>Written by {post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>Published on {post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-300" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 sm:h-[400px] w-full rounded-[28px] overflow-hidden border border-slate-100 shadow-md mb-10">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Article Content Body */}
            <div
              className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-md leading-relaxed space-y-6 
                         prose-headings:text-brand-dark prose-headings:font-black prose-headings:tracking-tight 
                         prose-h2:text-2xl prose-h3:text-xl prose-ul:list-disc prose-ul:pl-6 prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </article>

          {/* Right Side Column */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Recommended Posts */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-extrabold text-lg text-brand-dark mb-6">Recommended Reading</h3>
              <div className="space-y-6">
                {recommendations.map((rec) => (
                  <div key={rec.slug} className="flex gap-4 items-start border-b border-slate-50 pb-6 last:border-b-0 last:pb-0">
                    {/* Small thumbnail */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-50 shrink-0 border border-slate-100">
                      <img src={rec.imageUrl} alt={rec.title} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-brand-dark leading-snug hover:text-brand-teal transition-colors">
                        <Link href={`/blog/${rec.slug}`}>{rec.title}</Link>
                      </h4>
                      <p className="text-slate-400 text-[10px] font-bold mt-1.5 uppercase">{rec.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Banner */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <h3 className="font-black text-xl leading-snug">Need to see a specialist?</h3>
              <p className="text-white/80 text-xs sm:text-sm mt-3 leading-relaxed">
                Consult with our board-certified medical staff. Fill out our online request form to confirm a slot.
              </p>
              <Link
                href="/booking"
                className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-full bg-white text-brand-blue hover:bg-slate-50 font-bold text-sm transition-colors cursor-pointer"
              >
                Book Appointment
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
