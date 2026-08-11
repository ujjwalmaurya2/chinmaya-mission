import React, { useState } from 'react';
import { Search, Calendar, Clock, Award, X, CheckCircle, UserCheck } from 'lucide-react';
import { DOCTORS } from '../data/organizationData';

export default function DoctorsSection({ onBookDoctor }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const departments = ['All', 'General Medicine', 'Pediatrics', 'Gynecology', 'Ophthalmology', 'Orthopedics'];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <section id="doctors" className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-badge mb-3">Expert Care</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Meet Our Medical Team
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Dedicated physicians and specialists serving Prayagraj with clinical excellence and compassion.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#F5EBDD] shadow-md mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6259]" />
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none focus:border-[#C96F32]"
            />
          </div>

          {/* Department Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedDept === dept
                    ? 'bg-[#C96F32] text-white shadow-sm'
                    : 'bg-[#FFF9F1] text-[#2B211B] border border-[#F5EBDD] hover:bg-[#F5EBDD]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

        </div>

        {/* Doctor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-[#F5EBDD] rounded-3xl overflow-hidden hover-card flex flex-col justify-between"
            >
              {/* Doctor Image Header */}
              <div className="relative h-64 overflow-hidden bg-[#2B211B]">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[#C96F32] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {doc.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-serif font-bold text-white mb-0.5">{doc.name}</h3>
                  <div className="text-xs text-amber-200 font-medium">{doc.title}</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A95724] mb-3">
                    <UserCheck className="w-4 h-4" />
                    <span>{doc.specialty}</span>
                  </div>

                  <div className="space-y-2 mb-6 text-xs text-[#6E6259]">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#C96F32] shrink-0" />
                      <span>{doc.qualification} • {doc.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C96F32] shrink-0" />
                      <span>Days: {doc.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C96F32] shrink-0" />
                      <span>Timing: {doc.timings}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#F5EBDD]">
                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="btn-secondary flex-1 text-xs py-2.5 px-3"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => onBookDoctor(doc)}
                    className="btn-primary flex-1 text-xs py-2.5 px-3"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content p-8 max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C96F32]">
                  <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C96F32]">{selectedDoctor.specialty}</span>
                  <h3 className="text-2xl font-serif font-bold text-[#2B211B]">{selectedDoctor.name}</h3>
                  <p className="text-xs text-[#6E6259]">{selectedDoctor.title}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="p-2 rounded-full hover:bg-[#F5EBDD] text-[#6E6259]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-8 text-xs text-[#2B211B]">
              <div className="p-4 rounded-2xl bg-[#FFF9F1] border border-[#F5EBDD]">
                <h4 className="font-bold text-sm text-[#2B211B] mb-2">Qualifications & Background:</h4>
                <p className="text-xs text-[#6E6259] leading-relaxed">{selectedDoctor.qualification} • {selectedDoctor.experience}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F1] border border-[#F5EBDD]">
                <h4 className="font-bold text-sm text-[#2B211B] mb-2">OPD Consultation Hours:</h4>
                <p className="text-xs text-[#6E6259]">Available Days: <strong className="text-[#2B211B]">{selectedDoctor.days}</strong></p>
                <p className="text-xs text-[#6E6259] mt-1">Timings: <strong className="text-[#2B211B]">{selectedDoctor.timings}</strong></p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F1] border border-[#F5EBDD]">
                <h4 className="font-bold text-sm text-[#2B211B] mb-2">Clinical Philosophy & Focus:</h4>
                <p className="text-xs text-[#6E6259] leading-relaxed">{selectedDoctor.bio}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#F5EBDD]">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="btn-secondary text-xs py-2.5 px-5"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const d = selectedDoctor;
                  setSelectedDoctor(null);
                  onBookDoctor(d);
                }}
                className="btn-primary text-xs py-2.5 px-5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment With {selectedDoctor.name.split(' ')[1]}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
