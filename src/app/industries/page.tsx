'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Box, CheckCircle2, ArrowRight, Sparkles, Factory, Layers } from 'lucide-react';
import { INDUSTRIES } from '@/data/mockData';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function IndustriesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('FMCG');

  return (
    <div className="overflow-hidden pb-24">
      
      {/* Header Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <Shield size={14} /> Sector Architecture & Compliance
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">We Serve</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Every industry presents distinct structural, hygiene, and transit challenges. Discover how our corrugated packaging architectures protect assets across 8 core B2B sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px]">
                <Image src={ind.image} alt={ind.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#001633]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002E73] text-[#B88746] text-xs font-bold uppercase shadow-md">
                  Sector {idx + 1}
                </span>
              </div>

              {/* Details Side */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-[#001633] group-hover:text-[#002E73] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Key Requirements List */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase text-[#B88746] block mb-1">Key Sector Challenges Solved:</span>
                  {ind.keyRequirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 size={15} className="text-[#002E73] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Products Tag Bar & CTA */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-gray-400 uppercase">Recommended Specs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.recommendedProducts.map(rec => (
                        <span key={rec} className="px-2.5 py-1 rounded-lg bg-gray-100 text-[#001633] font-bold text-[11px]">
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedIndustry(ind.name);
                      setIsQuoteOpen(true);
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl glass-button-gold text-white font-bold text-xs uppercase shrink-0 shadow-lg"
                  >
                    Get Sector Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Consultation Callout */}
      <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="p-10 md:p-14 rounded-3xl glass-card-dark bg-[#001633] text-white border border-white/20 shadow-2xl text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Need A Specialized Solution?</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto">
            Custom Industrial Packaging Engineered For Your Assembly Line
          </h2>
          <p className="text-base text-[#B2B2B2] max-w-2xl mx-auto">
            Whether your packaging must endure minus 20°C cold storage or 40-day maritime humidity, our engineers design custom corrugated specifications backed by computerized compression testing.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-10 py-4 rounded-2xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider shadow-2xl"
            >
              Consult Packaging Engineer
            </button>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all border border-white/20"
            >
              Contact Gujarat Office
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={`${selectedIndustry} Specialized Packaging`} />
    </div>
  );
}
