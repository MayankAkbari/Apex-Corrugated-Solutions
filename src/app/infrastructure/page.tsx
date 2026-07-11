'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Factory, Cpu, ShieldCheck, Truck, Sparkles, CheckCircle2, Award, Layers, Check } from 'lucide-react';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function InfrastructurePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const machinerySpecs = [
    {
      title: 'High-Speed 5-Ply & 7-Ply Automatic Corrugators',
      capacity: '200 Meters / Minute',
      desc: 'Precision German automated corrugating lines equipped with computerized fingerless single facers and automatic splicing for zero flute distortion.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Multicolor High-Def Flexographic Printers',
      capacity: 'Up to 4 Colors + Rotary Slotting',
      desc: 'Integrated rotary die-cutters with zero-leak chambered doctor blades producing sharp, scuff-resistant brand imagery on corrugated board.',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Automatic Folder Gluer & Stitching Systems',
      capacity: '12,000 Boxes / Hour',
      desc: 'High-speed automated folder gluer lines ensuring exact 90-degree folding and high-strength waterproof glue joints.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Rotary & Heavy Platen Die-Cutters',
      capacity: '±0.5mm Dimensional Tolerance',
      desc: 'Heavy-duty platen die-cutters producing intricate inner partitions, honeycomb buffers, and shelf-ready retail perforations.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="overflow-hidden pb-24 bg-[#FAFAF9] text-slate-900" itemScope itemType="https://schema.org/WebPage">
      
      {/* Hero Banner - Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <Factory size={14} className="text-[#B88746]" /> Industrial Infrastructure & Automation
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            Manufacturing <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Excellence</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Tour our state-of-the-art 150,000 sq. ft. automated plant in Ahmedabad, Gujarat. Converting over 3,500 metric tons of virgin and high-burst Kraft board every month with zero defect tolerance.
          </p>
        </div>
      </section>

      {/* Capacity & Scale Overview */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-4xl font-black text-[#002E73]">150,000+</span>
            <h4 className="text-sm font-bold uppercase text-slate-800">Sq. Ft. Plant Area</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Sprawling modern industrial architecture with climate-controlled raw material storage bays.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-4xl font-black text-[#002E73]">3,500 MT</span>
            <p className="text-sm font-bold uppercase text-slate-800">Monthly Conversion Capacity</p>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Uninterrupted high-speed corrugation supporting massive B2B contract fulfillment.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-4xl font-black text-[#002E73]">2.5 Million</span>
            <p className="text-sm font-bold uppercase text-slate-800">Boxes Output / Month</p>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">High-volume automated folding, stitching, and precision die-cutting throughput.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-4xl font-black text-[#002E73]">24/7 Logistics</span>
            <p className="text-sm font-bold uppercase text-slate-800">Automated Warehousing</p>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Palletized shrink-wrapped bays with computerized dispatch & fleet management.</p>
          </div>
        </div>
      </section>

      {/* Machinery Showcase - Luminous White Cards */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Automated Equipment Setup</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">Advanced Machinery Lineup</h2>
          <p className="text-slate-600 font-medium">Precision European corrugation and converting machinery ensuring uniform fluting geometry and flawless structural bonding.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {machinerySpecs.map((mach) => (
            <div key={mach.title} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl grid grid-cols-1 sm:grid-cols-12 group transition-all duration-300">
              <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[260px] bg-slate-100">
                <Image src={mach.image} alt={mach.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="sm:col-span-7 p-8 flex flex-col justify-between space-y-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#002E73]/10 text-[#002E73] text-[11px] font-bold uppercase border border-[#002E73]/20">
                    {mach.capacity}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-[#002E73] transition-colors">{mach.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">{mach.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002E73]">
                  <span>ISO Computer Synchronized</span>
                  <CheckCircle2 size={16} className="text-[#B88746]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Automated Warehouse & Quality Lab Tour */}
      <section className="py-24 bg-white border-t border-slate-200 px-4 md:px-8">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" alt="Climate-Controlled Warehousing Facility" fill className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Logistics & Storage Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Humidity-Controlled Automated Warehousing</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Finished corrugated containers must be protected from ambient moisture to preserve their structural Edge Crush Test (ECT) ratings. Our finished goods warehouse features automated climate and humidity regulation.
            </p>
            <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Palletized shrink-wrapped storage preventing edge crush pre-transit</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Dedicated fleet of covered containerized trucks for safe pan-India dispatch</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Just-In-Time (JIT) contract inventory hosting for FMCG giants</span>
              </li>
            </ul>
            <div className="pt-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 rounded-2xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Inquire For JIT Contract Supply
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
