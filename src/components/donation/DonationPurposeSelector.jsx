import React from 'react';
import { Heart, Stethoscope, Users, Sparkles, Sun } from 'lucide-react';

export default function DonationPurposeSelector({ selectedPurpose, onSelectPurpose }) {
  const purposes = [
    { id: 'General Seva', label: 'General Seva', desc: 'Direct support to core community service initiatives', icon: Sun },
    { id: 'Healthcare Support', label: 'Healthcare Support', desc: 'Equipment, diagnostics & OPD operational support', icon: Stethoscope },
    { id: 'Community Health Camps', label: 'Community Health Camps', desc: 'Free rural outreach & mobile health camps', icon: Users },
    { id: 'Patient Support', label: 'Patient Support', desc: 'Subsidized care & medicines for patients in need', icon: Heart },
    { id: 'Health Awareness', label: 'Health Awareness', desc: 'Preventive health education & hygiene drives', icon: Sparkles }
  ];

  return (
    <div className="space-y-3">
      <label className="block text-xs font-bold uppercase tracking-wider text-[#A95724]">
        Where would you like your contribution to help?
      </label>

      <div className="space-y-2">
        {purposes.map((p) => {
          const Icon = p.icon;
          const isSelected = selectedPurpose === p.id;
          return (
            <div
              key={p.id}
              onClick={() => onSelectPurpose(p.id)}
              className={`p-3 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                isSelected
                  ? 'bg-[#FFF9F1] border-[#C96F32] shadow-sm'
                  : 'bg-white border-[#F5EBDD] hover:border-[#C96F32]/50 hover:bg-[#FFF9F1]/50'
              }`}
            >
              {/* Radio Circle */}
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                isSelected ? 'border-[#C96F32] bg-[#C96F32]' : 'border-gray-300 bg-white'
              }`}>
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>

              {/* Icon */}
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                isSelected ? 'bg-[#F7E6D7] text-[#C96F32]' : 'bg-[#F5EBDD]/60 text-[#6E6259]'
              }`}>
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Label & Subtitle */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#2B211B] leading-tight">{p.label}</div>
                <div className="text-[11px] text-[#6E6259] truncate leading-tight mt-0.5">{p.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
