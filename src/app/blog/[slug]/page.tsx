'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, ShieldCheck, BookOpen, Factory } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function BlogPostDetail() {
  const params = useParams();
  const { posts } = useApp();
  const slug = params?.slug as string;

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-[#FAFAF9]">
        <BookOpen size={48} className="text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Research Article Not Found</h2>
        <Link href="/blog" className="mt-6 px-6 py-3 rounded-xl bg-[#002E73] text-white font-bold text-xs uppercase tracking-wider">
          Back to Insights Hub
        </Link>
      </div>
    );
  }

  const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 2);

  // JSON-LD TechArticle schema injection for AEO / GEO
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Senior Industrial Packaging Engineer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Apex Corrugated Solutions Pvt. Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apexcorrugated.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://apexcorrugated.in/blog/${post.slug}`
    }
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/TechArticle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      {/* Header Banner - Executive Light / High Contrast Header */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 md:px-8 border-b border-slate-200">
        <div className="max-w-[1050px] mx-auto space-y-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-[#002E73] hover:text-slate-900 transition-colors font-bold uppercase tracking-wider">
            <ArrowLeft size={14} /> Back to Research Insights Hub
          </Link>

          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase border border-[#002E73]/20" itemProp="articleSection">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight" itemProp="headline">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-4 border-t border-slate-200 font-medium">
            <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
              <User size={16} className="text-[#002E73]" />
              <span className="font-bold text-slate-900" itemProp="name">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#002E73]" />
              <time itemProp="datePublished">{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#002E73]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-16 px-4 md:px-8 max-w-[1050px] mx-auto">
        <div className="relative h-[440px] w-full rounded-3xl overflow-hidden shadow-md mb-12 border border-slate-200 bg-slate-100">
          <Image src={post.image} alt={post.title} fill className="object-cover" itemProp="image" />
        </div>

        <div className="prose max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg font-normal" itemProp="articleBody">
          <p className="font-semibold text-xl text-slate-900 border-l-4 border-[#002E73] pl-5 py-1 bg-slate-50 rounded-r-2xl italic leading-relaxed" itemProp="description">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line leading-relaxed space-y-4 pt-4 text-slate-800 font-medium">
            {post.content}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#002E73] text-white flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
            {post.author.charAt(0)}
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase text-[#002E73] tracking-wider block">Written by Industrial Packaging Specialist</span>
            <h4 className="text-lg font-black text-slate-900">{post.author}</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Senior structural packaging designer specializing in ECT formula calculations, CAD box prototyping, and heavy-duty corrugated export engineering at Apex Corrugated Solutions Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 md:px-8 max-w-[1250px] mx-auto border-t border-slate-200">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Related Technical Packaging Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(rp => (
              <Link key={rp.id} href={`/blog/${rp.slug}`} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex duration-300">
                <div className="relative w-44 h-auto shrink-0 bg-slate-100">
                  <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 space-y-2 flex flex-col justify-center">
                  <span className="text-[11px] font-bold uppercase text-[#002E73]">{rp.category}</span>
                  <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#002E73] line-clamp-2 transition-colors">{rp.title}</h4>
                  <span className="text-xs text-slate-400 font-semibold block mt-1">{rp.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
