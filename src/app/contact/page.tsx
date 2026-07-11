'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Factory, Globe } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ContactPage() {
  const { addInquiry } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Request For Quotation (RFQ)',
    quantity: '10,000 Boxes',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      addInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company || 'Enterprise Partner',
        productReq: `${form.inquiryType}`,
        quantity: form.quantity,
        message: form.message || 'Submitted via Contact Us portal.'
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/ContactPage">
      
      {/* Hero Banner - Luminous Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <Globe size={14} className="text-[#B88746]" /> Global B2B Sales & Engineering Network
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            Contact <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Our Headquarters</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Connect directly with our packaging engineers in Ahmedabad, Gujarat. Request custom CAD prototypes or schedule a physical inspection of our automated 150,000 sq. ft. converting facility.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Cards & Directory with LocalBusiness Schema */}
        <div className="lg:col-span-5 space-y-8" itemScope itemType="https://schema.org/LocalBusiness">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Corporate Headquarters</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2" itemProp="name">Apex Corrugated Solutions Pvt. Ltd.</h2>
            <p className="text-sm text-slate-600 mt-2 font-medium">Get direct structural packaging and export logistics support.</p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#002E73]/10 text-[#002E73] shrink-0 border border-[#002E73]/20">
                  <Factory size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Ahmedabad Plant & HQ</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed font-medium">
                    <span itemProp="streetAddress">Plot No. 402/A, GIDC Industrial Estate, Sanand-Viramgam Highway</span>, <span itemProp="addressLocality">Ahmedabad</span>, <span itemProp="addressRegion">Gujarat</span> <span itemProp="postalCode">382170</span>, <span itemProp="addressCountry">India</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="text-[#002E73] shrink-0 mt-1" size={20} />
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block tracking-wider">Sales Hotline</span>
                  <a href="tel:+919876543210" className="text-sm font-bold text-slate-900 hover:text-[#002E73] transition-colors" itemProp="telephone">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#002E73] shrink-0 mt-1" size={20} />
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block tracking-wider">Official RFQ Email</span>
                  <a href="mailto:sales@apexcorrugated.in" className="text-sm font-bold text-slate-900 hover:text-[#002E73] transition-colors" itemProp="email">
                    sales@apexcorrugated.in
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-[#B88746]">
                <Clock size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Working Hours & Operations</span>
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                Monday – Saturday: 9:00 AM – 7:00 PM (IST)<br />
                Emergency Export Shipping Desk: 24/7 Logistics Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Purpose Inquiry Form - High Contrast Royal Blue Card */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-12 rounded-3xl bg-[#002E73] text-white border border-[#002E73] shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 size={56} className="mx-auto text-[#B88746]" />
                <h3 className="text-3xl font-extrabold text-white">Transmission Successful!</h3>
                <p className="text-base text-slate-200 max-w-md mx-auto font-medium leading-relaxed">
                  Your inquiry has been assigned to our Senior B2B Packaging Consultant. Expect a customized CAD quotation matrix in your inbox within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase text-white tracking-wider transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Engineering Consultation Portal</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Transmit B2B Inquiry</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Reliance Retail Ltd."
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@relianceretail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Inquiry Purpose</label>
                    <select
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                    >
                      <option value="Request For Quotation (RFQ)" className="bg-[#002E73] text-white">Request For Quotation (RFQ)</option>
                      <option value="Custom CAD Prototyping" className="bg-[#002E73] text-white">Custom CAD Prototyping</option>
                      <option value="Book Physical Factory Tour" className="bg-[#002E73] text-white">Book Physical Factory Tour</option>
                      <option value="Supplier Vendor Registration" className="bg-[#002E73] text-white">Supplier Vendor Registration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Target Monthly Quantity</label>
                    <input
                      type="text"
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746] font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">Technical Notes / Dimensions</label>
                  <textarea
                    rows={4}
                    placeholder="Specify length x width x height (mm), target Cobb test limit, ECT requirements, or shipping destination..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {isSubmitting ? <span>Transmitting...</span> : <span>Send Inquiry To Factory HQ</span>}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* Interactive Simulated Google Map */}
      <section className="px-4 md:px-8 max-w-[1650px] mx-auto pt-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#B88746] uppercase tracking-widest">Interactive GIS Coordinates</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Sanand Industrial Manufacturing Corridor, Gujarat</h3>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold text-xs border border-emerald-300">
              ● Plant Status: Online & Converting
            </span>
          </div>

          <div className="relative h-[380px] w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-200">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute w-80 h-80 rounded-full bg-[#002E73]/40 blur-3xl animate-pulse" />

            <div className="relative z-10 text-center space-y-3 p-8 bg-white/95 backdrop-blur-md rounded-2xl max-w-md border border-slate-200 shadow-2xl text-slate-900">
              <div className="w-12 h-12 rounded-2xl bg-[#002E73] text-white mx-auto flex items-center justify-center shadow-lg">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-black text-slate-900">Apex Corrugated Manufacturing Hub</h4>
              <p className="text-xs text-slate-600 font-mono font-bold">22.9868° N, 72.3810° E — Sanand Industrial Estate</p>
              <p className="text-xs text-slate-600 font-medium">Direct highway corridor link to Mundra & Kandla Ports for rapid international maritime export.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
