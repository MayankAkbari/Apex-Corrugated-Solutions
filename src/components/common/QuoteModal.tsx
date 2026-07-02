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
  const [step, setStep] = useState<number>(1);
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
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl overflow-hidden glass-card rounded-3xl border border-white/40 shadow-2xl bg-[#001633]/95 text-white"
        >
          {/* Header Gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#002E73] via-[#B88746] to-[#B2B2B2]" />

          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 mx-auto rounded-full bg-[#B88746]/20 border border-[#B88746] flex items-center justify-center text-[#B88746]"
                >
                  <CheckCircle size={44} />
                </motion.div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Request Received!</h3>
                <p className="text-[#B2B2B2] max-w-md mx-auto text-base leading-relaxed">
                  Thank you, <span className="text-[#B88746] font-semibold">{formData.name}</span>. Our packaging engineers are preparing your custom CAD structural breakdown & wholesale B2B pricing quote for <span className="text-white font-medium">{formData.company}</span>.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-sm text-[#B2B2B2] space-y-1">
                  <p>Guaranteed response time: <span className="text-[#B88746] font-medium">Within 2 Business Hours</span></p>
                  <p>Dedicated Manager assigned to your PIN code.</p>
                </div>
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 rounded-xl glass-button-gold text-white font-semibold shadow-lg text-sm uppercase tracking-wider"
                >
                  Done & Return to Site
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#002E73] border border-[#B88746]/40 text-[#B88746]">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B88746] flex items-center gap-1.5">
                      <Sparkles size={14} /> Instant B2B Engineering Quote
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Configure Your Packaging Solution</h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Product Category</label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#B88746]"
                      >
                        {products.map(p => (
                          <option key={p.id} value={p.title} className="bg-[#001633] text-white">
                            {p.title}
                          </option>
                        ))}
                        <option value="Custom Bespoke Packaging" className="bg-[#001633] text-white">Custom Bespoke Packaging</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Box Ply / Strength Rating</label>
                      <select
                        name="plyRating"
                        value={formData.plyRating}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#B88746]"
                      >
                        <option value="3-Ply Standard" className="bg-[#001633]">3-Ply Standard (Up to 15 kg)</option>
                        <option value="5-Ply Heavy Duty" className="bg-[#001633]">5-Ply Heavy Duty (15 - 50 kg)</option>
                        <option value="7-Ply Ultra Industrial" className="bg-[#001633]">7-Ply Ultra Industrial (50 - 250 kg)</option>
                        <option value="9-Ply Export Bulk Container" className="bg-[#001633]">9-Ply Export Bulk Container (250+ kg)</option>
                        <option value="Duplex Coated Board" className="bg-[#001633]">Duplex Coated Board</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Estimated Monthly Volume</label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 10,000 Boxes"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Target Dimensions (LxWxH)</label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g. 500 x 400 x 300 mm"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Printing & Branding</label>
                      <select
                        name="printing"
                        value={formData.printing}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#B88746]"
                      >
                        <option value="No Printing (Plain Kraft)" className="bg-[#001633]">No Printing (Plain Kraft)</option>
                        <option value="1-Color Stencil / Handling" className="bg-[#001633]">1-Color Stencil / Handling</option>
                        <option value="2-Color High-Def Flexo" className="bg-[#001633]">2-Color High-Def Flexo</option>
                        <option value="4-Color Multicolor Litho Laminated" className="bg-[#001633]">4-Color Multicolor Litho Laminated</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Shivansh Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Manufacturing Pvt Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Official Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#B2B2B2] mb-1.5 uppercase tracking-wider">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#B88746]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-xs text-[#B2B2B2]">
                      <ShieldCheck size={16} className="text-[#B88746]" />
                      <span>ISO 9001:2015 Quality Guaranteed & Zero Spam Policy</span>
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl glass-button-gold text-white font-bold tracking-wider uppercase text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
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
