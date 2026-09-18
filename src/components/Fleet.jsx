import {
  ShieldCheck,
  Zap,
  Activity,
  Ambulance,
  Heart,
  Baby,
  Accessibility,
  ArrowRight,
  Check,
  MessageSquare,
} from "lucide-react";

export default function Fleet({ onOpenBooking }) {
  const features = [
    {
      title: "Secure & Sanitized Transport",
      desc: "Hospital-grade UV-C sanitized cabins, negative pressure airflow, and hydraulic shock-absorbing stretchers ensure stable transport.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "On-Demand Rapid Dispatch",
      desc: "AI fleet positioning automatically pairs emergency requests with the closest vehicle, averaging sub-8-minute metropolitan arrival.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "ICU Emergency Equipment",
      desc: "Every vehicle is stocked with calibrated defibrillators, transport ventilators, infusion pumps, and high-flow oxygen supplies.",
      icon: Activity,
      color: "text-red-600 bg-red-50",
    },
  ];

  const fleetCategories = [
    {
      name: "Basic Life Support (BLS)",
      subtitle: "For Stable Transfers & Minor Trauma",
      image: "/kerala_ambulance.jpg",
      crew: "Certified EMT + Emergency Driver",
      specs: ["High-flow Oxygen Cylinder", "First Aid Trauma Backpack", "Automated Stretcher & Spine Board"],
      icon: Ambulance,
      tag: "Rapid BLS",
    },
    {
      name: "Advanced Life Support (ALS)",
      subtitle: "ICU On Wheels for Cardiac & Respiratory Emergencies",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=700&q=80",
      crew: "Critical Care Physician + Senior Paramedic",
      specs: ["Hamilton Transport Ventilator", "Multipara Vitals & ECG Monitor", "Defibrillator with External Pacing"],
      icon: Heart,
      tag: "Mobile ICU",
    },
    {
      name: "Patient Transport & Wheelchair Van",
      subtitle: "Non-Emergency Medical Transport (NEMT)",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
      crew: "Medical Attendant + Certified Driver",
      specs: ["Hydraulic Wheelchair Lift Ramp", "Dual Attendant Seating", "Scheduled Dialysis & Chemo Transfers"],
      icon: Accessibility,
      tag: "Accessible",
    },
    {
      name: "Neonatal & Pediatric Ambulance",
      subtitle: "Specialized Incubator Unit for Newborns",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
      crew: "Pediatric Intensivist + NICU Nurse",
      specs: ["Draeger Transport Incubator", "Micro-Volume Syringe Pumps", "Pediatric Pulse Oximetry & Warmers"],
      icon: Baby,
      tag: "NICU Unit",
    },
  ];

  const handleReserve = (categoryName) => {
    const text = encodeURIComponent(
      `🚨 *FLEET RESERVATION REQUEST*\nHello Amcare, I wish to reserve the vehicle: *${categoryName}*. Please check nearest available vehicle and confirm.`
    );
    window.open(`https://wa.me/0000000000?text=${text}`, "_blank");
  };

  return (
    <section id="fleet" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Why Choose Us (3-Column Feature Grid) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
              Why Amcare EMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
              Advanced Clinical Care on Every Trip
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Combining world-class medical telemetry with relentless speed so your loved ones receive optimal emergency stabilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs ${item.color}`}
                    >
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-slate-700">
                    <span>AHA & ISO 9001 Certified Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Fleet Showcase Category Cards */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                Our Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Specialized Medical Fleet Vehicles
              </h2>
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition"
            >
              <span>Instant Fleet Dispatch</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetCategories.map((vehicle, idx) => {
              const Icon = vehicle.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Vehicle Photo Banner */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold rounded-full border border-slate-700">
                        {vehicle.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-red-600 mb-1">
                        <Icon size={16} />
                        <span className="text-xs font-bold">{vehicle.crew}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-1 leading-tight">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                        {vehicle.subtitle}
                      </p>

                      <div className="space-y-1.5 border-t border-slate-100 pt-3">
                        {vehicle.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 text-xs text-slate-600 font-medium"
                          >
                            <Check size={13} className="text-emerald-500 shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reserve Action Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleReserve(vehicle.name)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition duration-200 shadow-sm"
                    >
                      <MessageSquare size={14} />
                      <span>Reserve This Vehicle</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
