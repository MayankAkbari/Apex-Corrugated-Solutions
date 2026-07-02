'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter, Box, ArrowRight, Sparkles, CheckCircle2, Calculator, ShieldCheck } from 'lucide-react';
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
    <div className="overflow-hidden">
      
      {/* Header Banner */}
      <section className="relative bg-[#001633] text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
              <Box size={14} /> Industrial Packaging Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Engineered Corrugated <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Products & Shippers</span>
            </h1>
            <p className="text-base sm:text-xl text-[#B2B2B2] leading-relaxed">
              Explore our complete range of high burst-strength boxes, high-graphic retail cartons, seaworthy export shippers, and custom die-cut inner partitions.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Box Strength Estimator Bar */}
      <section className="bg-[#002E73] text-white py-8 px-4 md:px-8 border-y border-white/15 shadow-xl">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white/10 text-[#B88746] border border-white/20 shrink-0">
              <Calculator size={28} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-[#B88746]">Interactive Engineering Calculator</span>
              <h3 className="text-lg font-bold text-white">Box Strength & Ply Estimator</h3>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#B2B2B2] mb-1">Target Cargo Weight (kg)</label>
              <input
                type="number"
                value={boxWeight}
                onChange={(e) => setBoxWeight(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold focus:outline-none focus:border-[#B88746] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-[#B2B2B2] mb-1">Shipping Mode</label>
              <select
                value={shippingType}
                onChange={(e) => setShippingType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold focus:outline-none focus:border-[#B88746] text-sm"
              >
                <option value="local" className="bg-[#001633]">Local Road Transit</option>
                <option value="panIndia" className="bg-[#001633]">Pan-India Express</option>
                <option value="ocean" className="bg-[#001633]">40-Day Ocean Container</option>
              </select>
            </div>
          </div>

          <div className="lg:col-span-4 p-4 rounded-2xl bg-[#001633] border border-[#B88746]/40 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#B2B2B2] block">Recommended Specification:</span>
              <span className="text-sm font-black text-[#B88746] block">{recommendation.ply}</span>
              <span className="text-xs text-white">Target ECT: <span className="font-mono text-emerald-400">{recommendation.ect}</span></span>
            </div>
            <button
              onClick={() => {
                setSelectedQuoteProd(`Recommended ${recommendation.ply}`);
                setIsQuoteOpen(true);
              }}
              className="px-4 py-2 rounded-xl glass-button-gold text-white font-bold text-xs uppercase shrink-0 shadow-lg"
            >
              Get Price
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Search Controls */}
      <section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#002E73] text-white shadow-lg border border-[#B88746]'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specs, GSM, ply..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#002E73] shadow-sm"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
            <Box size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-700">No matching products found</h3>
            <p className="text-sm text-gray-500 mt-1">Try resetting filters or request custom packaging engineering.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#002E73] text-white text-xs font-bold uppercase"
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
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image src={prod.image} alt={prod.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#001633]/90 text-white text-xs font-bold uppercase shadow-md">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#001633] group-hover:text-[#002E73] transition-colors">{prod.title}</h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">{prod.shortDesc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs space-y-1">
                    <div className="flex justify-between text-gray-600">
                      <span>Ply & Flute:</span>
                      <span className="font-bold text-[#001633]">{prod.specs.ply}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>ECT Strength:</span>
                      <span className="font-mono font-bold text-[#002E73]">{prod.specs.ectStrength}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="flex-1 py-3 rounded-xl bg-[#001633] hover:bg-[#002E73] text-center text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Detailed Specs</span>
                      <ArrowRight size={14} />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedQuoteProd(prod.title);
                        setIsQuoteOpen(true);
                      }}
                      className="px-4 py-3 rounded-xl glass-button-gold text-white font-bold text-xs uppercase shadow-md shrink-0"
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
