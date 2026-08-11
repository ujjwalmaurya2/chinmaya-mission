import React from 'react';
import { Heart, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Heart,
      title: "Compassion",
      desc: "Treating every individual with genuine dignity, warmth, and empathetic care."
    },
    {
      icon: ShieldCheck,
      title: "Accessible Healthcare",
      desc: "Working tirelessly toward medical care that is transparent, affordable, and open to all."
    },
    {
      icon: Award,
      title: "Trusted Medical Care",
      desc: "Professional healthcare standards delivered with deep institutional responsibility."
    },
    {
      icon: HeartHandshake,
      title: "Seva",
      desc: "A pure spirit of community service guiding every doctor, nurse, and volunteer."
    }
  ];

  return (
    <section className="py-20 bg-[#F5EBDD]/40 border-y border-[#F5EBDD]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="section-badge mb-4">Our Core Ethos</span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] leading-tight mb-6">
              Healthcare with a <br />
              <span className="text-[#C96F32] italic font-normal">Human Heart.</span>
            </h2>

            <p className="text-lg text-[#6E6259] font-light leading-relaxed mb-8">
              Every patient deserves not only medical diagnosis and treatment, but dignity, compassion, and true human understanding.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#F5EBDD] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white p-1 border border-[#C96F32]/30 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                <img src="/images/chinmaya_logo.png" alt="Chinmaya Mission Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Inspired by Chinmaya Seva</h4>
                <p className="text-xs text-[#6E6259] leading-relaxed mt-1">
                  Integrating clinical excellence with the spiritual wisdom of selfless service (Seva) to nurture physical, emotional, and social well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Blocks */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-[#F5EBDD] shadow-sm hover-card"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9F1] text-[#C96F32] border border-[#F5EBDD] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2B211B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6E6259] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
