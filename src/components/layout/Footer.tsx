'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Share2, Globe, MessageSquare } from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '@/data/mockData';

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
    <footer className="relative bg-[#001633] text-white pt-20 pb-10 border-t border-white/15 overflow-hidden">
      {/* Background Gradient & Reflection Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#002E73]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#B88746]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Newsletter & Brand Glass Bar */}
        <div className="p-8 md:p-12 rounded-3xl glass-card-dark border border-white/20 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746] flex items-center gap-1.5 mb-2">
              <ShieldCheck size={16} /> Stay Ahead with Packaging Insights
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Subscribe to Industrial Packaging News</h3>
            <p className="text-[#B2B2B2] text-sm mt-2 max-w-md">
              Receive quarterly market raw paper pricing index, sustainable export packaging standards, and engineering breakthroughs.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#B88746]/20 border border-[#B88746] flex items-center gap-3 text-white">
                <CheckCircle className="text-[#B88746] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm">Subscribed Successfully!</h4>
                  <p className="text-xs text-[#B2B2B2]">You have been added to our corporate dispatch list.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email address..."
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746] text-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg"
                >
                  <span>Subscribe</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block bg-white/95 rounded-2xl p-2 shadow-xl border border-[#B88746]/40">
              <Image src="/logo.png" alt="Apex Corrugated Solutions" width={220} height={56} className="object-contain" />
            </Link>
            <p className="text-sm text-[#B2B2B2] leading-relaxed pr-6">
              Apex Corrugated Solutions is an ISO 9001:2015 and FSC certified industrial corrugated packaging manufacturer. Engineered for ultimate edge crush performance, structural protection, and global logistics reliability.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#002E73] hover:text-[#B88746] transition-all border border-white/15" title="Global Network">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#002E73] hover:text-[#B88746] transition-all border border-white/15" title="Community Share">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#002E73] hover:text-[#B88746] transition-all border border-white/15" title="Customer Chat Desk">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B88746] pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#B2B2B2]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Company</Link></li>
              <li><Link href="/infrastructure" className="hover:text-white transition-colors">Manufacturing Infrastructure</Link></li>
              <li><Link href="/quality" className="hover:text-white transition-colors">Quality Assurance & Lab</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Factory & Product Gallery</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Client Testimonials</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Packaging Insights Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B88746] pb-2 border-b border-white/10">Products</h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#B2B2B2]">
              {PRODUCTS.slice(0, 7).map((prod) => (
                <li key={prod.id}>
                  <Link href={`/products/${prod.slug}`} className="hover:text-white transition-colors">
                    {prod.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-[#B88746] hover:underline font-bold">View Full Catalog →</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#B88746] pb-2 border-b border-white/10">Corporate Contact</h4>
            <div className="space-y-3 text-xs text-[#B2B2B2]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#B88746] shrink-0 mt-0.5" />
                <span>Plot No. 42-45, Industrial Zone Phase III, GIDC, Ahmedabad - 380015, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#B88746] shrink-0" />
                <span>+91 98200 11223 / +91 79 2650 8899</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#B88746] shrink-0" />
                <span>info@apexcorrugated.co.in</span>
              </div>
              <div className="pt-2">
                <span className="block text-[11px] font-bold text-white uppercase">Working Hours:</span>
                <span>Mon - Sat: 9:00 AM - 7:30 PM (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B2B2B2]/70">
          <p>© {new Date().getFullYear()} Apex Corrugated Solutions. All Rights Reserved. Engineered for Global Excellence.</p>
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
