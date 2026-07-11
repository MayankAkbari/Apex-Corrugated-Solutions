'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Box, MessageSquareQuote, Inbox, Plus, Trash2, CheckCircle2, 
  Clock, ShieldAlert, ArrowUpRight, TrendingUp, Users, DollarSign, Eye, Factory, ShieldCheck
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function AdminPage() {
  const { products, reviews, inquiries, toggleReviewApproval, updateInquiryStatus, addProduct } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'inquiries' | 'reviews'>('overview');

  // New Product Modal State
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProd, setNewProd] = useState({
    title: '',
    category: 'Corrugated Boxes',
    shortDesc: '',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    ply: '5-Ply Double Wall',
    ect: '55 lbs/in',
    gsm: '150 - 250 GSM Top Kraft'
  });

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.title) return;
    addProduct({
      title: newProd.title,
      slug: newProd.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: newProd.category,
      shortDesc: newProd.shortDesc || 'Engineered industrial packaging container.',
      fullDesc: `${newProd.shortDesc} Manufactured on automated German corrugation lines with high-strength Cobb tested Kraft board.`,
      image: newProd.image,
      gallery: [newProd.image],
      specs: {
        ply: newProd.ply,
        fluteType: 'BC Double Wall Hybrid',
        gsmRange: newProd.gsm,
        ectStrength: newProd.ect,
        loadCapacity: '500 - 1,000 kg Static Stacking',
        printing: 'Flexographic Up To 4 Colors'
      },
      applications: ['Heavy Duty Export', 'Master Shipping', 'Palletized Storage'],
      industriesServed: ['FMCG', 'Automobile', 'E-Commerce'],
      features: ['High Burst Strength', 'Moisture Resistant Top Coat', 'Precision Slotting'],
      benefits: ['Reduces Transit Damage by 40%', 'Optimized Pallet Utilization']
    });
    setShowAddProduct(false);
    setNewProd({
      title: '',
      category: 'Corrugated Boxes',
      shortDesc: '',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
      ply: '5-Ply Double Wall',
      ect: '55 lbs/in',
      gsm: '150 - 250 GSM Top Kraft'
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-slate-900 pb-24">
      
      {/* Top Admin Header - Executive Royal Blue */}
      <div className="bg-[#002E73] text-white py-10 px-4 md:px-8 border-b border-[#002E73] shadow-lg">
        <div className="max-w-[1650px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#B88746] uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enterprise ERP & Specification Content Controller</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white mt-2 tracking-tight">
              Apex Corrugated Management Portal
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-2xl border border-white/20 text-xs backdrop-blur-md shadow-inner">
            <span className="text-slate-200 font-medium">Active Operator:</span>
            <span className="font-extrabold text-[#B88746] flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#B88746]" /> Chief Packaging Controller
            </span>
          </div>
        </div>
      </div>

      {/* Main Admin Navigation Tabs */}
      <div className="max-w-[1650px] mx-auto px-4 md:px-8 mt-8">
        <div className="bg-white p-2.5 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'overview' ? 'bg-[#002E73] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard size={16} /> Overview Analytics
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all relative ${
              activeTab === 'inquiries' ? 'bg-[#002E73] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Inbox size={16} /> Client RFQ Inquiries
            {inquiries.filter(i => i.status === 'Pending').length > 0 && (
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black shadow-xs">
                {inquiries.filter(i => i.status === 'Pending').length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'products' ? 'bg-[#002E73] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Box size={16} /> Packaging Catalog ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'reviews' ? 'bg-[#002E73] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquareQuote size={16} /> Review Moderation ({reviews.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Overview Analytics */}
      {activeTab === 'overview' && (
        <div className="max-w-[1650px] mx-auto px-4 md:px-8 mt-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Total B2B Inquiries</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-900">{inquiries.length} RFQs</span>
                <div className="p-3 rounded-2xl bg-[#002E73]/10 text-[#002E73]">
                  <Inbox size={26} />
                </div>
              </div>
              <p className="text-xs text-emerald-700 font-semibold">● Active enterprise leads logged</p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Published Specifications</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-900">{products.length} Specs</span>
                <div className="p-3 rounded-2xl bg-amber-500/10 text-[#B88746]">
                  <Box size={26} />
                </div>
              </div>
              <p className="text-xs text-slate-500 font-semibold">● Live across dynamic catalog</p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Plant Conversion Rate</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-900">3,500 MT</span>
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-700">
                  <TrendingUp size={26} />
                </div>
              </div>
              <p className="text-xs text-slate-500 font-semibold">● Monthly corrugated throughput</p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Approved Reviews</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-900">{reviews.filter(r => r.approved).length} / {reviews.length}</span>
                <div className="p-3 rounded-2xl bg-[#002E73]/10 text-[#002E73]">
                  <MessageSquareQuote size={26} />
                </div>
              </div>
              <p className="text-xs text-emerald-700 font-semibold">● 4.9/5 Average client satisfaction</p>
            </div>
          </div>

          {/* Quick Recent Activity */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">Recent Incoming Quotation Requests</h3>
            <div className="divide-y divide-slate-100">
              {inquiries.slice(0, 3).map(inq => (
                <div key={inq.id} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{inq.name} <span className="text-[#002E73]">({inq.company})</span></h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{inq.productReq} • <span className="font-mono font-bold text-[#002E73]">{inq.quantity}</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 font-mono font-medium">{inq.date}</span>
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase bg-amber-100 text-amber-900 border border-amber-200">
                      {inq.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Client Inquiries Management CRM */}
      {activeTab === 'inquiries' && (
        <div className="max-w-[1650px] mx-auto px-4 md:px-8 mt-8 space-y-6">
          <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900">Incoming B2B Quotation Requests (CRM)</h3>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">● Real-Time Memory Sync Active</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {inquiries.map(inq => (
              <div key={inq.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider">
                      {inq.company}
                    </span>
                    <span className="text-sm font-extrabold text-[#002E73]">{inq.name} ({inq.phone})</span>
                    <span className="text-xs text-slate-400 font-mono font-medium">{inq.date}</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900">Spec Requested: {inq.productReq}</h4>
                  <p className="text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-medium leading-relaxed">
                    <span className="font-extrabold text-slate-900">Target Monthly Volume: {inq.quantity}</span><br />
                    <span className="text-slate-600 mt-1 block">Notes: {inq.message}</span>
                  </p>
                </div>

                {/* Status Switcher */}
                <div className="flex flex-wrap items-center gap-2 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0">
                  {(['Pending', 'Quoted', 'Dispatched', 'Closed'] as const).map(st => (
                    <button
                      key={st}
                      onClick={() => updateInquiryStatus(inq.id, st)}
                      className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                        inq.status === st
                          ? 'bg-[#002E73] text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Products Catalog Management */}
      {activeTab === 'products' && (
        <div className="max-w-[1650px] mx-auto px-4 md:px-8 mt-8 space-y-6">
          <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-xl font-black text-slate-900">Corrugated Specifications Catalog</h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">Manage live technical specifications visible across the client portal.</p>
            </div>
            <button
              onClick={() => setShowAddProduct(true)}
              className="px-6 py-3.5 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <Plus size={16} /> Add Specification
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(prod => (
              <div key={prod.id} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 text-[#002E73] text-[11px] font-bold uppercase border border-slate-200">
                    {prod.category}
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-3">{prod.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-medium leading-relaxed">{prod.shortDesc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="font-mono text-[#002E73] bg-[#002E73]/10 px-2.5 py-1 rounded-lg">Ply: {prod.specs.ply}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">Live Status ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Review Moderation */}
      {activeTab === 'reviews' && (
        <div className="max-w-[1650px] mx-auto px-4 md:px-8 mt-8 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900">Client Review Moderation</h3>
            <p className="text-xs text-slate-500 font-medium">Approve or hide verified customer testimonials displayed on the B2B reviews portal.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reviews.map(rev => (
              <div key={rev.id} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base text-slate-900">{rev.author}</span>
                    <span className="text-xs font-extrabold text-[#002E73]">{rev.company}</span>
                    <span className="text-xs text-slate-400 font-mono font-medium">{rev.date}</span>
                  </div>
                  <p className="text-sm text-slate-700 italic mt-2 font-medium">“{rev.comment}”</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => toggleReviewApproval(rev.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      rev.approved ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {rev.approved ? 'Approved Live ✓' : 'Hidden / Draft'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Product Modal - Executive Dark/Blue Dialog */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#002E73] text-white w-full max-w-xl rounded-3xl p-8 border border-[#002E73] shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <h3 className="text-xl font-black text-white">Publish New Corrugated Specification</h3>
              <button onClick={() => setShowAddProduct(false)} className="text-slate-300 hover:text-white font-bold text-sm bg-white/10 px-3 py-1 rounded-lg">✕</button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-200 mb-1.5 uppercase font-bold tracking-wider">Specification Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 7-Ply Heavy Pallet Shipper"
                  value={newProd.title}
                  onChange={(e) => setNewProd({ ...newProd, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 mb-1.5 uppercase font-bold tracking-wider">Category</label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  >
                    <option value="Corrugated Boxes" className="bg-[#002E73] text-white">Corrugated Boxes</option>
                    <option value="Heavy Duty Packaging" className="bg-[#002E73] text-white">Heavy Duty Packaging</option>
                    <option value="Printed Packaging" className="bg-[#002E73] text-white">Printed Packaging</option>
                    <option value="Export Packaging" className="bg-[#002E73] text-white">Export Packaging</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-200 mb-1.5 uppercase font-bold tracking-wider">Ply Configuration</label>
                  <input
                    type="text"
                    value={newProd.ply}
                    onChange={(e) => setNewProd({ ...newProd, ply: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 mb-1.5 uppercase font-bold tracking-wider">Target ECT Strength</label>
                  <input
                    type="text"
                    value={newProd.ect}
                    onChange={(e) => setNewProd({ ...newProd, ect: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>
                <div>
                  <label className="block text-slate-200 mb-1.5 uppercase font-bold tracking-wider">GSM Board Range</label>
                  <input
                    type="text"
                    value={newProd.gsm}
                    onChange={(e) => setNewProd({ ...newProd, gsm: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-200 mb-1.5 uppercase font-bold tracking-wider">Short Technical Summary</label>
                <textarea
                  rows={3}
                  value={newProd.shortDesc}
                  onChange={(e) => setNewProd({ ...newProd, shortDesc: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl glass-button-gold text-white font-extrabold uppercase tracking-wider text-sm shadow-xl mt-4 hover:scale-[1.02] transition-all"
              >
                Publish Specification To Catalog
              </button>
            </form>
          </motion.div>
        </div>
      )}

    </div>
  );
}
