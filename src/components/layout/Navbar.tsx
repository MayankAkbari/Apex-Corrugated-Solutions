'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, PhoneCall, Sparkles, Box, Shield, Factory, Award } from 'lucide-react';
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
      if (window.scrollY > 20) {
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
    { label: 'Quality', href: '/quality' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full">
      {/* Top Bar Announcement / Contact Strip - High Contrast Executive Royal Blue */}
      <div className="bg-[#002E73] text-white/95 text-xs py-2 px-4 md:px-8 border-b border-[#002E73]/40 flex items-center justify-between shadow-xs z-50 relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-semibold text-[#FDF9F3]">
            <Award size={14} className="text-[#B88746]" /> ISO 9001:2015 & FSC Certified Industrial Packaging Manufacturer
          </span>
          <span className="hidden md:inline text-white/70">| Gujarat, India • Global Export Logistics</span>
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

      {/* Main Header Container with Luminous Light Glass Header */}
      <header
        role="navigation"
        aria-label="Main Navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/92 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-slate-200/80'
            : 'py-4 bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-44 md:w-56 h-12 md:h-14 bg-white rounded-xl p-1 border border-slate-200/80 shadow-xs group-hover:border-[#002E73]/40 group-hover:shadow-md transition-all flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Apex Corrugated Solutions Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* Frosted Light Navigation Bar Capsule */}
          <nav className="hidden lg:flex items-center px-3 py-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <ul className="flex items-center gap-1 xl:gap-1.5">
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
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#002E73] text-white shadow-sm'
                          : 'text-slate-600 hover:text-[#002E73] hover:bg-white shadow-none'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasMega && <ChevronDown size={12} className={`transition-transform duration-200 ${megaMenuOpen === link.hasMega ? 'rotate-180 text-[#B88746]' : ''}`} />}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {link.hasMega && megaMenuOpen === link.hasMega && (
                      <div className="absolute top-full left-0 pt-3 w-[640px] -translate-x-1/4 z-50 animate-fadeIn">
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
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-5 py-2.5 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles size={15} /> Get Free Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-6 bg-white border-t border-slate-200 text-slate-900 max-h-[85vh] overflow-y-auto shadow-2xl">
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-bold uppercase text-sm tracking-wider ${
                      pathname === link.href ? 'bg-[#002E73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-3.5 rounded-xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider shadow-lg"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+919820011223"
                className="w-full py-3 rounded-xl bg-slate-100 border border-slate-200 text-center block font-semibold text-xs text-[#002E73] hover:bg-slate-200 transition-colors"
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
