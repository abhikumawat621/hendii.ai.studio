import React, { useMemo, useState } from "react";
import {
  HelpCircle,
  Search,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Globe,
  MapPin,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  ArrowRight,
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

const faqs: FAQItem[] = [
  // =========================================================
  // 1. WORKING WITH HENDII
  // =========================================================
  {
    id: "q-1",
    category: "general",
    categoryLabel: "Working with Hendii",
    question: "Why should I work directly with Hendii instead of a digital marketing agency?",
    questionHindi:
      "डिजिटल मार्केटिंग एजेंसी के बजाय सीधे Hendii के साथ काम क्यों करें?",
    answer:
      "Working directly with Hendii gives you one-to-one communication with the person handling your website, SEO, advertising, and digital growth work. This keeps communication simple and makes it easier to discuss your actual business goals.",
    points: [
      "Direct communication through WhatsApp, phone, or online meetings",
      "One person coordinating your digital marketing requirements",
      "Clear discussion of scope, deliverables, timelines, and priorities",
      "Strategies can be adjusted according to your business and target audience",
    ],
  },
  {
    id: "q-2",
    category: "general",
    categoryLabel: "Working with Hendii",
    question: "How do I start a project with Hendii?",
    questionHindi: "Hendii के साथ प्रोजेक्ट शुरू करने का प्रोसेस क्या है?",
    answer:
      "You can start by sending your business details and requirements through WhatsApp or the inquiry form. We first discuss your goals, recommend a suitable approach, confirm the scope and timeline, and then begin the project.",
    points: [
      "Step 1: Share your business and requirements",
      "Step 2: Discuss goals, audience, services, and priorities",
      "Step 3: Confirm scope, deliverables, timeline, and payment terms",
      "Step 4: Start execution and review progress",
    ],
  },
  {
    id: "q-3",
    category: "general",
    categoryLabel: "Working with Hendii",
    question: "I don't have technical knowledge. Will Hendii guide me?",
    questionHindi:
      "मुझे टेक्निकल नॉलेज नहीं है, क्या Hendii मुझे गाइड करेगा?",
    answer:
      "Yes. You do not need coding, SEO, advertising, or technical knowledge to start. Hendii explains the required steps in simple language and can guide you through website content, domain and hosting setup, analytics, search visibility, and advertising requirements.",
  },
  {
    id: "q-4",
    category: "general",
    categoryLabel: "Working with Hendii",
    question: "Does Hendii work only in Rajasthan or across India?",
    questionHindi:
      "क्या Hendii केवल राजस्थान में काम करता है या पूरे भारत में?",
    answer:
      "Hendii is based in Rajasthan and works with businesses across Rajasthan and India. Projects can be handled remotely through WhatsApp, phone calls, video meetings, screen sharing, and online project communication.",
    points: [
      "Based in Rajasthan, India",
      "Available for businesses across India",
      "Remote consultations and project coordination",
      "Local marketing strategies can be adapted to the target city or service area",
    ],
  },
  {
    id: "q-5",
    category: "general",
    categoryLabel: "Working with Hendii",
    question: "What digital marketing services does Hendii provide?",
    questionHindi: "Hendii कौन-कौन सी digital marketing services देता है?",
    answer:
      "Hendii provides website development, SEO, local SEO, Meta Ads, social media management, AI automation, AI-assisted content creation, lead generation support, and other digital growth solutions based on the business requirement.",
    points: [
      "Website development",
      "SEO and local SEO",
      "Meta Ads for Facebook and Instagram",
      "Social media management",
      "AI automation and AI-assisted marketing",
      "Content and creative support",
    ],
  },

  // =========================================================
  // 2. WEBSITE DEVELOPMENT
  // =========================================================
  {
    id: "q-6",
    category: "website",
    categoryLabel: "Website Development",
    question: "Why does a local business need a website?",
    questionHindi: "लोकल बिज़नेस के लिए वेबसाइट क्यों ज़रूरी है?",
    answer:
      "A business website gives customers a central place to understand your services, trust your business, find your contact details, and take action. It can also support SEO, Google Business Profile visibility, social media campaigns, and paid advertising.",
    points: [
      "Show your services, products, work, or portfolio",
      "Provide contact, WhatsApp, and location information",
      "Build a professional online presence",
      "Support Google Search and local SEO efforts",
      "Give advertising campaigns a dedicated landing destination",
    ],
  },
  {
    id: "q-7",
    category: "website",
    categoryLabel: "Website Development",
    question: "How long does it take to build a business website?",
    questionHindi: "बिज़नेस वेबसाइट बनाने में कितना समय लगता है?",
    answer:
      "A simple business website can often be completed within about 5 to 10 working days after the required information and content are available. The actual timeline depends on the number of pages, design requirements, functionality, content, revisions, and integrations.",
  },
  {
    id: "q-8",
    category: "website",
    categoryLabel: "Website Development",
    question: "What information do I need to provide for my website?",
    questionHindi: "वेबसाइट शुरू करने के लिए मुझे क्या जानकारी देनी होगी?",
    answer:
      "You normally need to provide basic business information such as your business name, services, contact details, location, logo, photos, social links, and any important information customers should know. If you do not have website copy ready, the content can be planned and drafted as part of the project.",
    points: [
      "Business name and contact information",
      "Services or products",
      "Business location or service areas",
      "Logo and available photos",
      "Social media links",
      "Any existing website, domain, hosting, or brand assets",
    ],
  },
  {
    id: "q-9",
    category: "website",
    categoryLabel: "Website Development",
    question: "Will my website work properly on mobile phones?",
    questionHindi: "क्या मेरी वेबसाइट मोबाइल में सही चलेगी?",
    answer:
      "Yes. The website should be designed responsively so that its layout, text, buttons, images, and navigation adapt to mobile, tablet, and desktop screens. Performance also depends on hosting, images, scripts, third-party services, and the final website configuration.",
  },
  {
    id: "q-10",
    category: "website",
    categoryLabel: "Website Development",
    question: "Will my website be optimized for Google Search?",
    questionHindi: "क्या मेरी वेबसाइट Google Search के लिए optimize होगी?",
    answer:
      "The website can be structured with SEO fundamentals such as clear headings, useful page content, descriptive titles, relevant internal links, mobile-friendly layouts, crawlable content, and appropriate technical elements. SEO results themselves depend on competition, search demand, content quality, authority, and ongoing optimization.",
  },
  {
    id: "q-11",
    category: "website",
    categoryLabel: "Website Development",
    question: "Who owns my domain and hosting?",
    questionHindi: "मेरे domain और hosting का मालिक कौन रहेगा?",
    answer:
      "The domain and hosting should ideally be registered in the client's own account so the client retains ownership and administrative control. If Hendii helps with setup or configuration, the access and ownership arrangement should be clearly discussed before the project begins.",
  },
  {
    id: "q-12",
    category: "website",
    categoryLabel: "Website Development",
    question: "Can I update my website after it goes live?",
    questionHindi: "वेबसाइट लाइव होने के बाद क्या उसमें बदलाव कर सकता हूँ?",
    answer:
      "Yes. Website content, contact information, images, sections, offers, and other elements can be updated after launch. Minor changes and larger development changes can be handled according to the agreed support arrangement and project scope.",
  },
  {
    id: "q-13",
    category: "website",
    categoryLabel: "Website Development",
    question: "Can Hendii build a website for a small business or startup?",
    questionHindi:
      "क्या Hendii छोटे बिज़नेस या startup के लिए वेबसाइट बना सकता है?",
    answer:
      "Yes. A website can be planned according to the size, goals, audience, and budget of a small business or startup. The project can begin with the most important information and conversion points instead of adding unnecessary features.",
  },

  // =========================================================
  // 3. SEO & LOCAL SEO
  // =========================================================
  {
    id: "q-14",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "What is local SEO?",
    questionHindi: "Local SEO क्या होता है?",
    answer:
      "Local SEO is the process of improving a business's visibility when people search for relevant products or services in a specific location. It can involve Google Business Profile optimization, website content, local relevance, reviews, citations, and other signals that help search engines understand the business and its service area.",
  },
  {
    id: "q-15",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "How does Google Maps ranking help a local business?",
    questionHindi:
      "Google Maps ranking से local business को क्या फायदा होता है?",
    answer:
      "Google Maps visibility can help people discover a local business when they search for nearby or location-specific services. A well-maintained Google Business Profile can provide useful information such as phone number, website, address or service area, reviews, photos, and directions.",
    points: [
      "Makes important business information easier to find",
      "Can generate calls, website visits, messages, or direction requests",
      "Helps customers discover services in a specific location",
      "Works together with other local SEO signals",
    ],
  },
  {
    id: "q-16",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "How long does local SEO or Google Maps SEO take?",
    questionHindi: "Local SEO या Google Maps SEO में कितना समय लगता है?",
    answer:
      "There is no fixed ranking timeframe for local SEO. Results can vary depending on the business category, location, competition, Google Business Profile quality, website signals, reviews, relevance, and the amount of ongoing optimization. SEO should therefore be treated as an ongoing process rather than a guaranteed fixed-time result.",
  },
  {
    id: "q-17",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "Do I need a physical shop or office for Google Business Profile?",
    questionHindi:
      "क्या Google Business Profile के लिए physical shop या office जरूरी है?",
    answer:
      "Eligibility depends on the type of business and how it serves customers. Some service-area businesses can be eligible without displaying a public customer-facing address, while businesses that receive customers at a location have different requirements. The profile should follow Google's current Business Profile eligibility and representation guidelines.",
  },
  {
    id: "q-18",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "How can SEO help a small business?",
    questionHindi: "SEO छोटे बिज़नेस की कैसे मदद कर सकता है?",
    answer:
      "SEO can help a small business become easier to discover when potential customers search for relevant products, services, questions, or local businesses. A useful SEO strategy focuses on the searches that are relevant to the business rather than simply adding more keywords to a page.",
  },
  {
    id: "q-19",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "How long does SEO take to show results?",
    questionHindi: "SEO का result आने में कितना समय लगता है?",
    answer:
      "SEO does not have a guaranteed fixed timeline. New or competitive websites may need sustained work before meaningful changes become visible, while some less competitive searches can respond sooner. Results depend on competition, technical health, content, relevance, authority, location, and the starting position of the website.",
  },
  {
    id: "q-20",
    category: "seo",
    categoryLabel: "Google Maps & Local SEO",
    question: "What is the difference between SEO and Google Ads?",
    questionHindi: "SEO और Google Ads में क्या difference है?",
    answer:
      "SEO focuses on improving a website's organic visibility in search results, while Google Ads uses paid advertising placements for selected searches. SEO can support longer-term organic visibility, whereas paid search can provide visibility while the advertising campaign is active. Businesses can use either approach or combine them depending on their goals.",
  },

  // =========================================================
  // 4. META ADS
  // =========================================================
  {
    id: "q-21",
    category: "ads",
    categoryLabel: "Meta Ads (FB/IG)",
    question: "How do Facebook and Instagram Ads generate customer inquiries?",
    questionHindi:
      "Facebook और Instagram Ads से customer inquiries कैसे आती हैं?",
    answer:
      "Meta Ads allow businesses to show selected offers, products, services, images, videos, or reels to defined audiences. Depending on the campaign objective, people can be directed to WhatsApp, a website, an instant form, or another destination where they can take the next action.",
  },
  {
    id: "q-22",
    category: "ads",
    categoryLabel: "Meta Ads (FB/IG)",
    question: "How much budget should I spend on Meta Ads?",
    questionHindi: "Facebook और Instagram Ads का budget कितना होना चाहिए?",
    answer:
      "The right Meta Ads budget depends on your location, audience size, offer, competition, campaign objective, creative quality, and target cost per result. For a new campaign, it is usually better to start with a controlled test budget, collect performance data, and then decide whether the campaign should be adjusted or scaled.",
    points: [
      "Start with a budget your business can consistently afford",
      "Test different creatives and audiences",
      "Track the actual cost per lead or inquiry",
      "Scale only after identifying what is working",
    ],
  },
  {
    id: "q-23",
    category: "ads",
    categoryLabel: "Meta Ads (FB/IG)",
    question: "Who creates the Meta Ads designs and copy?",
    questionHindi:
      "Meta Ads के designs और ad copy कौन तैयार करता है?",
    answer:
      "Hendii can handle the creative planning required for a campaign, including ad concepts, visual design direction, Hindi or English copy, captions, calls to action, and short-form video or reel script ideas. The exact creative deliverables depend on the agreed campaign scope.",
  },
  {
    id: "q-24",
    category: "ads",
    categoryLabel: "Meta Ads (FB/IG)",
    question: "Can Meta Ads send customers directly to WhatsApp?",
    questionHindi:
      "क्या Meta Ads से customers को सीधे WhatsApp पर ला सकते हैं?",
    answer:
      "Yes. Meta campaigns can be configured around messaging or other supported conversion destinations, depending on the campaign setup and available Meta features. A WhatsApp-focused campaign can make it easier for interested users to start a conversation with the business.",
  },
  {
    id: "q-25",
    category: "ads",
    categoryLabel: "Meta Ads (FB/IG)",
    question: "What is the difference between Meta Ads and organic social media?",
    questionHindi:
      "Meta Ads और organic social media में क्या अंतर है?",
    answer:
      "Organic social media refers to content published without paying for distribution, while Meta Ads use paid placements to reach selected audiences. Organic content can support brand presence and community building, while paid campaigns can be used when a business wants more controlled audience targeting and measurable campaign objectives.",
  },

  // =========================================================
  // 5. PRICING & PROCESS
  // =========================================================
  {
    id: "q-26",
    category: "pricing",
    categoryLabel: "Scope & Process",
    question: "Why doesn't Hendii show fixed prices for every service?",
    questionHindi:
      "Hendii हर service की fixed price website पर क्यों नहीं दिखाता?",
    answer:
      "Digital projects can have very different scopes even when they use the same service name. Website size, functionality, content, advertising requirements, target locations, campaign complexity, and ongoing support can all change the amount of work involved. Pricing is therefore discussed according to the actual project scope.",
  },
  {
    id: "q-27",
    category: "pricing",
    categoryLabel: "Scope & Process",
    question: "How do website project payments work?",
    questionHindi: "Website project की payment कैसे होती है?",
    answer:
      "Payment terms depend on the project scope and are discussed before work starts. For larger projects, payments can be divided into milestones, while smaller projects may use a simpler advance and completion arrangement. The agreed terms should be clear before development begins.",
  },
  {
    id: "q-28",
    category: "pricing",
    categoryLabel: "Scope & Process",
    question: "Can I hire Hendii only for SEO or only for Meta Ads?",
    questionHindi:
      "क्या मैं Hendii को सिर्फ SEO या सिर्फ Meta Ads के लिए hire कर सकता हूँ?",
    answer:
      "Yes. Services can be discussed individually or combined into a broader digital marketing plan. For example, a business may need only local SEO, only Meta Ads, only a website, or a combination of website development, SEO, advertising, and social media support.",
  },
  {
    id: "q-29",
    category: "pricing",
    categoryLabel: "Scope & Process",
    question: "Can Hendii manage both my website and digital marketing?",
    questionHindi:
      "क्या Hendii मेरी website और digital marketing दोनों manage कर सकता है?",
    answer:
      "Yes. Website development and digital marketing can be planned together when that makes sense for the business. This can help align the website structure, SEO content, landing pages, tracking, advertising campaigns, and lead-generation goals.",
  },
  {
    id: "q-30",
    category: "pricing",
    categoryLabel: "Scope & Process",
    question: "How can a small business generate leads online?",
    questionHindi:
      "Small business online leads कैसे generate कर सकता है?",
    answer:
      "A small business can generate leads through a combination of a useful website, local SEO, Google Business Profile, social media, paid advertising, clear calls to action, WhatsApp or phone contact options, and strong offers. The right combination depends on the business, audience, location, and customer journey.",
  },
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onSelectTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "q-1": true,
    "q-14": true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    {
      id: "all",
      label: "All Questions",
      icon: HelpCircle,
    },
    {
      id: "general",
      label: "Working with Hendii",
      icon: UserCheck,
    },
    {
      id: "website",
      label: "Website Development",
      icon: Globe,
    },
    {
      id: "seo",
      label: "Google Maps & SEO",
      icon: MapPin,
    },
    {
      id: "ads",
      label: "Meta Ads (FB/IG)",
      icon: TrendingUp,
    },
    {
      id: "pricing",
      label: "Scope & Process",
      icon: ShieldCheck,
    },
  ];

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;

      if (!query) {
        return matchesCategory;
      }

      const searchableText = [
        faq.question,
        faq.questionHindi || "",
        faq.answer,
        faq.categoryLabel,
        ...(faq.points || []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#B7FF00]/10 border border-[#B7FF00]/30 text-[#B7FF00] text-xs font-mono font-semibold">
          Client Questions &amp; Answers
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
          Frequently Asked Questions About Digital Marketing, SEO &amp; Website
          Development
        </h1>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
          Find clear answers about website development, SEO, Google Maps,
          Meta Ads, social media, AI-powered marketing, project process, and
          working directly with Hendii across Rajasthan and India.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question (e.g. SEO, website, Google Maps, Meta Ads)..."
              aria-label="Search frequently asked questions"
              className="w-full bg-[#0D1117] border border-[#1E2736] focus:border-[#B7FF00] rounded-2xl pl-11 pr-4 py-3.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition shadow-sm"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                type="button"
                aria-label="Clear FAQ search"
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
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
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

      {/* =====================================================
          FAQ ACCORDION
      ====================================================== */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#0D1117] border border-[#1E2736] rounded-3xl p-8 space-y-4">
            <HelpCircle className="w-12 h-12 text-[#94A3B8] mx-auto opacity-50" />

            <h2 className="text-lg font-bold text-[#F8FAFC]">
              No questions found
            </h2>

            <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
              We couldn't find an answer matching "{searchQuery}". Ask Hendii
              directly on WhatsApp for help with your specific requirement.
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
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#11161D] border border-[#1E2736] text-[#B7FF00]">
                        {faq.categoryLabel}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-[#F8FAFC] pt-1 leading-snug">
                      {faq.question}
                    </h2>

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
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`${faq.id}-answer`}
                    className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#1E2736]/60 text-xs sm:text-sm text-[#CBD5E1] space-y-3 leading-relaxed"
                  >
                    <p>{faq.answer}</p>

                    {faq.points && faq.points.length > 0 && (
                      <ul className="space-y-2 pt-1">
                        {faq.points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-xs text-[#CBD5E1]"
                          >
                            <span
                              className="text-[#B7FF00] font-bold mt-0.5"
                              aria-hidden="true"
                            >
                              ✓
                            </span>

                            <span>{point}</span>
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

      {/* =====================================================
          HENDII ENTITY / CONTEXT SECTION
      ====================================================== */}
      <section
        aria-labelledby="about-hendii-faq"
        className="p-7 sm:p-8 rounded-3xl bg-[#0D1117] border border-[#1E2736] space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B7FF00]" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#B7FF00]">
            About Hendii
          </span>
        </div>

        <h2
          id="about-hendii-faq"
          className="text-xl sm:text-2xl font-bold text-[#F8FAFC]"
        >
          Digital Marketing, Web Development &amp; AI Growth Support
        </h2>

        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-4xl">
          Hendii is an independent digital marketing and web development
          specialist based in Rajasthan, India. Hendii helps businesses with
          professional websites, SEO, local SEO, Meta Ads, social media
          management, AI automation, and AI-assisted marketing content.
          Projects can be handled for businesses in Rajasthan and across India
          with direct communication and practical digital growth support.
        </p>
      </section>

      {/* =====================================================
          STILL HAVE QUESTIONS CTA
      ====================================================== */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#11161D] via-[#0D1117] to-[#11161D] border border-[#1E2736] text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mx-auto">
          <MessageCircle className="w-6 h-6" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
          Have a question specific to your business?
        </h2>

        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Every business has different goals, audiences, and requirements.
          Connect with Hendii directly to discuss what your business actually
          needs.
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
            type="button"
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