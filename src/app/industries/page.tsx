'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Box, CheckCircle2, ArrowRight, Sparkles, Factory, Layers, Check } from 'lucide-react';
import { INDUSTRIES } from '@/data/mockData';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function IndustriesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('FMCG');

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/WebPage">
      
      {/* Header Banner - Luminous Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <Shield size={14} className="text-[#B88746]" /> Sector Architecture & Compliance Verification
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            Industries <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">We Serve</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Every B2B sector presents distinct structural, moisture, and transit challenges. Discover how our precision corrugated packaging architectures protect assets across 8 critical industrial verticals.
          </p>
        </div>
      </section>

      {/* Industries Grid - Clean Executive White Cards */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 group duration-300"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[280px] bg-slate-100">
                <Image src={ind.image} alt={ind.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 text-[#002E73] text-xs font-bold uppercase shadow-md border border-slate-200">
                  Sector {idx + 1}
                </span>
              </div>

              {/* Details Side */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#002E73] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {ind.description}
                  </p>
                </div>

                {/* Key Requirements List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase text-[#002E73] block mb-1">Key Sector Challenges Solved:</span>
                  {ind.keyRequirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Products Tag Bar & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Recommended Specs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.recommendedProducts.map(rec => (
                        <span key={rec} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
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
                    className="w-full sm:w-auto px-5 py-3 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md hover:scale-105 transition-all"
                  >
                    Get Sector Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Consultation Callout - High Contrast Executive Banner */}
      <section className="py-20 px-4 md:px-8 max-w-[1550px] mx-auto">
        <div className="p-10 md:p-14 rounded-3xl bg-[#002E73] text-white border border-[#002E73] shadow-2xl text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Need A Specialized Solution?</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Custom Industrial Packaging Engineered For Your Assembly Line
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether your packaging must endure minus 20°C cold storage or 40-day maritime humidity across oceanic shipping lanes, our engineers design custom corrugated specifications backed by computerized compression testing.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-10 py-4 rounded-2xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
            >
              Consult Packaging Engineer
            </button>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all border border-white/20"
            >
              Contact Ahmedabad Office
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={`${selectedIndustry} Specialized Packaging`} />
    </div>
  );
}
