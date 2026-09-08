import React, { useState, useEffect } from "react";
import { Header } from "./components/Header.tsx";
import { OverviewSection } from "./components/OverviewSection.tsx";
import { FAQSection } from "./components/FAQSection.tsx";
import { AIToolsSection } from "./components/AIToolsSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { LeadsSection } from "./components/LeadsSection.tsx";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp.tsx";
import { AnimatePresence, motion } from "motion/react";
import { Heart, Globe, MessageCircle } from "lucide-react";

export function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#07090E] text-[#F8FAFC]">
      {/* Persistent Navigation Header */}
      <Header activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Tab Content with Transitions */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <OverviewSection onSelectTab={setActiveTab} />
            </motion.div>
          )}

          {(activeTab === "faq" || activeTab === "services") && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <FAQSection onSelectTab={setActiveTab} />
            </motion.div>
          )}

          {(activeTab === "ai_tools" || activeTab === "ai-tools") && (
            <motion.div
              key="ai_tools"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <AIToolsSection onSelectTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <ContactSection onSelectTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === "leads" && (
            <motion.div
              key="leads"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <LeadsSection onNavigateToContact={() => setActiveTab("contact")} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modern Footer */}
      <footer className="border-t border-[#1E2736] bg-[#0D1117] py-12 text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-[#B7FF00] text-black font-extrabold flex items-center justify-center text-sm">
                  H
                </div>
                <span className="text-base font-bold text-[#F8FAFC]">Hendii Digital Growth</span>
              </div>
              <p className="max-w-md text-xs leading-relaxed">
                Dedicated freelance growth partner delivering fast web development, local SEO ranking, targeted Meta Ad campaigns, and AI content systems for businesses across Rajasthan &amp; India.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-xs uppercase text-[#CBD5E1] font-bold">Quick Navigation</p>
              <ul className="space-y-1.5">
                <li>
                  <button onClick={() => setActiveTab("overview")} className="hover:text-[#B7FF00] transition cursor-pointer">
                    Overview &amp; About
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("faq")} className="hover:text-[#B7FF00] transition cursor-pointer">
                    Questions &amp; Answers
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("ai_tools")} className="hover:text-[#B7FF00] transition cursor-pointer">
                    AI Marketing Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("contact")} className="hover:text-[#B7FF00] transition cursor-pointer">
                    Contact &amp; Free Consultation
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-xs uppercase text-[#CBD5E1] font-bold">Connect With Hendii</p>
              <ul className="space-y-1.5 font-mono text-[11px]">
                <li>Phone: +91 9782546371</li>
                <li>Email: abhikumawat621@gmail.com</li>
                <li>Location: Rajasthan, India</li>
                <li>
                  <a
                    href="https://wa.me/919782546371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline flex items-center space-x-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat On WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E2736]/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
            <p>© {new Date().getFullYear()} Hendii. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <button onClick={() => setActiveTab("leads")} className="hover:text-[#38BDF8] transition cursor-pointer">
                Admin Inquiries Portal
              </button>
              <span>•</span>
              <a href="/sitemap.xml" target="_blank" className="hover:text-[#B7FF00] transition">
                Sitemap
              </a>
              <span>•</span>
              <a href="/robots.txt" target="_blank" className="hover:text-[#B7FF00] transition">
                Robots.txt
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
