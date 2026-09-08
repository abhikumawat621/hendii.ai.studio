import React, { useState } from "react";
import { HelpCircle, Globe, PhoneCall, Shield, Menu, X, Bot, FileSpreadsheet } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "faq", label: "Questions & Answers", icon: HelpCircle },
    { id: "ai_tools", label: "AI Marketing Studio", icon: Bot },
    { id: "leads", label: "Client Inquiries", icon: FileSpreadsheet, isPrivate: true },
    { id: "contact", label: "Hire / Contact", icon: PhoneCall },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#07090E]/85 border-b border-[#1E2736]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick("overview")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B7FF00] to-[#7C3AED] flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-[#B7FF00]/10 group-hover:scale-105 transition">
              H
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-[#F8FAFC]">
                  Hendii
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-[#B7FF00] text-[10px] font-mono uppercase tracking-wider">
                  Rajasthan
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#94A3B8] hidden sm:block">
                Freelance Growth &amp; Tech Partner
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                activeTab === item.id ||
                (item.id === "faq" && activeTab === "services") ||
                (item.id === "ai_tools" && activeTab === "ai-tools");

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition flex items-center space-x-1.5 cursor-pointer ${
                    isActive
                      ? "text-[#B7FF00] bg-[#11161D] border border-[#B7FF00]/30 shadow-sm shadow-[#B7FF00]/10"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#11161D]/50 border border-transparent"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {item.isPrivate && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" title="Admin Protected" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Direct WhatsApp / Call CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-mono font-semibold hover:bg-[#25D366] hover:text-black transition flex items-center space-x-1.5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>+91 9782546371</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#11161D] border border-[#1E2736] text-[#CBD5E1] hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1E2736] bg-[#0D1117] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeTab === item.id ||
              (item.id === "faq" && activeTab === "services");
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  isActive
                    ? "text-[#B7FF00] bg-[#11161D] border border-[#B7FF00]/40"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#11161D]"
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.isPrivate && (
                  <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#1E2736]/60">
            <a
              href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs"
            >
              <span>Chat on WhatsApp (+91 9782546371)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
