'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ShieldCheck, Box, Calculator, Send, Sparkles, Layers, Factory } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { products, addInquiry } = useApp();
  const slug = params?.slug as string;

  const product = products.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '5,000 Units',
    message: ''
  });

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <Box size={48} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-[#001633]">Product Specification Not Found</h2>
        <p className="text-gray-500 mt-2">The packaging specification you requested may have been archived or re-engineered.</p>
        <Link href="/products" className="mt-6 px-6 py-3 rounded-xl bg-[#002E73] text-white font-bold text-xs uppercase">
          Back to Products Catalog
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && (p.category === product.category || p.industriesServed.some(ind => product.industriesServed.includes(ind)))).slice(0, 3);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      name: inquiryData.name,
      email: inquiryData.email,
      phone: inquiryData.phone,
      company: inquiryData.company,
      productReq: `${product.title} (Dedicated Inquiry)`,
      quantity: inquiryData.quantity,
      message: inquiryData.message || 'Direct inquiry from product specification page.'
    });
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden pb-24">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#001633] text-white py-6 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between text-xs text-[#B2B2B2]">
          <div className="flex items-center gap-2">
            <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Products Catalog
            </Link>
            <span>/</span>
            <span className="text-[#B88746] font-semibold">{product.category}</span>
            <span>/</span>
            <span className="text-white font-bold">{product.title}</span>
          </div>
          <span className="hidden sm:inline font-mono text-[#B88746]">Specification ID: {product.id.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Product Hero & Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl">
              <Image
                src={activeImage || product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#001633]/90 text-[#B88746] text-xs font-bold uppercase shadow-lg border border-white/20">
                {product.category}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex gap-4">
                {product.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                      (activeImage || product.image) === imgUrl ? 'border-[#002E73] scale-105 shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={imgUrl} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Technical Highlights Badge */}
            <div className="p-6 rounded-3xl glass-card bg-[#001633] text-white space-y-3 border border-white/10 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746] flex items-center gap-1.5">
                <ShieldCheck size={16} /> Engineering Guarantee
              </span>
              <p className="text-xs text-[#B2B2B2] leading-relaxed">
                Tested under ISTA compression profiles. We guarantee Cobb moisture resistance and verified Edge Crush Test ratings with every commercial batch dispatch.
              </p>
            </div>
          </div>

          {/* Right Specification details & Quick Quote */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Corrugated Packaging Specification</span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#001633] mt-2 tracking-tight">{product.title}</h1>
              <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">{product.fullDesc}</p>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="bg-[#002E73] text-white px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-sm uppercase tracking-wider">Technical Specifications</span>
                <span className="text-xs text-[#B88746] font-mono">ISO 9001 Compliant</span>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-3 p-4">
                  <span className="font-bold text-gray-500">Box Ply Rating:</span>
                  <span className="col-span-2 font-semibold text-[#001633]">{product.specs.ply}</span>
                </div>
                <div className="grid grid-cols-3 p-4 bg-gray-50/50">
                  <span className="font-bold text-gray-500">Flute Type:</span>
                  <span className="col-span-2 font-semibold text-[#001633]">{product.specs.fluteType}</span>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <span className="font-bold text-gray-500">GSM Board Range:</span>
                  <span className="col-span-2 font-semibold text-[#001633]">{product.specs.gsmRange}</span>
                </div>
                <div className="grid grid-cols-3 p-4 bg-gray-50/50">
                  <span className="font-bold text-gray-500">ECT Strength:</span>
                  <span className="col-span-2 font-mono font-bold text-[#002E73]">{product.specs.ectStrength}</span>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <span className="font-bold text-gray-500">Static Load Capacity:</span>
                  <span className="col-span-2 font-semibold text-[#001633]">{product.specs.loadCapacity}</span>
                </div>
                <div className="grid grid-cols-3 p-4 bg-gray-50/50">
                  <span className="font-bold text-gray-500">Printing & Branding:</span>
                  <span className="col-span-2 font-semibold text-[#001633]">{product.specs.printing}</span>
                </div>
              </div>
            </div>

            {/* Key Features & Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md space-y-3">
                <h4 className="font-bold text-[#001633] text-sm uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={16} className="text-[#B88746]" /> Key Features
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  {product.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#002E73] shrink-0 mt-0.5" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md space-y-3">
                <h4 className="font-bold text-[#001633] text-sm uppercase tracking-wider flex items-center gap-2">
                  <Factory size={16} className="text-[#B88746]" /> Supply Chain Benefits
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  {product.benefits.map((bn, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="flex-1 py-4 rounded-2xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl"
              >
                Get Wholesale Quote For This Spec
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Inquiry Section & Applications */}
      <section className="py-16 px-4 md:px-8 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Applications & Industries Served */}
        <div className="lg:col-span-6 space-y-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-[#001633]">Primary Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.applications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#002E73]" />
                  <span>{app}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[#001633] pt-4 border-t border-gray-100">Industries Served</h3>
            <div className="flex flex-wrap gap-2">
              {product.industriesServed.map(ind => (
                <span key={ind} className="px-4 py-2 rounded-xl bg-[#001633] text-white text-xs font-bold uppercase tracking-wider">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Direct Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="p-8 md:p-10 rounded-3xl glass-card-dark bg-[#001633] text-white border border-white/20 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 size={48} className="mx-auto text-[#B88746]" />
                <h3 className="text-2xl font-bold text-white">Inquiry Registered!</h3>
                <p className="text-sm text-[#B2B2B2] max-w-sm mx-auto">
                  Our packaging engineers have logged your request for <span className="text-white font-bold">{product.title}</span>. We will email the wholesale price matrix directly to <span className="text-[#B88746]">{inquiryData.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-white/10 text-xs text-white uppercase font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Rapid Specification Inquiry</span>
                  <h3 className="text-2xl font-extrabold text-white">Request Sample / Quote</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    value={inquiryData.company}
                    onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Official Email *"
                    value={inquiryData.email}
                    onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#B2B2B2] mb-1">Estimated Monthly Volume</label>
                  <input
                    type="text"
                    required
                    value={inquiryData.quantity}
                    onChange={(e) => setInquiryData({ ...inquiryData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#B88746]"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Additional notes (e.g., target dimensions, Cobb requirement, 4-color printing)..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Transmit Inquiry To Engineering</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 md:px-8 max-w-[1500px] mx-auto border-t border-gray-200">
          <h3 className="text-2xl font-bold text-[#001633] mb-8">Related Packaging Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(rp => (
              <Link
                key={rp.id}
                href={`/products/${rp.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 w-full">
                  <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#B88746]">{rp.category}</span>
                  <h4 className="text-lg font-bold text-[#001633] group-hover:text-[#002E73]">{rp.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{rp.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={product.title} />
    </div>
  );
}
