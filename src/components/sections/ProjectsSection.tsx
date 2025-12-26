import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  stats: Array<{ label: string; value: string }>;
  link?: string;
  index: number;
  onTitleChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
}

function ProjectCard({
  title,
  description,
  category,
  tags,
  stats,
  link,
  index,
  onTitleChange,
  onDescriptionChange,
}: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    Automation: "bg-secondary/10 text-secondary border-secondary/20",
    "Web Design": "bg-primary/10 text-primary border-primary/20",
    AI: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <div
      className={cn(
        "group bg-card rounded-2xl border border-border overflow-hidden",
        "card-hover"
      )}
    >
      {/* Header with category */}
      <div className="p-6 pb-4">
        <Badge
          variant="outline"
          className={cn(
            "mb-4 font-medium",
            categoryColors[category] || "bg-muted text-muted-foreground"
          )}
        >
          {category}
        </Badge>

        <EditableText
          value={title}
          onChange={onTitleChange}
          as="h3"
          className="font-bold text-xl mb-2 group-hover:text-primary transition-colors"
        />
        <EditableText
          value={description}
          onChange={onDescriptionChange}
          as="p"
          multiline
          className="text-muted-foreground text-sm leading-relaxed"
        />
      </div>

      {/* Tags */}
      <div className="px-6 pb-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="border-t border-border bg-muted/30 p-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Link overlay */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-foreground/0 hover:bg-foreground/5 transition-colors opacity-0 group-hover:opacity-100"
        >
          <span className="sr-only">View project</span>
        </a>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const { data, updateData } = usePortfolio();
  const { projects } = data;

  const updateProjectItem = (
    id: string,
    field: "title" | "description",
    value: string
  ) => {
    const newItems = projects.items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    updateData({
      projects: { ...projects, items: newItems },
    });
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <EditableText
            value={projects.title}
            onChange={(v) => updateData({ projects: { ...projects, title: v } })}
            as="h2"
            className="text-3xl lg:text-4xl font-bold mb-4"
          />
          <EditableText
            value={projects.subtitle}
            onChange={(v) => updateData({ projects: { ...projects, subtitle: v } })}
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              onTitleChange={(v) => updateProjectItem(project.id, "title", v)}
              onDescriptionChange={(v) =>
                updateProjectItem(project.id, "description", v)
              }
            />
          ))}
        </div>

        {/* Scrolling Logo Bar */}
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
