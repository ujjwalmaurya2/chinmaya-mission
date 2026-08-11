import React from 'react';
import { ArrowRight, Heart, Sparkles, Sun } from 'lucide-react';

export default function SevaSection() {
  const principles = [
    {
      title: "Seva",
      subtitle: "Service to Society",
      desc: "Approaching healthcare as a selfless offering, prioritizing human wellbeing over material motives."
    },
    {
      title: "Karuna",
      subtitle: "Compassion in Care",
      desc: "Ensuring every interaction is marked by warmth, active listening, and heartfelt empathy."
    },
    {
      title: "Dignity",
      subtitle: "Respect for Every Individual",
      desc: "Upholding the inherent worth and self-respect of every patient, regardless of economic background."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-[#C96F32] via-[#A95724] to-[#8C4318] text-white relative overflow-hidden">
      
      {/* Subtle Texture & Glow */}
      <div className="absolute inset-0 bg-texture-sand opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sun className="w-3.5 h-3.5 text-amber-200" />
            <span>CHINMAYA MISSION SPIRIT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Rooted in Seva.
          </h2>

          <p className="text-lg sm:text-xl text-[#FFF9F1]/90 font-light leading-relaxed">
            “Healthcare becomes more meaningful when it reaches beyond treatment and becomes a genuine expression of care for the community.”
          </p>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {principles.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              <div className="text-amber-200 font-serif text-3xl font-bold mb-2">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                {p.title}
              </h3>
              <div className="text-xs uppercase font-bold tracking-wider text-amber-200/90 mb-4">
                {p.subtitle}
              </div>
              <p className="text-sm text-[#FFF9F1]/85 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.chinmayamission.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-base py-3.5 px-8 inline-flex items-center gap-2"
          >
            <span>Learn About Chinmaya Mission</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
