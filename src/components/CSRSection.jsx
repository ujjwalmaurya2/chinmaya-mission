import React, { useState } from 'react';
import { Building2, Handshake, ArrowRight, X, Mail } from 'lucide-react';

export default function CSRSection({ showToast }) {
  const [showCSREnquiry, setShowCSREnquiry] = useState(false);
  const [corporateForm, setCorporateForm] = useState({ company: '', contact: '', email: '', message: '' });

  const handleCSRSubmit = (e) => {
    e.preventDefault();
    setShowCSREnquiry(false);
    showToast('CSR partnership inquiry sent! Institutional relations team will respond within 48 hours.', 'success');
  };

  return (
    <section className="py-20 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-[#2B211B] via-[#3A2F28] to-[#2B211B] text-white rounded-3xl p-8 sm:p-14 border border-[rgba(201,111,50,0.3)] shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
              <Building2 className="w-3.5 h-3.5 text-[#C96F32]" />
              <span>CORPORATE & INSTITUTIONAL PARTNERSHIPS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Partner for Greater Impact.
            </h2>

            <p className="text-base sm:text-lg text-[#D1C5BA] font-light leading-relaxed mb-8">
              Organizations and CSR foundations can collaborate with Chinmaya Chikitsalaya Prayagraj to sponsor mobile medical vans, fund cataract surgery drives, build diagnostic capacity, or deliver regional community health awareness.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowCSREnquiry(true)}
                className="btn-primary py-3.5 px-8 text-sm"
              >
                <Handshake className="w-4 h-4" />
                <span>Submit CSR Enquiry</span>
              </button>

              <a
                href="#contact"
                className="btn-outline-white py-3.5 px-8 text-sm"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* CSR Modal */}
      {showCSREnquiry && (
        <div className="modal-overlay" onClick={() => setShowCSREnquiry(false)}>
          <div className="modal-content p-8 max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F5EBDD]">
              <h3 className="text-xl font-serif font-bold text-[#2B211B]">Corporate Partnership Enquiry</h3>
              <button onClick={() => setShowCSREnquiry(false)} className="p-1 rounded-full hover:bg-[#F5EBDD]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCSRSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2B211B] mb-1">Company / Organization Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Acme Enterprises Pvt Ltd"
                  value={corporateForm.company}
                  onChange={(e) => setCorporateForm({ ...corporateForm, company: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B211B] mb-1">Contact Person & Title *</label>
                <input
                  type="text"
                  required
                  placeholder="Manager - CSR & Sustainability"
                  value={corporateForm.contact}
                  onChange={(e) => setCorporateForm({ ...corporateForm, contact: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B211B] mb-1">Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="csr@company.com"
                  value={corporateForm.email}
                  onChange={(e) => setCorporateForm({ ...corporateForm, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B211B] mb-1">Partnership Interest</label>
                <textarea
                  rows="3"
                  placeholder="Describe your CSR focus or scope of proposed collaboration..."
                  value={corporateForm.message}
                  onChange={(e) => setCorporateForm({ ...corporateForm, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-xs justify-center font-bold">
                <Mail className="w-4 h-4" />
                <span>Submit CSR Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
