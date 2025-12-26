import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Globe, Timer, GitBranch, FileSpreadsheet, Play, Braces } from "lucide-react";
import aiHandshake from "@/assets/ai-handshake.png";
import profilePhoto from "@/assets/profile-photo.png";

// Brand logos
import clickupLogo from "@/assets/brands/clickup.ico";
import tallyLogo from "@/assets/brands/tally.svg";
import jotformLogo from "@/assets/brands/jotform.svg";
import systemeLogo from "@/assets/brands/systeme.png";
import quickbooksLogo from "@/assets/brands/quickbooks.png";
import notionLogo from "@/assets/tools/notion.svg";
import trelloLogo from "@/assets/brands/trello.svg";
import slackLogo from "@/assets/brands/slack.svg";
import zoomLogo from "@/assets/brands/zoom.svg";
import chatgptLogo from "@/assets/tools/chatgpt.svg";
import geminiLogo from "@/assets/brands/gemini.png";
import mailchimpLogo from "@/assets/brands/mailchimp.svg";
import wordpressLogo from "@/assets/tools/wordpress.png";
import canvaLogo from "@/assets/brands/canva.ico";
import shopifyLogo from "@/assets/tools/shopify.svg";
import zapierLogo from "@/assets/tools/zapier.svg";
import airtableLogo from "@/assets/tools/airtable.svg";

const brandLogos = [
  { name: "ClickUp", logo: clickupLogo },
  { name: "Tally", logo: tallyLogo },
  { name: "Jotform", logo: jotformLogo },
  { name: "Systeme.io", logo: systemeLogo },
  { name: "QuickBooks", logo: quickbooksLogo },
  { name: "Notion", logo: notionLogo },
  { name: "Trello", logo: trelloLogo },
  { name: "Slack", logo: slackLogo },
  { name: "Zoom", logo: zoomLogo },
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Gemini", logo: geminiLogo },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "Zapier", logo: zapierLogo },
  { name: "Airtable", logo: airtableLogo },
];

