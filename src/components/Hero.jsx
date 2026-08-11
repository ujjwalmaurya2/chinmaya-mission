import React from 'react';
import { Calendar, ArrowRight, HeartHandshake, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function Hero({ onOpenAppointment, onExploreServices }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#2B211B] text-[#FFF9F1]">
      
      {/* Background Image Overlay with Soft Saffron Warmth */}
      <div className="absolute inset-0 z-0 opacity-25 scale-105 transition-transform duration-1000">
        <img 
          src="/images/hero_doctor_patient.jpg" 
          alt="Chinmaya Chikitsalaya Compassionate Healthcare" 
          className="w-full h-full object-cover filter brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B211B] via-[#2B211B]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-[#2B211B]/80" />
      </div>

      {/* Subtle Geometric Mandala Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#C96F32]/15 blur-3xl animate-glow pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#A95724]/20 blur-3xl animate-glow pointer-events-none" />

      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Column */}
        <div className="lg:col-span-7 flex flex-col items-start animate-fade-up">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(201,111,50,0.18)] border border-[rgba(201,111,50,0.35)] text-[#F7E6D7] text-xs font-bold tracking-wider uppercase mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#C96F32]" />
            <span>CHINMAYA CHIKITSALAYA • PRAYAGRAJ</span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF9F1] leading-[1.12] mb-6">
            Compassionate Healthcare.<br />
            <span className="text-[#C96F32] italic font-normal">Care for Every Life.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#D1C5BA] font-light leading-relaxed max-w-2xl mb-8">
            Healthcare rooted in compassion, dignity and a spirit of service. Dedicated to bringing quality medical consultation and holistic community well-being to Prayagraj.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={onOpenAppointment}
              className="btn-primary w-full sm:w-auto py-4 px-8 text-base shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </button>

            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); onExploreServices(); }}
              className="btn-outline-white w-full sm:w-auto py-4 px-8 text-base"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicator Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#D1C5BA]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C96F32]" />
              <span className="font-semibold text-white">Healthcare</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#C96F32]" />
              <span className="font-semibold text-white">Seva</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C96F32]" />
              <span className="font-semibold text-white">Community Impact</span>
            </div>
          </div>
        </div>

        {/* Right Hero Column: Editorial Card / Image Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 p-2 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src="/images/hero_doctor_patient.jpg" 
                alt="Doctor Patient Care" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#2B211B]/90 backdrop-blur-xl border border-[rgba(201,111,50,0.3)] p-4 rounded-2xl flex items-center justify-between shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C96F32] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C96F32]"></span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Serving with Compassion</div>
                  <div className="text-[11px] text-[#D1C5BA]">OPD Open Daily • Prayagraj</div>
                </div>
              </div>
              <a 
                href={`tel:${ORG_INFO.phone}`}
                className="p-2.5 rounded-full bg-[#C96F32] text-white hover:scale-110 transition-transform"
                title="Call OPD"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
