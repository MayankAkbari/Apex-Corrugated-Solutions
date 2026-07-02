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
    <>
      {/* Top bar Announcement / Contact strip */}
      <div className="bg-[#001633] text-white/80 text-xs py-2 px-4 md:px-8 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium text-[#B88746]">
            <Award size={14} /> ISO 9001:2015 & FSC Certified Industrial Manufacturer
          </span>
          <span className="hidden md:inline text-white/60">| Gujarat, India • Global Export Packaging</span>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <a href="tel:+919820011223" className="hover:text-[#B88746] transition-colors flex items-center gap-1.5">
            <PhoneCall size={13} className="text-[#B88746]" /> +91 98200 11223
          </a>
          <Link href="/admin" className="text-[#B2B2B2] hover:text-white transition-colors text-[11px] underline">
            Admin Login
          </Link>
        </div>
      </div>

      {/* Main Header Container with Logo Outside Top-Left & Frosted Glass Nav Bar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'py-2 bg-[#001633]/90 backdrop-blur-xl shadow-2xl border-b border-white/10' : 'py-4 bg-[#001633]'}`}>
        <div className="max-w-[1700px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Top-Left Logo positioned OUTSIDE the nav capsule */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-44 md:w-56 h-12 md:h-14 bg-white/95 rounded-xl p-1.5 shadow-lg border border-[#B88746]/30 group-hover:scale-[1.02] transition-transform flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Apex Corrugated Solutions Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* Frosted Glass Navigation Bar Capsule */}
          <nav className="hidden lg:flex items-center px-4 py-2.5 rounded-2xl glass-nav border border-white/15 shadow-xl bg-white/5">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
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
                          ? 'bg-[#002E73] text-white shadow-md border border-[#B88746]/50'
                          : 'text-[#B2B2B2] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasMega && <ChevronDown size={12} className={`transition-transform duration-200 ${megaMenuOpen === link.hasMega ? 'rotate-180 text-[#B88746]' : ''}`} />}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {link.hasMega && megaMenuOpen === link.hasMega && (
                      <div className="absolute top-full left-0 pt-3 w-[620px] -translate-x-1/4 z-50">
                        <div className="p-6 rounded-3xl glass-card border border-white/20 shadow-2xl bg-[#001633]/95 text-white backdrop-blur-2xl grid grid-cols-2 gap-4">
                          {link.hasMega === 'products' ? (
                            <>
                              <div className="col-span-2 pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#B88746] uppercase tracking-widest flex items-center gap-1.5">
                                  <Box size={14} /> Industrial Packaging Products
                                </span>
                                <Link href="/products" className="text-xs text-white underline hover:text-[#B88746]">View Catalog →</Link>
                              </div>
                              {PRODUCTS.map(prod => (
                                <Link
                                  key={prod.id}
                                  href={`/products/${prod.slug}`}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-[#002E73] flex items-center justify-center shrink-0 border border-white/10 text-[#B88746] group-hover:scale-105 transition-transform">
                                    <Box size={18} />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-bold text-white group-hover:text-[#B88746] transition-colors">{prod.title}</h4>
                                    <p className="text-[11px] text-[#B2B2B2] line-clamp-1">{prod.shortDesc}</p>
                                  </div>
                                </Link>
                              ))}
                            </>
                          ) : (
                            <>
                              <div className="col-span-2 pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#B88746] uppercase tracking-widest flex items-center gap-1.5">
                                  <Factory size={14} /> Industries We Serve
                                </span>
                                <Link href="/industries" className="text-xs text-white underline hover:text-[#B88746]">All Industries →</Link>
                              </div>
                              {INDUSTRIES.map(ind => (
                                <Link
                                  key={ind.id}
                                  href="/industries"
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-[#002E73] flex items-center justify-center shrink-0 border border-white/10 text-[#B88746]">
                                    <Shield size={18} />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-bold text-white group-hover:text-[#B88746] transition-colors">{ind.name}</h4>
                                    <p className="text-[11px] text-[#B2B2B2] line-clamp-1">{ind.description}</p>
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
              className="px-5 py-2.5 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles size={15} /> Get Free Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white border border-white/20"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-6 bg-[#001633] border-t border-white/15 text-white max-h-[85vh] overflow-y-auto">
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-bold uppercase text-sm tracking-wider ${
                      pathname === link.href ? 'bg-[#002E73] text-[#B88746] border border-[#B88746]/40' : 'text-[#B2B2B2] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-3.5 rounded-xl glass-button-gold text-white font-bold text-sm uppercase tracking-wider shadow-xl"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+919820011223"
                className="w-full py-3 rounded-xl bg-white/10 text-center block font-semibold text-xs text-[#B2B2B2]"
              >
                Call: +91 98200 11223
              </a>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};
