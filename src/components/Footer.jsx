import { Plus, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 text-white shadow-md shadow-red-600/30">
                <Plus size={24} strokeWidth={3.5} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Am<span className="text-red-500">care</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Amcare is India's leading 24/7 private emergency ambulance network, delivering rapid-response critical care, ICU telematics, and doctor-escorted transport when life matters most.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-300 text-xs font-semibold">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <ShieldCheck size={14} className="text-emerald-400" />
                ISO 9001:2015 Certified
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <Heart size={14} className="text-red-400" />
                AHA Life Support
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-red-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition">
                  About Amcare
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition">
                  Medical Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-red-400 transition">
                  Ambulance Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-red-400 transition">
                  WhatsApp Booking
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition">
                  Hospital Network
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Fleet & Specialized Units (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Fleet Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Basic Life Support (BLS)</span>
                <span className="text-[11px] text-emerald-400 font-bold">24/7 Active</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Advanced ICU Ambulance (ALS)</span>
                <span className="text-[11px] text-emerald-400 font-bold">Ventilator</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Air Ambulance Medevac</span>
                <span className="text-[11px] text-sky-400 font-bold">National</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Neonatal Incubator Unit</span>
                <span className="text-[11px] text-purple-400 font-bold">NICU</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Wheelchair & Patient Cab</span>
                <span className="text-[11px] text-slate-400 font-bold">NEMT</span>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Hotline Contact Box (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Emergency Dispatch Center
            </h4>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/80 to-slate-900 border border-red-800/80 shadow-lg space-y-3">
              <div className="flex items-center gap-3 text-white">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 text-white shrink-0">
                  <Phone size={18} className="animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-red-300 uppercase tracking-wider font-bold block">
                    24/7 Urgent Hotline
                  </span>
                  <a
                    href="tel:0000000000"
                    className="text-base font-extrabold text-white hover:text-red-300 transition"
                  >
                    0000000000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white pt-2 border-t border-red-900/60">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600 text-white shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-300 uppercase tracking-wider font-bold block">
                    WhatsApp Dispatch
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-sm font-extrabold text-white hover:text-emerald-300 transition text-left"
                  >
                    0000000000
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-slate-500" />
                <a href="mailto:emergency@amcare.org" className="hover:text-white transition">
                  emergency@amcare.org
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-slate-500 shrink-0 mt-0.5" />
                <span>Central Operations: LifeCare Tower, Medical District, Sector 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Medical Disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Amcare Emergency Medical Services Pvt. Ltd. All rights reserved.</p>
          <p className="text-slate-500 max-w-lg text-center md:text-right">
            Disclaimer: For critical trauma or life-threatening scenarios, call 108/112 immediately. Amcare operates accredited emergency response ambulances under licensed medical protocols.
          </p>
        </div>
      </div>
    </footer>
  );
}
