'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Box, MessageSquareQuote, Inbox, Plus, Trash2, CheckCircle2, 
  Clock, ShieldAlert, ArrowUpRight, TrendingUp, Users, DollarSign, Eye
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
    <div className="min-h-screen bg-[#F5F6F8] pb-24">
      
      {/* Top Admin Header */}
      <div className="bg-[#001633] text-white py-8 px-4 md:px-8 shadow-xl">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#B88746] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enterprise ERP & Content Control</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white mt-1">
              Apex Corrugated Management Portal
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-xs">
            <span className="text-[#B2B2B2]">Active Operator:</span>
            <span className="font-bold text-[#B88746]">Chief Packaging Controller</span>
          </div>
        </div>
      </div>

      {/* Main Admin Navigation Tabs */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mt-8">
        <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-md flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'overview' ? 'bg-[#002E73] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard size={16} /> Overview Analytics
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all relative ${
              activeTab === 'inquiries' ? 'bg-[#002E73] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Inbox size={16} /> Client RFQ Inquiries
            {inquiries.filter(i => i.status === 'Pending').length > 0 && (
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px]">
                {inquiries.filter(i => i.status === 'Pending').length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'products' ? 'bg-[#002E73] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Box size={16} /> Packaging Catalog ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'reviews' ? 'bg-[#002E73] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageSquareQuote size={16} /> Review Moderation ({reviews.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Overview Analytics */}
      {activeTab === 'overview' && (
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 mt-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400">Total B2B Inquiries</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#001633]">{inquiries.length} RFQs</span>
                <Inbox size={28} className="text-[#002E73]" />
              </div>
              <p className="text-xs text-emerald-600 font-semibold">Active enterprise leads logged</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400">Published Specifications</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#001633]">{products.length} Specs</span>
                <Box size={28} className="text-[#B88746]" />
              </div>
              <p className="text-xs text-gray-500 font-semibold">Live across dynamic catalog</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400">Plant Conversion Rate</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#001633]">3,500 MT</span>
                <TrendingUp size={28} className="text-emerald-600" />
              </div>
              <p className="text-xs text-gray-500 font-semibold">Monthly corrugated throughput</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg space-y-2">
              <span className="text-xs font-bold uppercase text-gray-400">Approved Reviews</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#001633]">{reviews.filter(r => r.approved).length} / {reviews.length}</span>
                <MessageSquareQuote size={28} className="text-[#002E73]" />
              </div>
              <p className="text-xs text-emerald-600 font-semibold">4.9/5 Average client satisfaction</p>
            </div>
          </div>

          {/* Quick Recent Activity */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-[#001633] mb-6">Recent Incoming Quotation Requests</h3>
            <div className="divide-y divide-gray-100">
              {inquiries.slice(0, 3).map(inq => (
                <div key={inq.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-[#001633]">{inq.name} ({inq.company})</h4>
                    <p className="text-xs text-gray-500">{inq.productReq} • <span className="font-mono font-bold text-[#002E73]">{inq.quantity}</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">{inq.date}</span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-amber-100 text-amber-800">
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
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 mt-8 space-y-6">
          <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <h3 className="text-xl font-bold text-[#001633]">Incoming B2B Quotation Requests (CRM)</h3>
            <span className="text-xs font-mono text-gray-500">Real-time memory sync enabled</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {inquiries.map(inq => (
              <div key={inq.id} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#001633] text-white text-xs font-bold">
                      {inq.company}
                    </span>
                    <span className="text-sm font-bold text-[#002E73]">{inq.name} ({inq.phone})</span>
                    <span className="text-xs text-gray-400 font-mono">{inq.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#001633]">Spec Requested: {inq.productReq}</h4>
                  <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="font-bold text-gray-700">Volume: {inq.quantity}</span><br />
                    Note: {inq.message}
                  </p>
                </div>

                {/* Status Switcher */}
                <div className="flex flex-wrap items-center gap-2 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0">
                  {(['Pending', 'Quoted', 'Dispatched', 'Closed'] as const).map(st => (
                    <button
                      key={st}
                      onClick={() => updateInquiryStatus(inq.id, st)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                        inq.status === st
                          ? 'bg-[#002E73] text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 mt-8 space-y-6">
          <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <div>
              <h3 className="text-xl font-bold text-[#001633]">Corrugated Specifications Catalog</h3>
              <p className="text-xs text-gray-500 mt-0.5">Manage live specifications visible on customer catalog.</p>
            </div>
            <button
              onClick={() => setShowAddProduct(true)}
              className="px-6 py-3 rounded-xl glass-button-gold text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              <Plus size={16} /> Add Specification
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(prod => (
              <div key={prod.id} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-[#002E73] text-[11px] font-bold uppercase">
                    {prod.category}
                  </span>
                  <h4 className="text-lg font-bold text-[#001633] mt-3">{prod.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{prod.shortDesc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#002E73]">Ply: {prod.specs.ply}</span>
                  <span className="text-emerald-600 font-bold">Live Status ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Review Moderation */}
      {activeTab === 'reviews' && (
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 mt-8 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <h3 className="text-xl font-bold text-[#001633]">Client Review Moderation</h3>
            <p className="text-xs text-gray-500">Approve or hide customer testimonials displayed on public reviews portal.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reviews.map(rev => (
              <div key={rev.id} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base text-[#001633]">{rev.author}</span>
                    <span className="text-xs font-semibold text-[#002E73]">{rev.company}</span>
                    <span className="text-xs text-gray-400 font-mono">{rev.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 italic mt-2">“{rev.comment}”</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => toggleReviewApproval(rev.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                      rev.approved ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#001633] text-white w-full max-w-xl rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-white">Publish New Corrugated Specification</h3>
              <button onClick={() => setShowAddProduct(false)} className="text-gray-400 hover:text-white font-bold text-sm">✕</button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#B2B2B2] mb-1">Specification Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 7-Ply Heavy Pallet Shipper"
                  value={newProd.title}
                  onChange={(e) => setNewProd({ ...newProd, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#B2B2B2] mb-1">Category</label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold"
                  >
                    <option value="Corrugated Boxes" className="bg-[#001633]">Corrugated Boxes</option>
                    <option value="Heavy Duty Packaging" className="bg-[#001633]">Heavy Duty Packaging</option>
                    <option value="Printed Packaging" className="bg-[#001633]">Printed Packaging</option>
                    <option value="Export Packaging" className="bg-[#001633]">Export Packaging</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#B2B2B2] mb-1">Ply Configuration</label>
                  <input
                    type="text"
                    value={newProd.ply}
                    onChange={(e) => setNewProd({ ...newProd, ply: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#B2B2B2] mb-1">Target ECT Strength</label>
                  <input
                    type="text"
                    value={newProd.ect}
                    onChange={(e) => setNewProd({ ...newProd, ect: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#B2B2B2] mb-1">GSM Board Range</label>
                  <input
                    type="text"
                    value={newProd.gsm}
                    onChange={(e) => setNewProd({ ...newProd, gsm: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#B2B2B2] mb-1">Short Technical Summary</label>
                <textarea
                  rows={3}
                  value={newProd.shortDesc}
                  onChange={(e) => setNewProd({ ...newProd, shortDesc: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl glass-button-gold text-white font-extrabold uppercase tracking-wider text-sm shadow-xl mt-4"
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
