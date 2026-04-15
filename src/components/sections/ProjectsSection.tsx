import React, { useState, useEffect, useCallback } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
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

export function ProjectsSection() {
  const { data, updateData } = usePortfolio();
  const { projects } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalItems = projects.items.length;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || totalItems <= 1) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, totalItems]);

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

  // Calculate position relative to active index
  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;
    // Wrap around
    if (offset > totalItems / 2) offset -= totalItems;
    if (offset < -totalItems / 2) offset += totalItems;

    const isCenter = offset === 0;
    const isLeft = offset === -1 || (offset === totalItems - 1 && totalItems > 2);
    const isRight = offset === 1 || (offset === -(totalItems - 1) && totalItems > 2);
    const isVisible = Math.abs(offset) <= 1;

    if (isCenter) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
      };
    }
    if (isLeft || offset < 0) {
      return {
        transform: "translateX(-70%) scale(0.8) rotateY(25deg)",
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.5)",
      };
    }
    if (isRight || offset > 0) {
      return {
        transform: "translateX(70%) scale(0.8) rotateY(-25deg)",
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.5)",
      };
    }
    return {
      transform: "translateX(0) scale(0.5) rotateY(0deg)",
      zIndex: 0,
      opacity: 0,
      filter: "brightness(0.3)",
    };
  };

  const categoryColors: Record<string, string> = {
    Automation: "bg-secondary/10 text-secondary border-secondary/20",
    "Web Design": "bg-primary/10 text-primary border-primary/20",
    AI: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      {/* Animated vertical lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] bg-gradient-to-t from-transparent via-primary/40 to-transparent animate-line-up rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              height: "150px",
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* n8n Workflow Strip */}
        <div className="mb-16 hidden md:block relative">
          <div className="relative rounded-3xl border border-white/10 p-6 z-10">
            <img 
              src={n8nWorkflow} 
              alt="n8n Automation Workflow" 
              className="w-full h-auto object-contain opacity-60 mix-blend-lighten"
            />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Workflow</span> Automation
          </h2>
          <EditableText
            value={projects.subtitle}
            onChange={(v) =>
              updateData({ projects: { ...projects, subtitle: v } })
            }
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        {/* 3D Carousel */}
        <div
          className="relative w-full mx-auto"
          style={{ perspective: "1200px", height: "520px" }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {projects.items.map((project, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={project.id}
                className="absolute left-1/2 top-0 w-[340px] md:w-[400px] cursor-pointer"
                style={{
                  ...style,
                  marginLeft: "-170px",
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  transformStyle: "preserve-3d",
                  pointerEvents: isActive ? "auto" : "none",
                }}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                  } else if (project.image) {
                    if (project.link) {
                      window.open(project.link, "_blank", "noopener,noreferrer");
                    } else {
                      setSelectedImage({
                        url: project.image,
                        title: project.title,
                      });
                    }
                  }
                }}
              >
                <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/80 backdrop-blur-sm shadow-2xl">
                  {/* Image */}
                  {project.image && (
                    <div className="relative w-full h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      {isActive && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/30">
                          <span className="text-xs bg-background/80 px-3 py-1 rounded-full text-foreground flex items-center gap-1">
                            {project.link ? (
                              <>
                                <ExternalLink className="w-3 h-3" />
                                Click to visit live site
                              </>
                            ) : (
                              "Click to view full image"
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <Badge
                      variant="outline"
                      className={cn(
                        "mb-3 font-medium",
                        categoryColors[project.category] ||
                          "bg-muted text-muted-foreground"
                      )}
                    >
                      {project.category}
                    </Badge>

                    <EditableText
                      value={project.title}
                      onChange={(v) =>
                        updateProjectItem(project.id, "title", v)
                      }
                      as="h3"
                      className="font-bold text-lg mb-2 text-foreground"
                    />
                    <EditableText
                      value={project.description}
                      onChange={(v) =>
                        updateProjectItem(project.id, "description", v)
                      }
                      as="p"
                      multiline
                      className="text-muted-foreground text-sm leading-relaxed line-clamp-3"
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-border/30">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="text-base font-bold text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation arrows */}
          {totalItems > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-card/80 border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-card/80 border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {projects.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Scrolling Logo Bar */}
        <div className="mt-16 lg:mt-24 overflow-hidden">
          <div className="flex animate-scroll-x gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center">
                {brandLogos.map((brand) => (
                  <div
                    key={`${setIndex}-${brand.name}`}
                    className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-muted-foreground font-medium text-sm">
                      {brand.name}
                    </span>
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
              <h3 className="text-lg font-semibold text-foreground">
                {selectedImage?.title}
              </h3>
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
