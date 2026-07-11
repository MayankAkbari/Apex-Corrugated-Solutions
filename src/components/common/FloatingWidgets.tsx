'use client';

import React, { useState } from 'react';
import { MessageCircle, Calculator } from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export const FloatingWidgets: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
        {/* Instant Quote Button */}
        <button
          onClick={() => setIsQuoteOpen(true)}
          aria-label="Calculate Box Packaging Price & Get Free Quote"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full glass-button-gold text-white font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all group"
          title="Calculate Box Packaging Price"
        >
          <Calculator size={18} className="animate-pulse text-white group-hover:rotate-12 transition-transform" />
          <span className="text-xs uppercase tracking-wider font-extrabold">Get Free Quote</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919820011223?text=Hello%20Apex%20Corrugated%20Solutions,%20I%20am%20interested%20in%20your%20industrial%20packaging%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp with our Packaging Engineer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-110 transition-all border-2 border-white/80"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="fill-current" />
        </a>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};
