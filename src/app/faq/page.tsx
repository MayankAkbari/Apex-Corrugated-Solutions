'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/mockData';
import Link from 'next/link';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [openId, setOpenId] = useState<string | null>('1');

  const categories = ['All', 'Technical & Engineering', 'Orders & Prototyping', 'Sustainability & FSC', 'Shipping & Logistics'];

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchCat = selectedCat === 'All' || item.category === selectedCat;
    const matchSearch = item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="overflow-hidden pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <HelpCircle size={14} /> Packaging Support Center
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Questions</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about corrugated box ply specifications, minimum order quantities (MOQ), and export Cobb compliance.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 px-4 md:px-8 max-w-[1400px] mx-auto">
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
              placeholder="Search FAQs..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#002E73] shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
              <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-700">No matching answers found</h3>
              <p className="text-sm text-gray-500 mt-1">Contact our B2B packaging consultants for direct answers.</p>
            </div>
          ) : (
            filteredFaqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#001633]"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B88746]" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${openId === faq.id ? 'rotate-180 text-[#002E73]' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="p-10 rounded-3xl glass-card-dark bg-[#001633] text-white border border-white/20 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold">Have A Custom Technical Question?</h3>
          <p className="text-sm text-[#B2B2B2] max-w-xl mx-auto">
            Our structural packaging designers are available Monday through Saturday to discuss CAD die-lines and freight test requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact" className="px-8 py-3.5 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider">
              Contact Engineering Team
            </Link>
            <a href="tel:+919876543210" className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2">
              <PhoneCall size={16} /> +91 98765 43210
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
