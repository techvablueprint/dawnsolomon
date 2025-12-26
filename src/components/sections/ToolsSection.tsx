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
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm fluent in the tools that power modern businesses—so your tech just works.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-3"
            >
              <div
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20 rounded-full",
                  tool.color,
                  "border-2 shadow-lg",
                  "flex items-center justify-center p-3",
                  "hover:scale-110 hover:shadow-xl",
                  "transition-all duration-300",
                  "animate-bounce-varied"
                )}
                style={{ 
                  animationDelay: `${bounceDelays[index]}s`,
                  animationDuration: `${1.5 + (index % 3) * 0.3}s`
                }}
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
