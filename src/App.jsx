import { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import BookingSection from "./components/BookingSection";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Fleet from "./components/Fleet";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section (includes Bottom Triple Contact Strip) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. About & Experience Section */}
        <About />

        {/* 5. Partner / Hospital Logos */}
        <Partners />

        {/* 6. Interactive WhatsApp Booking Section */}
        <BookingSection />

        {/* 7. Services Tabs */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 8. Stats & Counters Bar */}
        <Stats />

        {/* 9. Why Choose Us & Fleet Showcase */}
        <Fleet onOpenBooking={handleOpenBooking} />
      </main>

      {/* 10. Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Emergency Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />

      {/* Quick Persistent Floating Actions */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
