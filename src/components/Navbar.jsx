import { useState, useEffect } from "react";
import { Plus, Menu, X, MessageSquare, PhoneCall } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Fleet", href: "#fleet" },
    { name: "WhatsApp Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-md py-3" : "py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
            <Plus size={24} strokeWidth={3.5} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Am<span className="text-red-600">care</span>
              </span>
            </div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 -mt-1">
              Emergency Services
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:0000000000"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-red-600 rounded-lg hover:bg-slate-50 transition"
          >
            <PhoneCall size={16} className="text-red-600" />
            <span>0000000000</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all active:scale-95"
          >
            <MessageSquare size={17} />
            <span>Book via WhatsApp</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden flex items-center justify-center p-2 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow"
            title="Book via WhatsApp"
          >
            <MessageSquare size={18} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-slate-100 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 px-5 py-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-slate-800 hover:text-red-600 py-2 border-b border-slate-100 transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold shadow-md transition"
              >
                <MessageSquare size={18} />
                <span>Book via WhatsApp</span>
              </button>

              <a
                href="tel:0000000000"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold shadow-md transition"
              >
                <PhoneCall size={18} />
                <span>Call Emergency Hotline (108)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
