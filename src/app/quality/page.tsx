'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, FlaskConical, Droplets, ArrowRight, Sparkles, Activity, Layers, Wrench } from 'lucide-react';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function QualityPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(0);

  const testStages = [
    {
      id: 1,
      name: 'Edge Crush Test (ECT)',
      unit: 'lbs/in or kN/m',
      desc: 'Measures the edgewise compressive strength of corrugated board. This directly correlates to the stacking strength of the finished carton under high pallet loads.',
      target: 'Up to 90+ lbs/in on 7-Ply Heavy Wall',
      icon: Activity
    },
    {
      id: 2,
      name: 'Bursting Strength Test (BST)',
      unit: 'kg/cm² or kPa',
      desc: 'Determines the hydraulic pressure required to rupture the corrugated board. Assures resilience against internal rough handling and sharp cargo protrusion.',
      target: 'Passed up to 28 kg/cm² hydraulic burst',
      icon: ShieldCheck
    },
    {
      id: 3,
      name: 'Cobb Test (Water Absorption)',
      unit: 'g/m² per 60s',
      desc: 'Evaluates the surface water absorption rate of Kraft liner paper. Critical for export maritime shipments across humid tropical ocean freight.',
      target: '< 28 g/m² (Hydrophobic grade)',
      icon: Droplets
    },
    {
      id: 4,
      name: 'Box Compression Test (BCT)',
      unit: 'Newtons / kgf',
      desc: 'Applies steady top-to-bottom compression on a fully assembled, sealed container until structural collapse occurs. Validates warehouse stacking height.',
      target: '> 1,500 kgf Static Stacking Load',
      icon: Layers
    },
    {
      id: 5,
      name: 'Puncture Resistance Test',
      unit: 'Joules',
      desc: 'Measures the energy required to force a pyramid-shaped puncture head through the corrugated board. Protects against forklift tines and sharp external objects.',
      target: 'High-energy absorption rating verified',
      icon: Wrench
    },
    {
      id: 6,
      name: 'Drop & Transit Vibration Test',
      unit: 'ISTA Profiles',
      desc: 'Simulates real-world pothole vibration, emergency braking, and accidental drop impacts from 1.2 meters to ensure zero internal cargo damage.',
      target: 'ISTA 1A & 3A Profile Compliance',
      icon: FlaskConical
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015 Accredited', desc: 'Strict Quality Management System covering raw material intake to final batch dispatch.' },
    { name: 'FSC® Chain-of-Custody', desc: 'Ensures 100% of paper pulp originates from responsibly managed sustainable forests.' },
    { name: 'FSSAI Food Grade Approved', desc: 'Odorless, non-toxic water-based printing inks safe for direct & indirect food contact.' },
    { name: 'UN Dangerous Goods Certified', desc: 'Approved structural container specifications for hazardous chemical and battery transport.' },
  ];

  return (
    <div className="overflow-hidden pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <Award size={14} /> Zero Defect Assurance
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Quality Assurance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Lab Testing</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Every roll of Kraft paper entering our plant undergoes rigorous computerized laboratory testing. Explore our interactive 6-stage quality verification protocol.
          </p>
        </div>
      </section>

      {/* Interactive 6-Stage Testing Workflow Simulator */}
      <section className="py-20 px-4 md:px-8 max-w-[1500px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Computerized Testing Lab</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001633]">6-Stage QA Testing Simulator</h2>
          <p className="text-gray-600">Select any inspection stage below to inspect our automated lab verification metrics and standards.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stage Buttons List */}
          <div className="lg:col-span-5 space-y-3">
            {testStages.map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full p-5 rounded-2xl transition-all flex items-center justify-between text-left border ${
                    activeStage === idx
                      ? 'bg-[#002E73] text-white shadow-xl border-[#B88746]'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                      activeStage === idx ? 'bg-[#B88746] text-white' : 'bg-gray-100 text-[#002E73]'
                    }`}>
                      0{stage.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{stage.name}</h4>
                      <span className={`text-xs ${activeStage === idx ? 'text-[#B2B2B2]' : 'text-gray-400'}`}>Metric: {stage.unit}</span>
                    </div>
                  </div>
                  <IconComp size={20} className={activeStage === idx ? 'text-[#B88746]' : 'text-gray-400'} />
                </button>
              );
            })}
          </div>

          {/* Active Stage Simulation Panel */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl glass-card bg-white border border-gray-200 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="px-4 py-1 rounded-full bg-[#002E73] text-[#B88746] text-xs font-bold uppercase tracking-wider">
                Lab Stage 0{testStages[activeStage].id} Verified
              </span>
              <span className="text-xs font-mono text-gray-400">Standard: ASTM D5639</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#001633]">
                {testStages[activeStage].name}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {testStages[activeStage].desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#001633] text-white space-y-2 border border-[#B88746]/30">
              <span className="text-xs font-bold uppercase text-[#B88746] block">Guaranteed Performance Threshold:</span>
              <p className="text-xl font-mono font-bold text-emerald-400">
                ✓ {testStages[activeStage].target}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-gray-500 font-semibold">
              <span>Computerized Certificate of Analysis (COA) issued with every shipment.</span>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="text-[#002E73] hover:underline font-bold"
              >
                Request Sample COA Report →
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gradient-to-b from-[#F5F6F8] to-white border-t border-gray-200 px-4 md:px-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Global Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001633]">Accreditations & Standards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-8 rounded-3xl glass-card bg-white border border-gray-200 shadow-xl space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#002E73] text-[#B88746] flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-[#001633]">{cert.name}</h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{cert.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>Audit Active & Current</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct="Lab Tested Packaging Specification" />
    </div>
  );
}
