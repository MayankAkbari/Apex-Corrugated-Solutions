'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Share2, Globe, MessageSquare, Award, Clock } from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer aria-label="Corporate Footer" className="relative bg-[#0F172A] text-white pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Background Gradient & Subtle Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#002E73]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#B88746]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Newsletter & Brand High-Contrast Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl text-slate-900">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest mb-3 border border-[#002E73]/20">
              <ShieldCheck size={15} className="text-[#B88746]" />
              <span>B2B Corporate Intelligence & Raw Paper Index</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Subscribe to Industrial Packaging & Raw Paper Pricing News
            </h3>
            <p className="text-slate-600 text-sm mt-2 max-w-xl leading-relaxed">
              Receive our quarterly Kraft raw paper pricing index, sustainable export container standards (ISPM 15), and engineering breakthroughs directly to your corporate inbox.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center gap-3 text-emerald-900">
                <CheckCircle className="text-emerald-600 shrink-0" size={26} />
                <div>
                  <h4 className="font-bold text-sm">Subscribed Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">You have been added to our corporate packaging dispatch list.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email (e.g., purchase@company.com)..."
                  aria-label="Corporate Email Address"
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium shadow-inner"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to Packaging News"
                  className="px-8 py-3.5 rounded-2xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Subscribe</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800">
          
          {/* Column 1: Company Profile & Microdata */}
          <div className="lg:col-span-4 space-y-6" itemScope itemType="https://schema.org/Organization">
            <Link href="/" className="inline-block bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200">
              <Image src="/logo.png" alt="Apex Corrugated Solutions Logo" width={220} height={56} className="object-contain" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed pr-6" itemProp="description">
              Apex Corrugated Solutions is an ISO 9001:2015 & FSC Certified B2B manufacturer of heavy-duty industrial corrugated containers. Engineered for superior Edge Crush Test (ECT) ratings, high burst strength, and extreme cargo protection.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://apexcorrugated.in" aria-label="Global Network" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#002E73] hover:text-[#B88746] transition-all border border-slate-700 text-slate-300" title="Global Network">
                <Globe size={18} />
              </a>
              <a href="https://linkedin.com/company/apex-corrugated-solutions" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#002E73] hover:text-[#B88746] transition-all border border-slate-700 text-slate-300" title="Share & Network">
                <Share2 size={18} />
              </a>
              <a href="/contact" aria-label="Customer Support Desk" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#002E73] hover:text-[#B88746] transition-all border border-slate-700 text-slate-300" title="Customer Chat Desk">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#B88746] pb-2 border-b border-slate-800">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              <li><Link href="/about" className="hover:text-[#B88746] transition-colors">About Our Company</Link></li>
              <li><Link href="/infrastructure" className="hover:text-[#B88746] transition-colors">Manufacturing Infrastructure</Link></li>
              <li><Link href="/quality" className="hover:text-[#B88746] transition-colors">Quality Assurance & Lab</Link></li>
              <li><Link href="/gallery" className="hover:text-[#B88746] transition-colors">Factory & Product Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-[#B88746] transition-colors">Client Reviews & Ratings</Link></li>
              <li><Link href="/blog" className="hover:text-[#B88746] transition-colors">Packaging Insights Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#B88746] transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-[#B88746] transition-colors">Request Custom Sample</Link></li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#B88746] pb-2 border-b border-slate-800">Engineered Products</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              {PRODUCTS.slice(0, 7).map((prod) => (
                <li key={prod.id}>
                  <Link href={`/products/${prod.slug}`} className="hover:text-[#B88746] transition-colors line-clamp-1">
                    {prod.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/products" className="text-[#B88746] hover:underline font-bold flex items-center gap-1">
                  View Complete Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Details (AEO Microdata) */}
          <div className="lg:col-span-3 space-y-4" itemScope itemType="https://schema.org/LocalBusiness">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#B88746] pb-2 border-b border-slate-800">Corporate & Plant Contact</h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin size={18} className="text-[#B88746] shrink-0 mt-0.5" />
                <span>
                  <span itemProp="streetAddress">Plot No. 42-45, Industrial Zone Phase III, GIDC</span>,{' '}
                  <span itemProp="addressLocality">Ahmedabad</span> - <span itemProp="postalCode">380015</span>,{' '}
                  <span itemProp="addressRegion">Gujarat</span>, <span itemProp="addressCountry">India</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#B88746] shrink-0" />
                <span>
                  <a href="tel:+919820011223" className="hover:text-white transition-colors" itemProp="telephone">+91 98200 11223</a> / +91 79 2650 8899
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#B88746] shrink-0" />
                <a href="mailto:info@apexcorrugated.in" className="hover:text-white transition-colors" itemProp="email">info@apexcorrugated.in</a>
              </div>
              <div className="pt-2 flex items-start gap-3 border-t border-slate-800">
                <Clock size={16} className="text-[#B88746] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider">Plant Dispatch Hours:</span>
                  <span>Mon - Sat: 9:00 AM - 7:30 PM (IST)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <p>© {new Date().getFullYear()} Apex Corrugated Solutions Private Limited. All Rights Reserved. ISO 9001:2015 Certified.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Supply</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="/admin" className="text-[#B88746] hover:underline font-bold">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
