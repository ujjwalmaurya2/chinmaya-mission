import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function LocationMap() {
  const handleDirections = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(ORG_INFO.address)}`, '_blank');
  };

  return (
    <section id="location" className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Visit Campus</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Find Us in Prayagraj
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Conveniently located at the Chinmaya Mission Campus, Teliarganj, Prayagraj.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white border border-[#F5EBDD] rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Campus Location</h4>
                <p className="text-xs sm:text-sm text-[#6E6259] leading-relaxed mt-1">{ORG_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">OPD Consultation Hours</h4>
                <p className="text-xs sm:text-sm text-[#6E6259] leading-relaxed mt-1">{ORG_INFO.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Helpline & Inquiry</h4>
                <p className="text-xs sm:text-sm text-[#6E6259] leading-relaxed mt-1">
                  OPD Desk: <a href={`tel:${ORG_INFO.phone}`} className="font-bold text-[#C96F32] hover:underline">{ORG_INFO.phone}</a><br />
                  Urgent Assistance: <a href={`tel:${ORG_INFO.emergencyPhone}`} className="font-bold text-[#C96F32] hover:underline">{ORG_INFO.emergencyPhone}</a>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5EBDD] flex flex-wrap gap-4">
              <button
                onClick={handleDirections}
                className="btn-primary text-xs py-3 px-6"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Map Directions</span>
              </button>

              <a
                href={`tel:${ORG_INFO.phone}`}
                className="btn-secondary text-xs py-3 px-6"
              >
                <Phone className="w-4 h-4 text-[#C96F32]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right Map Visualizer */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden h-80 lg:h-[400px] border border-[#F5EBDD] bg-[#F5EBDD]">
            
            {/* Custom Styled Map Placeholder */}
            <div className="w-full h-full bg-[#F5EBDD] relative flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C96F32_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#C96F32]/20 max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#C96F32] text-white flex items-center justify-center mx-auto mb-2 font-serif font-bold animate-bounce">
                  📍
                </div>
                <h4 className="font-serif font-bold text-base text-[#2B211B]">Chinmaya Chikitsalaya</h4>
                <p className="text-xs text-[#6E6259] mt-1 mb-3">Teliarganj, Prayagraj • UP 211004</p>
                
                <button
                  onClick={handleDirections}
                  className="text-xs font-bold text-[#C96F32] flex items-center justify-center gap-1 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
