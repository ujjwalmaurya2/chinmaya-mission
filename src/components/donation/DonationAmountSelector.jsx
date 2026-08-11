import React from 'react';

export default function DonationAmountSelector({ 
  selectedPreset, 
  customAmount, 
  onSelectPreset, 
  onCustomAmountChange,
  customError 
}) {
  const presets = [
    { value: '100', label: '₹100' },
    { value: '500', label: '₹500' },
    { value: '1000', label: '₹1,000' },
    { value: '2500', label: '₹2,500' },
    { value: '5000', label: '₹5,000' },
    { value: 'custom', label: 'Custom' }
  ];

  return (
    <div className="space-y-3">
      <label className="block text-xs font-bold uppercase tracking-wider text-[#A95724]">
        Choose an Amount
      </label>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {presets.map((preset) => {
          const isSelected = selectedPreset === preset.value;
          return (
            <button
              key={preset.value}
              type="button"
              onClick={() => onSelectPreset(preset.value)}
              className={`py-3 px-4 rounded-2xl font-serif font-bold text-sm text-center border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#C96F32] text-white border-[#C96F32] shadow-[0_4px_15px_rgba(201,111,50,0.3)] scale-[1.02]'
                  : 'bg-white text-[#2B211B] border-[#F5EBDD] hover:border-[#C96F32] hover:bg-[#FFF9F1]'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Custom Amount Input Field */}
      {selectedPreset === 'custom' && (
        <div className="pt-2 animate-fade-up">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-serif font-bold text-[#A95724]">
              ₹
            </span>
            <input
              type="number"
              min="10"
              placeholder="Enter amount (e.g. 1500)"
              value={customAmount}
              onChange={(e) => onCustomAmountChange(e.target.value)}
              className={`w-full pl-9 pr-4 py-3 rounded-2xl border text-sm font-medium bg-white text-[#2B211B] focus:outline-none transition-colors ${
                customError ? 'border-rose-500 focus:border-rose-600' : 'border-[#C96F32] focus:ring-2 focus:ring-[#C96F32]/20'
              }`}
            />
          </div>
          {customError && (
            <p className="text-[11px] text-rose-500 mt-1 pl-1">{customError}</p>
          )}
        </div>
      )}
    </div>
  );
}
