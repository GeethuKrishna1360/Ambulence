import { Building2, ShieldCheck, Heart } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "Nipro Medical", sub: "Equipment Partner", icon: ShieldCheck },
    { name: "GoldenCro", sub: "Trauma Care Alliance", icon: Heart },
    { name: "Apollo Hospitals", sub: "Direct ICU Triage", icon: Building2 },
    { name: "Fortis Healthcare", sub: "Cardiology Network", icon: Building2 },
    { name: "Max Healthcare", sub: "Pediatric Medevac", icon: Building2 },
    { name: "AIIMS Network", sub: "Government Linkage", icon: ShieldCheck },
    { name: "Red Cross EMS", sub: "Disaster Response", icon: Heart },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Trusted By & Partnered With Leading Healthcare Institutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-red-200 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-red-50 text-slate-500 group-hover:text-red-600 transition-colors mb-2">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-slate-700 text-center group-hover:text-slate-900 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 text-center font-medium mt-0.5">
                  {partner.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
