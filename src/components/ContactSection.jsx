import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function ContactSection({ showToast }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent to Chinmaya Chikitsalaya reception team!', 'success');
  };

  return (
    <section id="contact" className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            We’re Here to Help.
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Have questions about our OPD schedules, diagnostic tests, or community health camps? Write to us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#F5EBDD] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Phone & Helpline</h4>
                <p className="text-xs text-[#6E6259] mt-1">{ORG_INFO.phone}</p>
                <p className="text-xs text-[#6E6259] mt-0.5">Emergency: {ORG_INFO.emergencyPhone}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F5EBDD] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Email Address</h4>
                <p className="text-xs text-[#6E6259] mt-1">{ORG_INFO.email}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F5EBDD] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Hospital Campus</h4>
                <p className="text-xs text-[#6E6259] mt-1 leading-relaxed">{ORG_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#F5EBDD] shadow-lg">
            {submitted ? (
              <div className="text-center py-10 bg-[#E8F4EC] rounded-2xl border border-[#2E6F40]/20 p-6 animate-fade-up">
                <CheckCircle className="w-12 h-12 text-[#2E6F40] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-xl text-[#2B211B]">Message Sent Successfully!</h3>
                <p className="text-xs text-[#6E6259] mt-2 mb-6">
                  Thank you, <strong>{form.name}</strong>. Our OPD front desk will review your message and reply via email ({form.email}) or phone ({form.phone}).
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' }); }}
                  className="btn-secondary text-xs py-2 px-5"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2B211B] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2B211B] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2B211B] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2B211B] mb-1">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Doctor Appointment Clarification">Doctor Appointment Clarification</option>
                      <option value="Diagnostic Lab Inquiry">Diagnostic Lab Inquiry</option>
                      <option value="Community Health Camp Request">Community Health Camp Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B211B] mb-1">Your Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Write your question or request here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-xs font-bold justify-center">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
