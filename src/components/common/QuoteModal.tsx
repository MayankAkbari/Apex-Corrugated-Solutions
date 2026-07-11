'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calculator, Box, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultProduct }) => {
  const { addInquiry, products } = useApp();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: defaultProduct || 'Precision Corrugated Boxes',
    plyRating: '5-Ply Heavy Duty',
    quantity: '5,000 Units',
    dimensions: '600mm x 400mm x 400mm',
    printing: '2-Color High-Def Flexo',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      productReq: `${formData.productCategory} (${formData.plyRating}, ${formData.dimensions})`,
      quantity: formData.quantity,
      message: `Printing: ${formData.printing} | Notes: ${formData.message}`
    });
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-2xl text-slate-900 max-h-[92vh] overflow-y-auto"
        >
          {/* Header Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#002E73] via-[#B88746] to-[#002E73]" />

          <button
            onClick={resetAndClose}
            aria-label="Close Modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600 hover:text-slate-900 z-10"
          >
            <X size={20} />
          </button>

          <div className="p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-md"
                >
                  <CheckCircle size={44} />
                </motion.div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Quotation Request Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-base leading-relaxed">
                  Thank you, <span className="text-[#002E73] font-bold">{formData.name}</span>. Our packaging engineers are preparing your structural CAD breakdown & direct factory pricing quote for <span className="text-slate-900 font-semibold">{formData.company}</span>.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-sm text-slate-700 space-y-1">
                  <p>Guaranteed response time: <span className="text-[#002E73] font-bold">Within 2 Business Hours</span></p>
                  <p className="text-xs text-slate-500">Dedicated packaging specialist assigned to your region.</p>
                </div>
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 rounded-2xl glass-button-gold text-white font-bold shadow-lg text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
                >
                  Done & Return to Catalog
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#002E73]/10 border border-[#002E73]/20 text-[#002E73] shrink-0">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B88746] flex items-center gap-1.5">
                      <Sparkles size={14} /> Instant B2B Engineering Quote
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Configure Packaging Specifications</h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Product Category</label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      >
                        {products.map(p => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="Custom Bespoke Packaging">Custom Bespoke Packaging</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Box Ply / Strength Rating</label>
                      <select
                        name="plyRating"
                        value={formData.plyRating}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      >
                        <option value="3-Ply Standard">3-Ply Standard (Up to 15 kg)</option>
                        <option value="5-Ply Heavy Duty">5-Ply Heavy Duty (15 - 50 kg)</option>
                        <option value="7-Ply Ultra Industrial">7-Ply Ultra Industrial (50 - 250 kg)</option>
                        <option value="9-Ply Export Bulk Container">9-Ply Export Bulk Container (250+ kg)</option>
                        <option value="Duplex Coated Board">Duplex Coated Board</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Monthly Volume</label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 10,000 Boxes"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Dimensions (LxWxH)</label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g. 500 x 400 x 300 mm"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Printing & Branding</label>
                      <select
                        name="printing"
                        value={formData.printing}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      >
                        <option value="No Printing (Plain Kraft)">No Printing (Plain Kraft)</option>
                        <option value="1-Color Stencil / Handling">1-Color Stencil / Handling</option>
                        <option value="2-Color High-Def Flexo">2-Color High-Def Flexo</option>
                        <option value="4-Color Multicolor Litho Laminated">4-Color Multicolor Litho Laminated</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Shivansh Sharma"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Manufacturing Pvt Ltd"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Official Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002E73] focus:border-[#002E73] text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <ShieldCheck size={18} className="text-[#002E73] shrink-0" />
                      <span>ISO 9001:2015 Quality & Direct Factory Pricing Guaranteed</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-2xl glass-button-gold text-white font-bold tracking-wider uppercase text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      Submit For Instant Quote
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
