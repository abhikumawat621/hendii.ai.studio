import React from "react";
import {
  Globe,
  Search,
  Sparkles,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  CheckCircle2,
  Users,
  Code2,
  Award,
  Layers,
  ChevronRight,
  Clock,
  Laptop
} from "lucide-react";

interface OverviewSectionProps {
  onSelectTab: (tab: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onSelectTab }) => {
  const rajasthanCities = [
    "Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Sikar", "Alwar", "Bhilwara", "Sri Ganganagar"
  ];

  return (
    <div className="space-y-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        <div className="absolute top-10 left-1/4 -z-10 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 -z-10 w-96 h-96 bg-[#B7FF00]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#11161D] border border-[#1E2736] text-[#A7AFBA] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
              <span className="text-[#F5F7FA] font-medium">Digital Marketing &amp; AI Specialist</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-[#F5F7FA] tracking-tight leading-[1.08]">
                Hi, I'm{" "}
                <span className="relative inline-block text-[#B7FF00] font-handwriting text-5xl sm:text-7xl lg:text-8xl">
                  Hendii
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#B7FF00] rounded-full" />
                </span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-sans font-bold text-[#A7AFBA] pt-3">
                Freelance Digital Marketer, Web Developer &amp; AI Growth Consultant
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-[#F5F7FA] font-semibold leading-snug">
              "Helping Businesses Grow with Professional Websites, SEO, Meta Ads &amp; AI Content."
            </p>

            <p className="text-sm sm:text-base text-[#A7AFBA] font-sans leading-relaxed max-w-2xl">
              I build modern fast websites, rank businesses on Google Search, run high-converting Meta Ad funnels, and produce AI-assisted marketing assets that turn traffic into paying clients across Rajasthan &amp; India.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#F5F7FA] font-sans">
              <div className="flex items-center space-x-2">
                <span className="text-[#B7FF00] font-bold">✓</span>
                <span>Personal One-to-One Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#B7FF00] font-bold">✓</span>
                <span>Direct WhatsApp Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#B7FF00] font-bold">✓</span>
                <span>Targeted Local Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#B7FF00] font-bold">✓</span>
                <span>Modern &amp; SEO-Friendly</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onSelectTab("contact")}
                className="px-7 py-3.5 rounded-2xl bg-[#B7FF00] hover:bg-[#a6e600] text-black font-extrabold text-sm tracking-wide transition transform hover:-translate-y-0.5 shadow-lg shadow-[#B7FF00]/20 flex items-center space-x-2 cursor-pointer"
              >
                <span>GET FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20want%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#11161D] hover:bg-[#1E2736] border border-[#1E2736] hover:border-[#25D366] text-[#F5F7FA] font-bold text-sm tracking-wide transition flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md bg-[#0D1117] border border-[#1E2736] rounded-3xl p-6 sm:p-8 dot-matrix-bg shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#1E2736] pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-handwriting text-2xl text-[#B7FF00] font-bold">
                  "Let's Grow!" ✨
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#11161D] border border-[#1E2736] hover:border-[#B7FF00]/40 flex items-center space-x-4 transition shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#F8FAFC]">Modern Web Development</p>
                    <p className="text-xs text-[#CBD5E1]">Fast, Clean &amp; Conversion Ready</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#11161D] border border-[#1E2736] hover:border-[#00AEEF]/40 flex items-center space-x-4 transition shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF]">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#F8FAFC]">SEO &amp; Google Indexing</p>
                    <p className="text-xs text-[#CBD5E1]">Rankings &amp; Real Visibility</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#11161D] border border-[#1E2736] hover:border-[#7C3AED]/40 flex items-center space-x-4 transition shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#F8FAFC]">Meta Ads &amp; AI Content</p>
                    <p className="text-xs text-[#CBD5E1]">Targeted Creative Funnels</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2736] flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 rounded-full bg-[#11161D] border border-[#1E2736] text-[11px] font-mono font-semibold text-[#B7FF00]">#WEBSITES</span>
                <span className="px-3 py-1 rounded-full bg-[#11161D] border border-[#1E2736] text-[11px] font-mono font-semibold text-[#00AEEF]">#SEO</span>
                <span className="px-3 py-1 rounded-full bg-[#11161D] border border-[#1E2736] text-[11px] font-mono font-semibold text-[#7C3AED]">#META_ADS</span>
                <span className="px-3 py-1 rounded-full bg-[#11161D] border border-[#1E2736] text-[11px] font-mono font-semibold text-[#F5F7FA]">#AI_CONTENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FREELANCE PROMISE */}
      <section className="bg-[#0D1117] border border-[#1E2736] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono text-[#B7FF00] uppercase tracking-wider">
            Why Work With Hendii Directly?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC]">
            No Agency Bureaucracy. Just Direct, Honest Execution.
          </h2>
          <p className="text-sm text-[#94A3B8]">
            When you hire an agency, you pay for their fancy offices and account managers. When you hire Hendii, you work directly with the specialist doing the actual work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2736] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC]">100% Dedicated Attention</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              You talk directly with me on WhatsApp and calls. No junior interns handling your money or campaigns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2736] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC]">Fast Turnaround Times</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Websites live in 5-7 days. Ad campaigns set up in 48 hours. Quick iterations without corporate red tape.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2736] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC]">Direct Specialist Collaboration</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Work directly with Hendii — clear milestones, rapid communication, and dedicated personal attention for your project.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES BENTO */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#B7FF00] uppercase tracking-wider">
              Comprehensive Growth Toolkit
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] pt-1">
              End-to-End Digital Solutions
            </h2>
          </div>
          <button
            onClick={() => onSelectTab("faq")}
            className="text-xs font-mono text-[#B7FF00] hover:underline flex items-center space-x-1 cursor-pointer"
          >
            <span>View Client Questions &amp; Answers</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => onSelectTab("faq")}
            className="p-6 rounded-3xl bg-[#0D1117] border border-[#1E2736] hover:border-[#B7FF00]/50 transition cursor-pointer space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00] group-hover:scale-110 transition">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#B7FF00] transition">
              Website Design &amp; Development
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Fast, mobile-responsive custom websites &amp; WordPress setups tailored to convert visitors into WhatsApp inquiries.
            </p>
            <span className="inline-block text-[11px] font-mono text-[#B7FF00]">Web Q&amp;A &amp; Details →</span>
          </div>

          <div
            onClick={() => onSelectTab("faq")}
            className="p-6 rounded-3xl bg-[#0D1117] border border-[#1E2736] hover:border-[#00AEEF]/50 transition cursor-pointer space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF] group-hover:scale-110 transition">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#00AEEF] transition">
              SEO &amp; Google Local Rank
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Google Business Profile optimization, keyword research, on-page SEO, and local citations to rank in your city.
            </p>
            <span className="inline-block text-[11px] font-mono text-[#00AEEF]">SEO Q&amp;A &amp; Details →</span>
          </div>

          <div
            onClick={() => onSelectTab("faq")}
            className="p-6 rounded-3xl bg-[#0D1117] border border-[#1E2736] hover:border-[#7C3AED]/50 transition cursor-pointer space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#7C3AED] transition">
              Meta Ads (FB &amp; Instagram)
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Laser-targeted Facebook &amp; Instagram lead generation ad setups with high-converting creative ad copy.
            </p>
            <span className="inline-block text-[11px] font-mono text-[#7C3AED]">Ads Q&amp;A &amp; Details →</span>
          </div>

          <div
            onClick={() => onSelectTab("ai_tools")}
            className="p-6 rounded-3xl bg-[#0D1117] border border-[#1E2736] hover:border-[#F43F5E]/50 transition cursor-pointer space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F43F5E]/10 border border-[#F43F5E]/30 flex items-center justify-center text-[#F43F5E] group-hover:scale-110 transition">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#F43F5E] transition">
              AI Marketing Studio
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Interactive Gemini AI generator for instant marketing plans, ad copies, SEO keywords, and social content.
            </p>
            <span className="inline-block text-[11px] font-mono text-[#F43F5E]">Free Interactive Tool →</span>
          </div>
        </div>
      </section>

      {/* 4. RAJASTHAN LOCAL COVERAGE */}
      <section className="bg-[#0D1117] border border-[#1E2736] rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center space-x-3 text-[#B7FF00]">
          <MapPin className="w-6 h-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
            Serving Businesses Across Rajasthan &amp; Pan-India
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-3xl">
          Whether you run a coaching institute in Sikar, a boutique hotel in Udaipur, a real estate firm in Jaipur, or an export business in Jodhpur, I provide localized digital marketing that connects you with nearby customers.
        </p>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {rajasthanCities.map((city) => (
            <span
              key={city}
              className="px-3.5 py-1.5 rounded-xl bg-[#11161D] border border-[#1E2736] text-xs font-mono text-[#CBD5E1] hover:border-[#B7FF00]/50 transition cursor-default"
            >
              📍 {city}
            </span>
          ))}
          <span className="px-3.5 py-1.5 rounded-xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-xs font-mono text-[#B7FF00] font-bold">
            + All India Online
          </span>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#11161D] via-[#0D1117] to-[#11161D] border border-[#1E2736] text-center space-y-6 overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-[#B7FF00] uppercase tracking-wider">
            Ready To Get More Customers?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
            Let's Build Something Great Together
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Get a free audit of your current online presence or get a customized project quote within 24 hours.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => onSelectTab("contact")}
            className="px-8 py-4 rounded-2xl bg-[#B7FF00] hover:bg-[#a6e600] text-black font-extrabold text-sm tracking-wide transition transform hover:scale-105 shadow-xl shadow-[#B7FF00]/20 cursor-pointer"
          >
            START A PROJECT TODAY
          </button>
          <a
            href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20let%27s%20discuss%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-bold text-sm hover:bg-[#25D366] hover:text-black transition flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>DIRECT WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
};
