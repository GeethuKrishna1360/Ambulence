import { useState } from "react";
import {
  Ambulance,
  HeartPulse,
  Plane,
  Stethoscope,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("bls");

  const services = {
    bls: {
      name: "Ambulance Service",
      tag: "Basic Life Support (BLS)",
      desc: "Rapid-response emergency ambulance for non-invasive respiratory distress, minor trauma, and urgent hospital transfers.",
      image: "/kerala_ambulance.jpg",
      specs: {
        eta: "< 8 Mins Arrival",
        crew: "Certified EMT & Emergency Driver",
        pricing: "Affordable standard emergency tariff",
        triage: "Continuous vitals monitoring & oxygen support",
      },
      equipment: [
        "Medical Oxygen Cylinder (B-Type)",
        "Automated External Defibrillator (AED)",
        "Spine Board & Immobilization Collars",
        "Nebulizer & Suction Apparatus",
        "Emergency Burn & Trauma Kit",
        "Digital Vitals Monitor (SpO2, Pulse, BP)",
      ],
      whatsappParam: "Basic Ambulance Service (BLS)",
    },
    icu: {
      name: "ICU Ambulance",
      tag: "Advanced Life Support (ALS)",
      desc: "State-of-the-art mobile ICU engineered for critically unstable patients requiring invasive mechanical ventilation and cardiac monitoring.",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",
      specs: {
        eta: "< 10 Mins Priority Dispatch",
        crew: "Intensivist / Critical Care Doctor & Senior ICU Nurse",
        pricing: "All-inclusive clinical life-support package",
        triage: "Full invasive telemetry linked to hospital",
      },
      equipment: [
        "Hamilton Transport Ventilator (Invasive/NIV)",
        "Multi-Para Monitor (ECG, NIBP, EtCO2, SpO2)",
        "Biphasic Defibrillator with External Pacing",
        "Syringe & Volumetric Infusion Pumps",
        "Complete Emergency Drug & Resuscitation Kit",
        "Video Laryngoscope & Advanced Airway Kit",
      ],
      whatsappParam: "ICU Ambulance (Advanced Life Support)",
    },
    air: {
      name: "Air Ambulance",
      tag: "Fixed-Wing & Helicopter Medevac",
      desc: "Aeromedical evacuation for long-distance patient repatriation, organ transit, and remote emergency rescues across national airspace.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
      specs: {
        eta: "Fast runway clearance & airport triage",
        crew: "2 Flight Surgeons & Critical Care Aeromedical Team",
        pricing: "Fast-track nationwide clearance",
        triage: "Bed-to-bed pressurized cabin transport",
      },
      equipment: [
        "Aviation-Certified Transport Ventilator",
        "Portable Blood Gas (ABG) & Electrolyte Analyzer",
        "Aviation Defibrillator & Cardiac Monitor",
        "Portable Ultrasound & Point-of-Care Testing",
        "Dual Oxygen Cylinders with Redundant Backup",
        "Vacuum Mattress & Aeromedical Stretcher System",
      ],
      whatsappParam: "Air Ambulance Medevac Flight",
    },
    support: {
      name: "Medical Support",
      tag: "Standby & Neonatal NICU Care",
      desc: "Specialized event standby solutions for marathons, VIP corporate gatherings, and specialized incubator-equipped transport for newborns.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
      specs: {
        eta: "Dedicated on-site standby units",
        crew: "Pediatric Specialists / Event Paramedics",
        pricing: "Flexible hourly & multi-day event packages",
        triage: "Zero-latency on-site first aid & swift evacuation",
      },
      equipment: [
        "Draeger Neonatal Transport Incubator",
        "Infant Warmers & Micro-Puff Resuscitator",
        "Mobile Disaster Triage Station",
        "High-Flow Oxygen & Suction Cart",
        "AED Emergency Backpack Units",
        "Dedicated Radio Communication Network",
      ],
      whatsappParam: "Event Medical Support & Neonatal Transfer",
    },
  };

  const current = services[activeTab];

  const handleWhatsAppDirect = (serviceName) => {
    const text = encodeURIComponent(
      `🚨 *INQUIRY / BOOKING FOR ${serviceName.toUpperCase()}*\nHello Amcare Control Room, I require emergency transport support for: ${serviceName}. Please share availability immediately.`
    );
    window.open(`https://wa.me/0000000000?text=${text}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Stethoscope size={14} />
            Comprehensive Medical Fleets
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Specialized Emergency <span className="text-red-600">Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose from our fleet of hospital-grade ambulances configured for basic stabilization, intensive critical care, neonatal transport, or inter-city air medevac.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {[
            { id: "bls", name: "Ambulance Service", icon: Ambulance },
            { id: "icu", name: "ICU Ambulance", icon: HeartPulse },
            { id: "air", name: "Air Ambulance", icon: Plane },
            { id: "support", name: "Medical Support", icon: Stethoscope },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xs ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon size={18} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Panel Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Service Image & Quick Highlights */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  {current.tag}
                </span>
                <h3 className="text-2xl font-black">{current.name}</h3>
                <p className="text-xs text-slate-200 mt-1">{current.desc}</p>
              </div>
            </div>

            {/* Right: Specs, Gear & Direct Actions */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Standard Dispatch SLA
                    </span>
                    <div className="flex items-center gap-2 text-base font-extrabold text-slate-900 mt-0.5">
                      <Clock size={18} className="text-emerald-500" />
                      {current.specs.eta}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      On-Board Clinical Crew
                    </span>
                    <div className="flex items-center gap-2 text-base font-extrabold text-slate-900 mt-0.5">
                      <Users size={18} className="text-red-500" />
                      {current.specs.crew}
                    </div>
                  </div>
                </div>

                {/* Medical Gear List */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-red-600" />
                    Included Medical Equipment & Technology
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.equipment.map((gear, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                      >
                        <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                        <span className="truncate">{gear}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleWhatsAppDirect(current.whatsappParam)}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-emerald-600/20 transition active:scale-[0.99]"
                >
                  <MessageSquare size={18} />
                  <span>Book This Service on WhatsApp</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition"
                >
                  <span>Priority Booking Form</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
