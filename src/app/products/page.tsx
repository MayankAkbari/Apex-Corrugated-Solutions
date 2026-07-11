'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter, Box, ArrowRight, Sparkles, CheckCircle2, Calculator, ShieldCheck, FileText } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function ProductsPage() {
  const { products } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedQuoteProd, setSelectedQuoteProd] = useState<string>('Precision Corrugated Boxes');

  // Interactive Box Estimator Simulation
  const [boxWeight, setBoxWeight] = useState<number>(25);
  const [shippingType, setShippingType] = useState<string>('ocean');

  const categories = ['All', 'Corrugated Boxes', 'Heavy Duty Packaging', 'Printed Packaging', 'Duplex Boxes', 'Shipping Cartons', 'Export Packaging', 'Industrial Packaging', 'Custom Packaging Solutions'];

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getRecommendedPly = () => {
    if (boxWeight <= 10 && shippingType !== 'ocean') return { ply: '3-Ply Standard E/B Flute', ect: '32 lbs/in (5.6 kN/m)' };
    if (boxWeight <= 35) return { ply: '5-Ply Double Wall BC Flute', ect: '48 - 65 lbs/in (8.4 - 11.4 kN/m)' };
    if (boxWeight <= 100) return { ply: '7-Ply Heavy Wall AAA Flute', ect: '90 lbs/in (15.7 kN/m)' };
    return { ply: '9-Ply Bulk Container / Custom Timber Replacement', ect: '150+ lbs/in (26.2 kN/m)' };
  };

  const recommendation = getRecommendedPly();

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24">
      
      {/* Header Banner - Luminous Light Executive Hero */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <Box size={14} className="text-[#B88746]" /> Industrial Packaging Catalog & Specification Center
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            Engineered Corrugated <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Products & Shippers</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Explore our complete portfolio of high burst-strength shipping containers, high-graphic retail cartons, seaworthy export shippers, and custom die-cut inner partitions.
          </p>
        </div>
      </section>

      {/* AEO / GEO Definition Block for Corrugated Boxes */}
      <section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B88746] flex items-center gap-1.5">
              <FileText size={15} /> Technical Classification
            </span>
            <h3 className="text-lg font-bold text-slate-900">What are Heavy-Duty Corrugated Shipping Containers?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed font-medium">
              <dfn className="font-bold not-italic text-slate-900">Heavy-Duty Corrugated Shippers</dfn> are multi-walled paperboard packaging structures (5-ply, 7-ply, or 9-ply) manufactured from virgin Kraft liner and fluted corrugating medium. Engineered to withstand high compression forces, extreme Edge Crush Test (ECT) ratings above 90 lbs/in, and high humidity Cobb levels, these boxes serve as ISPM 15 compliant replacements for traditional wooden crates during ocean and air freight.
            </p>
          </div>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="px-6 py-3 rounded-2xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md hover:scale-105 transition-all"
          >
            Custom CAD Breakdown
          </button>
        </div>
      </section>

      {/* Interactive Box Strength Estimator Bar */}
      <section className="bg-[#002E73] text-white py-10 px-4 md:px-8 border-y border-[#002E73] shadow-xl">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-white/10 text-[#B88746] border border-white/20 shrink-0 shadow-md">
              <Calculator size={28} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Interactive Engineering Calculator</span>
              <h3 className="text-xl font-extrabold text-white">Box Strength & Ply Estimator</h3>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Target Cargo Weight (kg)</label>
              <input
                type="number"
                value={boxWeight}
                onChange={(e) => setBoxWeight(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-bold focus:outline-none focus:ring-2 focus:ring-[#B88746] text-sm shadow-inner"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Shipping Mode</label>
              <select
                value={shippingType}
                onChange={(e) => setShippingType(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-bold focus:outline-none focus:ring-2 focus:ring-[#B88746] text-sm shadow-inner"
              >
                <option value="local" className="bg-[#002E73] text-white">Local Road Transit</option>
                <option value="panIndia" className="bg-[#002E73] text-white">Pan-India Express</option>
                <option value="ocean" className="bg-[#002E73] text-white">40-Day Ocean Container</option>
              </select>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 rounded-2xl bg-[#001D4A] border border-[#B88746]/50 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Recommended Specification:</span>
              <span className="text-base font-black text-[#B88746] block mt-0.5">{recommendation.ply}</span>
              <span className="text-xs font-medium text-white block mt-1">Target ECT: <span className="font-mono font-bold text-emerald-400">{recommendation.ect}</span></span>
            </div>
            <button
              onClick={() => {
                setSelectedQuoteProd(`Recommended ${recommendation.ply}`);
                setIsQuoteOpen(true);
              }}
              className="px-5 py-3 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-lg hover:scale-105 transition-all"
            >
              Get Price
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Search Controls */}
      <section className="py-12 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#002E73] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specs, GSM, ply..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] shadow-xs font-medium"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <Box size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800">No matching packaging specifications found</h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">Try resetting filters or request custom packaging engineering.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-6 px-6 py-3 rounded-2xl bg-[#002E73] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#00255c] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(prod => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image src={prod.image} alt={prod.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#002E73] text-xs font-bold uppercase border border-slate-200 shadow-md">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#002E73] transition-colors">{prod.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-medium">{prod.shortDesc}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Ply & Fluting:</span>
                      <span className="font-bold text-slate-900">{prod.specs.ply}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>ECT Rating:</span>
                      <span className="font-mono font-bold text-[#002E73]">{prod.specs.ectStrength}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="flex-1 py-3 rounded-2xl bg-slate-900 hover:bg-[#002E73] text-center text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Detailed Specs</span>
                      <ArrowRight size={14} />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedQuoteProd(prod.title);
                        setIsQuoteOpen(true);
                      }}
                      className="px-4.5 py-3 rounded-2xl glass-button-gold text-white font-bold text-xs uppercase shadow-md shrink-0 hover:scale-105 transition-all"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={selectedQuoteProd} />
    </div>
  );
}
