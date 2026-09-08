import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "919782546371";
  const defaultMessage = encodeURIComponent(
    "Hello Hendii! I visited your website and would like to discuss a project / grow my business."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Tooltip bubble on desktop */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Hendii"
        className="hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#11161D]/90 backdrop-blur-md border border-[#1E2736] text-xs font-mono text-[#F8FAFC] shadow-xl hover:border-[#25D366] transition group"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="group-hover:text-[#25D366] transition">Chat on WhatsApp</span>
      </a>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-black shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-6 h-6 fill-current text-white" />
      </a>
    </div>
  );
};
