import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function FloatingDonateButton({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed z-40 right-4 bottom-24 md:right-8 md:bottom-8 animate-fade-up">
      {/* Subtle periodic pulse ring */}
      <span className="absolute -inset-1 rounded-full bg-[#C96F32]/30 animate-ping pointer-events-none opacity-40 duration-1000" />

      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Donate to Chinmaya Chikitsalaya"
        className="relative group flex items-center gap-2 bg-gradient-to-r from-[#C96F32] to-[#A95724] hover:from-[#A95724] hover:to-[#8C4318] text-[#FFF9F1] px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-[0_8px_25px_rgba(201,111,50,0.45)] border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
      >
        <Heart className={`w-4 h-4 fill-white text-white transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
        
        <span className="font-sans font-bold text-xs md:text-sm tracking-wider uppercase">
          Donate
        </span>

        {/* Hover Arrow Transition */}
        <ArrowRight 
          className={`w-4 h-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0 w-4' : 'opacity-0 -translate-x-2 w-0 overflow-hidden'
          }`} 
        />
      </button>
    </div>
  );
}
