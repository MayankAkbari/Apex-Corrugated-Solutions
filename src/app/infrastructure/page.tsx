'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Factory, Cpu, ShieldCheck, Truck, Sparkles, CheckCircle2, Award, Layers } from 'lucide-react';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function InfrastructurePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const machinerySpecs = [
    {
      title: 'High-Speed 5-Ply & 7-Ply Automatic Corrugators',
      capacity: '200 Meters / Min',
      desc: 'Precision German automated corrugating lines equipped with computerized fingerless single facers and automatic splicing.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Multicolor High-Def Flexographic Printers',
      capacity: 'Up to 4 Colors + Slotting',
      desc: 'Integrated rotary die-cutters with zero-leak chambered doctor blades producing sharp brand imagery on corrugated board.',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Automatic Folder Gluer & Stitching Systems',
      capacity: '12,000 Boxes / Hour',
      desc: 'High-speed automated folder gluer lines ensuring exact 90-degree folding and tamper-resistant glue joints.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Rotary & Flatbed Die-Cutters',
      capacity: '±0.5mm Tolerance',
      desc: 'Heavy-duty platen die-cutters producing intricate inner partitions, honeycomb buffers, and shelf-ready retail perforations.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="overflow-hidden pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <Factory size={14} /> Industrial Infrastructure
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Excellence</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Tour our state-of-the-art 150,000 sq. ft. automated plant in Ahmedabad, Gujarat. Converting over 3,500 metric tons of virgin and recycled Kraft board every month.
          </p>
        </div>
      </section>

      {/* Capacity & Scale Overview */}
      <section className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl glass-card border border-gray-200 shadow-xl space-y-2">
            <span className="text-4xl font-black text-[#002E73]">150,000+</span>
            <h4 className="text-sm font-bold uppercase text-gray-700">Sq. Ft. Plant Area</h4>
            <p className="text-xs text-gray-500">Sprawling modern industrial architecture with dedicated raw material storage.</p>
          </div>
          <div className="p-8 rounded-3xl glass-card border border-gray-200 shadow-xl space-y-2">
            <span className="text-4xl font-black text-[#002E73]">3,500 MT</span>
            <p className="text-sm font-bold uppercase text-gray-700">Monthly Conversion</p>
            <p className="text-xs text-gray-500">Uninterrupted high-speed corrugation supporting large contract orders.</p>
          </div>
          <div className="p-8 rounded-3xl glass-card border border-gray-200 shadow-xl space-y-2">
            <span className="text-4xl font-black text-[#002E73]">2.5 Million</span>
            <p className="text-sm font-bold uppercase text-gray-700">Boxes Output / Month</p>
            <p className="text-xs text-gray-500">High-volume automated folding and gluing throughput.</p>
          </div>
          <div className="p-8 rounded-3xl glass-card border border-gray-200 shadow-xl space-y-2">
            <span className="text-4xl font-black text-[#002E73]">24/7 Logistics</span>
            <p className="text-sm font-bold uppercase text-gray-700">Automated Warehousing</p>
            <p className="text-xs text-gray-500">Forklift-ready palletized bays with RFID dispatch tracking.</p>
          </div>
        </div>
      </section>

      {/* Machinery Showcase */}
      <section className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Automated Equipment</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001633]">Advanced Machinery Lineup</h2>
          <p className="text-gray-600">Precision German and European machinery ensuring uniform fluting geometry and flawless adhesive bonding.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {machinerySpecs.map((mach, i) => (
            <div key={mach.title} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl grid grid-cols-1 sm:grid-cols-12 group">
              <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[240px]">
                <Image src={mach.image} alt={mach.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="sm:col-span-7 p-8 flex flex-col justify-between space-y-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#002E73]/10 text-[#002E73] text-[11px] font-bold uppercase">
                    {mach.capacity}
                  </span>
                  <h3 className="text-xl font-bold text-[#001633] mt-3 group-hover:text-[#002E73] transition-colors">{mach.title}</h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{mach.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#B88746]">
                  <span>ISO Computer Synchronized</span>
                  <CheckCircle2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Automated Warehouse & Quality Lab Tour */}
      <section className="py-20 bg-gradient-to-b from-[#F5F6F8] to-white border-t border-gray-200 px-4 md:px-8">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" alt="Warehouse" fill className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Logistics & Storage</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001633]">Humidity-Controlled Automated Warehousing</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Finished corrugated containers must be kept dry to maintain their compressive strength. Our finished goods warehouse features automated climate regulation keeping relative humidity strictly controlled.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#002E73] shrink-0" size={18} />
                <span className="font-semibold">Palletized shrink-wrapped storage preventing edge crush pre-transit</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#002E73] shrink-0" size={18} />
                <span className="font-semibold">Dedicated fleet of covered containerized trucks for safe pan-India dispatch</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#002E73] shrink-0" size={18} />
                <span className="font-semibold">Just-In-Time (JIT) contract inventory hosting for FMCG giants</span>
              </li>
            </ul>
            <div className="pt-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 rounded-2xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shadow-xl"
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
