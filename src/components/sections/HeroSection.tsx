import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Mail, Bot, Zap, BarChart3, MessageSquare, Database, UserPlus, Filter, Send, FileSpreadsheet } from "lucide-react";
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
    <section id="home" className="relative min-h-screen bg-grid-pattern overflow-hidden">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

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

        {/* Floating Workflow Cards Section */}
        <div className="mt-16 lg:mt-24 hidden md:block">
          <div className="relative h-[350px] bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800/50">
            {/* Dashed lines - SVG connections for Lead Capturing Flow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* New Lead -> Qualify Lead */}
              <line x1="15%" y1="35%" x2="32%" y2="35%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.4" />
              {/* Qualify Lead -> Add to CRM */}
              <line x1="40%" y1="35%" x2="55%" y2="55%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.4" />
              {/* Qualify Lead -> Send Email */}
              <line x1="40%" y1="35%" x2="55%" y2="20%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.4" />
              {/* Add to CRM -> AI Follow-up */}
              <line x1="65%" y1="55%" x2="80%" y2="55%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.4" />
              {/* Send Email -> Schedule Task */}
              <line x1="65%" y1="20%" x2="80%" y2="20%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.4" />
            </svg>
            
            {/* Lead Capturing Flow Cards */}
            <FloatingCard 
              icon={UserPlus} 
              title="New Lead" 
              delay={0} 
              color="bg-green-500/20 text-green-400"
              glowColor="hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              position="left-[5%] top-[25%]"
            />
            <FloatingCard 
              icon={Filter} 
              title="Qualify Lead" 
              delay={0.2} 
              color="bg-purple-500/20 text-purple-400"
              glowColor="hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              position="left-[28%] top-[25%]"
            />
            <FloatingCard 
              icon={Send} 
              title="Send Email" 
              delay={0.4} 
              color="bg-cyan-500/20 text-cyan-400"
              glowColor="hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              position="left-[50%] top-[10%]"
            />
            <FloatingCard 
              icon={FileSpreadsheet} 
              title="Add to CRM" 
              delay={0.3} 
              color="bg-orange-500/20 text-orange-400"
              glowColor="hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
              position="left-[50%] top-[45%]"
            />
            <FloatingCard 
              icon={Bot} 
              title="AI Follow-up" 
              delay={0.5} 
              color="bg-pink-500/20 text-pink-400"
              glowColor="hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
              position="right-[12%] top-[45%]"
            />
            <FloatingCard 
              icon={Zap} 
              title="Schedule Task" 
              delay={0.6} 
              color="bg-yellow-500/20 text-yellow-400"
              glowColor="hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
              position="right-[12%] top-[10%]"
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

        {/* Scrolling Logo Bar - Before About Section */}
        <div className="mt-16 lg:mt-24 overflow-hidden">
          <div className="flex animate-scroll-x gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center">
                {brandLogos.map((brand) => (
                  <div key={`${setIndex}-${brand.name}`} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <img src={brand.logo} alt={brand.name} className="h-8 w-auto object-contain" />
                    <span className="text-muted-foreground font-medium text-sm">{brand.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
