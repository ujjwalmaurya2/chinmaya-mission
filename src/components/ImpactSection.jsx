import React from 'react';
import { Users, HeartPulse, Sparkles, Clock, Info } from 'lucide-react';
import { IMPACT_STATS } from '../data/organizationData';

const iconList = [Users, HeartPulse, Sparkles, Clock];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Seva In Numbers</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Bringing healthcare, relief, and dignity to the people of Prayagraj.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {IMPACT_STATS.map((stat, idx) => {
            const IconComponent = iconList[idx] || Users;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#F5EBDD] p-8 rounded-3xl text-center hover-card relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF9F1] text-[#C96F32] border border-[#F5EBDD] flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#2B211B] mb-2 tracking-tight">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-[#A95724] mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-[#6E6259] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mandatory Demo Label */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#6E6259] bg-[#F5EBDD]/60 py-2.5 px-5 rounded-full max-w-md mx-auto border border-[#F5EBDD]">
          <Info className="w-4 h-4 text-[#C96F32] shrink-0" />
          <span>Demo figures — replace with verified institutional data.</span>
        </div>

      </div>
    </section>
  );
}
