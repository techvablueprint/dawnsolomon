import React, { useState } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
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
  image?: string;
  index: number;
  onTitleChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
  onImageClick?: () => void;
}

function ProjectCard({
  title,
  description,
  category,
  tags,
  stats,
  link,
  image,
  index,
  onTitleChange,
  onDescriptionChange,
  onImageClick,
}: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    Automation: "bg-secondary/10 text-secondary border-secondary/20",
    "Web Design": "bg-primary/10 text-primary border-primary/20",
    AI: "bg-primary/10 text-primary border-primary/20",
  };

  const colors = [
    "from-primary/20 to-primary/5 border-primary/20",
    "from-secondary/20 to-secondary/5 border-secondary/20",
    "from-primary/20 to-secondary/10 border-primary/20",
  ];

  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br rounded-2xl overflow-hidden",
        "card-hover",
        colors[index % colors.length]
      )}
    >
      {/* Feature Image */}
      {image && (
        <div 
          className="relative w-full h-48 overflow-hidden cursor-pointer"
          onClick={onImageClick}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20">
            <span className="text-xs bg-background/80 px-3 py-1 rounded-full text-foreground">Click to view full image</span>
          </div>
        </div>
      )}

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-background/50 to-transparent rounded-bl-full" />

      {/* Header with category */}
      <div className={cn("relative p-8 pb-4", image && "pt-4")}>
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
          className="font-bold text-xl mb-3 group-hover:text-primary transition-colors"
        />
        <EditableText
          value={description}
          onChange={onDescriptionChange}
          as="p"
          multiline
          className="text-muted-foreground leading-relaxed"
        />
      </div>

      {/* Tags */}
      <div className="relative px-8 pb-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-md bg-card/50 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="relative border-t border-border/30 bg-card/30 p-4">
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
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

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
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated vertical lines moving upward */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] bg-gradient-to-t from-transparent via-primary/40 to-transparent animate-line-up rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              height: '150px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Featured</span> Projects
          </h2>
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
              onImageClick={project.image ? () => setSelectedImage({ url: project.image!, title: project.title }) : undefined}
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

      {/* Full Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-primary/20">
          <div className="relative w-full h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <h3 className="text-lg font-semibold text-foreground">{selectedImage?.title}</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {selectedImage && (
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
