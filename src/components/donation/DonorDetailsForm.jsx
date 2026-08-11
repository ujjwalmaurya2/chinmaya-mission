import React from 'react';

export default function DonorDetailsForm({ formData, onChange, errors }) {
  return (
    <div className="space-y-3">
      <label className="block text-xs font-bold uppercase tracking-wider text-[#A95724]">
        Your Details
      </label>

      <div className="space-y-2.5">
        {/* Full Name */}
        <div>
          <input
            type="text"
            required
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            className={`w-full p-3 rounded-xl border text-xs bg-white text-[#2B211B] focus:outline-none transition-colors ${
              errors?.name ? 'border-rose-500' : 'border-[#F5EBDD] focus:border-[#C96F32]'
            }`}
          />
          {errors?.name && <p className="text-[11px] text-rose-500 mt-0.5">{errors.name}</p>}
        </div>

        {/* Mobile Number & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <input
              type="tel"
              required
              placeholder="Mobile Number *"
              value={formData.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className={`w-full p-3 rounded-xl border text-xs bg-white text-[#2B211B] focus:outline-none transition-colors ${
                errors?.phone ? 'border-rose-500' : 'border-[#F5EBDD] focus:border-[#C96F32]'
              }`}
            />
            {errors?.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-white text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
            />
          </div>
        </div>

        {/* Optional Message */}
        <div>
          <textarea
            rows="2"
            placeholder="Personal message or dedication (Optional)..."
            value={formData.message}
            onChange={(e) => onChange('message', e.target.value)}
            className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-white text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
          ></textarea>
        </div>

        {/* Updates Checkbox */}
        <label className="flex items-start gap-2.5 text-xs text-[#6E6259] cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={formData.wantsUpdates}
            onChange={(e) => onChange('wantsUpdates', e.target.checked)}
            className="mt-0.5 rounded border-[#F5EBDD] text-[#C96F32] focus:ring-[#C96F32]"
          />
          <span>I would like to receive updates about the organization's community initiatives.</span>
        </label>
      </div>
    </div>
  );
}
