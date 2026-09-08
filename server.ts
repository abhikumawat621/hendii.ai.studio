import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import compression from "compression";

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Enable Gzip/Brotli HTTP compression
app.use(
  compression({
    threshold: 1024,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

app.disable("x-powered-by");
app.use(express.json());

// Ensure data directory exists
const DATA_DIR = path.join(process.cwd(), "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const LEADS_FILE = path.join(DATA_DIR, "leads.json");
if (!fs.existsSync(LEADS_FILE)) {
  const initialLeads = [
    {
      id: "lead_1",
      name: "Ramesh Sharma",
      phone: "+91 98290 12345",
      email: "ramesh.sharma@example.com",
      businessName: "Sharma Handicrafts",
      city: "Jaipur",
      service: "SEO & Google Maps",
      budget: "₹10,000 - ₹25,000",
      message: "Looking to rank our handicraft showroom on Google Maps for tourists in Jaipur.",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      status: "contacted",
    },
    {
      id: "lead_2",
      name: "Pooja Choudhary",
      phone: "+91 94140 67890",
      email: "pooja.neet@example.com",
      businessName: "Target NEET Academy",
      city: "Sikar",
      service: "Meta Ads (FB & IG)",
      budget: "₹25,000 - ₹50,000+",
      message: "Need Facebook and Instagram lead generation ads for upcoming student batch admissions.",
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      status: "new",
    },
  ];
  fs.writeFileSync(LEADS_FILE, JSON.stringify(initialLeads, null, 2));
}

function readLeads() {
  try {
    const data = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveLeads(leads: any[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("Error saving leads:", err);
  }
}

// Master Admin Auth
const ADMIN_PIN = process.env.ADMIN_PIN || "abhishek621";
const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET || "hendii_super_secret_salt_2026";

function createAdminToken() {
  const payload = { role: "admin", exp: Date.now() + 86400000 * 7 };
  const str = Buffer.from(JSON.stringify(payload)).toString("base64");
  const signature = crypto.createHmac("sha256", ADMIN_SECRET).update(str).digest("hex");
  return `${str}.${signature}`;
}

function verifyAdminToken(token?: string) {
  if (!token) return false;
  try {
    const [str, signature] = token.split(".");
    if (!str || !signature) return false;
    const expectedSig = crypto.createHmac("sha256", ADMIN_SECRET).update(str).digest("hex");
    if (signature !== expectedSig) return false;
    const payload = JSON.parse(Buffer.from(str, "base64").toString("utf-8"));
    if (payload.exp < Date.now()) return false;
    return true;
  } catch (err) {
    return false;
  }
}

const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;
  if (!verifyAdminToken(token)) {
    return res.status(401).json({ error: "Unauthorized access" });
  }
  next();
};

// ================= API ROUTES =================

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Hendii Digital Growth API" });
});

// Admin PIN verification
app.post("/api/admin/auth/verify", (req, res) => {
  const { pin } = req.body;
  if (pin === ADMIN_PIN) {
    const token = createAdminToken();
    return res.json({ success: true, token });
  }
  return res.status(401).json({ success: false, message: "Incorrect master passcode." });
});

// Public contact inquiry submission
app.post("/api/contact", (req, res) => {
  try {
    const { name, phone, email, businessName, city, service, budget, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone are required." });
    }

    const leads = readLeads();
    const newLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name,
      phone,
      email: email || "",
      businessName: businessName || "",
      city: city || "Jaipur",
      service: service || "General",
      budget: budget || "",
      message: message || "",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    leads.unshift(newLead);
    saveLeads(leads);

    res.status(201).json({ success: true, lead: newLead });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to save inquiry." });
  }
});

// Protected: Get all leads
app.get("/api/contact", requireAdmin, (req, res) => {
  const leads = readLeads();
  res.json({ success: true, leads });
});

// Protected: Update lead status
app.patch("/api/contact/:id", requireAdmin, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const leads = readLeads();
  const index = leads.findIndex((l: any) => l.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Lead not found" });
  }

  leads[index].status = status;
  saveLeads(leads);
  res.json({ success: true, lead: leads[index] });
});

// Protected: Delete lead
app.delete("/api/contact/:id", requireAdmin, (req, res) => {
  const { id } = req.params;
  let leads = readLeads();
  const initialLength = leads.length;
  leads = leads.filter((l: any) => l.id !== id);

  if (leads.length === initialLength) {
    return res.status(404).json({ error: "Lead not found" });
  }

  saveLeads(leads);
  res.json({ success: true, message: "Lead removed" });
});

// AI Marketing Studio endpoint (Gemini API)
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    geminiClient = new GoogleGenAI({ apiKey: key });
  }
  return geminiClient;
}

