import React, { useState } from 'react';
import { HeartHandshake, Stethoscope, Users, Send, CheckCircle } from 'lucide-react';

export default function VolunteerSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'General Volunteer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Volunteer application submitted successfully! Our team will get in touch.', 'success');
  };

  const volunteerTypes = [
    {
      icon: HeartHandshake,
      title: "Community Volunteer",
      desc: "Assist in organizing rural health camps, patient logistics, and awareness drives."
    },
    {
      icon: Stethoscope,
      title: "Medical Volunteer",
      desc: "Doctors, nurses, and medical students providing clinical support during camps."
    },
    {
      icon: Users,
      title: "Community Partner",
      desc: "Institutions, schools, and NGOs collaborating for local healthcare outreach."
    }
  ];

  return (
    <section id="volunteer" className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Join The Movement</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Be Part of the Seva
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Share your time, skills, or medical expertise to help serve Prayagraj.
          </p>
        </div>

        {/* 3 Role Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {volunteerTypes.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#F5EBDD] p-8 rounded-3xl hover-card text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF9F1] text-[#C96F32] border border-[#F5EBDD] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#2B211B] mb-2">{v.title}</h3>
                <p className="text-xs text-[#6E6259] leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Volunteer Form */}
        <div className="max-w-2xl mx-auto bg-white border border-[#F5EBDD] p-8 sm:p-12 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-[#2B211B] mb-2 text-center">
            Become a Volunteer
          </h3>
          <p className="text-xs text-[#6E6259] text-center mb-8">
            Fill out your contact details and our volunteer coordinator will reach out to you.
          </p>

          {submitted ? (
            <div className="text-center py-8 bg-[#E8F4EC] rounded-2xl border border-[#2E6F40]/20 p-6 animate-fade-up">
              <CheckCircle className="w-12 h-12 text-[#2E6F40] mx-auto mb-3" />
              <h4 className="font-serif font-bold text-lg text-[#2B211B]">Application Received!</h4>
              <p className="text-xs text-[#6E6259] mt-2">
                Thank you, <strong>{formData.name}</strong>, for offering your spirit of Seva. We will contact you at {formData.phone || formData.email}.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', interest: 'General Volunteer', message: '' }); }}
                className="btn-secondary text-xs py-2 px-4 mt-4"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2B211B] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B211B] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2B211B] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B211B] mb-1">Area of Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                  >
                    <option value="General Volunteer">General Volunteer</option>
                    <option value="Medical Specialist / Doctor">Medical Specialist / Doctor</option>
                    <option value="Nursing & Paramedical">Nursing & Paramedical</option>
                    <option value="Community Event Coordinator">Community Event Coordinator</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B211B] mb-1">Message / Availability</label>
                <textarea
                  rows="3"
                  placeholder="Tell us briefly about your availability or skills..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-xs justify-center font-bold">
                <Send className="w-4 h-4" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
