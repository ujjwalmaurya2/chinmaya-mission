import React from 'react';
import { Sparkles } from 'lucide-react';

export default function DonationImpactMessage({ amount }) {
  const getMessage = () => {
    const num = Number(amount) || 0;
    if (num <= 100) {
      return "Every contribution helps us continue serving the community with dedication.";
    } else if (num <= 500) {
      return "Your support can help strengthen community healthcare initiatives in Prayagraj.";
    } else if (num <= 2000) {
      return "Your support can help extend healthcare, screening, and outreach efforts.";
    } else {
      return "Your generosity can help support larger community healthcare initiatives.";
    }
  };

  return (
    <div className="p-3.5 rounded-2xl bg-[#F7E6D7]/40 border border-[#C96F32]/20 flex items-start gap-2.5 animate-fade-up">
      <Sparkles className="w-4 h-4 text-[#C96F32] shrink-0 mt-0.5" />
      <p className="text-xs text-[#2B211B] font-medium leading-relaxed">
        {getMessage()}
      </p>
    </div>
  );
}
