import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import EmergencyBar from './components/EmergencyBar';
import QuickActions from './components/QuickActions';
import WhyUs from './components/WhyUs';
import AboutSection from './components/AboutSection';
import SevaSection from './components/SevaSection';
import ServicesSection from './components/ServicesSection';
import DoctorsSection from './components/DoctorsSection';
import ParallaxQuote from './components/ParallaxQuote';
import ImpactSection from './components/ImpactSection';
import CommunitySeva from './components/CommunitySeva';
import PatientStories from './components/PatientStories';
import WellnessHub from './components/WellnessHub';
import GalleryLightbox from './components/GalleryLightbox';
import FacilitiesSection from './components/FacilitiesSection';
import DonateSection from './components/DonateSection';
import VolunteerSection from './components/VolunteerSection';
import CSRSection from './components/CSRSection';
import TransparencySection from './components/TransparencySection';
import LocationMap from './components/LocationMap';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import AppointmentModal from './components/AppointmentModal';
import ToastNotification from './components/ToastNotification';

// Premium Floating Donation Feature Components
import FloatingDonateButton from './components/donation/FloatingDonateButton';
import DonationDrawer from './components/donation/DonationDrawer';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [donationDrawerOpen, setDonationDrawerOpen] = useState(false);
  const [initialDoctor, setInitialDoctor] = useState(null);
  const [initialService, setInitialService] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info', title = 'Notice') => {
    setToast({ message, type, title });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenAppointment = (doctor = null, service = null) => {
    setInitialDoctor(doctor);
    setInitialService(service);
    setAppointmentModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F1] text-[#2B211B] flex flex-col font-sans selection:bg-[#C96F32] selection:text-white pb-16 md:pb-0 relative">
      
      {/* Sticky Global Navigation */}
      <Navbar 
        onOpenAppointment={() => handleOpenAppointment()} 
      />

      {/* Main Content Progression */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero 
          onOpenAppointment={() => handleOpenAppointment()} 
          onExploreServices={() => scrollToSection('#services')}
        />

        {/* Trust Strip */}
        <TrustStrip />

        {/* Responsible Emergency / Helpline Bar */}
        <EmergencyBar />

        {/* Quick Action Tiles */}
        <QuickActions 
          onOpenAppointment={() => handleOpenAppointment()}
          onScrollToDoctors={() => scrollToSection('#doctors')}
          onScrollToLocation={() => scrollToSection('#location')}
          onScrollToContact={() => scrollToSection('#contact')}
        />

        {/* Why Us - "Healthcare with a Human Heart" */}
        <WhyUs />

        {/* About Section - "Serving Through Healthcare" */}
        <AboutSection />

        {/* Chinmaya Mission Connection - "Rooted in Seva" */}
        <SevaSection />

        {/* Services Section */}
        <ServicesSection 
          onBookService={(service) => handleOpenAppointment(null, service)}
        />

        {/* Doctor Directory */}
        <DoctorsSection 
          onBookDoctor={(doc) => handleOpenAppointment(doc, null)}
        />

        {/* Special Parallax Scroll Effect Quote */}
        <ParallaxQuote />

        {/* Impact Section */}
        <ImpactSection />

        {/* Community & Seva Camps */}
        <CommunitySeva />

        {/* Patient Stories */}
        <PatientStories />

        {/* Health & Wellness Hub */}
        <WellnessHub />

        {/* Moments of Seva Gallery */}
        <GalleryLightbox />

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Donate / Support Section */}
        <DonateSection showToast={showToast} />

        {/* Volunteer Section */}
        <VolunteerSection showToast={showToast} />

        {/* Corporate CSR Partnerships */}
        <CSRSection showToast={showToast} />

        {/* Governance & Transparency */}
        <TransparencySection showToast={showToast} />

        {/* Location & Map */}
        <LocationMap />

        {/* Contact Us */}
        <ContactSection showToast={showToast} />

        {/* FAQ Accordion */}
        <FAQSection />

      </main>

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Mobile Bottom Action Bar */}
      <MobileBottomBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Persistent Floating Donate Button */}
      <FloatingDonateButton onClick={() => setDonationDrawerOpen(true)} />

      {/* Donation Drawer / Mobile Bottom Sheet */}
      <DonationDrawer 
        isOpen={donationDrawerOpen} 
        onClose={() => setDonationDrawerOpen(false)} 
        onExploreImpact={() => scrollToSection('#impact')}
      />

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={initialDoctor}
        initialService={initialService}
        showToast={showToast}
      />

      {/* Toast System */}
      <ToastNotification toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
