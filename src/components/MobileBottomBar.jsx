import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function MobileBottomBar({ onOpenAppointment }) {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Prayagraj', '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2B211B] text-[#FFF9F1] border-t border-[rgba(201,111,50,0.3)] px-3 py-2.5 shadow-2xl flex items-center justify-around">
      <a 
        href={`tel:${ORG_INFO.phone}`} 
        className="flex flex-col items-center gap-1 text-xs font-medium text-[#FFF9F1] hover:text-[#C96F32] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#C96F32]" />
        <span>Call</span>
      </a>

      <div className="h-6 w-px bg-white/10" />

      <button 
        onClick={handleDirections}
        className="flex flex-col items-center gap-1 text-xs font-medium text-[#FFF9F1] hover:text-[#C96F32] transition-colors"
      >
        <Navigation className="w-4 h-4 text-[#C96F32]" />
        <span>Directions</span>
      </button>

      <div className="h-6 w-px bg-white/10" />

      <button 
        onClick={onOpenAppointment}
        className="flex items-center gap-1.5 bg-gradient-to-r from-[#C96F32] to-[#A95724] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Appointment</span>
      </button>
    </div>
  );
}
