import React, { useState } from "react";
import { MARKETER_INFO } from "../data/portfolioData";
import { MessageCircle, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import { TabType } from "../types";

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#07090D] border-t border-[#1E2736] pt-16 pb-12 text-[#A7AFBA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-handwriting font-bold text-3xl text-white">
                Hendii.
              </span>
            </div>
            <p className="text-xs font-mono text-[#B7FF00] font-semibold">
              Digital Marketing &amp; AI Specialist
            </p>
            <p className="text-xs text-[#A7AFBA] font-sans leading-relaxed max-w-sm">
              Helping businesses grow online with smart digital marketing, SEO &amp; AI solutions. Direct work, transparent communication, and tailored results.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#F5F7FA]">
              <MapPin className="w-4 h-4 text-[#B7FF00]" />
              <span>Rajasthan, India (Serving Globally)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab("overview")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition"
                >
                  Home &amp; About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("faq")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition"
                >
                  Questions &amp; Answers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("ai_tools")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition"
                >
                  AI Marketing Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("contact")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition"
                >
                  Contact &amp; Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Guides & Q&A */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
              Client Guides &amp; Q&amp;A
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab("faq")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition text-left"
                >
                  Website Development Q&amp;A
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("faq")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition text-left"
                >
                  Google Maps &amp; Local SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("faq")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition text-left"
                >
                  Meta Ads &amp; Lead Generation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("faq")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition text-left"
                >
                  Working Directly with Hendii
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab("contact")}
                  className="text-[#CBD5E1] hover:text-[#B7FF00] transition text-left"
                >
                  Free Consultation &amp; Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-xs text-[#CBD5E1]">
              Get digital growth tips &amp; strategies straight to your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-[#B7FF00] text-xs font-mono flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    aria-label="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-3 py-2 bg-[#11161D] border border-[#1E2736] rounded-l-xl text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#B7FF00]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-3 py-2 bg-[#B7FF00] text-[#07090D] rounded-r-xl font-bold text-xs hover:bg-[#a5e600] transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Social & Chat Links */}
            <div className="pt-2 flex items-center space-x-3 text-xs">
              <a
                href={`https://wa.me/${MARKETER_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Hendii on WhatsApp"
                className="text-[#B7FF00] hover:underline flex items-center space-x-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <span>•</span>
              <a
                href={`mailto:${MARKETER_INFO.email}`}
                aria-label="Send email to Hendii"
                className="text-[#CBD5E1] hover:text-white transition flex items-center space-x-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E2736] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7AFBA] font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Hendii. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms &amp; Conditions</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
