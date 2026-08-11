import React, { useState } from 'react';
import { 
  Stethoscope, UserCheck, ShieldAlert, Activity, Pill, HeartHandshake, 
  ArrowRight, CheckCircle, X, Calendar 
} from 'lucide-react';
import { SERVICES } from '../data/organizationData';

const iconMap = {
  Stethoscope,
  UserCheck,
  ShieldHeart: ShieldAlert,
  Activity,
  Pill,
  HeartHandshake
};

export default function ServicesSection({ onBookService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', 'Primary Care', 'Specialist Care', 'Wellness', 'Diagnostics', 'Medicines', 'Community Outreach'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-badge mb-3">Clinical Capabilities</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Healthcare Services
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Care designed around the needs of every patient and family.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#C96F32] text-white shadow-md'
                  : 'bg-[#F5EBDD]/60 text-[#2B211B] hover:bg-[#F5EBDD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;
            return (
              <div
                key={service.id}
                className="group bg-white border border-[#F5EBDD] rounded-3xl p-8 hover-card flex flex-col justify-between relative overflow-hidden"
              >
                {/* Expanding Accent Line */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-[#C96F32] transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF9F1] text-[#C96F32] border border-[#F5EBDD] flex items-center justify-center group-hover:bg-[#C96F32] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-7 h-7 transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5EBDD]/60 text-[#A95724]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2B211B] mb-3 group-hover:text-[#C96F32] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#6E6259] leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-[#C96F32] flex items-center gap-1.5 pt-4 border-t border-[#F5EBDD]/60 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F5EBDD]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center font-bold">
                  🕉️
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A95724]">{selectedService.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-[#2B211B]">{selectedService.name}</h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-[#F5EBDD] text-[#6E6259]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#6E6259] mb-6 leading-relaxed">
              {selectedService.shortDesc}
            </p>

            <h4 className="text-sm font-bold text-[#2B211B] mb-3">Key Features & Included Coverage:</h4>
            <div className="space-y-2 mb-8">
              {selectedService.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2B211B]">
                  <CheckCircle className="w-4 h-4 text-[#C96F32] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F5EBDD]">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary text-xs py-2.5 px-5"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onBookService(s);
                }}
                className="btn-primary text-xs py-2.5 px-5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
