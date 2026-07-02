'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, ShieldCheck, BookOpen } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function BlogPostDetail() {
  const params = useParams();
  const { posts } = useApp();
  const slug = params?.slug as string;

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <BookOpen size={48} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-[#001633]">Research Article Not Found</h2>
        <Link href="/blog" className="mt-6 px-6 py-3 rounded-xl bg-[#002E73] text-white font-bold text-xs uppercase">
          Back to Insights Hub
        </Link>
      </div>
    );
  }

  const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="overflow-hidden pb-24">
      
      {/* Header Banner */}
      <section className="relative bg-[#001633] text-white py-20 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto space-y-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-[#B2B2B2] hover:text-white transition-colors font-bold uppercase tracking-wider">
            <ArrowLeft size={14} /> Back to Research Insights
          </Link>

          <span className="inline-block px-3 py-1 rounded-full bg-[#002E73] text-[#B88746] text-xs font-bold uppercase border border-white/20">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#B2B2B2] pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#B88746]" />
              <span className="font-bold text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#B88746]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#B88746]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-16 px-4 md:px-8 max-w-[1000px] mx-auto">
        <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-200">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose max-w-none text-gray-700 space-y-6 leading-relaxed text-base sm:text-lg">
          <p className="font-semibold text-xl text-[#001633] border-l-4 border-[#B88746] pl-4 italic">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line leading-relaxed space-y-4">
            {post.content}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#002E73] text-[#B88746] flex items-center justify-center text-xl font-bold shrink-0">
            {post.author.charAt(0)}
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#B88746]">Written by Industrial Packaging Engineer</span>
            <h4 className="text-lg font-bold text-[#001633]">{post.author}</h4>
            <p className="text-xs text-gray-600 mt-1">
              Senior structural packaging designer specializing in ECT optimization, CAD prototyping, and heavy industrial box engineering at Apex Corrugated Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 md:px-8 max-w-[1200px] mx-auto border-t border-gray-200">
          <h3 className="text-2xl font-bold text-[#001633] mb-8">Related Packaging Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(rp => (
              <Link key={rp.id} href={`/blog/${rp.slug}`} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all group flex">
                <div className="relative w-40 h-auto shrink-0">
                  <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#B88746]">{rp.category}</span>
                  <h4 className="text-base font-bold text-[#001633] group-hover:text-[#002E73] line-clamp-2">{rp.title}</h4>
                  <span className="text-xs text-gray-400 block">{rp.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
