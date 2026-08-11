import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, History, ChevronRight } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function AboutSection() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineSteps = [
    {
      year: "Vision Established",
      title: "Foundation of Seva Spirit",
      desc: "Inspired by Pujya Gurudev Swami Chinmayananda's philosophy of 'Maximum happiness for maximum people for maximum time', local devotees envisioned accessible healthcare for Prayagraj."
    },
    {
      year: "Clinic OPD Launch",
      title: "Opening Chinmaya Chikitsalaya",
      desc: "Established primary OPD consultation clinics offering general physician care, affordable diagnostics, and subsidized medicines."
    },
    {
      year: "Rural Outreach",
      title: "Mobile Community Health Camps",
      desc: "Expanded services beyond clinical walls to conduct free vision, pediatric, and health awareness camps in surrounding semi-urban villages."
    },
    {
      year: "Modern Integration",
      title: "Specialist & Digital Platform",
      desc: "Integrated multi-specialty consultations and modern patient assistance tools while preserving warm cultural values."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FFF9F1] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/modern_clinic_facility.jpg" 
                alt="Chinmaya Chikitsalaya Facility" 
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/60 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-6 rounded-3xl border border-[#F5EBDD] shadow-xl max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center font-serif font-bold text-xl">
                  10+
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B211B]">Years of Trusted Seva</h4>
                  <p className="text-xs text-[#6E6259]">Serving Prayagraj families</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6">
            <span className="section-badge mb-4">About the Institution</span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] leading-tight mb-6">
              Serving Through <br />
              <span className="text-[#C96F32] italic font-normal">Healthcare.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#6E6259] leading-relaxed mb-6 font-light">
              Chinmaya Chikitsalaya Prayagraj is connected with the global vision of Chinmaya Mission. We believe that true healthcare reaches beyond routine medical treatment to encompass dignity, empathy, and genuine care for the community.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Qualified medical practitioners dedicated to patient wellbeing",
                "Subsidized consultations and fair-price pharmacy services",
                "Proactive rural health outreach and free medical camps",
                "Warm, respectful environment for patients of all backgrounds"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#2B211B] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#C96F32] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#mission" className="btn-primary">
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Vertical Timeline Box */}
        <div className="mt-16 bg-[#F5EBDD]/50 border border-[#F5EBDD] rounded-3xl p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-6 h-6 text-[#C96F32]" />
            <h3 className="text-2xl font-serif font-bold text-[#2B211B]">Our Journey of Community Service</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {timelineSteps.map((step, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTimeline(idx)}
                className={`cursor-pointer p-5 rounded-2xl transition-all ${
                  activeTimeline === idx 
                    ? 'bg-white shadow-md border-l-4 border-[#C96F32]' 
                    : 'hover:bg-white/60'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#C96F32] mb-1">
                  {step.year}
                </div>
                <h4 className="font-serif font-bold text-base text-[#2B211B] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#6E6259] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
