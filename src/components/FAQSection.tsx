import React, { useState, useMemo } from "react";
import {
  HelpCircle,
  Search,
  MessageCircle,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Globe,
  MapPin,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  ArrowRight
} from "lucide-react";

interface FAQSectionProps {
  onSelectTab: (tab: string) => void;
}

interface FAQItem {
  id: string;
  category: "general" | "website" | "seo" | "ads" | "pricing";
  categoryLabel: string;
  question: string;
  questionHindi?: string;
  answer: string;
  points?: string[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onSelectTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "q-1": true,
    "q-4": true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs: FAQItem[] = [
    // 1. General / Working with Hendii
    {
      id: "q-1",
      category: "general",
      categoryLabel: "Working with Hendii",
      question: "Why should I hire Hendii directly instead of an expensive agency?",
      questionHindi: "एजेंसी के बजाय सीधे Hendii से काम करवाने का क्या फ़ायदा है?",
      answer: "Traditional digital marketing agencies often charge high fees to cover office rent and account managers, and then pass your work to inexperienced interns. When you work with Hendii, you collaborate directly with the specialist executing your website, Google ranking, and ad campaigns.",
      points: [
        "100% Direct WhatsApp access (+91 9782546371) — no middle-men or waiting queues",
        "Faster project turnarounds and immediate revisions",
        "Honest, ROI-focused advice without unnecessary upselling",
        "Personalized attention dedicated to your specific business niche"
      ]
    },
    {
      id: "q-2",
      category: "general",
      categoryLabel: "Working with Hendii",
      question: "How do we get started on a project?",
      questionHindi: "प्रोजेक्ट शुरू करने का प्रोसेस क्या है?",
      answer: "The process is smooth, quick, and hassle-free:",
      points: [
        "Step 1 (Free Discussion): Reach out via WhatsApp (+91 9782546371) or fill the inquiry form with your business details.",
        "Step 2 (Scope & Plan): We discuss your goals (website, Google Maps, or Meta Ads) and agree on deliverables and timeline.",
        "Step 3 (Execution & Preview): I build your project and share live previews for your feedback.",
        "Step 4 (Review & Launch): After your final approval, we launch the project publicly!"
      ]
    },
    {
      id: "q-3",
      category: "general",
      categoryLabel: "Working with Hendii",
      question: "I don't have technical knowledge. Will you guide me through everything?",
      questionHindi: "मुझे टेक्निकल नॉलेज नहीं है, क्या आप सब कुछ गाइड करेंगे?",
      answer: "Yes, completely! Most of my clients are doctors, teachers, store owners, builders, and local entrepreneurs who don't know coding or SEO terminology. I handle all technical setups (domain, hosting, SSL, Google verification, Pixel) and explain everything in simple, conversational language so you feel confident at every step."
    },
    {
      id: "q-4",
      category: "general",
      categoryLabel: "Working with Hendii",
      question: "Do you only work with businesses in Rajasthan or all across India?",
      questionHindi: "क्या आप केवल राजस्थान में या पूरे भारत के क्लाइंट्स के साथ काम करते हैं?",
      answer: "While based in Rajasthan (serving Jaipur, Sikar, Udaipur, Jodhpur, Kota, Ajmer, etc.), I work with businesses, clinics, institutions, and startups all across India. All consultations, screen shares, and progress reviews happen seamlessly over WhatsApp, phone calls, and Google Meet."
    },

    // 2. Website Design & Development
    {
      id: "q-5",
      category: "website",
      categoryLabel: "Website Development",
      question: "Why does my local business need a custom website in 2026?",
      questionHindi: "मेरे बिज़नेस के लिए वेबसाइट होना क्यों ज़रूरी है?",
      answer: "Today, before visiting any shop, clinic, hospital, or institute, customers search on Google. A modern website acts as your 24/7 digital storefront:",
      points: [
        "Establishes instant credibility and trust over local competitors",
        "Allows customers to message directly on WhatsApp or call with a single tap",
        "Showcases your photos, portfolio, customer reviews, and exact location",
        "Works as the primary landing destination for Google Maps and social media ads"
      ]
    },
    {
      id: "q-6",
      category: "website",
      categoryLabel: "Website Development",
      question: "How long does it take to make my business website live?",
      questionHindi: "वेबसाइट बनने में कितना समय लगता है?",
      answer: "A standard 3 to 5-page business website takes only 5 to 7 working days once the basic information is provided. More extensive custom websites or catalogs take 7 to 10 working days."
    },
    {
      id: "q-7",
      category: "website",
      categoryLabel: "Website Development",
      question: "What details or materials do I need to provide to start?",
      questionHindi: "वेबसाइट शुरू करने के लिए मुझे क्या देना होगा?",
      answer: "Very basic details are enough:",
      points: [
        "Your business name, contact number, and location",
        "A brief list of services or products you offer",
        "Photos of your store, office, clinic, or past work (if available)",
        "Logo (if you have one; if not, I can design a clean, modern logo for you)",
        "Don't worry about website text — I help draft high-converting, professional content for your pages!"
      ]
    },
    {
      id: "q-8",
      category: "website",
      categoryLabel: "Website Development",
      question: "Will my website load fast and look good on mobile phones?",
      questionHindi: "क्या वेबसाइट मोबाइल में तेज़ और अच्छी दिखेगी?",
      answer: "Yes, 100%! Over 85% of visitors in India browse on smartphones. Every website I build is designed mobile-first, lightweight, and super responsive. It features instant floating WhatsApp and click-to-call buttons so you never lose a customer."
    },
    {
      id: "q-9",
      category: "website",
      categoryLabel: "Website Development",
      question: "Who will own the domain, hosting, and website assets?",
      questionHindi: "डोमेन और होस्टिंग का मालिकाना हक़ किसके पास रहेगा?",
      answer: "You will! I believe in 100% client ownership. Your domain and hosting accounts belong entirely to you with full administrative credentials. You are never locked in or dependent on anyone."
    },
    {
      id: "q-10",
      category: "website",
      categoryLabel: "Website Development",
      question: "What happens if I need changes or edits after the website is live?",
      questionHindi: "वेबसाइट लाइव होने के बाद बदलाव या अपडेट कैसे होंगे?",
      answer: "Every website includes free post-launch support for minor edits, phone number updates, or technical assistance. If you need regular new content, blogs, or seasonal banners, ongoing support is available anytime."
    },

    // 3. Google Maps & Local SEO
    {
      id: "q-11",
      category: "seo",
      categoryLabel: "Google Maps & Local SEO",
      question: "What is Google Maps (Local SEO) ranking and how does it bring customers?",
      questionHindi: "Google Maps पर बिज़नेस रैंक कराने से नए कस्टमर्स कैसे आते हैं?",
      answer: "When nearby buyers search on Google for terms like 'dental clinic near me', 'best school in Jaipur', or 'property consultant in Sikar', Google displays the Top 3 Map Pack with phone call and direction buttons.",
      points: [
        "Appearing in the Top 3 results brings daily inbound phone calls directly to your phone",
        "Local buyers searching on Google have urgent buying intent — they are ready to purchase",
        "Unlike paid ads where calls stop once you stop paying, organic Google Maps rank delivers continuous free leads"
      ]
    },
    {
      id: "q-12",
      category: "seo",
      categoryLabel: "Google Maps & Local SEO",
      question: "How much time does it take to rank on Google Maps?",
      questionHindi: "Google Maps में रैंक होने में कितना समय लगता है?",
      answer: "Google Business Profile optimization, category correction, and initial search indexing happen within 1 to 2 weeks. Ranking in competitive local areas typically takes 4 to 8 weeks of consistent local citation building, geotagged updates, and review generation strategy."
    },
    {
      id: "q-13",
      category: "seo",
      categoryLabel: "Google Maps & Local SEO",
      question: "Do I need a physical shop or office for Google Maps listing?",
      questionHindi: "क्या Google Maps के लिए दुकान या ऑफिस होना ज़रूरी है?",
      answer: "You need a physical address for Google's verification process. However, if you run a service business from home (such as a tutor, plumber, AC technician, or freelance consultant), we can configure a 'Service-Area Profile' where your residential address remains private and only your service cities are shown."
    },

    // 4. Meta Ads (Facebook & Instagram)
    {
      id: "q-14",
      category: "ads",
      categoryLabel: "Meta Ads (Facebook & IG)",
      question: "How do Facebook & Instagram Ads bring direct customer inquiries?",
      questionHindi: "फेसबुक और इंस्टाग्राम विज्ञापनों से डायरेक्ट इंक्वायरी कैसे मिलती है?",
      answer: "Regular social media posts are only shown to a small percentage of your existing followers. With Meta Ads, we show targeted photo and video reel advertisements directly to thousands of active customers in your city, age bracket, and interest groups. A single click opens your WhatsApp chat so you can speak to warm leads instantly."
    },
    {
      id: "q-15",
      category: "ads",
      categoryLabel: "Meta Ads (Facebook & IG)",
      question: "How much budget should I spend on Facebook and Instagram Ads?",
      questionHindi: "फेसबुक-इंस्टाग्राम ऐड्स में कितना बजट लगाना चाहिए?",
      answer: "You have complete control over your ad spend. For local businesses, starting with just ₹300 to ₹500 per day is enough to test and generate active leads. The ad budget is paid directly to Meta via your own card or UPI, so there is zero budget markup or hidden fee."
    },
    {
      id: "q-16",
      category: "ads",
      categoryLabel: "Meta Ads (Facebook & IG)",
      question: "Who creates the ad designs, Hindi/English copy, and reels video scripts?",
      questionHindi: "ऐड्स के बैनर, वीडियो स्क्रिप्ट और कंटेंट कौन तैयार करेगा?",
      answer: "I take care of the entire creative workflow — designing high-converting visual banners, writing persuasive Hindi and English ad captions, creating viral reel script ideas, and configuring Meta Pixel event tracking to lower your cost per inquiry."
    },

    // 5. Pricing & Scope
    {
      id: "q-17",
      category: "pricing",
      categoryLabel: "Scope & Discussion",
      question: "Why are there no fixed prices listed on the website?",
      questionHindi: "वेबसाइट पर फिक्स प्राइसेस क्यों नहीं लिखी हुई हैं?",
      answer: "Every business has unique requirements and stages! A local shop needing a basic 3-page site has a very different scope than an educational institute needing 10 pages and ads management. We discuss your exact requirements on WhatsApp and provide a fair, pocket-friendly quote without agency overheads."
    },
    {
      id: "q-18",
      category: "pricing",
      categoryLabel: "Scope & Discussion",
      question: "How do payments work for projects?",
      questionHindi: "पेमेंट का क्या तरीका रहता है?",
      answer: "For website development, payments are milestone-based (e.g. advance to start, and remaining upon your review and full satisfaction before final launch). For monthly services like SEO or Ads management, it is a flexible monthly arrangement with no locked-in long contracts."
    }
  ];

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "general", label: "Working with Hendii", icon: UserCheck },
    { id: "website", label: "Website Development", icon: Globe },
    { id: "seo", label: "Google Maps & SEO", icon: MapPin },
    { id: "ads", label: "Meta Ads (FB/IG)", icon: TrendingUp },
    { id: "pricing", label: "Scope & Process", icon: ShieldCheck },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        faq.question.toLowerCase().includes(q) ||
        (faq.questionHindi && faq.questionHindi.toLowerCase().includes(q)) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-[#B7FF00] text-xs font-mono font-semibold">
          Client Questions &amp; Answers
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Clear, honest answers to common questions about website development, Google Maps ranking, Meta Ads, and working directly with Hendii.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question (e.g., website time, Google Maps, budget, process)..."
              className="w-full bg-[#0D1117] border border-[#1E2736] focus:border-[#B7FF00] rounded-2xl pl-11 pr-4 py-3.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition cursor-pointer flex items-center space-x-1.5 ${
                  isActive
                    ? "bg-[#B7FF00] text-black shadow-md shadow-[#B7FF00]/20"
                    : "bg-[#0D1117] border border-[#1E2736] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#B7FF00]/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#0D1117] border border-[#1E2736] rounded-3xl p-8 space-y-4">
            <HelpCircle className="w-12 h-12 text-[#94A3B8] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-[#F8FAFC]">No questions found</h3>
            <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
              We couldn't find an answer matching "{searchQuery}". Ask Hendii directly on WhatsApp for an immediate response!
            </p>
            <a
              href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black text-xs font-mono font-bold hover:bg-[#20bd5a] transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp (+91 9782546371)</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#0D1117] border-[#B7FF00]/40 shadow-lg shadow-black/40"
                    : "bg-[#0D1117]/70 border-[#1E2736] hover:border-[#1E2736]/90"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#11161D] border border-[#1E2736] text-[#B7FF00]">
                        {faq.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] pt-1 leading-snug">
                      {faq.question}
                    </h3>
                    {faq.questionHindi && (
                      <p className="text-xs text-[#94A3B8] font-sans">
                        {faq.questionHindi}
                      </p>
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition ${
                      isOpen
                        ? "bg-[#B7FF00]/10 border-[#B7FF00]/30 text-[#B7FF00]"
                        : "bg-[#11161D] border-[#1E2736] text-[#94A3B8]"
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#1E2736]/60 text-xs sm:text-sm text-[#CBD5E1] space-y-3 leading-relaxed">
                    <p>{faq.answer}</p>
                    {faq.points && faq.points.length > 0 && (
                      <ul className="space-y-2 pt-1">
                        {faq.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2 text-xs text-[#CBD5E1]">
                            <span className="text-[#B7FF00] font-bold mt-0.5">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions? Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#11161D] via-[#0D1117] to-[#11161D] border border-[#1E2736] text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mx-auto">
          <MessageCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
          Have a question specific to your business?
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Every business has unique needs. Connect with Hendii directly on WhatsApp — get straightforward advice in 5 minutes without any sales pressure.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919782546371?text=Hi%20Hendii%2C%20I%20have%20a%20question%20regarding%20digital%20marketing%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-mono font-bold transition flex items-center space-x-2 shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 9782546371)</span>
          </a>
          <button
            onClick={() => onSelectTab("contact")}
            className="px-6 py-3.5 rounded-xl bg-[#11161D] border border-[#1E2736] hover:border-[#B7FF00] text-[#F8FAFC] text-xs font-mono font-semibold transition cursor-pointer flex items-center space-x-1.5"
          >
            <span>Submit Written Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
