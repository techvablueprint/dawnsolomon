import { cn } from "@/lib/utils";

import zapierLogo from "@/assets/tools/zapier.svg";
import makeLogo from "@/assets/tools/make.ico";
import n8nLogo from "@/assets/tools/n8n.ico";
import gohighlevelLogo from "@/assets/tools/gohighlevel.png";
import hubspotLogo from "@/assets/tools/hubspot.png";
import notionLogo from "@/assets/tools/notion.svg";
import airtableLogo from "@/assets/tools/airtable.svg";
import googleLogo from "@/assets/tools/google.ico";
import shopifyLogo from "@/assets/tools/shopify.svg";
import wordpressLogo from "@/assets/tools/wordpress.png";
import chatgptLogo from "@/assets/tools/chatgpt.svg";
import lovableLogo from "@/assets/tools/lovable.ico";

const tools = [
  { name: "Zapier", logo: zapierLogo, color: "bg-orange-100 border-orange-300" },
  { name: "Make", logo: makeLogo, color: "bg-purple-100 border-purple-300" },
  { name: "n8n", logo: n8nLogo, color: "bg-green-100 border-green-300" },
  { name: "GoHighLevel", logo: gohighlevelLogo, color: "bg-blue-100 border-blue-300" },
  { name: "HubSpot", logo: hubspotLogo, color: "bg-orange-100 border-orange-300" },
  { name: "Notion", logo: notionLogo, color: "bg-slate-100 border-slate-300" },
  { name: "Airtable", logo: airtableLogo, color: "bg-yellow-100 border-yellow-300" },
  { name: "Google Workspace", logo: googleLogo, color: "bg-red-100 border-red-300" },
  { name: "Shopify", logo: shopifyLogo, color: "bg-green-100 border-green-300" },
  { name: "WordPress", logo: wordpressLogo, color: "bg-sky-100 border-sky-300" },
  { name: "ChatGPT", logo: chatgptLogo, color: "bg-teal-100 border-teal-300" },
  { name: "Lovable", logo: lovableLogo, color: "bg-pink-100 border-pink-300" },
];

const bounceDelays = [0, 0.3, 0.1, 0.5, 0.2, 0.4, 0.15, 0.35, 0.25, 0.45, 0.05, 0.55];

export function ToolsSection() {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm fluent in the tools that power modern businesses—so your tech just works.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2"
            >
              {/* Ball container with bounce */}
              <div className="relative">
                <div
                  className={cn(
                    "w-16 h-16 md:w-20 md:h-20 rounded-full",
                    tool.color,
                    "border-2 shadow-lg",
                    "flex items-center justify-center",
                    "hover:scale-110",
                    "transition-transform duration-300",
                    "animate-ball-bounce"
                  )}
                  style={{ 
                    animationDelay: `${bounceDelays[index]}s`,
                    animationDuration: `${1.2 + (index % 3) * 0.2}s`
                  }}
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                  />
                </div>
                {/* Shadow underneath */}
                <div 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 bg-black/30 rounded-full blur-sm animate-shadow-pulse"
                  style={{ 
                    animationDelay: `${bounceDelays[index]}s`,
                    animationDuration: `${1.2 + (index % 3) * 0.2}s`
                  }}
                />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground text-center mt-2">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
