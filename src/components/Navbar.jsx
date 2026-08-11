import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Calendar, Menu, X, ChevronDown, ArrowRight, Stethoscope, 
  UserCheck, HeartHandshake, BookOpen, Activity, Users, ShieldCheck, 
  Plus, Minus, Award, Heart, Sparkles, Building2
} from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(null);

  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: ESC key closes open dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (name) => {
    if (name === 'Home') {
      clearTimeout(hoverTimeoutRef.current);
      setActiveDropdown(null);
      return;
    }
    clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleNavClick = (href) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileAccordion = (name) => {
    setMobileAccordionOpen(mobileAccordionOpen === name ? null : name);
  };

  return (
    <>
      {/* Background Subtle Overlay when Mega Menu is Open */}
      {activeDropdown && (
        <div 
          className="hidden lg:block fixed inset-0 z-40 bg-[#2B211B]/5 transition-opacity duration-300 pointer-events-none" 
        />
      )}

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || activeDropdown ? 'nav-glass py-3' : 'nav-transparent py-5 text-white'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-custom flex items-center justify-between relative">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} 
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-11 h-11 rounded-full bg-white p-1.5 flex items-center justify-center shadow-md border border-[#C96F32]/30 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img src="/images/chinmaya_logo.png" alt="Chinmaya Mission Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className={`font-serif font-bold text-lg leading-tight tracking-tight ${scrolled || activeDropdown ? 'text-[#2B211B]' : 'text-white'}`}>
                CHINMAYA CHIKITSALAYA
              </div>
              <div className={`text-xs font-semibold uppercase tracking-widest ${scrolled || activeDropdown ? 'text-[#A95724]' : 'text-[#FFF9F1] opacity-90'}`}>
                Prayagraj • Seva & Care
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            
            {/* HOME */}
            <a
              href="#hero"
              onMouseEnter={() => handleMouseEnter('Home')}
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className={`relative py-2 text-sm font-medium transition-colors hover:text-[#C96F32] ${
                scrolled || activeDropdown ? 'text-[#2B211B]' : 'text-[#FFF9F1]'
              }`}
            >
              <span>Home</span>
            </a>

            {/* ABOUT */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('About')}
            >
              <button
                onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'About' ? 'text-[#C96F32]' : (scrolled || activeDropdown ? 'text-[#2B211B] hover:text-[#C96F32]' : 'text-[#FFF9F1] hover:text-white')
                }`}
                aria-expanded={activeDropdown === 'About'}
                aria-haspopup="true"
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'About' ? 'rotate-180 text-[#C96F32]' : ''}`} />
              </button>

              {/* Active Indicator Line */}
              {activeDropdown === 'About' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96F32] rounded-full animate-fade-up" />
              )}
            </div>

            {/* SERVICES */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('Services')}
            >
              <button
                onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'Services' ? 'text-[#C96F32]' : (scrolled || activeDropdown ? 'text-[#2B211B] hover:text-[#C96F32]' : 'text-[#FFF9F1] hover:text-white')
                }`}
                aria-expanded={activeDropdown === 'Services'}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'Services' ? 'rotate-180 text-[#C96F32]' : ''}`} />
              </button>

              {activeDropdown === 'Services' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96F32] rounded-full animate-fade-up" />
              )}
            </div>

            {/* DOCTORS */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('Doctors')}
            >
              <button
                onClick={(e) => { e.preventDefault(); handleNavClick('#doctors'); }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'Doctors' ? 'text-[#C96F32]' : (scrolled || activeDropdown ? 'text-[#2B211B] hover:text-[#C96F32]' : 'text-[#FFF9F1] hover:text-white')
                }`}
                aria-expanded={activeDropdown === 'Doctors'}
                aria-haspopup="true"
              >
                <span>Doctors</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'Doctors' ? 'rotate-180 text-[#C96F32]' : ''}`} />
              </button>

              {activeDropdown === 'Doctors' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96F32] rounded-full animate-fade-up" />
              )}
            </div>

            {/* COMMUNITY */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('Community')}
            >
              <button
                onClick={(e) => { e.preventDefault(); handleNavClick('#community'); }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'Community' ? 'text-[#C96F32]' : (scrolled || activeDropdown ? 'text-[#2B211B] hover:text-[#C96F32]' : 'text-[#FFF9F1] hover:text-white')
                }`}
                aria-expanded={activeDropdown === 'Community'}
                aria-haspopup="true"
              >
                <span>Community</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'Community' ? 'rotate-180 text-[#C96F32]' : ''}`} />
              </button>

              {activeDropdown === 'Community' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96F32] rounded-full animate-fade-up" />
              )}
            </div>

            {/* HEALTH & WELLNESS */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('Health & Wellness')}
            >
              <button
                onClick={(e) => { e.preventDefault(); handleNavClick('#wellness'); }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'Health & Wellness' ? 'text-[#C96F32]' : (scrolled || activeDropdown ? 'text-[#2B211B] hover:text-[#C96F32]' : 'text-[#FFF9F1] hover:text-white')
                }`}
                aria-expanded={activeDropdown === 'Health & Wellness'}
                aria-haspopup="true"
              >
                <span>Health & Wellness</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'Health & Wellness' ? 'rotate-180 text-[#C96F32]' : ''}`} />
              </button>

              {activeDropdown === 'Health & Wellness' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96F32] rounded-full animate-fade-up" />
              )}
            </div>

            {/* OUR IMPACT */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('Our Impact')}
            >
              <button
                onClick={(e) => { e.preventDefault(); handleNavClick('#impact'); }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'Our Impact' ? 'text-[#C96F32]' : (scrolled || activeDropdown ? 'text-[#2B211B] hover:text-[#C96F32]' : 'text-[#FFF9F1] hover:text-white')
                }`}
                aria-expanded={activeDropdown === 'Our Impact'}
                aria-haspopup="true"
              >
                <span>Our Impact</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'Our Impact' ? 'rotate-180 text-[#C96F32]' : ''}`} />
              </button>

              {activeDropdown === 'Our Impact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96F32] rounded-full animate-fade-up" />
              )}
            </div>

          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${ORG_INFO.phone}`}
              className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border transition-all ${
                scrolled || activeDropdown 
                  ? 'text-[#6E6259] border-[rgba(201,111,50,0.2)] hover:text-[#C96F32] hover:border-[#C96F32]' 
                  : 'text-[#FFF9F1] border-white/20 hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C96F32]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="btn-primary"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled || activeDropdown ? 'text-[#2B211B] hover:bg-[#F5EBDD]' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* =================================================================== */}
        {/* DESKTOP MEGA MENU / DROPDOWN PANELS CONTAINER */}
        {/* =================================================================== */}
        {activeDropdown && (
          <div 
            className="hidden lg:block absolute left-0 right-0 top-full pt-2 animate-fade-up"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container-custom">
              <div className="bg-[#FFF9F1] border border-[#F5EBDD] rounded-3xl shadow-2xl p-8 backdrop-blur-xl border-l-4 border-l-[#C96F32] relative overflow-hidden">
                
                {/* Subtle Decorative Mandala Accent in Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#C96F32]/10 to-transparent pointer-events-none rounded-full blur-xl" />

                {/* 1. ABOUT DROPDOWN */}
                {activeDropdown === 'About' && (
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-7 space-y-4">
                      <div className="border-l-2 border-[#C96F32] pl-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A95724]">About Us</span>
                        <h3 className="text-xl font-serif font-bold text-[#2B211B]">About Chinmaya Chikitsalaya</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {[
                          { title: 'About Us', href: '#about', desc: 'Our institution background' },
                          { title: 'Our Story', href: '#about', desc: 'Journey of healthcare Seva' },
                          { title: 'Our Mission', href: '#mission', desc: 'Inspired by Chinmaya Mission' },
                          { title: 'Chinmaya Mission', href: '#mission', desc: 'Global spiritual & Seva ecosystem' },
                          { title: 'Our Values', href: '#about', desc: 'Seva, Karuna & Dignity' },
                          { title: 'Leadership', href: '#about', desc: 'Medical governance & trust' }
                        ].map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="group p-3 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] hover:shadow-sm transition-all"
                          >
                            <div className="font-bold text-[#2B211B] group-hover:text-[#C96F32] transition-colors flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="text-[11px] text-[#6E6259] mt-0.5">{item.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 bg-white p-6 rounded-3xl border border-[#F5EBDD] shadow-sm text-center">
                      <div className="w-12 h-12 rounded-full bg-[#F7E6D7] text-[#C96F32] flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-6 h-6 fill-[#C96F32]" />
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#2B211B] mb-2">Serving Prayagraj</h4>
                      <p className="text-xs text-[#6E6259] leading-relaxed mb-4">
                        Rooted in selflessness and healthcare dignity for every individual.
                      </p>
                      <a
                        href="#about"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
                        className="btn-secondary text-xs py-2 px-4 w-full justify-center"
                      >
                        <span>Discover Our Story</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* 2. SERVICES MEGA MENU */}
                {activeDropdown === 'Services' && (
                  <div>
                    <div className="border-l-2 border-[#C96F32] pl-3 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#A95724]">Healthcare</span>
                      <h3 className="text-xl font-serif font-bold text-[#2B211B]">Healthcare Services</h3>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                      <div className="col-span-4 space-y-2">
                        <div className="text-xs font-bold uppercase text-[#A95724] mb-2">Clinical Consultation</div>
                        {[
                          { title: 'General Consultation', icon: Stethoscope, desc: 'Outpatient OPD care' },
                          { title: 'Specialist Consultation', icon: UserCheck, desc: 'Pediatrics, Gynec & Eye care' },
                          { title: 'Preventive Healthcare', icon: ShieldCheck, desc: 'Early screening packages' },
                          { title: 'Health Checkups', icon: Activity, desc: 'Comprehensive profiles' }
                        ].map((s, idx) => {
                          const Icon = s.icon;
                          return (
                            <a
                              key={idx}
                              href="#services"
                              onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                              className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#FFF9F1] text-[#C96F32] flex items-center justify-center shrink-0 group-hover:bg-[#C96F32] group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-[#2B211B] group-hover:text-[#C96F32]">{s.title}</div>
                                <div className="text-[10px] text-[#6E6259]">{s.desc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      <div className="col-span-4 space-y-2">
                        <div className="text-xs font-bold uppercase text-[#A95724] mb-2">Diagnostics & Outreach</div>
                        {[
                          { title: 'Diagnostic Services', icon: Activity, desc: 'Pathology & ECG testing' },
                          { title: 'Subsidized Pharmacy', icon: ShieldCheck, desc: 'Fair rate essential medicines' },
                          { title: 'Community Healthcare', icon: HeartHandshake, desc: 'Free rural medical camps' },
                          { title: 'Health Awareness', icon: Sparkles, desc: 'Preventive health drives' }
                        ].map((s, idx) => {
                          const Icon = s.icon;
                          return (
                            <a
                              key={idx}
                              href="#services"
                              onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                              className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#FFF9F1] text-[#C96F32] flex items-center justify-center shrink-0 group-hover:bg-[#C96F32] group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-[#2B211B] group-hover:text-[#C96F32]">{s.title}</div>
                                <div className="text-[10px] text-[#6E6259]">{s.desc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      <div className="col-span-4 bg-[#F7E6D7]/40 p-6 rounded-3xl border border-[#C96F32]/20 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-[#C96F32]">Featured Initiative</span>
                          <h4 className="font-serif font-bold text-base text-[#2B211B] mt-1 mb-2">Find the Right Care</h4>
                          <p className="text-xs text-[#6E6259] leading-relaxed mb-4">
                            Explore healthcare services designed around the needs of our Prayagraj community.
                          </p>
                        </div>
                        <a
                          href="#services"
                          onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                          className="btn-primary text-xs py-2.5 px-4 justify-center"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. DOCTORS DROPDOWN */}
                {activeDropdown === 'Doctors' && (
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-7 space-y-4">
                      <div className="border-l-2 border-[#C96F32] pl-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A95724]">Medical Team</span>
                        <h3 className="text-xl font-serif font-bold text-[#2B211B]">Find a Doctor</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {[
                          { title: 'Search Doctors', href: '#doctors', desc: 'Filter by specialty & name' },
                          { title: 'General Medicine', href: '#doctors', desc: 'Primary adult care physicians' },
                          { title: 'Pediatric Specialists', href: '#doctors', desc: 'Child health & immunizations' },
                          { title: 'Gynecology & Women', href: '#doctors', desc: 'Maternal health care' },
                          { title: 'Ophthalmology', href: '#doctors', desc: 'Eye care & vision screening' },
                          { title: 'Doctor Timings', href: '#doctors', desc: 'Mon - Sat OPD hours' }
                        ].map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="group p-3 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all"
                          >
                            <div className="font-bold text-[#2B211B] group-hover:text-[#C96F32] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="text-[11px] text-[#6E6259] mt-0.5">{item.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 bg-white p-6 rounded-3xl border border-[#F5EBDD] shadow-sm text-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[#C96F32]">
                        <img src="/images/hero_doctor_patient.jpg" alt="Doctor Consultation" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#2B211B] mb-1">Experienced Practitioners</h4>
                      <p className="text-xs text-[#6E6259] mb-4">Schedule a consultation with our medical specialists.</p>
                      <button
                        onClick={() => { setActiveDropdown(null); onOpenAppointment(); }}
                        className="btn-primary text-xs py-2.5 px-4 w-full justify-center"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book an Appointment</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. COMMUNITY MEGA MENU */}
                {activeDropdown === 'Community' && (
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-7 space-y-4">
                      <div className="border-l-2 border-[#C96F32] pl-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A95724]">Community & Seva</span>
                        <h3 className="text-xl font-serif font-bold text-[#2B211B]">Serving Beyond Our Walls</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {[
                          { title: 'Medical Camps', href: '#community', desc: 'Free rural multi-specialty camps' },
                          { title: 'Health Awareness', href: '#community', desc: 'Preventive health education' },
                          { title: 'Community Outreach', href: '#community', desc: 'Village vision & anemia drives' },
                          { title: 'Preventive Healthcare', href: '#community', desc: 'Screening & medicine distribution' },
                          { title: 'Volunteer With Us', href: '#volunteer', desc: 'Give your time & medical skills' },
                          { title: 'Community Stories', href: '#community', desc: 'Voices of gratitude from Prayagraj' }
                        ].map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="group p-3 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all"
                          >
                            <div className="font-bold text-[#2B211B] group-hover:text-[#C96F32] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="text-[11px] text-[#6E6259] mt-0.5">{item.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 bg-white rounded-3xl overflow-hidden border border-[#F5EBDD] shadow-sm flex flex-col justify-between">
                      <div className="h-32 overflow-hidden relative">
                        <img src="/images/community_camp_seva.jpg" alt="Community Health Camp" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white uppercase tracking-wider">Free Health Camps</span>
                      </div>
                      <div className="p-4 text-left">
                        <h4 className="font-serif font-bold text-sm text-[#2B211B]">Serving Underserved Families</h4>
                        <p className="text-[11px] text-[#6E6259] mt-1 mb-3">Free health consultations, diagnostics & medicines.</p>
                        <a
                          href="#community"
                          onClick={(e) => { e.preventDefault(); handleNavClick('#community'); }}
                          className="btn-secondary text-xs py-2 px-3 w-full justify-center"
                        >
                          <span>Explore Community Work</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. HEALTH & WELLNESS MEGA MENU */}
                {activeDropdown === 'Health & Wellness' && (
                  <div>
                    <div className="border-l-2 border-[#C96F32] pl-3 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#A95724]">Patient Education</span>
                      <h3 className="text-xl font-serif font-bold text-[#2B211B]">Health & Wellness</h3>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                      <div className="col-span-4 space-y-2">
                        <div className="text-xs font-bold uppercase text-[#A95724] mb-2">Core Wellness</div>
                        {['Preventive Care', 'Nutrition Guidance', "Women's Health", "Children's Health"].map((topic, idx) => (
                          <a
                            key={idx}
                            href="#wellness"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#wellness'); }}
                            className="group flex items-center justify-between p-2.5 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all text-xs font-bold text-[#2B211B] hover:text-[#C96F32]"
                          >
                            <span>{topic}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#C96F32]" />
                          </a>
                        ))}
                      </div>

                      <div className="col-span-4 space-y-2">
                        <div className="text-xs font-bold uppercase text-[#A95724] mb-2">Specialist Topics</div>
                        {['Senior Care', 'Diabetes Management', 'Heart Health', 'General Wellness'].map((topic, idx) => (
                          <a
                            key={idx}
                            href="#wellness"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#wellness'); }}
                            className="group flex items-center justify-between p-2.5 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all text-xs font-bold text-[#2B211B] hover:text-[#C96F32]"
                          >
                            <span>{topic}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#C96F32]" />
                          </a>
                        ))}
                      </div>

                      <div className="col-span-4 bg-white p-5 rounded-3xl border border-[#F5EBDD] shadow-sm flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-[#C96F32]">Featured Article</span>
                          <h4 className="font-serif font-bold text-sm text-[#2B211B] mt-1 mb-2">Small Steps. Better Health.</h4>
                          <p className="text-xs text-[#6E6259] leading-relaxed mb-3">
                            Managing Blood Pressure Naturally Through Diet & Pranayama.
                          </p>
                        </div>
                        <a
                          href="#wellness"
                          onClick={(e) => { e.preventDefault(); handleNavClick('#wellness'); }}
                          className="btn-primary text-xs py-2 px-3 justify-center"
                        >
                          <span>Read Health Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. OUR IMPACT DROPDOWN */}
                {activeDropdown === 'Our Impact' && (
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-7 space-y-4">
                      <div className="border-l-2 border-[#C96F32] pl-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A95724]">Seva In Numbers</span>
                        <h3 className="text-xl font-serif font-bold text-[#2B211B]">Our Impact</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {[
                          { title: 'Impact Stories', href: '#impact', desc: 'Healing experiences from Prayagraj' },
                          { title: 'Patients Served', href: '#impact', desc: '10,000+ OPD consultations' },
                          { title: 'Community Initiatives', href: '#impact', desc: '25+ rural health drives' },
                          { title: 'Medical Camps', href: '#community', desc: 'Free village vision & health camps' },
                          { title: 'Annual Reports', href: '#transparency', desc: 'Governance & activity reports' },
                          { title: 'Transparency', href: '#transparency', desc: 'Institutional trust & certificates' }
                        ].map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="group p-3 rounded-2xl bg-white border border-[#F5EBDD] hover:border-[#C96F32] transition-all"
                          >
                            <div className="font-bold text-[#2B211B] group-hover:text-[#C96F32] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="text-[11px] text-[#6E6259] mt-0.5">{item.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 bg-gradient-to-br from-[#2B211B] to-[#3A2F28] text-white p-6 rounded-3xl border border-[#C96F32]/30 shadow-lg text-center">
                      <div className="text-3xl font-serif font-bold text-amber-300 mb-1">10,000+</div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Patients Served</div>
                      <div className="text-[10px] text-[#D1C5BA] mb-4">(Demo statistics placeholder)</div>
                      <a
                        href="#impact"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#impact'); }}
                        className="btn-primary text-xs py-2 px-4 w-full justify-center"
                      >
                        <span>Explore Our Impact</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </header>

      {/* =================================================================== */}
      {/* MOBILE ACCORDION NAVIGATION DRAWER */}
      {/* =================================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#FFF9F1] border-b border-[#F5EBDD] shadow-2xl p-6 max-h-[85vh] overflow-y-auto animate-fade-up z-50">
          <div className="flex flex-col gap-3">
            
            {/* Mobile Home */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="text-base font-semibold text-[#2B211B] py-2 border-b border-[#F5EBDD]/60 hover:text-[#C96F32]"
            >
              Home
            </a>

            {/* Mobile About Accordion */}
            <div className="border-b border-[#F5EBDD]/60 py-2">
              <button
                onClick={() => toggleMobileAccordion('About')}
                className="w-full flex items-center justify-between text-base font-semibold text-[#2B211B]"
              >
                <span>About</span>
                {mobileAccordionOpen === 'About' ? <Minus className="w-4 h-4 text-[#C96F32]" /> : <Plus className="w-4 h-4 text-[#6E6259]" />}
              </button>
              {mobileAccordionOpen === 'About' && (
                <div className="pt-2 pl-3 space-y-2 text-xs font-medium text-[#6E6259] animate-fade-up">
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="block py-1 hover:text-[#C96F32]">About Us</a>
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="block py-1 hover:text-[#C96F32]">Our Story</a>
                  <a href="#mission" onClick={(e) => { e.preventDefault(); handleNavClick('#mission'); }} className="block py-1 hover:text-[#C96F32]">Chinmaya Mission</a>
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#F5EBDD]/60 py-2">
              <button
                onClick={() => toggleMobileAccordion('Services')}
                className="w-full flex items-center justify-between text-base font-semibold text-[#2B211B]"
              >
                <span>Services</span>
                {mobileAccordionOpen === 'Services' ? <Minus className="w-4 h-4 text-[#C96F32]" /> : <Plus className="w-4 h-4 text-[#6E6259]" />}
              </button>
              {mobileAccordionOpen === 'Services' && (
                <div className="pt-2 pl-3 space-y-2 text-xs font-medium text-[#6E6259] animate-fade-up">
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="block py-1 hover:text-[#C96F32]">General & Specialist OPD</a>
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="block py-1 hover:text-[#C96F32]">Diagnostic Testing & ECG</a>
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="block py-1 hover:text-[#C96F32]">Subsidized Pharmacy</a>
                </div>
              )}
            </div>

            {/* Mobile Doctors Accordion */}
            <div className="border-b border-[#F5EBDD]/60 py-2">
              <button
                onClick={() => toggleMobileAccordion('Doctors')}
                className="w-full flex items-center justify-between text-base font-semibold text-[#2B211B]"
              >
                <span>Doctors</span>
                {mobileAccordionOpen === 'Doctors' ? <Minus className="w-4 h-4 text-[#C96F32]" /> : <Plus className="w-4 h-4 text-[#6E6259]" />}
              </button>
              {mobileAccordionOpen === 'Doctors' && (
                <div className="pt-2 pl-3 space-y-2 text-xs font-medium text-[#6E6259] animate-fade-up">
                  <a href="#doctors" onClick={(e) => { e.preventDefault(); handleNavClick('#doctors'); }} className="block py-1 hover:text-[#C96F32]">Find a Specialist</a>
                  <a href="#doctors" onClick={(e) => { e.preventDefault(); handleNavClick('#doctors'); }} className="block py-1 hover:text-[#C96F32]">Consultation Hours</a>
                </div>
              )}
            </div>

            {/* Mobile Community Accordion */}
            <div className="border-b border-[#F5EBDD]/60 py-2">
              <button
                onClick={() => toggleMobileAccordion('Community')}
                className="w-full flex items-center justify-between text-base font-semibold text-[#2B211B]"
              >
                <span>Community</span>
                {mobileAccordionOpen === 'Community' ? <Minus className="w-4 h-4 text-[#C96F32]" /> : <Plus className="w-4 h-4 text-[#6E6259]" />}
              </button>
              {mobileAccordionOpen === 'Community' && (
                <div className="pt-2 pl-3 space-y-2 text-xs font-medium text-[#6E6259] animate-fade-up">
                  <a href="#community" onClick={(e) => { e.preventDefault(); handleNavClick('#community'); }} className="block py-1 hover:text-[#C96F32]">Free Medical Camps</a>
                  <a href="#volunteer" onClick={(e) => { e.preventDefault(); handleNavClick('#volunteer'); }} className="block py-1 hover:text-[#C96F32]">Volunteer With Us</a>
                </div>
              )}
            </div>

            {/* Mobile Health & Wellness */}
            <a
              href="#wellness"
              onClick={(e) => { e.preventDefault(); handleNavClick('#wellness'); }}
              className="text-base font-semibold text-[#2B211B] py-2 border-b border-[#F5EBDD]/60 hover:text-[#C96F32]"
            >
              Health & Wellness
            </a>

            {/* Mobile Our Impact */}
            <a
              href="#impact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#impact'); }}
              className="text-base font-semibold text-[#2B211B] py-2 border-b border-[#F5EBDD]/60 hover:text-[#C96F32]"
            >
              Our Impact
            </a>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={`tel:${ORG_INFO.phone}`}
                className="btn-secondary w-full justify-center"
              >
                <Phone className="w-4 h-4 text-[#C96F32]" />
                <span>Call Helpline: {ORG_INFO.phone}</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
                className="btn-primary w-full justify-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
