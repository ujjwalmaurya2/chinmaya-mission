import React, { useState } from 'react';
import { Heart, Gift, ShieldAlert, CheckCircle, X, Sparkles } from 'lucide-react';

export default function DonateSection({ showToast }) {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('Support Healthcare');
  const [showDemoReceipt, setShowDemoReceipt] = useState(false);

  const presetAmounts = ['100', '500', '1000', '5000'];
  const purposes = ['Support Healthcare', 'Support a Patient Fund', 'Sponsor a Rural Camp'];

  const finalAmount = selectedAmount === 'custom' ? (customAmount || '0') : selectedAmount;

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setShowDemoReceipt(true);
    showToast('Demo donation request initiated! (No actual money processed)', 'info');
  };

  return (
    <section id="donate" className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD] relative overflow-hidden">
      <div className="container-custom">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-[#FFF9F1] to-[#F5EBDD]/50 rounded-3xl border border-[#F5EBDD] p-8 sm:p-12 shadow-xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="w-12 h-12 rounded-full bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center mx-auto mb-4 border border-[#F5EBDD]">
              <Heart className="w-6 h-6 fill-[#C96F32]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mb-3">
              Support the Spirit of Seva
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] font-light">
              Your support helps extend compassionate healthcare and free rural medical initiatives to more people across Prayagraj.
            </p>
          </div>

          <form onSubmit={handleDonateSubmit} className="space-y-8 max-w-2xl mx-auto">
            
            {/* Purpose Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A95724] mb-3">
                Choose Support Initiative:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {purposes.map((purpose) => (
                  <button
                    key={purpose}
                    type="button"
                    onClick={() => setSelectedPurpose(purpose)}
                    className={`p-3.5 rounded-2xl text-xs font-semibold border transition-all text-center ${
                      selectedPurpose === purpose
                        ? 'bg-[#C96F32] text-white border-[#C96F32] shadow-md'
                        : 'bg-white text-[#2B211B] border-[#F5EBDD] hover:bg-[#F5EBDD]'
                    }`}
                  >
                    {purpose}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Presets */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A95724] mb-3">
                Select Contribution Amount (₹):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    className={`py-3 rounded-2xl font-serif font-bold text-base border transition-all ${
                      selectedAmount === amt
                        ? 'bg-[#2B211B] text-white border-[#2B211B] shadow-md'
                        : 'bg-white text-[#2B211B] border-[#F5EBDD] hover:bg-[#F5EBDD]'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
                
                <button
                  type="button"
                  onClick={() => setSelectedAmount('custom')}
                  className={`py-3 rounded-2xl font-sans text-xs font-bold border transition-all ${
                    selectedAmount === 'custom'
                      ? 'bg-[#2B211B] text-white border-[#2B211B] shadow-md'
                      : 'bg-white text-[#2B211B] border-[#F5EBDD] hover:bg-[#F5EBDD]'
                  }`}
                >
                  Custom
                </button>
              </div>

              {selectedAmount === 'custom' && (
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Enter custom amount in ₹"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    required
                    className="w-full p-3.5 rounded-2xl border border-[#C96F32] bg-white text-sm text-[#2B211B] focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button type="submit" className="btn-primary py-4 px-10 text-base shadow-lg w-full sm:w-auto">
                <Gift className="w-5 h-5" />
                <span>Donate ₹{finalAmount} Now (Demo)</span>
              </button>

              <p className="text-[11px] text-[#6E6259] mt-3 font-normal">
                🔒 Pitch Demo Interface — No real payments are processed.
              </p>
            </div>

          </form>

        </div>

      </div>

      {/* Demo Receipt Modal */}
      {showDemoReceipt && (
        <div className="modal-overlay" onClick={() => setShowDemoReceipt(null)}>
          <div className="modal-content p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-full bg-amber-100 text-[#C96F32] flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 text-[#A95724] mb-2 inline-block">
              Demo Prototype Preview
            </span>

            <h3 className="text-2xl font-serif font-bold text-[#2B211B] mb-2">
              Thank You for Supporting Seva!
            </h3>

            <p className="text-xs text-[#6E6259] leading-relaxed mb-6">
              This demonstrates how a donor would initiate a contribution for <strong>"{selectedPurpose}"</strong> of amount <strong>₹{finalAmount}</strong>.
            </p>

            <div className="bg-[#FFF9F1] p-4 rounded-2xl border border-[#F5EBDD] text-left text-xs space-y-2 mb-6 text-[#2B211B]">
              <div className="flex justify-between"><span>Selected Cause:</span> <strong>{selectedPurpose}</strong></div>
              <div className="flex justify-between"><span>Contribution Amount:</span> <strong>₹{finalAmount}</strong></div>
              <div className="flex justify-between"><span>Tax Exemption:</span> <strong>80G Eligible (Demo)</strong></div>
            </div>

            <button onClick={() => setShowDemoReceipt(false)} className="btn-primary w-full text-xs py-3 justify-center">
              Close Demo Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
