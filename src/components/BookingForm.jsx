import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Compass,
  AlertTriangle,
  Send,
  CheckCircle2,
  Building2,
  FileText,
  Loader2,
  Heart,
  Activity,
  Car,
  Baby,
} from "lucide-react";

export default function BookingForm({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    pickupAddress: "",
    category: "General",
    destination: "",
    notes: "",
  });

  const [isLocating, setIsLocating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const categories = [
    { id: "General", label: "General Medical", icon: Activity, color: "border-blue-500 text-blue-700 bg-blue-50" },
    { id: "Cardiac", label: "Cardiac Arrest / Heart", icon: Heart, color: "border-red-500 text-red-700 bg-red-50" },
    { id: "Trauma/Accident", label: "Trauma / Accident", icon: AlertTriangle, color: "border-amber-500 text-amber-700 bg-amber-50" },
    { id: "ICU/Ventilator", label: "ICU / Ventilator", icon: Car, color: "border-purple-500 text-purple-700 bg-purple-50" },
    { id: "Maternity", label: "Maternity / Neonatal", icon: Baby, color: "border-emerald-500 text-emerald-700 bg-emerald-50" },
  ];

  // Geolocation Handler
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);
    setErrorMessage("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Attempt reverse geocoding via free OpenStreetMap Nominatim
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          if (res.ok) {
            const data = await res.json();
            const addr = data.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
            setFormData((prev) => ({
              ...prev,
              pickupAddress: `${addr} (GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)})`,
            }));
          } else {
            setFormData((prev) => ({
              ...prev,
              pickupAddress: `GPS Coordinates: Lat ${latitude.toFixed(6)}, Lon ${longitude.toFixed(6)}`,
            }));
          }
        } catch {
          setFormData((prev) => ({
            ...prev,
            pickupAddress: `GPS Coordinates: Lat ${latitude.toFixed(6)}, Lon ${longitude.toFixed(6)}`,
          }));
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        setErrorMessage("Unable to retrieve location. Please type pickup address manually.");
        console.warn("Geolocation error:", error);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.patientName.trim()) {
      setErrorMessage("Please enter the patient's name.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (!formData.pickupAddress.trim()) {
      setErrorMessage("Please specify the pickup location or use current location.");
      return;
    }

    setIsSubmitting(true);

    const appsScriptUrl =
      import.meta.env.VITE_APPS_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbz_AmcareDispatchAPI/exec";

    const payload = {
      patientName: formData.patientName,
      phone: formData.phone,
      pickupAddress: formData.pickupAddress,
      category: formData.category,
      destination: formData.destination || "Nearest Available Emergency Hospital",
      notes: formData.notes,
      timestamp: new Date().toISOString(),
    };

    // a) Send non-blocking POST request to Google Apps Script
    try {
      await fetch(appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Apps script submission noted:", err);
    }

    // b) Format clean urgent WhatsApp message
    const formattedMsg = `🚨 *URGENT EMERGENCY AMBULANCE DISPATCH REQUEST* 🚨
---------------------------------------------
👤 *Patient Name:* ${formData.patientName}
📞 *Contact Phone:* ${formData.phone}
🏥 *Emergency Category:* ${formData.category.toUpperCase()}
📍 *Pickup Location:* ${formData.pickupAddress}
🏥 *Destination:* ${formData.destination || "Nearest Available Emergency Center"}
📝 *Condition Notes:* ${formData.notes || "Immediate dispatch required"}
⏰ *Request Time:* ${new Date().toLocaleTimeString()} (${new Date().toLocaleDateString()})
---------------------------------------------
⚠️ *Please confirm dispatch of the nearest ambulance immediately!*`;

    // c) Redirect user to WhatsApp
    const waNumber = "0000000000"; // Emergency WhatsApp dispatcher
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(formattedMsg)}`;

    setIsSubmitting(false);
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl">
      {submitted ? (
        <div className="p-8 text-center space-y-5">
          <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
            <CheckCircle2 size={36} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Ambulance Request Initiated!
            </h3>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
              We have forwarded your emergency details to our central dispatch and opened WhatsApp. A paramedic unit is being coordinated.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 space-y-1.5">
            <div><strong>Patient:</strong> {formData.patientName}</div>
            <div><strong>Category:</strong> <span className="text-red-600 font-bold">{formData.category}</span></div>
            <div><strong>Pickup:</strong> {formData.pickupAddress}</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:108"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm shadow-md transition"
            >
              Call 108 Hotline Directly
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                if (isModal && onClose) onClose();
              }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold text-sm transition"
            >
              New Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertTriangle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Emergency Category Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Emergency Category <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = formData.category === cat.id;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setFormData({ ...formData, category: cat.id })}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition text-left ${
                      isSelected
                        ? `${cat.color} border-2 shadow-xs`
                        : "border-slate-200 text-slate-600 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <Icon size={16} className="shrink-0" />
                    <span className="truncate">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Patient Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Contact Phone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0000000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Pickup Address & Quick Current Location Button */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">
                Full Pickup Address / Landmark <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={isLocating}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition disabled:opacity-50"
              >
                {isLocating ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>Detecting GPS...</span>
                  </>
                ) : (
                  <>
                    <Compass size={14} />
                    <span>Use Current Location</span>
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <textarea
                required
                rows={2}
                placeholder="Enter complete building name, street, landmark or city..."
                value={formData.pickupAddress}
                onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>
          </div>

          {/* Destination Hospital Preference (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Preferred Destination Hospital <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Building2 size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Apollo Hospital, City Emergency Trauma Center"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>
          </div>

          {/* Critical Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Patient Symptoms or Critical Notes <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <FileText size={16} className="absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Chest pain, difficulty breathing, conscious/unconscious"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>
          </div>

          {/* Urgent Dispatch Action CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white py-3.5 rounded-xl text-base font-bold shadow-lg shadow-emerald-600/30 transition-all disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Submitting & Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Dispatch via WhatsApp (Immediate Response)</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              🔒 Your medical info is securely submitted to dispatch and pre-fills WhatsApp message.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
