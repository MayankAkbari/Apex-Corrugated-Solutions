'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle2, Send, Sparkles, Filter, Upload, Building2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ReviewsPage() {
  const { reviews, addReview } = useApp();
  const [filterRating, setFilterRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    author: '',
    company: '',
    role: '',
    industry: 'FMCG',
    rating: 5,
    comment: '',
    image: ''
  });

  const approvedReviews = reviews.filter(r => r.approved && (filterRating === 0 || r.rating === filterRating));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.comment) return;

    setIsSubmitting(true);
    setTimeout(() => {
      addReview({
        author: formData.author,
        company: formData.company || 'Enterprise Client',
        role: formData.role || 'Procurement Head',
        industry: formData.industry,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        image: formData.image || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        approved: true // Auto approve in demo mode so user sees immediate feedback
      });
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ author: '', company: '', role: '', industry: 'FMCG', rating: 5, comment: '', image: '' });
    }, 600);
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF9] text-slate-900 pb-24" itemScope itemType="https://schema.org/WebPage">
      
      {/* Header Banner - Luminous Light Executive Theme */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#002E73_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1550px] mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002E73]/10 text-[#002E73] text-xs font-bold uppercase tracking-widest border border-[#002E73]/20">
            <MessageSquareQuote size={14} className="text-[#B88746]" /> Verified B2B Client Testimonials
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900" itemProp="name">
            Customer <span className="text-[#002E73] underline decoration-[#B88746] decoration-4 underline-offset-8">Testimonials & Reviews</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal" itemProp="description">
            Read unedited performance reviews from supply chain directors, procurement leads, and export managers across India.
          </p>
        </div>
      </section>

      {/* Main Grid: Reviews List & Submission Form */}
      <section className="py-20 px-4 md:px-8 max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Filter & Review Cards */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Rating Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-[#002E73]" />
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Filter Reviews:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterRating(0)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${filterRating === 0 ? 'bg-[#002E73] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                All ({reviews.filter(r => r.approved).length})
              </button>
              <button
                onClick={() => setFilterRating(5)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all ${filterRating === 5 ? 'bg-[#002E73] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                <span>5 Stars</span> <Star size={14} className="fill-[#B88746] text-[#B88746]" />
              </button>
              <button
                onClick={() => setFilterRating(4)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all ${filterRating === 4 ? 'bg-[#002E73] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                <span>4 Stars</span> <Star size={14} className="fill-[#B88746] text-[#B88746]" />
              </button>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="space-y-6">
            {approvedReviews.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-6 relative"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(rev.rating)} />
                      <meta itemProp="bestRating" content="5" />
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-[#B88746] text-[#B88746]" />
                      ))}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{rev.author}</span>
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{rev.role}, <span className="text-[#002E73] font-bold">{rev.company}</span></p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-[#002E73]/10 text-[#002E73] text-[11px] font-bold uppercase border border-[#002E73]/20">
                      {rev.industry}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">{rev.date}</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic font-medium" itemProp="reviewBody">
                  “{rev.comment}”
                </p>

                {rev.image && (
                  <div className="relative h-44 w-full sm:w-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                    <Image src={rev.image} alt="Client Shipment Verification" fill className="object-cover" />
                    <span className="absolute bottom-2 left-2 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider">
                      Shipment Verification
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive Review Submission Form */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="p-8 md:p-10 rounded-3xl bg-[#002E73] text-white border border-[#002E73] shadow-2xl">
            {submittedSuccess ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 size={56} className="mx-auto text-[#B88746]" />
                <h3 className="text-2xl font-extrabold text-white">Thank You For Your Feedback!</h3>
                <p className="text-sm text-slate-200 font-medium">
                  Your review has been successfully submitted and verified. It is now published live on our B2B portal.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="mt-6 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all"
                >
                  Submit Another Review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Client Portal</span>
                  <h3 className="text-2xl font-extrabold text-white">Submit Your Review</h3>
                  <p className="text-xs text-slate-200 mt-1 font-medium">Share your experience with Apex Corrugated packaging solutions.</p>
                </div>

                {/* Star Rating Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-200 mb-2 tracking-wider">Overall Rating *</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 transition-transform hover:scale-125"
                      >
                        <Star
                          size={28}
                          className={star <= formData.rating ? 'fill-[#B88746] text-[#B88746]' : 'text-slate-400'}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm font-bold text-[#B88746]">{formData.rating} / 5 Stars</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Role / Designation"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  >
                    <option value="FMCG" className="bg-[#002E73] text-white">FMCG</option>
                    <option value="Pharmaceutical" className="bg-[#002E73] text-white">Pharmaceutical</option>
                    <option value="Electronics" className="bg-[#002E73] text-white">Electronics</option>
                    <option value="Automobile" className="bg-[#002E73] text-white">Automobile</option>
                    <option value="Textiles" className="bg-[#002E73] text-white">Textiles</option>
                    <option value="E-Commerce" className="bg-[#002E73] text-white">E-Commerce</option>
                  </select>
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe box stacking strength, Cobb moisture resilience during transit, or prototyping speed..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-200 mb-1 tracking-wider">Shipment Photo URL (Optional)</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. https://images.unsplash.com/photo-158652..."
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#B88746]"
                    />
                    <Upload size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl glass-button-gold text-white font-extrabold text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {isSubmitting ? <span>Publishing Review...</span> : <span>Publish Client Review</span>}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

      </section>
    </div>
  );
}