const FloatingCard = ({
  icon: Icon,
  title,
  delay,
  color,
  glowColor,
  position,
}: {
  icon: React.ElementType;
  title: string;
  delay: number;
  color: string;
  glowColor: string;
  position: string;
}) => (
  <div
    className={`absolute ${position} animate-float group`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div 
      className={`bg-slate-800/90 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2 min-w-[100px] border border-slate-700/50 
        transition-all duration-300 cursor-pointer
        hover:scale-110 hover:border-cyan-400/50 ${glowColor}`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color} transition-all duration-300 group-hover:scale-110`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="font-medium text-sm text-foreground">{title}</p>
    </div>
  </div>
);

const DashedConnector = ({ from, to }: { from: string; to: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
    <line
      x1={from.split(',')[0]}
      y1={from.split(',')[1]}
      x2={to.split(',')[0]}
      y2={to.split(',')[1]}
      stroke="#94a3b8"
      strokeWidth="2"
      strokeDasharray="6 4"
    />
  </svg>
);

export function HeroSection() {
  const { data, updateField } = usePortfolio();
  const { hero } = data;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ backgroundImage: "url('/images/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* AI Handshake Background Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src={aiHandshake} 
          alt="AI Human Collaboration" 
          className="w-[900px] h-auto opacity-30"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
          }}
        />
      </div>

      {/* Animated vertical lines moving upward */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] bg-gradient-to-t from-transparent via-cyan-400/40 to-transparent animate-line-up rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              height: '150px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-slide-up flex flex-col items-center lg:items-start">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <EditableText
                value={hero.badge}
                onChange={(v) => updateField("hero", "badge", v)}
                className="text-sm font-medium text-secondary"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <EditableText
                value={hero.headline}
                onChange={(v) => updateField("hero", "headline", v)}
                className="text-foreground"
              />{" "}
              <EditableText
                value={hero.headlineAccent}
                onChange={(v) => updateField("hero", "headlineAccent", v)}
                className="text-primary"
              />
              <br />
              <EditableText
                value={hero.headlineSuffix}
                onChange={(v) => updateField("hero", "headlineSuffix", v)}
                className="text-foreground"
              />
            </h1>

            {/* Description */}
            <EditableText
              value={hero.description}
              onChange={(v) => updateField("hero", "description", v)}
              as="p"
              multiline
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            />

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button"
                asChild
              >
                <a href={hero.ctaLink}>
                  <EditableText
                    value={hero.ctaText}
                    onChange={(v) => updateField("hero", "ctaText", v)}
                  />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
                asChild
              >
                <a href="#projects">
                  <EditableText
                    value={hero.secondaryCtaText}
                    onChange={(v) => updateField("hero", "secondaryCtaText", v)}
                  />
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* CTA Note */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <EditableText
                value={hero.ctaNote}
                onChange={(v) => updateField("hero", "ctaNote", v)}
              />
            </div>
          </div>

          {/* Right column - Profile Photo */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72 xl:w-80 xl:h-80">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Dawn Solomon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg">
                ✓
              </div>
            </div>
          </div>
        </div>

        {/* Complete n8n Workflow Section */}
        <div className="mt-16 lg:mt-24 hidden md:block">
          <div className="relative h-[320px] bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-700/50 px-4 py-6">
            {/* Workflow connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Row 1: Execute -> Code */}
              <line x1="6%" y1="50%" x2="12%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* Code -> HTTP Request */}
              <line x1="17%" y1="50%" x2="23%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* HTTP Request -> Wait */}
              <line x1="28%" y1="50%" x2="34%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* Wait -> HTTP Request1 */}
              <line x1="39%" y1="50%" x2="45%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* HTTP Request1 -> If1 with Success/Error labels */}
              <line x1="50%" y1="48%" x2="56%" y2="48%" stroke="#22c55e" strokeWidth="2" />
              <text x="52%" y="44%" fill="#22c55e" fontSize="8" fontWeight="500">Success</text>
              <line x1="50%" y1="52%" x2="56%" y2="52%" stroke="#ef4444" strokeWidth="2" />
              <text x="52%" y="58%" fill="#ef4444" fontSize="8" fontWeight="500">Error</text>
              {/* If1 -> Switch */}
              <line x1="61%" y1="50%" x2="67%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* Switch branches - true path to Append row */}
              <line x1="72%" y1="48%" x2="78%" y2="28%" stroke="#22c55e" strokeWidth="2" />
              <text x="73%" y="35%" fill="#22c55e" fontSize="8" fontWeight="500">true</text>
              {/* Switch branches - false path to Append or update */}
              <line x1="72%" y1="52%" x2="78%" y2="72%" stroke="#ef4444" strokeWidth="2" />
              <text x="73%" y="65%" fill="#ef4444" fontSize="8" fontWeight="500">false</text>
              {/* Append or update -> If */}
              <line x1="87%" y1="72%" x2="90%" y2="72%" stroke="#64748b" strokeWidth="2" />
              {/* If -> Code in JavaScript6 */}
              <line x1="95%" y1="72%" x2="95%" y2="90%" stroke="#64748b" strokeWidth="2" />
              {/* Loop back line from Code6 to HTTP Request */}
              <path d="M 95% 92% Q 95% 98%, 50% 98% Q 5% 98%, 5% 55%" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
            </svg>
            
            {/* Row 1 - Main workflow nodes */}
            <div className="absolute left-[2%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-700/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-slate-600/50 hover:border-slate-500 transition-all">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-600/50 text-slate-300">
                  <Play className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-slate-300 text-center leading-tight">Execute<br/>workflow</p>
              </div>
            </div>

            <div className="absolute left-[12%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-orange-500/30 hover:border-orange-400/50 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500/20 text-orange-400">
                  <Braces className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center leading-tight">Code in<br/>JavaScript4</p>
              </div>
            </div>

            <div className="absolute left-[23%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-indigo-500/30 hover:border-indigo-400/50 transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/20 text-indigo-400">
                  <Globe className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center leading-tight">HTTP<br/>Request</p>
              </div>
            </div>

            <div className="absolute left-[34%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-pink-500/30 hover:border-pink-400/50 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-500/20 text-pink-400">
                  <Timer className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center">Wait</p>
              </div>
            </div>

            <div className="absolute left-[45%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-indigo-500/30 hover:border-indigo-400/50 transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/20 text-indigo-400">
                  <Globe className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center leading-tight">HTTP<br/>Request1</p>
              </div>
            </div>

            <div className="absolute left-[56%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-emerald-500/30 hover:border-emerald-400/50 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-400">
                  <GitBranch className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center">If1</p>
              </div>
            </div>

            <div className="absolute left-[67%] top-[50%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[80px] border border-emerald-500/30 hover:border-emerald-400/50 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-400">
                  <GitBranch className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center">Switch</p>
              </div>
            </div>

            {/* Row 2 - Top branch: Append row in sheet1 */}
            <div className="absolute left-[78%] top-[28%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[90px] border border-green-500/30 hover:border-green-400/50 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center leading-tight">Append row<br/>in sheet1</p>
              </div>
            </div>

            {/* Row 3 - Bottom branch: Append or update row */}
            <div className="absolute left-[78%] top-[72%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-3 flex flex-col items-center gap-1.5 min-w-[90px] border border-green-500/30 hover:border-green-400/50 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <p className="font-medium text-[10px] text-foreground text-center leading-tight">Append or<br/>update row</p>
              </div>
            </div>

            {/* If node after Append or update */}
            <div className="absolute left-[90%] top-[72%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-2.5 flex flex-col items-center gap-1 min-w-[60px] border border-emerald-500/30 hover:border-emerald-400/50 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-400">
                  <GitBranch className="w-3 h-3" />
                </div>
                <p className="font-medium text-[9px] text-foreground text-center">If</p>
              </div>
            </div>

            {/* Code in JavaScript6 - loop back node */}
            <div className="absolute left-[90%] top-[92%] -translate-y-1/2 z-10">
              <div className="bg-slate-800/90 rounded-xl p-2.5 flex flex-col items-center gap-1 min-w-[70px] border border-orange-500/30 hover:border-orange-400/50 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-500/20 text-orange-400">
                  <Braces className="w-3 h-3" />
                </div>
                <p className="font-medium text-[9px] text-foreground text-center leading-tight">Code6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Motto section */}
        <div className="mt-12 lg:mt-20 flex justify-center">
          <div className="text-center max-w-2xl">
            <EditableText
              value={hero.motto}
              onChange={(v) => updateField("hero", "motto", v)}
              as="p"
              className="text-xl lg:text-2xl font-medium italic text-muted-foreground"
            />
            <p className="mt-2 text-sm text-muted-foreground">— My Motto</p>
          </div>
        </div>

      </div>
    </section>
  );
}
