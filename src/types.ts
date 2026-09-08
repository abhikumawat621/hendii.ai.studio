export type TabType = "overview" | "services" | "faq" | "ai_tools" | "contact" | "leads";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  message: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  hinglishTitle: string;
  category: "WordPress" | "SEO" | "Paid Ads" | "AI Visuals";
  iconName: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
  toolsUsed: string[];
  popular: boolean;
}

export interface AIToolResult {
  id: string;
  toolType: string;
  title: string;
  content: string;
  createdAt: string;
  promptUsed: string;
}

export type MarketingAIResult = AIToolResult;

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  businessName?: string;
  websiteUrl?: string;
  serviceInterest: string;
  budgetRange?: string;
  message: string;
}
