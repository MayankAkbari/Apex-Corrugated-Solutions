'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, Menu, X, PhoneCall, Sparkles, Box, Shield, Factory, 
  Award, User, LogOut, ArrowRight 
} from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '@/data/mockData';
import { QuoteModal } from '@/components/common/QuoteModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<'products' | 'industries' | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products', hasMega: 'products' as const },
    { label: 'Industries', href: '/industries', hasMega: 'industries' as const },
    { label: 'Infrastructure', href: '/infrastructure' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Quality', href: '/quality' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full">
      {/* Top Announcement Strip - Compact & Professional for SEO/Trust */}
      <div className="bg-[#002E73] text-white/95 text-xs py-2 px-4 md:px-8 border-b border-[#002E73]/40 flex items-center justify-between shadow-xs z-50 relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-semibold text-[#FDF9F3]">
            <Award size={14} className="text-[#B88746]" /> ISO 9001:2015 & FSC Certified Industrial Packaging Manufacturer
          </span>
          <span className="hidden md:inline text-white/70">| High-Strength Corrugated Solutions • Global Export</span>
        </div>
        <div className="flex items-center gap-6 font-semibold">
          <a href="tel:+919820011223" aria-label="Call +91 98200 11223" className="hover:text-[#B88746] transition-colors flex items-center gap-1.5 text-white">
            <PhoneCall size={13} className="text-[#B88746]" /> +91 98200 11223
          </a>
          <Link href="/admin" className="text-white/80 hover:text-white transition-colors text-[11px] underline">
            Admin Portal
          </Link>
        </div>
      </div>

      {/* Main Header Container - Ivory/Light Cream Floating Capsule Design */}
      <header
        role="navigation"
        aria-label="Main Navigation"
        className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-8 lg:px-10 ${
          isScrolled
            ? 'py-3 bg-[#FAFAF9]/98 backdrop-blur-xl shadow-md border-b border-slate-200/80'
            : 'py-5 bg-[#FAFAF9]'
        }`}
      >
        <div className="max-w-[1780px] mx-auto flex items-center justify-between gap-6">
          
          {/* Brand Logo - Left Aligned (No Background Box or Border) */}
          <Link href="/" className="relative flex items-center w-48 md:w-56 h-12 md:h-14 shrink-0 group">
            <Image
              src="/logo.png"
              alt="Apex Corrugated Solutions Logo"
              fill
              className="object-contain object-left group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>
          
          {/* Right Floating White Pill Bar (Matching Uploaded Image Reference) */}
          <div className="hidden lg:flex items-center bg-white rounded-full p-2 pl-6 pr-3.5 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] gap-5">
            
            {/* Navigation Links inside White Pill */}
            <ul className="flex items-center gap-1 sm:gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.hasMega && setMegaMenuOpen(link.hasMega)}
                    onMouseLeave={() => link.hasMega && setMegaMenuOpen(null)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 rounded-full text-[13px] font-bold transition-all flex items-center gap-1 ${
                        isActive
                          ? 'bg-slate-100 text-[#002E73] shadow-xs'
                          : 'text-[#001633] hover:text-[#002E73] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasMega && (
                        <ChevronDown 
                          size={13} 
                          className={`transition-transform duration-200 ${megaMenuOpen === link.hasMega ? 'rotate-180 text-[#B88746]' : 'text-slate-400'}`} 
                        />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {link.hasMega && megaMenuOpen === link.hasMega && (
                      <div className="absolute top-full left-0 pt-4 w-[650px] -translate-x-1/4 z-50 animate-fadeIn">
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-800 grid grid-cols-2 gap-4">
                          {link.hasMega === 'products' ? (
                            <>
                              <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#002E73] uppercase tracking-widest flex items-center gap-1.5">
                                  <Box size={14} className="text-[#B88746]" /> Industrial Packaging Products
                                </span>
                                <Link href="/products" className="text-xs font-bold text-[#002E73] hover:text-[#B88746] transition-colors">View Full Catalog →</Link>
                              </div>
                              {PRODUCTS.map(prod => (
                                <Link
                                  key={prod.id}
                                  href={`/products/${prod.slug}`}
                                  className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-[#002E73]/10 flex items-center justify-center shrink-0 border border-[#002E73]/20 text-[#002E73] group-hover:bg-[#002E73] group-hover:text-white transition-all">
                                    <Box size={18} />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#002E73] transition-colors">{prod.title}</h4>
                                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{prod.shortDesc}</p>
                                  </div>
                                </Link>
                              ))}
                            </>
                          ) : (
                            <>
                              <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#002E73] uppercase tracking-widest flex items-center gap-1.5">
                                  <Factory size={14} className="text-[#B88746]" /> Industries We Serve
                                </span>
                                <Link href="/industries" className="text-xs font-bold text-[#002E73] hover:text-[#B88746] transition-colors">All Industries →</Link>
                              </div>
                              {INDUSTRIES.map(ind => (
                                <Link
                                  key={ind.id}
                                  href="/industries"
                                  className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 flex items-center justify-center shrink-0 border border-[#B88746]/20 text-[#B88746] group-hover:bg-[#B88746] group-hover:text-white transition-all">
                                    <Shield size={18} />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#002E73] transition-colors">{ind.name}</h4>
                                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{ind.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Vertical Divider */}
            <div className="w-[1px] h-6 bg-slate-200 shrink-0" />

            {/* Dark Navy Pill Button Inside White Capsule (Exact Match) */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#001633] hover:bg-[#002E73] transition-all text-white rounded-full px-5 py-2.5 text-xs font-bold flex items-center gap-2.5 shadow-md shrink-0 group"
            >
              <User size={14} className="text-[#B88746] group-hover:scale-110 transition-transform" />
              <span>Get Instant Quote (RFQ)</span>
            </button>

            {/* Arrow Button Right Outside Dark Pill inside White Capsule */}
            <Link
              href="/admin"
              aria-label="Go to Admin Management Portal"
              title="Admin Portal"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all shrink-0 hover:scale-105"
            >
              <LogOut size={16} className="rotate-180 text-[#002E73]" />
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-4 py-2 rounded-full bg-[#001633] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <User size={13} className="text-[#B88746]" /> Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-2xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-6 bg-white rounded-3xl border border-slate-200 text-slate-900 shadow-2xl max-h-[85vh] overflow-y-auto">
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-2xl font-bold text-sm tracking-wide ${
                      pathname === link.href ? 'bg-[#002E73] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl font-bold text-sm tracking-wide text-slate-700 hover:bg-slate-100"
                >
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl font-bold text-sm tracking-wide text-slate-700 hover:bg-slate-100"
                >
                  FAQ Knowledge Base
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#001633] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <User size={16} className="text-[#B88746]" /> Get Free Quote (RFQ)
              </button>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-slate-100 border border-slate-200 text-center block font-bold text-xs text-[#002E73] hover:bg-slate-200 transition-colors"
              >
                Access Master Admin Portal [→
              </Link>
              <a
                href="tel:+919820011223"
                className="w-full py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center block font-semibold text-xs text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                Call Engineer: +91 98200 11223
              </a>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};
