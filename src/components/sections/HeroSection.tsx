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

        {/* n8n Workflow Section */}
        <div className="mt-16 lg:mt-24 hidden md:block">
          <div className="relative h-[200px] bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 flex items-center justify-center px-8">
            {/* Workflow connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Execute -> Code */}
              <line x1="8%" y1="50%" x2="15%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* Code -> HTTP Request */}
              <line x1="22%" y1="50%" x2="29%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* HTTP Request -> Wait */}
              <line x1="36%" y1="50%" x2="43%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* Wait -> HTTP Request1 */}
              <line x1="50%" y1="50%" x2="57%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* HTTP Request1 -> If */}
              <line x1="64%" y1="50%" x2="71%" y2="50%" stroke="#64748b" strokeWidth="2" />
              {/* If -> Switch (true) */}
              <line x1="78%" y1="50%" x2="85%" y2="35%" stroke="#22c55e" strokeWidth="2" />
              {/* If -> Code (false) - loops back */}
              <line x1="78%" y1="50%" x2="85%" y2="65%" stroke="#ef4444" strokeWidth="2" />
              {/* Loop back line from Code to HTTP Request */}
              <path d="M 92% 65% Q 95% 80%, 50% 80% Q 15% 80%, 15% 55%" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
            </svg>
            
            {/* n8n style workflow nodes */}
            <FloatingCard 
              icon={Play} 
              title="Execute" 
              delay={0} 
              color="bg-slate-600/40 text-slate-300"
              glowColor="hover:shadow-[0_0_20px_rgba(100,116,139,0.4)]"
              position="left-[3%] top-[50%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={Braces} 
              title="Code" 
              delay={0.1} 
              color="bg-orange-500/30 text-orange-400"
              glowColor="hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
              position="left-[15%] top-[50%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={Globe} 
              title="HTTP Request" 
              delay={0.2} 
              color="bg-indigo-500/30 text-indigo-400"
              glowColor="hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
              position="left-[29%] top-[50%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={Timer} 
              title="Wait" 
              delay={0.3} 
              color="bg-pink-500/30 text-pink-400"
              glowColor="hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              position="left-[43%] top-[50%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={Globe} 
              title="HTTP Request" 
              delay={0.4} 
              color="bg-indigo-500/30 text-indigo-400"
              glowColor="hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
              position="left-[57%] top-[50%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={GitBranch} 
              title="If" 
              delay={0.5} 
              color="bg-emerald-500/30 text-emerald-400"
              glowColor="hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              position="left-[71%] top-[50%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={GitBranch} 
              title="Switch" 
              delay={0.6} 
              color="bg-emerald-500/30 text-emerald-400"
              glowColor="hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              position="left-[85%] top-[35%] -translate-y-1/2"
            />
            <FloatingCard 
              icon={FileSpreadsheet} 
              title="Google Sheets" 
              delay={0.7} 
              color="bg-green-500/30 text-green-400"
              glowColor="hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              position="left-[85%] top-[65%] -translate-y-1/2"
            />
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
