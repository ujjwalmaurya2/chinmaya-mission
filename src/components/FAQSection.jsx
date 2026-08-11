import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/organizationData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Questions & Help</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Quick answers about OPD consultations, health camps, volunteer opportunities, and donations.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#F5EBDD] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2B211B] hover:text-[#C96F32] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C96F32] shrink-0" />
                    <span>{item.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#C96F32] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#6E6259] leading-relaxed border-t border-[#F5EBDD]/60 animate-fade-up">
                    <div className="pt-4 font-normal">
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
