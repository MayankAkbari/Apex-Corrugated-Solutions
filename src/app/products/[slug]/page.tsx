'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ShieldCheck, Box, Calculator, Send, Sparkles, Layers, Factory, Check } from 'lucide-react';
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-[#FAFAF9]">
        <Box size={48} className="text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Product Specification Not Found</h2>
        <p className="text-slate-500 mt-2 font-medium">The packaging specification you requested may have been archived or re-engineered.</p>
        <Link href="/products" className="mt-6 px-6 py-3 rounded-2xl bg-[#002E73] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#00255c]">
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

  // Dynamic Product JSON-LD Schema for SEO & GEO
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.gallery && product.gallery.length > 0 ? product.gallery : [product.image],
    description: product.fullDesc || product.shortDesc,
    sku: `APEX-PROD-${product.id.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: 'Apex Corrugated Solutions'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Apex Corrugated Solutions Pvt. Ltd.'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Apex Corrugated Solutions Pvt. Ltd.'
      }
    }
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/Product">
      
      {/* Inject Dynamic Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-5 px-4 md:px-8">
        <div className="max-w-[1550px] mx-auto flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/products" className="hover:text-[#002E73] transition-colors flex items-center gap-1 font-bold text-slate-700">
              <ArrowLeft size={14} /> Products Catalog
            </Link>
            <span>/</span>
            <span className="text-[#002E73] font-semibold">{product.category}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold" itemProp="name">{product.title}</span>
          </div>
          <span className="hidden sm:inline font-mono font-bold text-[#002E73]">Spec ID: {product.id.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Product Hero & Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-96 sm:h-[500px] w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <Image
                src={activeImage || product.image}
                alt={product.title}
                fill
                className="object-cover"
                itemProp="image"
              />
              <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 text-[#002E73] text-xs font-bold uppercase shadow-md border border-slate-200">
                {product.category}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      (activeImage || product.image) === imgUrl ? 'border-[#002E73] scale-105 shadow-md' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={imgUrl} alt="Specification Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Technical Highlights Badge */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#002E73] flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#B88746]" /> Engineering Assurance & Guarantee
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Tested under rigorous ISTA compression & vibration profiles. We guarantee Cobb moisture resistance under 30g/m² and verified Edge Crush Test (ECT) ratings with every commercial batch dispatch.
              </p>
            </div>
          </div>

          {/* Right Specification details & Quick Quote */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Corrugated Packaging Specification</span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-2 tracking-tight">{product.title}</h1>
              <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-medium" itemProp="description">{product.fullDesc}</p>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-[#002E73] text-white px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-sm uppercase tracking-wider">Technical Specifications</span>
                <span className="text-xs text-[#B88746] font-mono font-bold">ISO 9001:2015 Accredited</span>
              </div>
              <div className="divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-3 p-4">
                  <span className="font-bold text-slate-500">Box Ply Rating:</span>
                  <span className="col-span-2 font-bold text-slate-900">{product.specs.ply}</span>
                </div>
                <div className="grid grid-cols-3 p-4 bg-slate-50">
                  <span className="font-bold text-slate-500">Fluting Profile:</span>
                  <span className="col-span-2 font-bold text-slate-900">{product.specs.fluteType}</span>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <span className="font-bold text-slate-500">GSM Board Range:</span>
                  <span className="col-span-2 font-bold text-slate-900">{product.specs.gsmRange}</span>
                </div>
                <div className="grid grid-cols-3 p-4 bg-slate-50">
                  <span className="font-bold text-slate-500">ECT Strength:</span>
                  <span className="col-span-2 font-mono font-bold text-[#002E73]">{product.specs.ectStrength}</span>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <span className="font-bold text-slate-500">Static Load Capacity:</span>
                  <span className="col-span-2 font-bold text-slate-900">{product.specs.loadCapacity}</span>
                </div>
                <div className="grid grid-cols-3 p-4 bg-slate-50">
                  <span className="font-bold text-slate-500">Printing & Branding:</span>
                  <span className="col-span-2 font-bold text-slate-900">{product.specs.printing}</span>
                </div>
              </div>
            </div>

            {/* Key Features & Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={16} className="text-[#B88746]" /> Key Structural Features
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                  {product.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#002E73]/10 text-[#002E73] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Factory size={16} className="text-[#002E73]" /> Supply Chain Benefits
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                  {product.benefits.map((bn, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
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
                className="flex-1 py-4 rounded-2xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all"
              >
                Get Wholesale Quote For This Spec
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Inquiry Section & Applications */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Applications & Industries Served */}
        <div className="lg:col-span-6 space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-2xl font-black text-slate-900">Primary Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {product.applications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#002E73]" />
                  <span>{app}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-black text-slate-900 pt-6 border-t border-slate-100">Industries Served</h3>
            <div className="flex flex-wrap gap-2">
              {product.industriesServed.map(ind => (
                <span key={ind} className="px-4 py-2 rounded-xl bg-[#002E73] text-white text-xs font-bold uppercase tracking-wider">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Direct Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="p-8 md:p-10 rounded-3xl bg-[#002E73] text-white border border-[#002E73] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 size={56} className="mx-auto text-[#B88746]" />
                <h3 className="text-2xl font-extrabold text-white">Inquiry Registered!</h3>
                <p className="text-sm text-slate-200 max-w-sm mx-auto font-medium">
                  Our packaging engineers have logged your request for <span className="text-white font-bold">{product.title}</span>. We will email the wholesale price matrix directly to <span className="text-[#B88746] font-bold">{inquiryData.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white uppercase font-bold tracking-wider transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    value={inquiryData.company}
                    onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Official Email *"
                    value={inquiryData.email}
                    onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1">Estimated Monthly Volume</label>
                  <input
                    type="text"
                    required
                    value={inquiryData.quantity}
                    onChange={(e) => setInquiryData({ ...inquiryData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746] font-bold"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Additional notes (e.g., target dimensions, Cobb requirement, 4-color printing)..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
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
        <section className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto border-t border-slate-200">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Related Packaging Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(rp => (
              <Link
                key={rp.id}
                href={`/products/${rp.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-56 w-full bg-slate-100">
                  <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#002E73]">{rp.category}</span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#002E73] transition-colors">{rp.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2 font-medium">{rp.shortDesc}</p>
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
