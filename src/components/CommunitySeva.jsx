import React, { useState } from 'react';
import { MapPin, Calendar, Users, HeartHandshake, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_CAMPS } from '../data/organizationData';

export default function CommunitySeva() {
  const [selectedCamp, setSelectedCamp] = useState(null);

  return (
    <section id="community" className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Community Seva</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Serving Beyond Our Walls.
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Bringing healthcare, vision screening, and medical assistance directly to underserved rural communities.
          </p>
        </div>

        {/* Featured Medical Camp Banner Card */}
        <div className="bg-gradient-to-r from-[#2B211B] to-[#3A2F28] text-white rounded-3xl overflow-hidden shadow-2xl mb-16 border border-[rgba(201,111,50,0.3)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            
            <div className="lg:col-span-7">
              <span className="px-3.5 py-1 rounded-full bg-[#C96F32] text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-sm">
                Featured Campaign • Free Service
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                {COMMUNITY_CAMPS[0].title}
              </h3>

              <p className="text-base text-[#D1C5BA] font-light mb-8 leading-relaxed">
                {COMMUNITY_CAMPS[0].subtitle}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#FFF9F1] mb-8 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C96F32] shrink-0" />
                  <span>{COMMUNITY_CAMPS[0].location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#C96F32] shrink-0" />
                  <span>{COMMUNITY_CAMPS[0].date} ({COMMUNITY_CAMPS[0].time})</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#C96F32] shrink-0" />
                  <span>Doctors: {COMMUNITY_CAMPS[0].doctors}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#C96F32] shrink-0" />
                  <span>{COMMUNITY_CAMPS[0].services}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCamp(COMMUNITY_CAMPS[0])}
                className="btn-primary text-sm py-3.5 px-7"
              >
                <span>View Camp Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-72 lg:h-full min-h-[280px]">
              <img 
                src={COMMUNITY_CAMPS[0].image} 
                alt="Community Health Camp" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-transparent opacity-60" />
            </div>

          </div>
        </div>

        {/* Camp Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {COMMUNITY_CAMPS.map((camp) => (
            <div 
              key={camp.id}
              className="bg-white rounded-3xl border border-[#F5EBDD] overflow-hidden hover-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    camp.status === 'Upcoming' ? 'bg-[#E8F4EC] text-[#2E6F40]' : 'bg-[#F5EBDD] text-[#6E6259]'
                  }`}>
                    {camp.status}
                  </span>
                  <span className="text-xs text-[#6E6259]">{camp.date}</span>
                </div>

                <h4 className="text-xl font-serif font-bold text-[#2B211B] mb-2">{camp.title}</h4>
                <p className="text-xs text-[#6E6259] mb-4">{camp.subtitle}</p>
                <p className="text-xs font-medium text-[#A95724] mb-4">📍 {camp.location}</p>
              </div>

              <button
                onClick={() => setSelectedCamp(camp)}
                className="btn-secondary text-xs py-2.5 px-4 w-full justify-center"
              >
                Camp Overview →
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Camp Modal */}
      {selectedCamp && (
        <div className="modal-overlay" onClick={() => setSelectedCamp(null)}>
          <div className="modal-content p-8 max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#C96F32]">{selectedCamp.status} Health Camp</span>
                <h3 className="text-2xl font-serif font-bold text-[#2B211B]">{selectedCamp.title}</h3>
              </div>
              <button onClick={() => setSelectedCamp(null)} className="p-2 rounded-full hover:bg-[#F5EBDD]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6 text-xs text-[#2B211B]">
              <p className="text-sm text-[#6E6259] leading-relaxed">{selectedCamp.subtitle}</p>
              <div className="p-4 rounded-2xl bg-[#FFF9F1] border border-[#F5EBDD] space-y-2">
                <div><strong>Location:</strong> {selectedCamp.location}</div>
                <div><strong>Date & Time:</strong> {selectedCamp.date} ({selectedCamp.time})</div>
                <div><strong>Attending Specialists:</strong> {selectedCamp.doctors}</div>
                <div><strong>Offered Services:</strong> {selectedCamp.services}</div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F5EBDD]">
              <button onClick={() => setSelectedCamp(null)} className="btn-primary text-xs py-2.5 px-5">
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
