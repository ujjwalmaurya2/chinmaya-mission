import React, { useState } from 'react';
import { 
  X, Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, 
  Download, CalendarPlus, ShieldAlert, Sparkles 
} from 'lucide-react';
import { DOCTORS, SERVICES, ORG_INFO } from '../data/organizationData';

export default function AppointmentModal({ isOpen, onClose, initialDoctor, initialService, showToast }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService?.name || SERVICES[0].name);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor?.name || DOCTORS[0].name);
  const [selectedDate, setSelectedDate] = useState('2026-08-15');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  
  const [patientData, setPatientData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    notes: ''
  });

  const [appointmentId, setAppointmentId] = useState('');

  if (!isOpen) return null;

  const timeSlots = ['09:30 AM', '10:30 AM', '11:30 AM', '04:00 PM', '05:00 PM', '06:00 PM'];

  const handleNextStep = () => {
    if (step === 4) {
      if (!patientData.name || !patientData.phone) {
        showToast('Please enter your Name and Phone Number to proceed.', 'error');
        return;
      }
      const randomId = 'CC-PRY-' + Math.floor(10000 + Math.random() * 90000);
      setAppointmentId(randomId);
      setStep(5);
      showToast('Appointment request generated (Demo)!', 'success');
    } else {
      setStep(step + 1);
    }
  };

  const handleDownloadReceipt = () => {
    const text = `====================================
CHINMAYA CHIKITSALAYA — PRAYAGRAJ
APPOINTMENT DEMO CONFIRMATION
====================================
Appointment ID: ${appointmentId}
Patient Name  : ${patientData.name}
Phone         : ${patientData.phone}
Doctor        : ${selectedDoctor}
Service       : ${selectedService}
Date & Time   : ${selectedDate} at ${selectedTime}
Location      : Chinmaya Mission Campus, Teliarganj, Prayagraj
Helpline      : ${ORG_INFO.phone}

* Note: This is a frontend pitch demo confirmation.
====================================`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${appointmentId}_Confirmation.txt`;
    a.click();
    showToast('Confirmation receipt downloaded!', 'info');
  };

  const handleAddToCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Chinmaya Chikitsalaya Prayagraj//NONSGML v1.0//EN
BEGIN:VEVENT
SUMMARY:Doctor Appointment: ${selectedDoctor}
DESCRIPTION:Service: ${selectedService}. Location: Chinmaya Chikitsalaya, Prayagraj. Appointment ID: ${appointmentId}
LOCATION:Chinmaya Mission Campus, Teliarganj, Prayagraj
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Appointment_${appointmentId}.ics`;
    a.click();
    showToast('Calendar event file generated!', 'info');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content p-6 sm:p-8 max-w-2xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F5EBDD] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white p-1 flex items-center justify-center shadow-sm border border-[#C96F32]/30 overflow-hidden shrink-0">
              <img src="/images/chinmaya_logo.png" alt="Chinmaya Mission Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A95724]">OPD Consultation Scheduler</span>
              <h3 className="text-xl font-serif font-bold text-[#2B211B]">Book Your Appointment</h3>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#F5EBDD] text-[#6E6259]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {step < 5 && (
          <div className="flex items-center justify-between mb-8 px-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s 
                    ? 'bg-[#C96F32] text-white shadow-md' 
                    : step > s 
                    ? 'bg-[#2E6F40] text-white' 
                    : 'bg-[#F5EBDD] text-[#6E6259]'
                }`}>
                  {step > s ? '✓' : s}
                </div>
                <span className={`text-xs font-semibold hidden sm:inline ${step === s ? 'text-[#2B211B]' : 'text-[#6E6259]'}`}>
                  {s === 1 ? 'Service' : s === 2 ? 'Doctor' : s === 3 ? 'Date & Time' : 'Patient'}
                </span>
                {s < 4 && <div className="w-8 sm:w-12 h-px bg-[#F5EBDD]" />}
              </div>
            ))}
          </div>
        )}

        {/* STEP 1: CHOOSE SERVICE */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-up">
            <h4 className="text-sm font-bold text-[#2B211B] mb-2">STEP 1: Select Required Healthcare Service</h4>
            <div className="grid sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedService === srv.name
                      ? 'bg-[#FFF9F1] border-[#C96F32] shadow-md'
                      : 'bg-white border-[#F5EBDD] hover:bg-[#F5EBDD]/40'
                  }`}
                >
                  <h5 className="font-serif font-bold text-sm text-[#2B211B]">{srv.name}</h5>
                  <p className="text-xs text-[#6E6259] mt-1 line-clamp-2">{srv.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: CHOOSE DOCTOR */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-up">
            <h4 className="text-sm font-bold text-[#2B211B] mb-2">STEP 2: Select Consulting Physician</h4>
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              {DOCTORS.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoctor(doc.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedDoctor === doc.name
                      ? 'bg-[#FFF9F1] border-[#C96F32] shadow-md'
                      : 'bg-white border-[#F5EBDD] hover:bg-[#F5EBDD]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C96F32] shrink-0">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-sm text-[#2B211B]">{doc.name}</h5>
                      <span className="text-xs text-[#A95724] font-medium">{doc.specialty}</span>
                      <p className="text-[11px] text-[#6E6259] mt-0.5">{doc.timings}</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedDoctor === doc.name ? 'border-[#C96F32] bg-[#C96F32] text-white' : 'border-gray-300'}`}>
                    {selectedDoctor === doc.name && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: CHOOSE DATE & TIME */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h4 className="text-sm font-bold text-[#2B211B] mb-2">STEP 3: Select Date & Time Slot</h4>
              <label className="block text-xs font-semibold text-[#6E6259] mb-1">Preferred Consultation Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#6E6259] mb-2">Available Timing Slot:</label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 rounded-xl text-xs font-semibold border transition-all ${
                      selectedTime === slot
                        ? 'bg-[#C96F32] text-white border-[#C96F32] shadow-sm'
                        : 'bg-white text-[#2B211B] border-[#F5EBDD] hover:bg-[#F5EBDD]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: PATIENT DETAILS */}
        {step === 4 && (
          <div className="space-y-4 animate-fade-up">
            <h4 className="text-sm font-bold text-[#2B211B] mb-2">STEP 4: Patient Contact Information</h4>
            
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2B211B] mb-1">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={patientData.name}
                  onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B211B] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={patientData.phone}
                  onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2B211B] mb-1">Age</label>
                <input
                  type="number"
                  placeholder="e.g. 45"
                  value={patientData.age}
                  onChange={(e) => setPatientData({ ...patientData, age: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B211B] mb-1">Gender</label>
                <select
                  value={patientData.gender}
                  onChange={(e) => setPatientData({ ...patientData, gender: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B211B] mb-1">Email (Optional)</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={patientData.email}
                  onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2B211B] mb-1">Symptoms / Notes (Optional)</label>
              <textarea
                rows="2"
                placeholder="Briefly describe health concerns..."
                value={patientData.notes}
                onChange={(e) => setPatientData({ ...patientData, notes: e.target.value })}
                className="w-full p-3 rounded-xl border border-[#F5EBDD] bg-[#FFF9F1] text-xs text-[#2B211B] focus:outline-none"
              ></textarea>
            </div>
          </div>
        )}

        {/* STEP 5: CONFIRMATION SCREEN */}
        {step === 5 && (
          <div className="text-center py-6 animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-[#E8F4EC] text-[#2E6F40] flex items-center justify-center mx-auto mb-4 border border-[#2E6F40]/30 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#E8F4EC] text-[#2E6F40] mb-2 inline-block">
              Demo Request Generated
            </span>

            <h3 className="text-2xl font-serif font-bold text-[#2B211B] mb-2">
              Appointment Request Submitted
            </h3>

            <p className="text-xs text-[#6E6259] max-w-md mx-auto mb-6">
              Your appointment booking preview is confirmed for <strong>Chinmaya Chikitsalaya — Prayagraj</strong>.
            </p>

            {/* Receipt Summary Box */}
            <div className="bg-[#FFF9F1] border border-[#F5EBDD] p-6 rounded-2xl text-left max-w-md mx-auto space-y-2 text-xs text-[#2B211B] mb-8">
              <div className="flex justify-between border-b border-[#F5EBDD] pb-2">
                <span className="text-[#6E6259]">Appointment ID:</span>
                <strong className="font-mono text-[#C96F32]">{appointmentId}</strong>
              </div>
              <div className="flex justify-between"><span>Patient Name:</span> <strong>{patientData.name}</strong></div>
              <div className="flex justify-between"><span>Consulting Doctor:</span> <strong>{selectedDoctor}</strong></div>
              <div className="flex justify-between"><span>Service Department:</span> <strong>{selectedService}</strong></div>
              <div className="flex justify-between"><span>Scheduled Date:</span> <strong>{selectedDate} ({selectedTime})</strong></div>
              <div className="flex justify-between"><span>Campus Location:</span> <strong>Teliarganj, Prayagraj</strong></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button onClick={handleAddToCalendar} className="btn-secondary text-xs py-2.5 px-4">
                <CalendarPlus className="w-4 h-4 text-[#C96F32]" />
                <span>Add to Calendar</span>
              </button>

              <button onClick={handleDownloadReceipt} className="btn-primary text-xs py-2.5 px-4">
                <Download className="w-4 h-4" />
                <span>Download Confirmation</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Bottom Controls */}
        {step < 5 && (
          <div className="flex items-center justify-between pt-6 border-t border-[#F5EBDD] mt-6">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="btn-secondary text-xs py-2.5 px-4">
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button onClick={handleNextStep} className="btn-primary text-xs py-2.5 px-6">
              <span>{step === 4 ? 'Confirm & Generate Booking' : 'Continue Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
