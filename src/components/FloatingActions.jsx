import { Phone, MessageSquare } from "lucide-react";

export default function FloatingActions({ onOpenBooking }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Emergency Call Dial Button */}
      <a
        href="tel:0000000000"
        aria-label="Call Emergency Hotline"
        className="group flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-red-900/50 hover:scale-105 transition-all duration-200 border-2 border-white/20"
      >
        <Phone size={20} className="animate-pulse" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Call 0000000000
        </span>
      </a>

      {/* Floating WhatsApp Emergency Button */}
      <button
        onClick={onOpenBooking}
        aria-label="Book Ambulance on WhatsApp"
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-950/50 hover:scale-105 transition-all duration-200 border-2 border-white/20"
      >
        <MessageSquare size={20} />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Ambulance
        </span>
      </button>
    </div>
  );
}
