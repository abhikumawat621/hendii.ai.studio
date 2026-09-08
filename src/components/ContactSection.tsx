import React, { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck
} from "lucide-react";

interface ContactSectionProps {
  onSelectTab: (tab: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSelectTab }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    city: "Jaipur",
    service: "Web Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit inquiry.");
      }

      setSuccess(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(err.message || "Network error. Please WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/919782546371?text=${encodeURIComponent(
    `Hello Hendii! My name is ${formData.name || "Client"}. I am interested in ${formData.service} for my business in ${formData.city}.`
  )}`;

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-[#B7FF00] text-xs font-mono font-semibold">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
          Start Your Project With Hendii
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
          Ready to get more qualified leads and rank on Google? Fill out the quick form below or reach out directly on WhatsApp for an immediate response.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0D1117] border border-[#1E2736] rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-[#F8FAFC]">Direct Contact Information</h2>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#11161D] border border-[#1E2736] hover:border-[#25D366] flex items-center space-x-4 transition group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#94A3B8]">WhatsApp (Fastest Response)</p>
                  <p className="text-sm font-bold text-[#F8FAFC]">+91 9782546371</p>
                </div>
              </a>

              <a
                href="tel:+919782546371"
                className="p-4 rounded-2xl bg-[#11161D] border border-[#1E2736] hover:border-[#B7FF00] flex items-center space-x-4 transition group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00] group-hover:scale-110 transition">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#94A3B8]">Direct Phone Call</p>
                  <p className="text-sm font-bold text-[#F8FAFC]">+91 9782546371</p>
                </div>
              </a>

              <a
                href="mailto:abhikumawat621@gmail.com"
                className="p-4 rounded-2xl bg-[#11161D] border border-[#1E2736] hover:border-[#38BDF8] flex items-center space-x-4 transition group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#94A3B8]">Email Inquiry</p>
                  <p className="text-xs sm:text-sm font-bold text-[#F8FAFC]">abhikumawat621@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-[#1E2736] space-y-3 text-xs text-[#CBD5E1]">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B7FF00] shrink-0" />
                <span>Rajasthan, India (Serving Nationwide)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#B7FF00] shrink-0" />
                <span>Working Hours: Mon - Sat (9:00 AM - 8:00 PM IST)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B7FF00] shrink-0" />
                <span>100% Confidentiality &amp; Quick Response Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Submission Form */}
        <div className="lg:col-span-7 bg-[#0D1117] border border-[#1E2736] rounded-3xl p-6 sm:p-8">
          {success ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#B7FF00]/10 border border-[#B7FF00] flex items-center justify-center text-[#B7FF00] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">Inquiry Received!</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto">
                  Thank you, <span className="text-[#F8FAFC] font-semibold">{formData.name}</span>. I have received your request and will get back to you within a few hours.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-[#25D366] text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp With This Info</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#CBD5E1]">
                    Your Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#CBD5E1]">
                    WhatsApp / Phone Number <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#CBD5E1]">Business Name &amp; Niche</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Hospital / Sharma Sweets"
                    className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#CBD5E1]">City / Location</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Jaipur, Sikar, Udaipur"
                    className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1]">Service You Need</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] focus:outline-none transition cursor-pointer"
                >
                  <option value="Web Development">Website Design &amp; Development</option>
                  <option value="SEO & Google Maps">SEO &amp; Google Maps Ranking</option>
                  <option value="Meta Ads (FB & IG)">Meta Ads (Facebook &amp; Instagram)</option>
                  <option value="Complete Growth Package">Complete Growth Package (All-in-One)</option>
                  <option value="AI Content Creation">AI Content &amp; Social Media</option>
                  <option value="Consultation">Free Consultation &amp; Strategy Discussion</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1]">
                  Project Details / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your goals, current website (if any), and what you want to achieve..."
                  className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#EF4444] flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-[#B7FF00] hover:bg-[#a6e600] disabled:opacity-50 text-black font-extrabold text-xs font-mono tracking-wider uppercase transition cursor-pointer flex items-center justify-center space-x-2 shadow-xl shadow-[#B7FF00]/10"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SENDING YOUR INQUIRY...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY TO HENDII</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