app.post("/api/generate-marketing-ai", async (req, res) => {
  try {
    const { businessType, targetCity, toolType, language } = req.body;

    if (!businessType) {
      return res.status(400).json({ error: "Business type is required." });
    }

    const city = targetCity || "Rajasthan";
    const lang = language || "Hinglish";

    let prompt = "";

    if (toolType === "strategy") {
      prompt = `You are Hendii, an expert freelance digital marketing & growth strategist in Rajasthan, India.
Generate a high-impact, actionable 30-Day Marketing Blueprint for a "${businessType}" located in "${city}".
Language style: ${lang}.

Include:
1. Target Customer Profile (Who buys & why in ${city})
2. Week-by-Week Action Plan (Days 1-7, 8-14, 15-21, 22-30)
3. Google Business Profile & Local SEO Quick Wins
4. High-ROI Meta Ad Campaign Idea (Hooks, targeting, budget suggestion in INR)
5. Direct WhatsApp conversion tip.

Make it clean, formatted with bullet points, practical, and devoid of corporate fluff.`;
    } else if (toolType === "ad_copy") {
      prompt = `You are Hendii, an expert copywriter for Meta Ads (Facebook & Instagram) in India.
Write 3 high-converting Meta Ad variations for a "${businessType}" in "${city}".
Language: ${lang}.

For each variation provide:
- Hook / Primary Text (Relatable problem & strong benefit)
- Headline (Catchy & clear)
- Call-to-Action (WhatsApp or Call)
- Visual / Video Creative Recommendation.`;
    } else if (toolType === "seo_keywords") {
      prompt = `You are Hendii, a top local SEO specialist in India.
Provide a high-intent Local SEO Keyword Research Plan for a "${businessType}" in "${city}".

Include:
1. Top 10 High-Intent "Near Me" & Local City Keywords (with estimated search intent)
2. 5 Long-Tail Question Keywords people search before buying
3. Exact Google Business Profile Category & Services to list
4. City Geotag & Local Citation suggestions.`;
    } else {
      prompt = `You are Hendii, a creative Instagram Reels and YouTube Shorts scriptwriter.
Write a 30-45 second viral Reel/Shorts video script for a "${businessType}" in "${city}".
Language: ${lang}.

Format with:
- [Visual / Camera Shot]
- [On-Screen Hook Text]
- [Spoken Voiceover/Dialogue]
- [Final Call to Action (DM / WhatsApp)].`;
    }

    try {
      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text || "Strategy generated successfully.";
      res.json({ success: true, content: text });
    } catch (aiErr: any) {
      // Fallback response if API key is not configured
      const fallbackText = `### 🚀 30-Day Growth Blueprint for ${businessType} (${city})

**1. Target Customer & Market Insight (${city})**
- Local residents & professionals searching actively for reliable ${businessType} services.
- Key decision triggers: Fast response on WhatsApp, transparent pricing, verified customer reviews.

**2. 30-Day Action Strategy:**
- **Week 1 (Foundations):** Build/optimize a fast, mobile-friendly landing page with direct WhatsApp click buttons. Optimize Google Business Profile with complete geotags.
- **Week 2 (Local SEO & Authority):** Add 15+ local citations, get 10 verified Google reviews, set up Schema.org markup.
- **Week 3 (Meta Ads Launch):** Launch hyper-local Facebook & Instagram Lead Ads targeting a 10km radius in ${city}.
- **Week 4 (Conversion & Retargeting):** Retarget engaged website visitors with limited-time discount hooks and instant WhatsApp support.

**3. Next Step:**
Want Hendii to personally set up and manage this entire campaign? Reach out directly via WhatsApp (+91 9782546371).`;

      res.json({ success: true, content: fallbackText });
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to generate AI content." });
  }
});

// SEO: Sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  const host = req.get("host") || "hendii.com";
  const protocol = req.protocol;
  const baseUrl = `${protocol}://${host}`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#services</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.send(sitemap);
});

// SEO: Robots.txt
app.get("/robots.txt", (req, res) => {
  const host = req.get("host") || "hendii.com";
  const protocol = req.protocol;
  const baseUrl = `${protocol}://${host}`;

  const robots = `User-agent: *
Allow: /
Disallow: /api/admin/

Sitemap: ${baseUrl}/sitemap.xml
`;
  res.header("Content-Type", "text/plain");
  res.send(robots);
});

// ================= VITE MIDDLEWARE & STATIC SERVING =================
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(
      express.static(distPath, {
        maxAge: "1y",
        immutable: true,
        index: false,
      })
    );
    app.get("*", (req, res) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Hendii Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
