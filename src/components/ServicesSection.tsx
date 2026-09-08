import React, { useState } from "react";
import {
  Globe,
  Search,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Zap,
  ArrowRight,
  Shield,
  HelpCircle
} from "lucide-react";

interface ServicesSectionProps {
  onSelectTab: (tab: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectTab }) => {
  const [filterType, setFilterType] = useState<"all" | "web" | "marketing">("all");

  const packages = [
    {
      id: "starter-web",
      category: "web",
      title: "Starter Business Website",
      badge: "Popular For Small Business",
      description: "Fast, mobile-friendly 3-5 page website designed to establish credibility and capture direct WhatsApp inquiries.",
      keyDeliverables: [
        { label: "Delivery", value: "5 - 7 Days Fast Turnaround" },
        { label: "Support", value: "Domain & Hosting Setup Included" },
      ],
      features: [
        "Up to 5 Pages (Home, About, Services, Gallery, Contact)",
        "Mobile & Tablet 100% Responsive Design",
        "Direct WhatsApp Floating Button & Call CTA",
        "Basic On-Page SEO & Google Search Indexing",
        "Google Maps & Social Media Links Integration",
        "Domain & Hosting Setup Assistance",
        "Delivery in 5 to 7 Days"
      ],
      cta: "Discuss on WhatsApp",
      highlight: false,
    },
    {
      id: "growth-pro-web",
      category: "web",
      title: "Pro Business Website + SEO",
      badge: "Best Value & High ROI",
      description: "High-performance custom website with conversion copywriting, speed optimization, and full search setup.",
      keyDeliverables: [
        { label: "Delivery", value: "7 - 10 Days Turnaround" },
        { label: "Support", value: "1 Month Free Edits & Technical Support" },
      ],
      features: [
        "Up to 10 Pages or Custom Dynamic Layout",
        "Ultra-Fast Performance & Gzip Compression",
        "Advanced On-Page SEO + Schema Rich Snippets",
        "Google Search Console & GA4 Setup",
        "Lead Capture Forms with Email/WhatsApp Notifications",
        "Blog / Article Section Setup for Content Ranking",
        "1 Month Free Technical Support & Minor Edits"
      ],
      cta: "Discuss on WhatsApp",
      highlight: true,
    },
    {
      id: "local-seo",
      category: "marketing",
      title: "Local SEO & Google Maps Ranking",
      badge: "Local Dominance",
      description: "Get your business into the Google Map Pack (Top 3 Local Results) to get regular phone calls from local buyers.",
      keyDeliverables: [
        { label: "Objective", value: "Top 3 Google Map Results" },
        { label: "Tracking", value: "Monthly Ranking & Call Reports" },
      ],
      features: [
        "Google Business Profile (GBP) Full Optimization",
        "Local Geo-targeted Keywords Strategy",
        "Local Citation Building & Directory Submissions",
        "Monthly Review Generation Guidance Strategy",
        "Google Search Performance & Keyword Rank Reports",
        "Competitor Rank Monitoring in your city"
      ],
      cta: "Discuss on WhatsApp",
      highlight: false,
    },
    {
      id: "meta-ads",
      category: "marketing",
      title: "Meta Ads (Facebook & Instagram)",
      badge: "Fastest Inquiries",
      description: "Direct lead generation ad campaigns targeting active customers in your city or across India.",
      keyDeliverables: [
        { label: "Channel", value: "Facebook & Instagram Feeds/Reels" },
        { label: "Optimization", value: "Weekly A/B Creative & Audience Testing" },
      ],
      features: [
        "Custom Audience & Demographic Targeting",
        "Ad Creative Design + High-Converting Hindi/English Copy",
        "Direct WhatsApp Lead Click Ads Setup",
        "Meta Pixel Installation & Event Tracking",
        "A/B Testing of Ad Hooks & Headlines",
        "Weekly Optimization & ROI Performance Review"
      ],
      cta: "Discuss on WhatsApp",
      highlight: false,
    },
    {
      id: "ai-content-bundle",
      category: "marketing",
      title: "AI Content & Social Media",
      badge: "Brand Presence",
      description: "Consistent high-quality branded posts, banners, and reels copy for your social media channels.",
      keyDeliverables: [
        { label: "Content", value: "Branded Graphics + Viral Reels Scripts" },
        { label: "Schedule", value: "Organized Monthly Content Calendar" },
      ],
      features: [
        "15 Branded Graphics / Posts per month",
        "High-Engagement Captions & Hashtag Strategy",
        "AI-Assisted Video Scriptwriting for Reels / Shorts",
        "Google Business Profile Weekly Updates",
        "Monthly Content Calendar Planning"
      ],
      cta: "Discuss on WhatsApp",
      highlight: false,
    },
    {
      id: "full-growth-combo",
      category: "marketing",
      title: "Complete Growth Partnership",
      badge: "Full Growth Partner",
      description: "Comprehensive end-to-end management: Website maintenance, Local SEO, Meta Ads & AI content strategy.",
      keyDeliverables: [
        { label: "Scope", value: "Dedicated Full-Stack Partner" },
        { label: "Priority", value: "Direct WhatsApp Line & Regular Calls" },
      ],
      features: [
        "Complete Local SEO & Google Maps Management",
        "Full Meta Ads (FB/Insta) Campaign Management",
        "Website Maintenance & Speed Monitoring",
        "Social Media Creatives & Reel Scripts",
        "Dedicated WhatsApp Group for Priority Support",
        "Bi-Weekly Strategy & Lead Quality Calls"
      ],
      cta: "Discuss on WhatsApp",
      highlight: true,
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-[#B7FF00] text-xs font-mono font-semibold">
          Services &amp; Growth Solutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
          High-Impact Digital Growth Services
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8]">
          Explore tailored digital marketing, custom websites, and local lead-generation solutions designed to scale your business. Reach out to Hendii directly to discuss your requirements.
        </p>

        {/* Filter Toggle */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0D1117] border border-[#1E2736] mt-4">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition cursor-pointer ${
              filterType === "all"
                ? "bg-[#B7FF00] text-black shadow-md"
                : "text-[#94A3B8] hover:text-[#F8FAFC]"
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setFilterType("web")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition cursor-pointer ${
              filterType === "web"
                ? "bg-[#B7FF00] text-black shadow-md"
                : "text-[#94A3B8] hover:text-[#F8FAFC]"
            }`}
          >
            Website Development
          </button>
          <button
            onClick={() => setFilterType("marketing")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition cursor-pointer ${
              filterType === "marketing"
                ? "bg-[#B7FF00] text-black shadow-md"
                : "text-[#94A3B8] hover:text-[#F8FAFC]"
            }`}
          >
            Digital Marketing &amp; SEO
          </button>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages
          .filter((pkg) => filterType === "all" || pkg.category === filterType)
          .map((pkg) => {
            const waUrl = `https://wa.me/919782546371?text=${encodeURIComponent(
              `Hi Hendii! I am interested in discussing the "${pkg.title}" service for my business. Can we talk about the requirements?`
            )}`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-[#11161D] to-[#0D1117] border-2 border-[#B7FF00] shadow-2xl shadow-[#B7FF00]/10"
                    : "bg-[#0D1117] border border-[#1E2736] hover:border-[#38BDF8]/40"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B7FF00] text-black text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-lg bg-[#11161D] border border-[#1E2736] text-[#CBD5E1]">
                        {pkg.category === "web" ? "Web Solution" : "Growth Marketing"}
                      </span>
                      {!pkg.highlight && (
                        <span className="text-[11px] font-mono text-[#94A3B8]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">{pkg.title}</h3>
                    <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">{pkg.description}</p>
                  </div>

                  {/* Key Highlights Box */}
                  <div className="p-3.5 rounded-2xl bg-[#11161D] border border-[#1E2736] grid grid-cols-1 gap-2 text-xs font-mono">
                    {pkg.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] shrink-0" />
                        <span className="text-[#94A3B8] text-[11px]">{item.label}:</span>
                        <span className="text-[#F8FAFC] text-[11px] font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-1">
                    <p className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-[#CBD5E1]">
                          <CheckCircle2 className="w-4 h-4 text-[#B7FF00] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-8 space-y-2.5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs font-mono tracking-wider uppercase transition cursor-pointer flex items-center justify-center space-x-2 ${
                      pkg.highlight
                        ? "bg-[#B7FF00] hover:bg-[#a6e600] text-black shadow-lg shadow-[#B7FF00]/20"
                        : "bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{pkg.cta}</span>
                  </a>

                  <button
                    onClick={() => onSelectTab("contact")}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#11161D] border border-transparent hover:border-[#1E2736] transition cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span>Or Send Project Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* Need Custom Scope? */}
      <div className="bg-[#0D1117] border border-[#1E2736] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-[#F8FAFC]">Need a Customized Scope or Combined Strategy?</h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl mx-auto">
          Whether you need a custom website, local Google Maps ranking, or targeted ad campaigns, we can tailor a plan specifically for your business goals.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366] text-black text-xs font-mono font-bold hover:bg-[#20bd5a] transition flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
          <button
            onClick={() => onSelectTab("contact")}
            className="px-6 py-3 rounded-xl bg-[#11161D] border border-[#1E2736] hover:border-[#B7FF00] text-xs font-mono text-[#F8FAFC] font-semibold cursor-pointer"
          >
            Fill Inquiry Form
          </button>
        </div>
      </div>
    </div>
  );
};
