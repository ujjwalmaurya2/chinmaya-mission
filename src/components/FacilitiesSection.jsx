import React from 'react';
import { Building2, Stethoscope, Pill, ShieldCheck, Heart } from 'lucide-react';

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Outpatient Consultation Chambers",
      desc: "Private, clean, and well-equipped physician chambers designed for compassionate doctor-patient dialogue.",
      image: "/images/modern_clinic_facility.jpg"
    },
    {
      title: "Subsidized Pharmacy Counter",
      desc: "In-house dispensing counter offering WHO-certified essential medicines at fair, subsidized rates.",
      image: "/images/hero_doctor_patient.jpg"
    },
    {
      title: "Diagnostic & ECG Assessment",
      desc: "On-site blood sampling point and 12-lead ECG diagnostic station for rapid clinical evaluations.",
      image: "/images/modern_clinic_facility.jpg"
    },
    {
      title: "Patient & Family Waiting Lounge",
      desc: "Comfortable, warm-lit, air-cooled waiting lounge equipped with clean drinking water and patient assistance.",
      image: "/images/community_camp_seva.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Campus Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Our Healthcare Facilities
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Designed to ensure patient comfort, hygiene, safety, and efficient medical care.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-[#F5EBDD] overflow-hidden hover-card flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden bg-[#2B211B]">
                <img 
                  src={f.image} 
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2B211B] mb-2">{f.title}</h3>
                  <p className="text-xs text-[#6E6259] leading-relaxed">{f.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5EBDD] flex items-center gap-1.5 text-[11px] text-[#A95724] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C96F32]" />
                  <span>Maintained to Hygiene Standards</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
