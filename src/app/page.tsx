'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Box, Award, ArrowRight, CheckCircle2, Sparkles, Factory, 
  Truck, Recycle, DollarSign, Users, ChevronRight, Star, Check, HelpCircle, FileText
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function HomePage() {
  const { products } = useApp();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductQuote, setSelectedProductQuote] = useState<string>('Precision Corrugated Boxes');

  // Animated counter simulation
  const [counts, setCounts] = useState({ years: 0, clients: 0, projects: 0, satisfaction: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ years: 12, clients: 540, projects: 1250, satisfaction: 99 });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const whyChooseFeatures = [
    { title: 'Premium Quality Materials', desc: '100% virgin Kraft & high-grade recycled pulp engineered for high humidity Cobb stability.', icon: Award },
    { title: 'Customized Solutions', desc: 'Bespoke CAD die-cut designs tailored strictly to your product 3D geometry and weight.', icon: Box },
    { title: 'Advanced Manufacturing', desc: 'High-speed automated 5-ply & 7-ply corrugation lines with precision German slotters.', icon: Factory },
    { title: 'Fast Delivery & Logistics', desc: '48-hour prototyping and 5-day commercial dispatch pan-India via our dedicated fleet.', icon: Truck },
    { title: 'Direct Factory Pricing', desc: 'Optimized paper consumption algorithms saving up to 25% on annual B2B packaging budgets.', icon: DollarSign },
    { title: 'Eco-Friendly Packaging', desc: '100% recyclable, FSC certified, and manufactured using biodegradable starch adhesives.', icon: Recycle },
    { title: 'Computerized Lab QA', desc: 'Every batch tested for Edge Crush Test (ECT), Bursting Strength (BST), and compression.', icon: ShieldCheck },
    { title: 'Dedicated B2B Support', desc: 'Assigned packaging engineers & account managers providing 24/7 order tracking.', icon: Users },
  ];

  const industries = [
    { name: 'FMCG & Consumer Goods', desc: 'Shelf-Ready Packaging & High-Burst Master Shippers', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Pharmaceuticals & Healthcare', desc: 'Odorless Food-Grade & Braille Certified Cartons', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'Electronics & Hardware', desc: 'Anti-Static ESD & Shock-Proof Honeycomb Partitions', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
    { name: 'Automobile & Heavy Machinery', desc: '7-Ply & 9-Ply Heavy Pallet Boxes (>1,500 kg load)', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80' },
    { name: 'Textiles & Garment Export', desc: 'Moisture-Proof Yarn Container Export Shippers', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Agriculture & Fresh Produce', desc: 'Ventilated & Hydrophobic Cold-Storage Packs', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80' },
    { name: 'E-Commerce & Retail Logistics', desc: 'Peel-and-Seal Tamper Evident Fast Dispatch Mailers', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80' },
    { name: 'Food & Beverage Processing', desc: 'FSSAI Compliant Odor-Free Bulk Master Cartons', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' }
  ];

  const faqItems = [
    {
      q: 'What makes Apex 7-Ply corrugated boxes suitable for heavy industrial export?',
      a: 'Apex 7-Ply triple-wall corrugated containers are constructed using high-density virgin Kraft board with AAA or CAA flute profiles. This delivers verified Edge Crush Test (ECT) ratings above 90 lbs/in and static stacking loads up to 1,500 kg, eliminating the need for heavy timber crates and ISPM 15 wooden fumigation procedures.'
    },
    {
      q: 'What is the minimum order quantity (MOQ) for custom CAD die-cut boxes?',
      a: 'For custom dimensions and bespoke CAD die-cut packaging, our standard MOQ starts at 1,000 units for standard 3-ply/5-ply boxes, and 250 units for heavy-duty 7-ply industrial pallet containers. Prototype samples are delivered within 48 hours.'
    },
    {
      q: 'How do you test moisture resistance (Cobb value) for maritime cargo?',
      a: 'Every production batch undergoes computerized Cobb sizing tests inside our 6-stage quality control laboratory. We apply specialized hydrophobic coatings and high-grade wet-strength starch adhesives to maintain structural rigidity even at 90% relative humidity during ocean transit.'
    },
    {
      q: 'Are your corrugated packaging products eco-friendly and FSC certified?',
      a: 'Yes, 100% of our Kraft paper rolls are sourced from FSC certified sustainable forests and high-grade recycled mills. Our boxes are fully biodegradable, recyclable, and manufactured using non-toxic botanical adhesives.'
    }
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900">
      
      {/* 1. HERO SECTION - Luminous Light Engineering Showcase */}
      <section className="relative min-h-[88vh] bg-gradient-to-b from-white via-slate-50 to-white flex items-center py-20 px-4 md:px-8 border-b border-slate-200/80">
        {/* Subtle Industrial Grid & Dot Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#002E73]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#B88746]/10 blur-[140px] pointer-events-none" />

        <div className="max-w-[1650px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20 shadow-xs">
              <Sparkles size={14} className="text-[#B88746] animate-spin" style={{ animationDuration: '8s' }} />
              <span>India’s Leading ISO 9001:2015 Corrugated Manufacturer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-slate-900">
              Engineered Packaging Solutions For A <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Stronger Supply Chain</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Premium B2B Corrugated Packaging Designed For High Burst Strength, Edge Crush Superiority, And Global Transit Protection. Replacing bulky timber with ultra-resilient 5-ply & 7-ply containers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  setSelectedProductQuote('Precision Corrugated Boxes');
                  setIsQuoteOpen(true);
                }}
                className="px-8 py-4 rounded-2xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                <span>Request Wholesale Quote</span>
                <ArrowRight size={18} />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-2xl bg-white text-[#002E73] font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all border border-slate-200 flex items-center gap-2"
              >
                <span>Explore Products</span>
                <Box size={18} className="text-[#B88746]" />
              </Link>
            </div>

            {/* Verification Trust Badges */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-700">ISO 9001:2015 Lab Tested</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#002E73]/10 flex items-center justify-center text-[#002E73] shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-700">FSC Sustainable Kraft</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#B88746]/10 flex items-center justify-center text-[#B88746] shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-700">Pan-India Dispatch</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visualizer Column: CAD Live Simulation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-[560px] mx-auto">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#002E73]/20 to-[#B88746]/20 blur-2xl pointer-events-none" />

              {/* Main Visualizer Card */}
              <div className="relative z-10 w-full rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#002E73] uppercase tracking-wider">CAD Live Specification</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B88746]/10 text-[#B88746] border border-[#B88746]/30">7-Ply Heavy Duty Spec</span>
                </div>

                {/* Simulated Box Image & Floating Badges */}
                <div className="relative my-6 py-4 flex items-center justify-center animate-float">
                  <div className="relative w-72 h-60 transition-transform hover:scale-105 duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
                      alt="Precision 7-Ply Corrugated Container Visualization"
                      fill
                      className="object-cover rounded-2xl shadow-xl border-2 border-[#002E73]/20"
                    />
                    {/* Floating Badges */}
                    <div className="absolute -top-3 -left-4 px-3 py-1.5 rounded-xl bg-[#002E73] text-white text-[11px] font-bold shadow-lg border border-[#002E73]">
                      ⚡ ECT Strength: 90+ lbs/in
                    </div>
                    <div className="absolute -bottom-3 -right-4 px-3 py-1.5 rounded-xl bg-white text-slate-900 text-[11px] font-bold border border-slate-200 shadow-xl">
                      📦 Static Stacking: 1,500 kg
                    </div>
                  </div>
                </div>

                {/* Technical Meter Bar */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <div className="flex justify-between text-xs text-slate-600 mb-2 font-semibold">
                    <span>Fluting Profile:</span>
                    <span className="text-[#002E73] font-bold">AAA Triple-Wall Hybrid</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#002E73] to-[#B88746] h-full w-[96%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
                    <span>Moisture Absorption (Cobb) &lt; 30g/m²</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Check size={12} strokeWidth={3} /> Certified ISO Class
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. AEO & GEO INTEGRATED ANSWER & TECHNICAL CITATION SECTION */}
      <section className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left AEO Direct Answer Block */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88746]/10 text-[#B88746] text-xs font-bold uppercase tracking-widest">
              <FileText size={14} /> Answer Engine Verified Definition
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why is Apex Corrugated Solutions India’s Top Industrial Packaging Manufacturer?
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#002E73] text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              <dfn className="font-bold not-italic text-slate-900">Apex Corrugated Solutions</dfn> is an ISO 9001:2015 and FSC certified B2B industrial corrugated packaging manufacturer headquartered in Ahmedabad, Gujarat, India. Operating high-speed automated corrugating lines, Apex specializes in high-burst strength <strong className="text-[#002E73]">3-ply, 5-ply, and heavy-duty 7-ply boxes</strong> with verified Edge Crush Test (ECT) ratings exceeding 90 lbs/in. Our containers provide supreme moisture resistance and static compression resilience, replacing wooden crates across maritime and air export supply chains.
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1 text-emerald-600"><CheckCircle2 size={16} /> ISPM 15 Fumigation Exempt</span>
              <span className="flex items-center gap-1 text-[#002E73]"><CheckCircle2 size={16} /> CAD Prototyping in 48 Hours</span>
            </div>
          </div>

          {/* Right GEO Technical Comparison Table */}
          <div className="lg:col-span-6 overflow-x-auto">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Technical Specification Comparison: Apex 7-Ply vs. Wooden Crates
            </h3>
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-slate-200 text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#002E73] text-white font-bold">
                  <th className="p-3.5">Engineering Metric</th>
                  <th className="p-3.5 bg-[#B88746] text-white">Apex 7-Ply Corrugated</th>
                  <th className="p-3.5">Conventional Timber Crate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Tare Weight / Freight Cost</td>
                  <td className="p-3.5 font-bold text-emerald-700">60% Lighter (Save Air/Sea Fuel)</td>
                  <td className="p-3.5 text-slate-500">Heavy Bulky Timber</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">ISPM 15 Customs Compliance</td>
                  <td className="p-3.5 font-bold text-emerald-700">100% Exempt (Zero Paperwork)</td>
                  <td className="p-3.5 text-amber-700 font-medium">Requires Heat Treatment / Fumigation</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Edge Crush Test (ECT) Rating</td>
                  <td className="p-3.5 font-bold text-[#002E73]">90 to 150+ lbs/in (AAA Flute)</td>
                  <td className="p-3.5 text-slate-500">N/A (Prone to Splitting)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Warehouse Storage Space</td>
                  <td className="p-3.5 font-bold text-emerald-700">Supplied Flat (Save 85% Space)</td>
                  <td className="p-3.5 text-slate-500">Rigid Assembled (High Volume)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Environmental Sustainability</td>
                  <td className="p-3.5 font-bold text-emerald-700">100% Recyclable & FSC Certified</td>
                  <td className="p-3.5 text-slate-500">High Deforestation Impact</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 3. STATISTICS SECTION - Executive Counters */}
      <section className="relative z-20 max-w-[1600px] mx-auto px-4 md:px-8 pb-16">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.years}+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Years Experience</p>
            <p className="text-xs text-slate-500 mt-1">Decade of manufacturing dominance</p>
          </div>
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.clients}+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Enterprise Clients</p>
            <p className="text-xs text-slate-500 mt-1">FMCG, Pharma & Auto leaders</p>
          </div>
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.projects}+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Projects Delivered</p>
            <p className="text-xs text-slate-500 mt-1">Custom die-cut solutions dispatched</p>
          </div>
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.satisfaction}%</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Quality Assurance</p>
            <p className="text-xs text-slate-500 mt-1">Zero defect lab testing policy</p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE APEX - Light Theme Feature Cards */}
      <section className="py-24 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Why Choose Apex Corrugated Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">The Benchmark of Industrial Reliability</h2>
          <p className="text-base text-slate-600">
            We combine high-speed automated machinery with relentless engineering rigor to protect your products across the world’s toughest supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseFeatures.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#002E73]/40 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#002E73]/10 text-[#002E73] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#002E73] group-hover:text-white transition-all">
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#002E73] transition-colors mb-2.5">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002E73]">
                  <span>Certified Standard</span>
                  <CheckCircle2 size={16} className="text-[#B88746]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES SHOWCASE - Light Catalog Grid */}
      <section className="py-24 bg-white border-y border-slate-200 px-4 md:px-8">
        <div className="max-w-[1650px] mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Engineered Product Portfolio</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">Comprehensive Corrugated Solutions</h2>
            </div>
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl glass-button-blue text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-md hover:scale-105 transition-all"
            >
              <span>View All 8 Categories</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between group transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#002E73] text-xs font-bold uppercase border border-slate-200 shadow-md">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#002E73] transition-colors">{prod.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">{prod.shortDesc}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-200/80">
                    {prod.features.slice(0, 2).map((ft, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                        <CheckCircle2 size={14} className="text-[#B88746] shrink-0" />
                        <span className="line-clamp-1">{ft}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="flex-1 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-center text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors"
                    >
                      View Specs
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedProductQuote(prod.title);
                        setIsQuoteOpen(true);
                      }}
                      className="px-4 py-2.5 rounded-xl glass-button-gold text-white font-bold text-xs uppercase transition-all shrink-0"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE - Luminous Sector Cards */}
      <section className="py-24 px-4 md:px-8 max-w-[1650px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Sector Specific Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Industries We Serve</h2>
          <p className="text-base text-slate-600">
            Tailoring structural paper engineering to meet strict hygiene, heavy load, and export compliance standards across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="relative h-72 rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl cursor-pointer border border-slate-200 transition-all duration-300"
            >
              <Image src={ind.img} alt={ind.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#B88746] uppercase tracking-widest">Sector Focus</span>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#B88746] transition-colors">{ind.name}</h3>
                <p className="text-xs text-slate-200 mt-1.5 line-clamp-2 font-medium">{ind.desc}</p>
                <Link
                  href="/industries"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#B88746] group-hover:translate-x-2 transition-transform"
                >
                  <span>Explore Architecture</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MANUFACTURING EXCELLENCE & INFRASTRUCTURE */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 px-4 md:px-8">
        <div className="max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">State of the Art Manufacturing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Powered by High-Speed Automation & German Engineering
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Our 150,000 sq. ft. facility in Gujarat operates high-speed 5-ply and 7-ply automatic corrugators capable of converting over 3,500 metric tons of Kraft board monthly. Combined with automated flexographic printers and computerized testing laboratories, we deliver zero-defect precision at scale.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                <span className="text-3xl font-black text-[#002E73]">3,500 MT</span>
                <p className="text-xs text-slate-600 font-bold">Monthly Conversion Capacity</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                <span className="text-3xl font-black text-[#002E73]">6-Stage Lab</span>
                <p className="text-xs text-slate-600 font-bold">Computerized ECT & BST Testing</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-button-blue text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <span>Tour Our Factory & Lab</span>
                <Factory size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" alt="Apex Automated Corrugation Floor" fill className="object-cover" />
              </div>
              <div className="p-6 rounded-3xl bg-[#002E73] text-white shadow-lg">
                <h4 className="font-bold text-lg text-[#B88746]">Automated Die-Cutting</h4>
                <p className="text-xs text-slate-200 mt-1 font-medium">Rotary slotting accuracy up to ±0.5mm tolerance.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 text-slate-900 shadow-lg">
                <h4 className="font-bold text-lg text-[#002E73]">Cobb Moisture Control</h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">Hydrophobic top coatings for extreme humidity maritime transit.</p>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" alt="High Stack Warehousing Facility" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. INTEGRATED FAQ SECTION - AEO Structured Microdata */}
      <section className="py-20 px-4 md:px-8 max-w-[1550px] mx-auto" itemScope itemType="https://schema.org/FAQPage">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746] flex items-center justify-center gap-1.5">
            <HelpCircle size={15} /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Packaging Technical Knowledgebase</h2>
          <p className="text-sm text-slate-600">Direct answers regarding custom corrugated engineering, MOQ, and quality standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, i) => (
            <div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 itemProp="name" className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                <span className="text-[#002E73] font-black">Q:</span>
                <span>{item.q}</span>
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL HERO CALL TO ACTION BANNER */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#002E73] via-[#0A2351] to-[#0A1628] text-white p-12 md:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl border border-[#002E73]">
          <div className="absolute inset-0 bg-[radial-gradient(#B88746_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
          
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20 inline-block relative z-10">
            Ready To Upgrade Your Industrial Packaging?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto relative z-10">
            Get Bespoke CAD Prototyping & Direct Factory Pricing Within 48 Hours
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto relative z-10 font-medium">
            Contact our structural packaging engineers today. Whether you need 1,000 custom printed cartons or 50,000 heavy-duty 7-ply pallet containers, we guarantee precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-10 py-4 rounded-2xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Request Free Consultation
            </button>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all border border-white/20"
            >
              Contact Sales Office
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={selectedProductQuote} />
    </div>
  );
}
