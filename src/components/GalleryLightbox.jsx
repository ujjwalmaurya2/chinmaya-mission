import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/organizationData';

export default function GalleryLightbox() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tabs = ['All', 'Hospital', 'Doctors', 'Community', 'Medical Camps', 'Events'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeTab);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-badge mb-3">Visual Archive</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Moments of Seva
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Glimpses into our clinical care, community health initiatives, and volunteer service in Prayagraj.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[#C96F32] text-white shadow-sm'
                  : 'bg-[#F5EBDD]/60 text-[#2B211B] hover:bg-[#F5EBDD]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#F5EBDD] bg-[#2B211B] aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/90 via-[#2B211B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-2">{item.title}</h4>
                <div className="inline-flex items-center gap-1 text-xs text-white/80 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="modal-overlay !bg-black/90" onClick={() => setLightboxIndex(null)}>
          <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-10 right-4 text-white hover:text-[#C96F32] p-2"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Image Box */}
            <div className="relative rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center border border-white/20">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto animate-fade-up"
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#C96F32] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#C96F32] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Counter */}
            <div className="flex items-center justify-between text-white mt-4 px-2">
              <div>
                <span className="text-xs font-bold uppercase text-amber-300">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-lg font-serif font-bold">{filteredItems[lightboxIndex].title}</h3>
              </div>

              <div className="text-xs text-white/60 font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
