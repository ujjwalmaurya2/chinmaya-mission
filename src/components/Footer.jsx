import React from 'react';
import { Heart, Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B211B] text-[#FFF9F1] pt-20 pb-12 border-t border-[rgba(201,111,50,0.3)]">
      <div className="container-custom">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 pb-16 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1.5 flex items-center justify-center shadow-md border border-white/20 overflow-hidden shrink-0">
                <img src="/images/chinmaya_logo.png" alt="Chinmaya Mission Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">CHINMAYA CHIKITSALAYA</h3>
                <p className="text-xs uppercase tracking-widest text-amber-300">Prayagraj • Uttar Pradesh</p>
              </div>
            </div>

            <p className="text-xs text-[#D1C5BA] leading-relaxed max-w-sm font-light">
              Healthcare rooted in compassion, dignity and a spirit of service. Serving Prayagraj with outpatient OPD consultations, diagnostic evaluation, and free rural health camps.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-amber-200 font-semibold">
              <span>Part of the Chinmaya Mission ecosystem</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#D1C5BA]">
              <li><a href="#hero" className="hover:text-[#C96F32] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C96F32] transition-colors">About Institution</a></li>
              <li><a href="#services" className="hover:text-[#C96F32] transition-colors">Clinical Services</a></li>
              <li><a href="#doctors" className="hover:text-[#C96F32] transition-colors">Doctor Directory</a></li>
              <li><a href="#community" className="hover:text-[#C96F32] transition-colors">Community Seva</a></li>
              <li><a href="#wellness" className="hover:text-[#C96F32] transition-colors">Health & Wellness</a></li>
            </ul>
          </div>

          {/* Col 4: Seva & Engagement */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-4 uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2.5 text-xs text-[#D1C5BA]">
              <li><a href="#donate" className="hover:text-[#C96F32] transition-colors">Support / Donate</a></li>
              <li><a href="#volunteer" className="hover:text-[#C96F32] transition-colors">Volunteer Program</a></li>
              <li><a href="#impact" className="hover:text-[#C96F32] transition-colors">Our Seva Impact</a></li>
              <li><button onClick={onOpenAppointment} className="text-[#C96F32] hover:underline font-semibold">Book Appointment</button></li>
              <li><a href="#location" className="hover:text-[#C96F32] transition-colors">Location & Map</a></li>
              <li><a href="#contact" className="hover:text-[#C96F32] transition-colors">Contact OPD Desk</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-4 uppercase tracking-wider">Helpline</h4>
            <div className="space-y-3 text-xs text-[#D1C5BA]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C96F32]" />
                <span>{ORG_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C96F32]" />
                <span>{ORG_INFO.email}</span>
              </p>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#C96F32] shrink-0 mt-0.5" />
                <span>Teliarganj, Prayagraj, UP 211004</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D1C5BA]">
          <div>
            © {new Date().getFullYear()} Chinmaya Chikitsalaya — Prayagraj. Demo / Pitch Platform.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white">Terms of Care</a>
            <a href="#accessibility" onClick={(e) => e.preventDefault()} className="hover:text-white">Accessibility</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#C96F32] transition-colors flex items-center gap-1 text-[11px]"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
