import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, ArrowRight, Lock } from 'lucide-react';
import DonationAmountSelector from './DonationAmountSelector';
import DonationPurposeSelector from './DonationPurposeSelector';
import DonationImpactMessage from './DonationImpactMessage';
import DonorDetailsForm from './DonorDetailsForm';
import DonationConfirmation from './DonationConfirmation';

export default function DonationDrawer({ isOpen, onClose, onExploreImpact }) {
  const [selectedPreset, setSelectedPreset] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [customError, setCustomError] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('General Seva');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    wantsUpdates: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const drawerRef = useRef(null);

  // Computed final amount
  const finalAmount = selectedPreset === 'custom' ? (customAmount || '0') : selectedPreset;

  // Body Scroll Lock & ESC Key Listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCustomAmountChange = (val) => {
    setCustomAmount(val);
    if (Number(val) < 10 && val !== '') {
      setCustomError('Please enter a valid amount (Minimum ₹10)');
    } else {
      setCustomError('');
    }
  };

  const handleFormChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (selectedPreset === 'custom') {
      if (!customAmount || Number(customAmount) < 10) {
        setCustomError('Please enter a valid amount (Minimum ₹10)');
        return;
      }
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Valid Mobile Number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedPreset('1000');
    setCustomAmount('');
    setCustomError('');
    setSelectedPurpose('General Seva');
    setFormData({ name: '', phone: '', email: '', message: '', wantsUpdates: true });
    setErrors({});
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#2B211B]/40 backdrop-blur-md flex justify-end transition-opacity duration-300 animate-fade-up"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Drawer Container */}
      <div 
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[460px] h-[90vh] md:h-full mt-auto md:mt-0 bg-[#FFF9F1] shadow-2xl border-l border-[#F5EBDD] rounded-t-[24px] md:rounded-none flex flex-col justify-between overflow-hidden animate-fade-up"
      >
        
        {/* Drawer Header */}
        <div className="p-5 md:p-6 bg-white border-b border-[#F5EBDD] flex items-start justify-between shrink-0">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0 shadow-inner">
              <Heart className="w-5 h-5 fill-[#C96F32]" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg md:text-xl text-[#2B211B] leading-tight">
                Support the Spirit of Seva
              </h2>
              <p className="text-xs text-[#6E6259] font-light leading-relaxed mt-0.5">
                “Your contribution can help extend compassionate healthcare and community service.”
              </p>
            </div>
          </div>

          <button 
            onClick={() => { handleReset(); onClose(); }}
            className="p-2 rounded-full text-[#6E6259] hover:text-[#2B211B] hover:bg-[#F5EBDD]/60 transition-colors"
            aria-label="Close donation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
          {isSubmitted ? (
            <DonationConfirmation
              amount={finalAmount}
              purpose={selectedPurpose}
              donorName={formData.name}
              onClose={() => { handleReset(); onClose(); }}
              onExploreImpact={onExploreImpact}
            />
          ) : (
            <form id="donation-form" onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Donation Amount */}
              <DonationAmountSelector
                selectedPreset={selectedPreset}
                customAmount={customAmount}
                onSelectPreset={(val) => { setSelectedPreset(val); setCustomError(''); }}
                onCustomAmountChange={handleCustomAmountChange}
                customError={customError}
              />

              {/* Dynamic Impact Message */}
              <DonationImpactMessage amount={finalAmount} />

              {/* 2. Donation Purpose */}
              <DonationPurposeSelector
                selectedPurpose={selectedPurpose}
                onSelectPurpose={setSelectedPurpose}
              />

              {/* 3. Donor Details */}
              <DonorDetailsForm
                formData={formData}
                onChange={handleFormChange}
                errors={errors}
              />

            </form>
          )}
        </div>

        {/* Sticky Drawer Footer / CTA */}
        {!isSubmitted && (
          <div className="p-4 md:p-6 bg-white border-t border-[#F5EBDD] shrink-0 space-y-2 text-center">
            <button
              type="submit"
              form="donation-form"
              className="btn-primary w-full py-3.5 text-sm font-bold justify-center shadow-lg"
            >
              <span>Continue to Donate ₹{finalAmount}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6E6259] pt-1">
              <Lock className="w-3 h-3 text-[#C96F32]" />
              <span>Secure payment integration can be connected here (Frontend Demo)</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
