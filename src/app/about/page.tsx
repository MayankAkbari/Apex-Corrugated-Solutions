'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Target, Eye, Heart, CheckCircle2, Factory, Users, TrendingUp, Sparkles, Check, FileText } from 'lucide-react';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  const timelineEvents = [
    {
      year: '2014',
      title: 'Foundation in Ahmedabad',
      desc: 'Established with a single semi-automatic corrugation line producing 200 MT/month of standard 3-ply shipping cartons for local FMCG brands.'
    },
    {
      year: '2017',
      title: 'Automation & ISO 9001 Certification',
      desc: 'Commissioned our first German automatic high-speed 5-ply corrugator and computerized QA testing lab. Achieved strict ISO 9001 quality accreditation.'
    },
    {
      year: '2020',
      title: 'Heavy-Duty & Export Expansion',
      desc: 'Launched our specialized 7-Ply Heavy Duty and Seaworthy Export packaging lines, supplying pharmaceutical and textile exporters across Europe & Middle East.'
    },
    {
      year: '2023',
      title: 'FSC Sustainability Transition',
      desc: 'Transitioned 100% of our paper sourcing to FSC certified sustainable forestry mills and implemented zero-effluent water-based flexo printing.'
    },
    {
      year: '2026',
      title: 'Industry 4.0 Smart Manufacturing',
      desc: 'Expanded plant footprint to 150,000 sq. ft. converting over 3,500 MT/month with AI-driven paper consumption optimization and automated robotics.'
    }
  ];

  const coreValues = [
    { title: 'Structural Precision', desc: 'Zero compromise on Edge Crush Test (ECT) and dimensional accuracy.', icon: Target },
    { title: 'Uncompromising Quality', desc: 'Strict 6-stage quality inspection workflow from Kraft reel to dispatch.', icon: Award },
    { title: 'Sustainable Stewardship', desc: '100% circular paper economy with biodegradable starch adhesive matrices.', icon: Heart },
    { title: 'Customer Obsession', desc: '48-hour CAD prototyping and dedicated B2B packaging consultants.', icon: Users },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900" itemScope itemType="https://schema.org/AboutPage">
      
      {/* Header Banner - Luminous Light Executive Hero */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <Sparkles size={14} className="text-[#B88746]" /> Corporate Heritage & Engineering Authority
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            About <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Apex Corrugated Solutions</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Strong Packaging. Smarter Solutions. Lasting Impact. Discover the engineering excellence behind India’s most trusted industrial corrugated container manufacturer.
          </p>
        </div>
      </section>

      {/* AEO / GEO Entity Summary Block */}
      <section className="py-16 px-4 md:px-8 max-w-[1550px] mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" itemScope itemType="https://schema.org/Organization">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[#B88746] text-xs font-bold uppercase tracking-widest">
              <FileText size={14} /> Official Corporate Fact Sheet
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Executive Profile & Manufacturing Capabilities
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#002E73] text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              <dfn className="font-bold not-italic text-slate-900" itemProp="legalName">Apex Corrugated Solutions Private Limited</dfn> (founded in <span itemProp="foundingDate">2014</span>) is a premier industrial corrugated box manufacturing company headquartered in <span itemProp="addressLocality">Ahmedabad, Gujarat</span>. Operating a state-of-the-art 150,000 sq. ft. automated conversion facility, Apex manufactures over 3,500 metric tons monthly of ISO 9001:2015 certified 3-ply, 5-ply, 7-ply, and 9-ply heavy-duty shipping containers tailored for FMCG, pharmaceuticals, electronics, and automotive export logistics.
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs font-semibold text-slate-700">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Legal Name:</span>
              <span className="font-bold text-slate-900">Apex Corrugated Solutions Pvt. Ltd.</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Quality Standard:</span>
              <span className="font-bold text-emerald-700">ISO 9001:2015 & FSC Certified</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Annual Capacity:</span>
              <span className="font-bold text-[#002E73]">42,000+ Metric Tons</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Plant Location:</span>
              <span className="font-bold text-slate-900">GIDC Phase III, Ahmedabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Company Overview</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              A Legacy of Protection, Innovation, and Engineering Rigor
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Understanding that modern supply chains subject shipments to severe vibration, drop impacts, and container rain, our engineers utilize advanced CAD structural software and computerized drop testing simulators. Whether securing a delicate LED panel or a 2-ton automotive engine block, our packaging ensures zero structural collapse.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              We convert high-grade virgin and recycled Kraft board into precision corrugated containers, maintaining verified Cobb sizing under 30g/m² to prevent moisture absorption during maritime transit.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl font-black text-[#002E73]">150,000+</span>
                <p className="text-xs text-slate-600 font-bold uppercase mt-1">Sq. Ft. Manufacturing Facility</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl font-black text-[#002E73]">3,500 MT</span>
                <p className="text-xs text-slate-600 font-bold uppercase mt-1">Monthly Kraft Board Conversion</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Apex Corrugated Solutions Manufacturing Plant Floor"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-6 rounded-3xl bg-[#002E73] text-white shadow-2xl max-w-sm hidden sm:block border border-[#002E73]">
              <div className="flex items-center gap-3 mb-2 text-[#B88746]">
                <Factory size={28} />
                <span className="font-bold text-base">High-Speed Corrugation</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                Automated rotary slotting and inline flexographic printing running at 200 meters/minute.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards - Clean Light Executive Cards */}
      <section className="py-24 bg-white border-y border-slate-200 px-4 md:px-8">
        <div className="max-w-[1650px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            whileHover={{ y: -6 }}
            className="p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl space-y-4 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#002E73]/10 text-[#002E73] flex items-center justify-center border border-[#002E73]/20">
              <Eye size={28} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Our Vision</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">To Be India’s Most Trusted Global Packaging Benchmark</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To redefine industrial B2B packaging by merging smart structural engineering with 100% sustainable materials, enabling Indian and international manufacturers to ship goods with absolute confidence and zero carbon footprint.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl space-y-4 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#002E73]/10 text-[#002E73] flex items-center justify-center border border-[#002E73]/20">
              <Target size={28} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Our Mission</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Delivering Strength, Rigidity, & Speed</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To engineer customized, high Edge Crush Test corrugated containers through automated manufacturing, rigorous QA lab verification, and rapid 48-hour prototyping, lowering our clients total packaging cost of ownership.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Pillars of Excellence</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((cv) => {
            const IconComp = cv.icon;
            return (
              <div key={cv.title} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg space-y-4 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#002E73]/10 text-[#002E73] flex items-center justify-center">
                  <IconComp size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{cv.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{cv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Growth Timeline - Clean Light Styling */}
      <section className="py-24 bg-white border-t border-slate-200 px-4 md:px-8">
        <div className="max-w-[1550px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Milestones & Expansion</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">Our Growth Timeline</h2>
            <p className="text-slate-600 font-medium">A journey of continuous automation, quality accreditation, and industrial expansion.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Timeline Year Tabs */}
            <div className="flex md:flex-col gap-3 w-full md:w-64 overflow-x-auto pb-4 md:pb-0">
              {timelineEvents.map((ev, idx) => (
                <button
                  key={ev.year}
                  onClick={() => setActiveTimeline(idx)}
                  className={`px-6 py-4 rounded-2xl font-bold text-left transition-all flex items-center justify-between shrink-0 ${
                    activeTimeline === idx
                      ? 'bg-[#002E73] text-white shadow-xl border border-[#002E73]'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className="text-lg">{ev.year}</span>
                  <TrendingUp size={18} className={activeTimeline === idx ? 'text-[#B88746]' : 'text-slate-400'} />
                </button>
              ))}
            </div>

            {/* Active Timeline Display */}
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-md space-y-6 w-full"
            >
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#002E73] text-white text-xs font-bold uppercase tracking-wider">
                  Year {timelineEvents[activeTimeline].year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {timelineEvents[activeTimeline].title}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {timelineEvents[activeTimeline].desc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Message - High Contrast Executive Royal Blue Banner */}
      <section className="py-24 px-4 md:px-8 max-w-[1550px] mx-auto mb-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#002E73] text-white border border-[#002E73] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-4 relative">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#B88746]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Rajesh J. Patel - Managing Director Apex Corrugated"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center lg:text-left">
              <h4 className="text-xl font-bold text-white">Rajesh J. Patel</h4>
              <p className="text-xs text-[#B88746] uppercase tracking-wider font-bold">Founder & Managing Director</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Leadership Perspective</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              “Packaging is the silent guardian of your brand’s reputation.”
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              When we established Apex Corrugated Solutions, our goal wasn't merely to make boxes. Our goal was to eliminate the multi-crore losses that Indian manufacturers suffered due to transit collapse and moisture damage during export freight.
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              Today, by investing in high-speed automated corrugation lines and uncompromising computerized lab testing, we guarantee that every container bearing the Apex name meets world-class industrial benchmarks.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-3.5 rounded-2xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Schedule Executive Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
