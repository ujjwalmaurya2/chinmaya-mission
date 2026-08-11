import React from 'react';
import { Heart } from 'lucide-react';

export default function ParallaxQuote() {
  return (
    <section className="relative py-32 bg-[#2B211B] text-[#FFF9F1] overflow-hidden">
      
      {/* Background Image with Parallax Blend */}
      <div className="absolute inset-0 z-0 opacity-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/hero_doctor_patient.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B211B] via-[#2B211B]/80 to-[#2B211B]" />
      </div>

      {/* Subtle Saffron Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C96F32]/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-[rgba(201,111,50,0.2)] text-[#C96F32] flex items-center justify-center mx-auto mb-8 border border-[rgba(201,111,50,0.3)] shadow-inner">
          <Heart className="w-6 h-6" />
        </div>

        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF9F1] leading-tight mb-8">
          “Care is more than treatment.”
        </blockquote>

        <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#F7E6D7] font-light space-y-2">
          <span>It is presence.</span> <span className="text-[#C96F32]">•</span> <span>It is compassion.</span> <span className="text-[#C96F32]">•</span> <span>It is seva.</span>
        </p>

        <div className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D1C5BA] font-semibold border-t border-white/10 pt-6">
          <span>CHINMAYA CHIKITSALAYA • PRAYAGRAJ</span>
        </div>
      </div>
    </section>
  );
}
