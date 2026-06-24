'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col group h-full">
      {/* Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-brand-teal text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>

      {/* Body content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-300" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-300" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-lg text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-5 mt-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center">
              <User className="w-3 h-3 text-brand-blue" />
            </div>
            <span>By {post.author}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-teal transition-colors group/btn"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
