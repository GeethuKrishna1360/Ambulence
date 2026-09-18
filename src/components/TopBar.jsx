import { useState } from "react";
import { Phone, Mail, Globe, HeartPulse } from "lucide-react";

export default function TopBar() {
  const [lang, setLang] = useState("EN");

  return (
    <div className="bg-[#0f172a] text-slate-300 text-xs py-2 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Emergency hotlines & support email */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href="tel:108"
            className="flex items-center gap-2 text-white hover:text-red-400 font-semibold transition group"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white group-hover:scale-110 transition-transform">
              <Phone size={11} className="animate-pulse" />
            </span>
            <span>
              Toll-Free: <span className="text-red-400 font-bold">108</span> / <span className="text-white">0000000000</span>
            </span>
          </a>

          <a
            href="mailto:emergency@amcare.org"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition"
          >
            <Mail size={13} className="text-slate-400" />
            <span>emergency@amcare.org</span>
          </a>

          <div className="hidden lg:flex items-center gap-2 text-slate-400 text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Control Room Status: <strong className="text-emerald-400">All Units Active</strong></span>
          </div>
        </div>

        {/* Right: Language toggle, social links, urgent emergency call button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Language Toggle */}
          <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-md text-[11px]">
            <Globe size={12} className="text-slate-400" />
            {["EN", "HI", "ES"].map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`px-1.5 py-0.5 rounded transition ${
                  lang === item
                    ? "bg-red-600 text-white font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Urgent Emergency Call Button */}
          <a
            href="tel:0000000000"
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold transition shadow-sm hover:shadow-red-900/50 hover:shadow-md active:scale-95"
          >
            <HeartPulse size={13} className="animate-bounce" />
            <span>Emergency Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
