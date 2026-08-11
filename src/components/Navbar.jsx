import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Heart, MapPin } from 'lucide-react';
import { ORG_INFO } from '../data/organizationData';

export default function Navbar({ onOpenAppointment, activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Community', href: '#community' },
    { name: 'Health & Wellness', href: '#wellness' },
    { name: 'Our Impact', href: '#impact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-glass py-3' : 'nav-transparent py-5 text-white'
    }`}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} className="flex items-center gap-3 text-left group">
          <div className="w-11 h-11 rounded-full bg-white p-1.5 flex items-center justify-center shadow-md border border-[#C96F32]/30 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img src="/images/chinmaya_logo.png" alt="Chinmaya Mission Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className={`font-serif font-bold text-lg leading-tight tracking-tight ${scrolled ? 'text-[#2B211B]' : 'text-white'}`}>
              CHINMAYA CHIKITSALAYA
            </div>
            <div className={`text-xs font-semibold uppercase tracking-widest ${scrolled ? 'text-[#A95724]' : 'text-[#FFF9F1] opacity-90'}`}>
              Prayagraj • Seva & Care
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-sm font-medium transition-colors hover:text-[#C96F32] ${
                scrolled ? 'text-[#2B211B]' : 'text-[#FFF9F1] hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${ORG_INFO.phone}`}
            className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border transition-all ${
              scrolled 
                ? 'text-[#6E6259] border-rgba(201,111,50,0.2) hover:text-[#C96F32] hover:border-[#C96F32]' 
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
            scrolled ? 'text-[#2B211B] hover:bg-[#F5EBDD]' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#FFF9F1] border-b border-[#F5EBDD] shadow-2xl p-6 animate-fade-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-base font-semibold text-[#2B211B] py-2 border-b border-[#F5EBDD]/60 hover:text-[#C96F32]"
              >
                {link.name}
              </a>
            ))}

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
    </header>
  );
}
