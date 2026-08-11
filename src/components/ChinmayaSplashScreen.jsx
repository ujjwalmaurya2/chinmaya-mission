import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ChinmayaSplashScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: init, 1: motif, 2: chinmaya, 3: chikitsalaya, 4: line & prayagraj, 5: seva, 6: exiting
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Sequence timers
    const t1 = setTimeout(() => setStage(1), 150);
    const t2 = setTimeout(() => setStage(2), 400);
    const t3 = setTimeout(() => setStage(3), 700);
    const t4 = setTimeout(() => setStage(4), 1100);
    const t5 = setTimeout(() => setStage(5), 1400);
    const t6 = setTimeout(() => setStage(6), 2400); // Start exit transition
    const t7 = setTimeout(() => {
      onComplete();
    }, 2850); // Clean unmount

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage(6);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#FFF9F1] flex flex-col items-center justify-center p-6 select-none transition-all duration-500 ease-out ${
        stage === 6 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Chinmaya Chikitsalaya Brand Intro"
      role="region"
    >
      {/* Background Soft Abstract Radial Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div 
          className={`w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full border border-[rgba(201,111,50,0.14)] bg-gradient-to-br from-[rgba(201,111,50,0.06)] to-transparent transition-all duration-1000 ${
            stage >= 1 ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-75 rotate-0'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        />
        <div 
          className={`absolute w-64 h-64 sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[rgba(201,111,50,0.18)] transition-all duration-1000 delay-100 ${
            stage >= 1 ? 'opacity-100 scale-100 animate-spin-slow' : 'opacity-0 scale-90'
          }`}
        />
      </div>

      {/* Main Brand Content Center */}
      <div className="relative z-10 text-center max-w-lg w-full flex flex-col items-center">
        
        {/* Brand Symbol / Om Seva Mark */}
        <div 
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#F7E6D7] to-[#F5EBDD] text-[#C96F32] flex items-center justify-center mb-6 shadow-md border border-[rgba(201,111,50,0.25)] transition-all duration-700 ${
            stage >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'
          }`}
        >
          <span className="font-serif font-bold text-2xl sm:text-3xl">🕉️</span>
        </div>

        {/* CHINMAYA Heading */}
        <div 
          className={`font-serif font-semibold text-xs sm:text-sm tracking-[0.25em] text-[#A95724] uppercase mb-1 transition-all duration-600 ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          CHINMAYA
        </div>

        {/* CHIKITSALAYA Heading (Main Visual Focus) */}
        <h1 
          className={`font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-[#2B211B] tracking-tight leading-none mb-3 transition-all duration-700 ${
            stage >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          CHIKITSALAYA
        </h1>

        {/* PRAYAGRAJ */}
        <div 
          className={`font-sans font-bold text-xs sm:text-sm tracking-[0.35em] text-[#C96F32] uppercase mb-4 transition-all duration-600 ${
            stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          PRAYAGRAJ
        </div>

        {/* Minimal Animated Healthcare Pulse Line */}
        <div className="w-48 sm:w-64 h-6 relative mb-4 flex items-center justify-center">
          <svg 
            className="w-full h-6 overflow-visible"
            viewBox="0 0 200 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 H60 L68 4 L76 20 L84 8 L92 14 L100 12 H200"
              stroke="#C96F32"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-1000 ${
                stage >= 4 ? 'stroke-dashoffset-0 opacity-80' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: 240,
                strokeDashoffset: stage >= 4 ? 0 : 240,
                transition: 'stroke-dashoffset 1s ease-in-out, opacity 0.5s ease'
              }}
            />
          </svg>
        </div>

        {/* SEVA • CARE • COMPASSION */}
        <div 
          className={`font-sans font-medium text-[11px] sm:text-xs tracking-[0.25em] text-[#6E6259] uppercase transition-all duration-600 ${
            stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          SEVA • CARE • COMPASSION
        </div>

      </div>

      {/* Skip Button (Bottom Right) */}
      <button
        onClick={handleSkip}
        className="fixed bottom-6 right-6 z-50 text-xs font-semibold text-[#6E6259] hover:text-[#C96F32] bg-white/80 hover:bg-white border border-[#F5EBDD] px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer"
        aria-label="Skip splash screen"
      >
        <span>Skip</span>
        <ArrowRight className="w-3 h-3 text-[#C96F32]" />
      </button>

      {/* Custom slow spin keyframe style */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
