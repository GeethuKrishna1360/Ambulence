import { Phone, MessageSquare, Clock, ShieldCheck, MapPin, Activity, ArrowRight } from "lucide-react";

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-28">
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kerala_ambulance.jpg"
          alt="Kerala Ambulance Emergency Medical Service"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform motion-safe:animate-pulse transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Live Dispatch Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span>24/7 Rapid Emergency Response</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Clock size={13} /> Avg Arrival: 8 Mins
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Emergency Medical <span className="text-red-500 underline decoration-red-600/50 decoration-wavy decoration-2">Services</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Prompt, compassionate, and ICU-equipped critical care ambulance transport. When every second counts, our verified doctors and paramedics deliver life-saving care on the move.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-700/30 hover:shadow-emerald-700/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare size={20} />
              <span>Book on WhatsApp</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="tel:0000000000"
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-700/30 hover:shadow-red-700/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={20} className="animate-pulse" />
              <span>Call Hotline (108)</span>
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-red-500 shrink-0" />
              <span>Doctor & Paramedic Crew</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-emerald-400 shrink-0" />
              <span>Ventilator & ICU Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-sky-400 shrink-0" />
              <span>Live GPS Destination Tracking</span>
            </div>
          </div>
        </div>

        {/* Bottom Triple Contact Strip */}
        <div className="mt-14 sm:mt-18 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Orange Card: Booking */}
            <a
              href="tel:0000000000"
              className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-xl shadow-amber-900/30 transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-amber-100">
                    Direct Booking Hotline
                  </span>
                  <span className="block text-lg font-extrabold text-white">
                    0000000000
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-amber-600 transition-colors">
                24/7 Call
              </span>
            </a>

            {/* Green Card: WhatsApp Reserve */}
            <button
              onClick={onOpenBooking}
              className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-xl shadow-emerald-950/40 transition-all duration-200 transform hover:-translate-y-1 text-left w-full"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-100">
                    For WhatsApp Reserve
                  </span>
                  <span className="block text-lg font-extrabold text-white">
                    0000000000
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-emerald-700 transition-colors">
                Chat Now
              </span>
            </button>

            {/* Blue Card: Information */}
            <a
              href="#about"
              className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white shadow-xl shadow-sky-950/40 transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-sky-100">
                    For Information & Queries
                  </span>
                  <span className="block text-lg font-extrabold text-white">
                    0000000000
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-sky-700 transition-colors">
                Details
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
