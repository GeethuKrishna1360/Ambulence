import { useState } from "react";
import { CheckCircle2, ShieldAlert, Award, Clock, HeartHandshake } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContents = {
    mission: {
      title: "Our Mission",
      desc: "To deliver rapid, compassionate, and life-saving critical care transport to every patient in need. We bridge the critical golden hour with world-class medical equipment and highly trained emergency physicians.",
      points: [
        "Provide emergency response in under 8 minutes across primary urban zones",
        "Offer affordable, accessible critical care transport around the clock",
        "Equip all vehicles with state-of-the-art ventilators and cardiac monitors",
      ],
    },
    vision: {
      title: "Our Vision",
      desc: "To become the nation's most trusted emergency medical network, utilizing smart GPS dispatching, connected ICU telemetry, and zero-delay hospital coordination to save lives every single day.",
      points: [
        "Interconnected fleet management with live real-time hospital tele-link",
        "Expanding air ambulance Medevac corridors across all regional states",
        "Continuous paramedic training following international AHA standards",
      ],
    },
    history: {
      title: "Our History",
      desc: "Founded in 2004 as a single emergency response vehicle in the metropolitan district, Amcare has expanded into a fleet of over 100+ specialized vehicles, having safely transported over 15,000 critically ill patients.",
      points: [
        "2004: Launched first dedicated cardiac ambulance unit",
        "2012: Introduced nationwide 24/7 multi-lingual emergency dispatch center",
        "2023: Full integration of IoT-enabled ICU telemedicine ambulances",
      ],
    },
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Staggered Image / Card Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image: Ambulance Paramedic */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
                  alt="Emergency medical doctor preparing patient"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-xs font-bold mb-1">
                    <ShieldAlert size={13} />
                    Critical Care Unit
                  </span>
                  <p className="text-sm font-medium text-slate-200">
                    High-dependency life support interior with ICU certified doctors
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image: Medical Equipment */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80"
                  alt="Emergency medical equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-red-600 text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border-2 border-red-500">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none">20+</div>
                  <div className="text-xs font-semibold text-red-100 uppercase tracking-wider mt-1">
                    Years of Emergency Experience
                  </div>
                </div>
              </div>

              {/* Response Metric Tag */}
              <div className="absolute top-1/2 -right-3 hidden md:flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700">
                <Clock size={16} className="text-emerald-400" />
                <span className="text-xs font-bold">Rapid Golden Hour Care</span>
              </div>
            </div>
          </div>

          {/* Right: Text & Interactive Tabs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-wide uppercase mb-4">
              <HeartHandshake size={14} />
              About Amcare EMS
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Excellence in Emergency <br />
              <span className="text-red-600">Medical Services</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              When medical crises strike, Amcare provides instant, clinical-grade mobility. From cardiac arrests and polytrauma to neonate incubators, our fleet functions as a hospital ICU on wheels.
            </p>

            {/* Tabs Selector */}
            <div className="flex border-b border-slate-200 mb-6 gap-2">
              {[
                { id: "mission", label: "Our Mission" },
                { id: "vision", label: "Our Vision" },
                { id: "history", label: "Our History" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 px-4 font-bold text-sm sm:text-base border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-red-600 text-red-600"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Dynamic Content */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {tabContents[activeTab].desc}
              </p>
              <div className="space-y-2.5">
                {tabContents[activeTab].points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Guarantees Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-xl font-extrabold text-slate-900">100%</span>
                <span className="text-xs text-slate-500 font-medium">Doctor Escorted Critical Care</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-xl font-extrabold text-red-600">&lt; 8 Mins</span>
                <span className="text-xs text-slate-500 font-medium">Average Emergency Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
