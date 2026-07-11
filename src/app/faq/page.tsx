'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
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
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/FAQPage">
      
      {/* Hero Banner - Luminous Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <HelpCircle size={14} className="text-[#B88746]" /> Packaging Support Center & Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            Frequently Asked <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Questions</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Everything you need to know about corrugated box ply specifications, minimum order quantities (MOQ), Cobb water absorption testing, and export container compliance.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 px-4 md:px-8 max-w-[1550px] mx-auto">
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
              placeholder="Search specifications, Cobb, MOQ..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#002E73] shadow-xs font-medium"
            />
          </div>
        </div>

        {/* Accordion List with AEO / Microdata */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <HelpCircle size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-800">No matching technical answers found</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">Contact our B2B packaging consultants for direct engineering clarification.</p>
            </div>
          ) : (
            filteredFaqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-slate-900 hover:text-[#002E73] transition-colors"
                >
                  <span className="flex items-center gap-3" itemProp="name">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#002E73] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${openId === faq.id ? 'rotate-180 text-[#002E73]' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="p-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50 font-medium" itemProp="text">
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

      {/* Contact Banner - High Contrast Royal Blue Card */}
      <section className="py-20 px-4 md:px-8 max-w-[1550px] mx-auto">
        <div className="p-10 md:p-14 rounded-3xl bg-[#002E73] text-white border border-[#002E73] shadow-2xl text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Engineering Support</span>
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">Have A Custom Technical Packaging Question?</h3>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-medium leading-relaxed">
            Our structural packaging designers are available Monday through Saturday to discuss CAD die-lines, box compression ratios, and shipping test requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact" className="px-8 py-4 rounded-2xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all">
              Contact Engineering Team
            </Link>
            <a href="tel:+919876543210" className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2 transition-all">
              <PhoneCall size={16} /> +91 98765 43210
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
