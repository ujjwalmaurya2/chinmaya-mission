import React from 'react';
import { Calendar, UserSearch, MapPin, PhoneCall, ArrowUpRight } from 'lucide-react';

export default function QuickActions({ onOpenAppointment, onScrollToDoctors, onScrollToLocation, onScrollToContact }) {
  const actions = [
    {
      title: "Book Appointment",
      desc: "Find the right care and schedule a consultation with our medical specialists.",
      icon: Calendar,
      action: onOpenAppointment,
      cta: "Schedule Now"
    },
    {
      title: "Find a Doctor",
      desc: "Explore experienced physicians, consultants, and OPD timings.",
      icon: UserSearch,
      action: onScrollToDoctors,
      cta: "View Medical Team"
    },
    {
      title: "Get Directions",
      desc: "Find Chinmaya Chikitsalaya campus in Teliarganj, Prayagraj.",
      icon: MapPin,
      action: onScrollToLocation,
      cta: "View Map & Hours"
    },
    {
      title: "Contact Us",
      desc: "Speak directly with our OPD reception & helpline team.",
      icon: PhoneCall,
      action: onScrollToContact,
      cta: "Reach Our Team"
    }
  ];

  return (
    <section className="py-16 bg-[#FFF9F1]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-badge mb-3">Instant Access</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B]">
            How Can We Assist You Today?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={item.action}
                className="group relative bg-[#FFFFFF] border border-[#F5EBDD] rounded-3xl p-7 cursor-pointer hover-card flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C96F32] to-[#A95724] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF9F1] text-[#C96F32] border border-[#F5EBDD] flex items-center justify-center group-hover:bg-[#C96F32] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#F5EBDD]/60 text-[#2B211B] flex items-center justify-center group-hover:bg-[#C96F32] group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2B211B] mb-2 group-hover:text-[#C96F32] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6E6259] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="text-xs font-bold text-[#C96F32] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{item.cta}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
