import { ServiceItem } from "../types";

export const MARKETER_INFO = {
  name: "Hendii",
  title: "Digital Marketing & AI Specialist",
  tagline: "Helping Businesses Grow with Professional Websites, SEO, Meta Ads & AI Content.",
  heroDescription: "I build modern websites, improve Google rankings, create high-converting ad campaigns, and design AI-powered marketing content that helps businesses generate more leads and sales.",
  aboutHeading: "Hi, I'm Hendii",
  aboutSub: "I'm a Freelance Digital Marketing & AI Specialist based in Rajasthan, India.",
  aboutP1: "I help startups, local businesses, and personal brands build a strong online presence through professional websites, search engine optimisation (SEO), Meta Ads, and AI-powered content creation.",
  aboutP2: "I focus on delivering quality work, transparent communication, and practical marketing strategies tailored to each business. Every project is handled personally to ensure attention to detail and consistent quality.",
  aboutP3: "Whether you need a new website, better Google visibility, or digital marketing support, I can help you grow your business with affordable and effective solutions.",
  location: "Rajasthan, India",
  email: "abhikumawat621@gmail.com",
  whatsapp: "919782546371",
  phone: "+91 9782546371",
  github: "https://github.com/abhikumawat",
  linkedin: "https://linkedin.com/in/abhikumawat",
  twitter: "https://x.com/abhikumawat",
  quickHighlights: [
    "Personal One-to-One Service",
    "Transparent Communication",
    "Tailored Solutions",
    "Modern WordPress Websites",
    "SEO-Friendly Development",
    "AI Content & Creative Design",
    "Meta Ads Management",
    "Remote Services Across India"
  ],
  whyChooseMe: [
    {
      title: "Personal Attention",
      description: "Every project is handled personally."
    },
    {
      title: "Transparent Communication",
      description: "Regular updates throughout the project."
    },
    {
      title: "Tailored Packages",
      description: "Professional services suitable for startups and small businesses."
    },
    {
      title: "Quality Focus",
      description: "Clean design, SEO-friendly development, and long-term support."
    }
  ],
  workProcess: [
    {
      step: "Step 1",
      title: "Free Discussion",
      description: "Understand your business goals."
    },
    {
      step: "Step 2",
      title: "Planning",
      description: "Create a customised strategy."
    },
    {
      step: "Step 3",
      title: "Development",
      description: "Build the website or marketing campaign."
    },
    {
      step: "Step 4",
      title: "Testing",
      description: "Check speed, mobile responsiveness, and quality."
    },
    {
      step: "Step 5",
      title: "Launch & Support",
      description: "Go live with ongoing support if required."
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-wordpress",
    title: "WordPress Website Development",
    hinglishTitle: "WordPress Website Development",
    category: "WordPress",
    iconName: "Globe",
    tagline: "Professional, responsive, and fast-loading WordPress websites.",
    description: "Professional, responsive, and fast-loading WordPress websites designed for businesses, portfolios, clinics, and e-commerce stores.",
    keyDeliverables: [
      "Responsive Design",
      "Elementor Development",
      "WooCommerce Setup",
      "Speed Optimisation",
      "Contact Forms",
      "Basic SEO Setup"
    ],
    toolsUsed: ["WordPress", "Elementor", "WooCommerce", "WP Rocket", "Cloudflare"],
    popular: true,
  },
  {
    id: "srv-seo-onpage",
    title: "Search Engine Optimisation (SEO)",
    hinglishTitle: "Search Engine Optimisation (SEO)",
    category: "SEO",
    iconName: "Search",
    tagline: "Improve your website's visibility on Google with complete SEO.",
    description: "Improve your website's visibility on Google with complete on-page and technical SEO.",
    keyDeliverables: [
      "Keyword Research",
      "Meta Tags",
      "Content Optimisation",
      "Internal Linking",
      "Image SEO",
      "Technical SEO",
      "Google Search Console Setup"
    ],
    toolsUsed: ["Ahrefs", "SEMrush", "Google Search Console", "Yoast SEO"],
    popular: true,
  },
  {
    id: "srv-seo-technical",
    title: "Technical SEO",
    hinglishTitle: "Technical SEO",
    category: "SEO",
    iconName: "Cpu",
    tagline: "Improve website performance and Google indexing.",
    description: "Improve website performance and Google indexing through comprehensive technical audits and optimization.",
    keyDeliverables: [
      "Core Web Vitals",
      "Schema Markup",
      "XML Sitemap",
      "Robots.txt",
      "Broken Link Fixes",
      "Page Speed Optimisation"
    ],
    toolsUsed: ["Google PageSpeed Insights", "Screaming Frog", "Search Console"],
    popular: false,
  },
  {
    id: "srv-meta-ads",
    title: "Meta Ads Management",
    hinglishTitle: "Meta Ads Management",
    category: "Paid Ads",
    iconName: "Target",
    tagline: "Run high-performing Facebook and Instagram advertising campaigns.",
    description: "Run high-performing Facebook and Instagram advertising campaigns focused on lead generation and sales.",
    keyDeliverables: [
      "Campaign Setup",
      "Audience Targeting",
      "Ad Creative Guidance",
      "Budget Optimisation",
      "Performance Reporting"
    ],
    toolsUsed: ["Meta Ads Manager", "Facebook Pixel", "Canva", "Google Analytics"],
    popular: true,
  },
  {
    id: "srv-ai-content",
    title: "AI Content & Creative Design",
    hinglishTitle: "AI Content & Creative Design",
    category: "AI Visuals",
    iconName: "Sparkles",
    tagline: "Create modern AI-generated marketing content for businesses.",
    description: "Create modern AI-generated marketing content for businesses.",
    keyDeliverables: [
      "Social Media Creatives",
      "Product Images",
      "AI Visuals",
      "Ad Creatives",
      "Marketing Graphics"
    ],
    toolsUsed: ["Midjourney", "Flux", "Photoshop", "Canva"],
    popular: true,
  },
];

export const FAQS_DATA = [
  {
    question: "Do you work with small businesses?",
    answer: "Yes. I work with startups, local businesses, and growing brands."
  },
  {
    question: "How long does a website take?",
    answer: "Usually 5–10 working days depending on the project."
  },
  {
    question: "Do you provide SEO?",
    answer: "Yes. I provide On-Page SEO, Technical SEO, and SEO consultation."
  },
  {
    question: "Can you manage Meta Ads?",
    answer: "Yes. I help businesses create and optimise Facebook and Instagram advertising campaigns."
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes. Support and maintenance options are available after delivery."
  }
];
