'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Search, Calendar, User, ArrowRight } from 'lucide-react';
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
    <div className="overflow-hidden pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <BookOpen size={14} /> Packaging Knowledge & Research
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Industrial Packaging <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Insights</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Technical guides on Edge Crush Test formulas, Cobb humidity mitigation, and sustainable timber replacement for export managers.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCat === cat ? 'bg-[#002E73] text-white shadow-lg border border-[#B88746]' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80 shrink-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, ECT, Cobb..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#002E73] shadow-sm"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-700">No matching research articles</h3>
            <button onClick={() => { setSelectedCat('All'); setSearch(''); }} className="mt-4 px-6 py-2.5 rounded-xl bg-[#002E73] text-white text-xs font-bold uppercase">
              Reset Search
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
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#001633]/90 text-[#B88746] text-xs font-bold uppercase shadow-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#001633] group-hover:text-[#002E73] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                    <User size={14} className="text-[#B88746]" />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="px-4 py-2 rounded-xl bg-[#001633] group-hover:bg-[#002E73] text-white font-bold text-xs uppercase flex items-center gap-1.5 transition-colors"
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
