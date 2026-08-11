import React from 'react';
import { CheckCircle2, Heart, ArrowRight } from 'lucide-react';

export default function DonationConfirmation({ 
  amount, 
  purpose, 
  donorName, 
  onClose, 
  onExploreImpact 
}) {
  return (
    <div className="text-center py-6 px-2 animate-fade-up">
      {/* Check Icon */}
      <div className="w-16 h-16 rounded-full bg-[#E8F4EC] text-[#2E6F40] flex items-center justify-center mx-auto mb-4 border border-[#2E6F40]/20 shadow-inner">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#E8F4EC] text-[#2E6F40] mb-3 inline-block">
        Demo Confirmation Preview
      </span>

      <h3 className="text-2xl font-serif font-bold text-[#2B211B] mb-2">
        Thank You for Supporting Seva!
      </h3>

      <p className="text-xs text-[#6E6259] leading-relaxed max-w-sm mx-auto mb-6">
        “Your support can help us continue our work for the community with dignity and compassion.”
      </p>

      {/* Summary Box */}
      <div className="bg-[#FFF9F1] p-5 rounded-2xl border border-[#F5EBDD] text-left text-xs space-y-2.5 mb-8 text-[#2B211B]">
        <div className="flex justify-between border-b border-[#F5EBDD] pb-2">
          <span className="text-[#6E6259]">Donor Name:</span>
          <strong>{donorName || 'Valued Well-wisher'}</strong>
        </div>
        <div className="flex justify-between border-b border-[#F5EBDD] pb-2">
          <span className="text-[#6E6259]">Contribution Amount:</span>
          <strong className="font-serif text-[#C96F32] text-sm">₹{amount}</strong>
        </div>
        <div className="flex justify-between border-b border-[#F5EBDD] pb-2">
          <span className="text-[#6E6259]">Supported Cause:</span>
          <strong>{purpose}</strong>
        </div>
        <div className="flex justify-between text-[11px] text-[#6E6259] pt-1">
          <span>Status:</span>
          <span className="text-[#2E6F40] font-semibold">Demo Flow Completed</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={onClose}
          className="btn-secondary w-full py-3 text-xs justify-center"
        >
          Back to Website
        </button>

        <button
          onClick={() => {
            onClose();
            onExploreImpact();
          }}
          className="btn-primary w-full py-3 text-xs justify-center"
        >
          <span>Explore Our Impact</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
