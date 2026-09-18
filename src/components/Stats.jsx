import { HeartHandshake, MapPin, Ambulance, Users } from "lucide-react";

export default function Stats() {
  const metrics = [
    {
      value: "15k+",
      label: "Patients Served",
      desc: "Emergency & critical care transfers",
      icon: HeartHandshake,
    },
    {
      value: "30+",
      label: "Operation Bases",
      desc: "Strategically located urban hubs",
      icon: MapPin,
    },
    {
      value: "100+",
      label: "Specialized Vehicles",
      desc: "BLS, ALS & Neonatal ICU units",
      icon: Ambulance,
    },
    {
      value: "300+",
      label: "Frontline Staff",
      desc: "Emergency doctors & paramedics",
      icon: Users,
    },
  ];

  return (
    <section className="bg-red-600 text-white py-14 sm:py-16 relative overflow-hidden shadow-inner">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-red-900 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 hover:bg-white/15 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-red-600 mb-4 shadow-md">
                  <Icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-red-100">
                  {item.label}
                </div>
                <div className="text-xs text-red-200 mt-1 hidden sm:block">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
