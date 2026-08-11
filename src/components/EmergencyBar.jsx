import React from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function EmergencyBar() {
  return (
    <div className="bg-[#2B211B] text-[#FFF9F1] py-3.5 px-4 border-y border-[rgba(201,111,50,0.3)]">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C96F32] flex items-center justify-center text-white shrink-0 animate-pulse">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Need Medical Assistance or OPD Guidance?</span>
            <span className="hidden md:inline text-xs text-[#D1C5BA] ml-2">• Contact our Prayagraj helpline desk</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={`tel:${ORG_INFO.phone}`}
            className="text-xs font-bold text-amber-300 hover:text-white transition-colors underline flex items-center gap-1"
          >
            <span>Call {ORG_INFO.phone}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
