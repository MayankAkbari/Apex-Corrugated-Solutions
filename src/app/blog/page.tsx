'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Search, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function BlogIndexPage() {
  const { posts } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Structural Engineering', 'Sustainability', 'Logistics & Transit', 'Supply Chain Economics'];

  const filteredPosts = posts.filter(p => {
    const matchCat = selectedCat === 'All' || p.category === selectedCat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/Blog">
      
      {/* Hero Banner - Luminous Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <BookOpen size={14} className="text-[#B88746]" /> Packaging Knowledge & Engineering Research Hub
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            Industrial Packaging <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Insights</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Technical engineering papers on Edge Crush Test formulas, Cobb humidity mitigation, and sustainable Kraft transit optimization for B2B procurement leaders.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCat === cat ? 'bg-[#002E73] text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80 shrink-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, ECT, Cobb..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#002E73] shadow-xs font-medium"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800">No matching technical articles found</h3>
            <button onClick={() => { setSelectedCat('All'); setSearch(''); }} className="mt-4 px-6 py-2.5 rounded-xl bg-[#002E73] text-white text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all">
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group duration-300"
                itemScope
                itemProp="blogPost"
                itemType="https://schema.org/BlogPosting"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" itemProp="image" />
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 text-[#002E73] text-xs font-bold uppercase shadow-md border border-slate-200" itemProp="articleSection">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#002E73]" /> <time itemProp="datePublished">{post.date}</time></span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#002E73] transition-colors leading-snug tracking-tight" itemProp="headline">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium" itemProp="description">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <User size={14} className="text-[#B88746]" />
                    <span itemProp="name">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 group-hover:bg-[#002E73] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                    itemProp="url"
                  >
                    <span>Read Guide</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
