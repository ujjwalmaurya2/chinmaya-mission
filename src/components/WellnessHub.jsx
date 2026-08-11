import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Share2, Check } from 'lucide-react';
import { WELLNESS_ARTICLES } from '../data/organizationData';

export default function WellnessHub() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Preventive Care', 'Nutrition', 'Women\'s Health', 'Children\'s Health', 'General Wellness'];

  const filteredArticles = selectedCategory === 'All'
    ? WELLNESS_ARTICLES
    : WELLNESS_ARTICLES.filter(a => a.category === selectedCategory);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="wellness" className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-badge mb-3">Patient Education</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Health & Wellness
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Empowering families with trusted preventive guidance and healthy living insights.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C96F32] text-white shadow-sm'
                  : 'bg-white text-[#2B211B] border border-[#F5EBDD] hover:bg-[#F5EBDD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Card */}
        <div className="bg-white border border-[#F5EBDD] rounded-3xl p-8 mb-12 hover-card grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F7E6D7] text-[#C96F32] mb-4 inline-block">
              Featured Insight • {WELLNESS_ARTICLES[0].category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mb-3">
              {WELLNESS_ARTICLES[0].title}
            </h3>

            <p className="text-sm text-[#6E6259] leading-relaxed mb-6 font-normal">
              {WELLNESS_ARTICLES[0].summary}
            </p>

            <div className="flex items-center gap-6 text-xs text-[#6E6259] mb-6">
              <span>By <strong>{WELLNESS_ARTICLES[0].author}</strong></span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C96F32]" />
                <span>{WELLNESS_ARTICLES[0].readTime}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedArticle(WELLNESS_ARTICLES[0])}
              className="btn-primary text-xs py-3 px-6"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-64 border border-[#F5EBDD]">
            <img 
              src="/images/hero_doctor_patient.jpg" 
              alt="Health Article" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-[#F5EBDD] rounded-3xl p-6 hover-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F5EBDD] text-[#A95724]">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#6E6259]">
                    <Clock className="w-3 h-3 text-[#C96F32]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h4 className="text-lg font-serif font-bold text-[#2B211B] mb-2">{art.title}</h4>
                <p className="text-xs text-[#6E6259] leading-relaxed mb-4">{art.summary}</p>
              </div>

              <div className="pt-4 border-t border-[#F5EBDD] flex items-center justify-between">
                <span className="text-[11px] text-[#6E6259] font-medium">{art.author}</span>
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs font-bold text-[#C96F32] flex items-center gap-1 hover:underline"
                >
                  <span>Read Article</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content p-8 max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F5EBDD]">
              <div className="text-xs text-[#6E6259]">
                <span>Health & Wellness</span> / <span className="text-[#C96F32] font-semibold">{selectedArticle.category}</span>
              </div>
              <button onClick={() => setSelectedArticle(null)} className="p-2 rounded-full hover:bg-[#F5EBDD]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mb-3">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-[#6E6259] mb-6 pb-4 border-b border-[#F5EBDD]">
              <span>By <strong className="text-[#2B211B]">{selectedArticle.author}</strong></span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="prose text-xs sm:text-sm text-[#2B211B] leading-relaxed space-y-4 mb-8 whitespace-pre-line">
              {selectedArticle.content}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#F5EBDD]">
              <button
                onClick={handleShare}
                className="btn-secondary text-xs py-2 px-4 gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C96F32]" />}
                <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
              </button>

              <button onClick={() => setSelectedArticle(null)} className="btn-primary text-xs py-2 px-5">
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
