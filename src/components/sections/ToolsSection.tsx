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
        {/* Glass container - light transparent */}
        <div className="relative bg-cyan-900/20 backdrop-blur-sm border border-cyan-400/25 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Inner gradient glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm fluent in the tools that power modern businesses—so your tech just works.
            </p>
          </div>

          {/* Bouncing balls container */}
          <div className="relative h-[300px] md:h-[350px] w-full max-w-4xl mx-auto z-10 overflow-hidden">
            {tools.map((tool, index) => {
              // Random starting positions within the container
              const startX = 10 + (index % 6) * 15;
              const startY = 20 + Math.floor(index / 6) * 40;
              
              return (
                <div
                  key={tool.name}
                  className={cn(
                    "absolute w-16 h-16 md:w-20 md:h-20 rounded-full",
                    tool.color,
                    "border-2 shadow-xl",
                    "flex items-center justify-center",
                    "hover:scale-110 hover:z-50",
                    "transition-transform duration-300",
                    "shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                  )}
                  style={{ 
                    left: `${startX}%`,
                    top: `${startY}%`,
                    animation: `ball-bounce-${index % 4} ${12 + (index % 5) * 2}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom keyframes for different bounce patterns - wide range across entire box */}
      <style>{`
        @keyframes ball-bounce-0 {
          0%, 100% { transform: translate(0, 0); }
          15% { transform: translate(350px, -120px); }
          30% { transform: translate(-200px, 100px); }
          45% { transform: translate(280px, 80px); }
          60% { transform: translate(-300px, -80px); }
          75% { transform: translate(150px, 120px); }
          90% { transform: translate(-100px, -100px); }
        }
        @keyframes ball-bounce-1 {
          0%, 100% { transform: translate(0, 0); }
          15% { transform: translate(-320px, 110px); }
          30% { transform: translate(250px, -90px); }
          45% { transform: translate(-180px, -120px); }
          60% { transform: translate(300px, 70px); }
          75% { transform: translate(-250px, 90px); }
          90% { transform: translate(120px, -80px); }
        }
        @keyframes ball-bounce-2 {
          0%, 100% { transform: translate(0, 0); }
          15% { transform: translate(280px, 130px); }
          30% { transform: translate(-350px, -60px); }
          45% { transform: translate(200px, -110px); }
          60% { transform: translate(-220px, 100px); }
          75% { transform: translate(320px, -70px); }
          90% { transform: translate(-150px, 80px); }
        }
        @keyframes ball-bounce-3 {
          0%, 100% { transform: translate(0, 0); }
          15% { transform: translate(-280px, -100px); }
          30% { transform: translate(330px, 120px); }
          45% { transform: translate(-200px, 70px); }
          60% { transform: translate(180px, -130px); }
          75% { transform: translate(-300px, 50px); }
          90% { transform: translate(250px, -60px); }
        }
      `}</style>
    </section>
  );
}
