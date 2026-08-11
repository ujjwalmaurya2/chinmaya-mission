import React from 'react';
import { Heart, Users, ShieldCheck, Stethoscope } from 'lucide-react';

export default function TrustStrip() {
  const trustPoints = [
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "Dignity and empathy at every stage"
    },
    {
      icon: Users,
      title: "Community Service",
      desc: "Rooted in Chinmaya Seva spirit"
    },
    {
      icon: ShieldCheck,
      title: "Accessible Healthcare",
      desc: "Quality treatment open to all"
    },
    {
      icon: Stethoscope,
      title: "Trusted Medical Support",
      desc: "Qualified & dedicated practitioners"
    }
  ];

  return (
    <section className="relative z-20 bg-[#FFF9F1] border-y border-[#F5EBDD] py-6 shadow-sm">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 p-2 rounded-xl transition-all duration-300 hover:bg-[#F5EBDD]/60"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0 shadow-inner">
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#2B211B] leading-tight">{item.title}</h4>
                  <p className="text-xs text-[#6E6259] font-normal leading-tight mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
