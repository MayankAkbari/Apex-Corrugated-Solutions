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
    <div className="overflow-hidden pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-[#001633] text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#002E73]/40 blur-[140px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B88746] text-xs font-bold uppercase tracking-widest border border-white/20">
            <Globe size={14} /> Global B2B Sales Network
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B2B2B2] to-[#B88746]">Our Office</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B2B2B2] max-w-3xl mx-auto leading-relaxed">
            Get in touch with our packaging engineers in Ahmedabad, Gujarat. Request custom prototypes or schedule a physical inspection of our 150,000 sq. ft. facility.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Cards & Directory */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Corporate Headquarters</span>
            <h2 className="text-3xl font-extrabold text-[#001633] mt-2">Get Direct Engineering Support</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl glass-card bg-white border border-gray-200 shadow-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#002E73] text-[#B88746] shrink-0">
                  <Factory size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#001633]">Ahmedabad Plant & HQ</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Plot No. 402/A, GIDC Industrial Estate, Sanand-Viramgam Highway, Ahmedabad, Gujarat 382170, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-card bg-white border border-gray-200 shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="text-[#002E73] shrink-0 mt-1" size={20} />
                <div>
                  <span className="text-xs font-bold uppercase text-gray-400 block">Sales Hotline</span>
                  <a href="tel:+919876543210" className="text-sm font-bold text-[#001633] hover:text-[#002E73]">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#002E73] shrink-0 mt-1" size={20} />
                <div>
                  <span className="text-xs font-bold uppercase text-gray-400 block">Official RFQ Email</span>
                  <a href="mailto:sales@apexcorrugated.in" className="text-sm font-bold text-[#001633] hover:text-[#002E73]">
                    sales@apexcorrugated.in
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-card bg-[#001633] text-white border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-[#B88746]">
                <Clock size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Working Hours</span>
              </div>
              <p className="text-sm text-[#B2B2B2]">
                Monday – Saturday: 9:00 AM – 7:00 PM (IST)<br />
                Emergency Export Operations: 24/7 Dispatch Desk
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Purpose Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-12 rounded-3xl glass-card-dark bg-[#001633] text-white border border-white/20 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 size={56} className="mx-auto text-[#B88746]" />
                <h3 className="text-3xl font-bold text-white">Transmission Successful!</h3>
                <p className="text-base text-[#B2B2B2] max-w-md mx-auto">
                  Your inquiry has been assigned to our Senior B2B Packaging Consultant. Expect a customized CAD quotation matrix in your inbox within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase text-white tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Engineering Consultation</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Transmit B2B Inquiry</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#B2B2B2] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#B2B2B2] mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Reliance Retail Ltd."
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#B2B2B2] mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@relianceretail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#B2B2B2] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#B2B2B2] mb-1">Inquiry Purpose</label>
                    <select
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm focus:outline-none focus:border-[#B88746]"
                    >
                      <option value="Request For Quotation (RFQ)" className="bg-[#001633]">Request For Quotation (RFQ)</option>
                      <option value="Custom CAD Prototyping" className="bg-[#001633]">Custom CAD Prototyping</option>
                      <option value="Book Physical Factory Tour" className="bg-[#001633]">Book Physical Factory Tour</option>
                      <option value="Supplier Vendor Registration" className="bg-[#001633]">Supplier Vendor Registration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#B2B2B2] mb-1">Target Monthly Quantity</label>
                    <input
                      type="text"
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#B88746]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#B2B2B2] mb-1">Technical Notes / Dimensions</label>
                  <textarea
                    rows={4}
                    placeholder="Specify length x width x height (mm), target Cobb test limit, ECT requirements, or shipping destination..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B88746]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2"
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
      <section className="px-4 md:px-8 max-w-[1600px] mx-auto pt-8">
        <div className="bg-[#001633] rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#B88746] uppercase tracking-widest">Interactive GIS Coordinates</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Sanand Industrial Manufacturing Corridor, Gujarat</h3>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs border border-emerald-500/30">
              ● Plant Status: Online & Converting
            </span>
          </div>

          <div className="relative h-[360px] w-full rounded-2xl overflow-hidden bg-[#002E73] flex items-center justify-center border border-white/20">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute w-72 h-72 rounded-full bg-[#B88746]/20 blur-3xl animate-pulse" />

            <div className="relative z-10 text-center space-y-3 p-6 glass-card-dark rounded-2xl max-w-md border border-[#B88746]/40">
              <div className="w-12 h-12 rounded-full bg-[#B88746] text-white mx-auto flex items-center justify-center shadow-2xl animate-bounce">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-extrabold text-white">Apex Corrugated Manufacturing Hub</h4>
              <p className="text-xs text-[#B2B2B2] font-mono">22.9868° N, 72.3810° E — Sanand Industrial Estate</p>
              <p className="text-xs text-white/80">Direct highway link to Mundra Port for rapid international shipping.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
