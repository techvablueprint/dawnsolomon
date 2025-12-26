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
  { name: "Zapier", logo: zapierLogo },
  { name: "Make", logo: makeLogo },
  { name: "n8n", logo: n8nLogo },
  { name: "GoHighLevel", logo: gohighlevelLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Notion", logo: notionLogo },
  { name: "Airtable", logo: airtableLogo },
  { name: "Google Workspace", logo: googleLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Lovable", logo: lovableLogo },
];

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
                  "bg-white/90 border border-cyan-900/50",
                  "flex items-center justify-center p-3",
                  "hover:bg-cyan-500/20 hover:border-cyan-400/50",
                  "transition-all duration-300",
                  "animate-bounce-slow"
                )}
                style={{ animationDelay: `${index * 0.15}s` }}
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
