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
    <div className="overflow-hidden pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <Camera size={14} /> Industrial Visual Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Gallery</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Witness our automated corrugating lines, precision rotary slotters, testing lab, and palletized warehouse in action.
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
                  ? 'bg-[#002E73] text-white shadow-xl border border-[#B88746]'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.url || item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001633] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002E73] text-[#B88746] text-[11px] font-bold uppercase shadow-md border border-white/20">
                  {item.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
