'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/mockData';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Machinery & Automation', 'Products & Shippers', 'Quality Testing Lab', 'Warehouse & Fleet'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/ImageGallery">
      
      {/* Hero Banner - Luminous Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <Camera size={14} className="text-[#B88746]" /> Industrial Visual Showcase & Plant Tour
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            Manufacturing <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Gallery</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Witness our automated 5-ply and 7-ply corrugating lines, precision rotary die-cutters, computerized testing lab, and palletized warehouse in action.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#002E73] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group duration-300"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.url || item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  itemProp="contentUrl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 text-[#002E73] text-[11px] font-bold uppercase shadow-md border border-slate-200">
                  {item.category}
                </span>
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h4 className="text-xl font-bold tracking-tight" itemProp="name">{item.title}</h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed" itemProp="description">Verified industrial facility capture — Ahmedabad plant.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
