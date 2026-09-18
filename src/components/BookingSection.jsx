import BookingForm from "./BookingForm";
import { ShieldCheck, Clock, PhoneCall, Radio } from "lucide-react";

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/60 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio size={14} className="animate-pulse" />
            24/7 Live Emergency Coordination
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Instant Emergency <span className="text-red-500">Ambulance Booking</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Complete the rapid triage form below to alert our nearest control room and connect instantly on WhatsApp for real-time paramedic deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dispatch highlights & emergency assurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                Live Control Room Protocol
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600/20 text-red-400 font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white">One-Click Geolocation</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Hit "Use Current Location" to transmit exact GPS coordinates to the incoming driver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Instant WhatsApp Confirmation</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Pre-formatted message ensures zero confusion or typing errors during a panic situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600/20 text-sky-400 font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Tele-Triage & Doctor Escort</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Our physician guides you on immediate first-aid while the ambulance navigates with emergency siren priority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Urgent Call Card */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="p-4 rounded-xl bg-red-950/70 border border-red-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider block">
                      Prefer direct phone call?
                    </span>
                    <span className="text-lg font-extrabold text-white">0000000000</span>
                  </div>
                  <a
                    href="tel:0000000000"
                    className="p-3 bg-red-600 hover:bg-red-500 rounded-xl text-white shadow-md transition"
                    title="Direct Call"
                  >
                    <PhoneCall size={20} className="animate-bounce" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <Clock size={16} className="text-emerald-400 shrink-0" />
                <span>ETA &lt; 8 Mins Average</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <ShieldCheck size={16} className="text-sky-400 shrink-0" />
                <span>ICU Certified Fleet</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Emergency Booking Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Priority Ambulance Request
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated dispatch sync with WhatsApp emergency channel
                </p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                Priority 1
              </span>
            </div>

            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
