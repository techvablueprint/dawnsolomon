import { cn } from "@/lib/utils";
import { 
  Workflow, 
  Database, 
  Globe, 
  MessageSquare, 
  Calendar,
  FileSpreadsheet,
  ShoppingBag,
  Bot,
  Layers,
  Zap,
  Mail,
  LayoutGrid
} from "lucide-react";

const tools = [
  { name: "Zapier", icon: Zap },
  { name: "Make", icon: Layers },
  { name: "n8n", icon: Workflow },
  { name: "GoHighLevel", icon: LayoutGrid },
  { name: "HubSpot", icon: Database },
  { name: "Notion", icon: FileSpreadsheet },
  { name: "Airtable", icon: Database },
  { name: "Google Workspace", icon: Mail },
  { name: "Shopify", icon: ShoppingBag },
  { name: "WordPress", icon: Globe },
  { name: "ChatGPT", icon: Bot },
  { name: "Monday.com", icon: Calendar },
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20 rounded-full",
                  "bg-slate-800/80 border border-cyan-900/50",
                  "flex items-center justify-center",
                  "hover:bg-cyan-500/20 hover:border-cyan-400/50",
                  "transition-all duration-300",
                  "animate-bounce-slow"
                )}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <tool.icon className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" />
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
