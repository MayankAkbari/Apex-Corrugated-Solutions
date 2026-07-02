'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Box, Award, ArrowRight, CheckCircle2, Sparkles, Factory, 
  Truck, Recycle, DollarSign, Users, Wrench, ChevronRight, Layers, Star
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function HomePage() {
  const { products } = useApp();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductQuote, setSelectedProductQuote] = useState<string>('Precision Corrugated Boxes');
  const [activeTab, setActiveTab] = useState<number>(0);

  // Animated counter hook simulation
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
    { title: 'Fast Delivery', desc: '48-hour prototyping and 5-day commercial dispatch pan-India via our dedicated fleet.', icon: Truck },
    { title: 'Competitive Pricing', desc: 'Direct factory pricing with optimized paper consumption algorithms saving up to 25%.', icon: DollarSign },
    { title: 'Eco-Friendly Packaging', desc: '100% recyclable, FSC certified, and manufactured using biodegradable starch adhesives.', icon: Recycle },
    { title: 'Quality Assurance', desc: 'Every batch tested for Edge Crush Test (ECT), Bursting Strength (BST), and compression.', icon: ShieldCheck },
    { title: 'Dedicated Support', desc: 'Assigned packaging engineers & account managers providing 24/7 B2B order tracking.', icon: Users },
  ];

  const industries = [
    { name: 'FMCG', desc: 'Shelf-Ready Packaging & Master Shippers', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Pharmaceutical', desc: 'Odorless Food-Grade & Braille Cartons', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'Electronics', desc: 'Anti-Static ESD & Shock-Proof Partitions', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
    { name: 'Automobile', desc: '7-Ply Heavy Pallet Boxes (>1,500 kg load)', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80' },
    { name: 'Textiles', desc: 'Moisture-Proof Yarn Export Container Shippers', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Agriculture', desc: 'Ventilated & Moisture-Resistant Produce Packs', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80' },
    { name: 'E-Commerce', desc: 'Peel-and-Seal Tamper Evident Fast Mailers', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80' },
    { name: 'Food Industry', desc: 'FSSAI Compliant Odor-Free Master Shippers', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* 1. HERO SECTION - Liquid Glass & 3D Interactive Showcase */}
      <section className="relative min-h-[90vh] bg-[#001633] text-white flex items-center py-20 px-4 md:px-8">
        {/* Animated Background Mesh & Lights */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#B88746]/20 blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#B2B2B2_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark text-[#B88746] text-xs font-bold uppercase tracking-widest border border-[#B88746]/40 shadow-lg">
              <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
              <span>India’s Leading Industrial Corrugated Innovator</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
              Engineered Packaging Solutions For A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Stronger Tomorrow</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#B2B2B2] max-w-2xl font-normal leading-relaxed">
              Premium Corrugated Packaging Solutions Designed For Performance, Protection, And Business Growth. Replacing bulky timber with ultra-high ECT triple-wall corrugated containers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  setSelectedProductQuote('Precision Corrugated Boxes');
                  setIsQuoteOpen(true);
                }}
                className="px-8 py-4 rounded-2xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                <span>Get Free Quote</span>
                <ArrowRight size={18} />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-2xl glass-button-blue text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all border border-white/20 flex items-center gap-2"
              >
                <span>Explore Products</span>
                <Box size={18} />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#B88746] shrink-0" size={20} />
                <span className="text-xs font-semibold text-[#B2B2B2]">ISO 9001:2015 Lab Tested</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#B88746] shrink-0" size={20} />
                <span className="text-xs font-semibold text-[#B2B2B2]">FSC Sustainable Kraft</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#B88746] shrink-0" size={20} />
                <span className="text-xs font-semibold text-[#B2B2B2]">Pan-India Logistics</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visualizer Column: 3D Animated Packaging Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#002E73] to-[#B88746] opacity-30 blur-2xl animate-pulse" />

              {/* Main Glass Visualizer Card */}
              <div className="relative z-10 w-full h-full rounded-3xl glass-card-dark border border-white/20 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-[#B88746] uppercase">CAD Live Simulation</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#002E73] text-white">7-Ply Heavy Duty Spec</span>
                </div>

                {/* Simulated 3D Box Graphic */}
                <div className="relative my-auto py-6 flex items-center justify-center animate-float">
                  <div className="relative w-64 h-56 transition-transform hover:scale-105 duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
                      alt="3D Corrugated Box Visualization"
                      fill
                      className="object-cover rounded-2xl shadow-2xl border-2 border-[#B88746]/50"
                    />
                    {/* Floating Specification Floating Badges */}
                    <div className="absolute -top-4 -left-6 px-3 py-1.5 rounded-xl glass-card-dark text-[11px] font-bold text-[#B88746] border border-[#B88746]/40 shadow-xl">
                      ⚡ ECT Strength: 90+ lbs/in
                    </div>
                    <div className="absolute -bottom-4 -right-6 px-3 py-1.5 rounded-xl glass-card-dark text-[11px] font-bold text-white border border-white/20 shadow-xl">
                      📦 Stacking: 1,500 kg Static
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Spec Selector */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between text-xs text-[#B2B2B2] mb-2">
                    <span>Fluting Structure:</span>
                    <span className="text-[#B88746] font-bold">AAA Triple-Wall Hybrid</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#002E73] to-[#B88746] h-full w-[95%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-white/60 mt-1.5">
                    <span>Moisture Absorption (Cobb) &lt; 30g/m²</span>
                    <span className="text-emerald-400 font-medium">Verified Passed</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION - Animated Counters */}
      <section className="relative z-20 -mt-10 max-w-[1500px] mx-auto px-4 md:px-8">
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-white shadow-2xl bg-white grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.years}+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Years Experience</p>
            <p className="text-xs text-gray-500 mt-1">Decade of manufacturing dominance</p>
          </div>
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.clients}+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Happy Clients</p>
            <p className="text-xs text-gray-500 mt-1">FMCG, Pharma & Auto leaders</p>
          </div>
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.projects}+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Projects Delivered</p>
            <p className="text-xs text-gray-500 mt-1">Custom die-cut solutions dispatched</p>
          </div>
          <div className="text-center px-4 pt-4 lg:pt-0">
            <span className="text-4xl sm:text-5xl font-black text-[#002E73] tracking-tight">{counts.satisfaction}%</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88746] mt-2">Customer Satisfaction</p>
            <p className="text-xs text-gray-500 mt-1">Zero defect QA policy</p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE APEX - Animated Feature Cards */}
      <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Why Choose Apex Corrugated Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001633] tracking-tight">The Benchmark of Industrial Reliability</h2>
          <p className="text-base text-gray-600">
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
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl glass-card border border-gray-200 shadow-lg hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#002E73] text-[#B88746] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-[#B88746] group-hover:text-white transition-all">
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#001633] group-hover:text-[#002E73] transition-colors mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#002E73]">
                  <span>Certified Standard</span>
                  <CheckCircle2 size={16} className="text-[#B88746]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES SHOWCASE */}
      <section className="py-24 bg-[#001633] text-white relative px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Engineered Product Portfolio</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">Comprehensive Corrugated Solutions</h2>
            </div>
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0"
            >
              <span>View All 8 Categories</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -8 }}
                className="rounded-3xl glass-card-dark overflow-hidden border border-white/15 flex flex-col justify-between group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001633] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002E73]/90 text-[#B88746] text-xs font-bold uppercase backdrop-blur-md border border-white/20">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B88746] transition-colors">{prod.title}</h3>
                    <p className="text-xs text-[#B2B2B2] mt-2 line-clamp-2 leading-relaxed">{prod.shortDesc}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {prod.features.slice(0, 2).map((ft, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#B2B2B2]">
                        <CheckCircle2 size={12} className="text-[#B88746] shrink-0" />
                        <span className="line-clamp-1">{ft}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors"
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

      {/* 5. INDUSTRIES WE SERVE - Interactive Grid */}
      <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Sector Specific Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001633]">Industries We Serve</h2>
          <p className="text-base text-gray-600">
            Tailoring structural paper engineering to meet strict hygiene, heavy load, and export compliance standards across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="relative h-72 rounded-3xl overflow-hidden group shadow-lg cursor-pointer border border-gray-200"
            >
              <Image src={ind.img} alt={ind.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001633] via-[#001633]/50 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#B88746] uppercase tracking-widest">Sector Focus</span>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#B88746] transition-colors">{ind.name}</h3>
                <p className="text-xs text-[#B2B2B2] mt-1 line-clamp-2">{ind.desc}</p>
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

      {/* 6. MANUFACTURING EXCELLENCE & INFRASTRUCTURE PREVIEW */}
      <section className="py-24 bg-gradient-to-b from-[#F5F6F8] to-white border-t border-gray-200 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">State of the Art Manufacturing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#001633] leading-tight">
              Powered by High-Speed Automation & German Engineering
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Our 150,000 sq. ft. facility in Gujarat operates high-speed 5-ply and 7-ply automatic corrugators capable of converting over 3,500 metric tons of Kraft board monthly. Combined with automated flexographic printers and rotary slotting machines, we deliver zero-defect precision at scale.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#001633] text-white space-y-1 shadow-xl">
                <span className="text-2xl font-black text-[#B88746]">3,500 MT</span>
                <p className="text-xs text-[#B2B2B2] font-semibold">Monthly Conversion Capacity</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#001633] text-white space-y-1 shadow-xl">
                <span className="text-2xl font-black text-[#B88746]">6-Stage Lab</span>
                <p className="text-xs text-[#B2B2B2] font-semibold">Computerized ECT & BST Testing</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-button-blue text-white font-bold text-sm uppercase tracking-wider shadow-xl"
              >
                <span>Tour Our Factory & Lab</span>
                <Factory size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" alt="Factory Floor" fill className="object-cover" />
              </div>
              <div className="p-6 rounded-3xl glass-card bg-[#002E73] text-white shadow-xl">
                <h4 className="font-bold text-lg text-[#B88746]">Automated Die-Cutting</h4>
                <p className="text-xs text-[#B2B2B2] mt-1">Rotary slotting accuracy up to ±0.5mm tolerance.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-3xl glass-card bg-[#001633] text-white shadow-xl">
                <h4 className="font-bold text-lg text-[#B88746]">Zero Humidity Cobb</h4>
                <p className="text-xs text-[#B2B2B2] mt-1">Hydrophobic top coatings for maritime export.</p>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" alt="Automated Warehousing" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL HERO CALL TO ACTION BANNER */}
      <section className="py-20 px-4 md:px-8 bg-[#002E73] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B88746_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto text-center space-y-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            Ready To Upgrade Your Supply Chain?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Get Custom CAD Prototyping & Wholesale B2B Pricing Within 48 Hours
          </h2>
          <p className="text-base sm:text-lg text-[#B2B2B2] max-w-2xl mx-auto">
            Contact our structural packaging engineers today. Whether you need 1,000 custom printed boxes or 50,000 heavy pallet shippers, we deliver excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
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
