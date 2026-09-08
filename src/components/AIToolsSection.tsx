import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  Copy,
  Check,
  Send,
  Loader2,
  Lightbulb,
  FileText,
  Search,
  Video,
  Target,
  ArrowRight
} from "lucide-react";

interface AIToolsSectionProps {
  onSelectTab: (tab: string) => void;
}

export const AIToolsSection: React.FC<AIToolsSectionProps> = ({ onSelectTab }) => {
  const [businessType, setBusinessType] = useState("");
  const [targetCity, setTargetCity] = useState("Jaipur");
  const [selectedTool, setSelectedTool] = useState<"strategy" | "ad_copy" | "seo_keywords" | "reel_script">("strategy");
  const [language, setLanguage] = useState<"Hinglish" | "English" | "Hindi">("Hinglish");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const tools = [
    {
      id: "strategy",
      name: "30-Day Growth Plan",
      icon: Target,
      desc: "Custom roadmap for local inquiries, ads, and SEO milestones.",
    },
    {
      id: "ad_copy",
      name: "Meta Ad Copy (FB & IG)",
      icon: FileText,
      desc: "High-CTR ad headlines, hooks, emotional pain points, and CTA.",
    },
    {
      id: "seo_keywords",
      name: "Local SEO Keywords",
      icon: Search,
      desc: "High-intent search queries and Google Map tags for your city.",
    },
    {
      id: "reel_script",
      name: "Viral Reel Script",
      icon: Video,
      desc: "30-60 second engaging video script with visual hook and CTA.",
    },
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType.trim()) {
      setErrorMsg("Please enter your business type or niche.");
      return;
    }

    setIsGenerating(true);
    setErrorMsg(null);
    setGeneratedOutput("");

    try {
      const response = await fetch("/api/generate-marketing-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessType,
          targetCity,
          toolType: selectedTool,
          language,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to generate AI strategy.");
      }

      setGeneratedOutput(data.content);
    } catch (err: any) {
      console.error("AI Generation Error:", err);
      setErrorMsg(err.message || "Something went wrong while connecting to the AI engine.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!generatedOutput) return;
    navigator.clipboard.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-mono font-semibold inline-flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive AI Growth Engine</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
          Hendii AI Marketing Studio
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
          Test drive my custom AI marketing workflows. Generate instant actionable growth plans, ad copies, and local SEO blueprints for any business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form */}
        <div className="lg:col-span-5 bg-[#0D1117] border border-[#1E2736] rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <label className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider block">
              1. Select AI Marketing Tool
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {tools.map((t) => {
                const Icon = t.icon;
                const isSelected = selectedTool === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTool(t.id as any)}
                    className={`p-3 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#11161D] border-[#B7FF00] text-[#F8FAFC] shadow-sm"
                        : "bg-[#11161D]/50 border-[#1E2736] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#334155]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 mb-2 ${isSelected ? "text-[#B7FF00]" : "text-[#94A3B8]"}`} />
                    <span className="text-xs font-bold block">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#CBD5E1]">
                2. Business Name &amp; Niche / Service
              </label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="e.g. Dental Clinic, Cafe, Real Estate, Coaching"
                className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1]">Target City / Area</label>
                <input
                  type="text"
                  value={targetCity}
                  onChange={(e) => setTargetCity(e.target.value)}
                  placeholder="e.g. Jaipur, Sikar"
                  className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-4 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1]">Language Style</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl px-3 py-3 text-xs text-[#F8FAFC] focus:outline-none transition"
                >
                  <option value="Hinglish">Hinglish (Best for Ads)</option>
                  <option value="English">English</option>
                  <option value="Hindi">Pure Hindi</option>
                </select>
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl p-3">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 rounded-2xl bg-[#B7FF00] hover:bg-[#a6e600] disabled:opacity-50 text-black font-extrabold text-xs font-mono tracking-wider uppercase transition cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-[#B7FF00]/10"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>GENERATING WITH GEMINI AI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>GENERATE STRATEGY NOW</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Output Window */}
        <div className="lg:col-span-7 bg-[#0D1117] border border-[#1E2736] rounded-3xl p-6 sm:p-8 min-h-[460px] flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E2736] pb-4">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-[#B7FF00]" />
                <span className="text-xs font-mono text-[#CBD5E1] font-bold">
                  AI Strategy Output
                </span>
              </div>

              {generatedOutput && (
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl bg-[#11161D] border border-[#1E2736] hover:border-[#B7FF00] text-xs font-mono text-[#CBD5E1] flex items-center space-x-1.5 transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B7FF00]" />
                      <span className="text-[#B7FF00]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Output</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {isGenerating ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00] animate-bounce">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-sm font-mono text-[#F8FAFC]">Crafting personalized marketing plan...</p>
                <p className="text-xs text-[#94A3B8]">Analyzing local competitors, search intent, and ad hooks</p>
              </div>
            ) : generatedOutput ? (
              <div className="whitespace-pre-wrap text-xs sm:text-sm text-[#CBD5E1] font-mono leading-relaxed max-h-[500px] overflow-y-auto pr-2">
                {generatedOutput}
              </div>
            ) : (
              <div className="py-20 flex flex-col items-center justify-center space-y-3 text-center text-[#94A3B8]">
                <Lightbulb className="w-8 h-8 text-[#334155]" />
                <p className="text-sm font-semibold text-[#CBD5E1]">Ready for Generation</p>
                <p className="text-xs max-w-sm">
                  Enter your business details on the left to receive a custom tailored digital growth plan.
                </p>
              </div>
            )}
          </div>

          {generatedOutput && (
            <div className="pt-6 mt-6 border-t border-[#1E2736] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#94A3B8]">
                Want Hendii to implement and execute this strategy for you?
              </span>
              <button
                onClick={() => onSelectTab("contact")}
                className="px-5 py-2.5 rounded-xl bg-[#B7FF00] text-black font-extrabold text-xs font-mono hover:bg-[#a6e600] transition cursor-pointer flex items-center space-x-1.5"
              >
                <span>Hire Hendii To Execute</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
