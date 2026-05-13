import React, { useState } from "react";
import { ExternalLink, Globe, Monitor, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { FolderReveal } from "@/components/FolderReveal";

const liveWebsites = [
  {
    id: "site-1",
    title: "FuelFit Funnel",
    label: "Sales Funnel",
    description: "A high-converting sales funnel designed to drive fitness product purchases with compelling copy and seamless checkout.",
    url: "https://fuelfit-funnel.vercel.app",
    tags: ["Sales Funnel", "Conversion", "Landing Page"],
  },
  {
    id: "site-2",
    title: "Prestige Realty Funnel",
    label: "Appointment Funnel",
    description: "An appointment booking funnel for real estate businesses, capturing leads and scheduling property viewings automatically.",
    url: "https://prestige-realty-funnel.vercel.app",
    tags: ["Appointment Funnel", "Real Estate", "Lead Capture"],
  },
  {
    id: "site-3",
    title: "Apex Media Funnel",
    label: "Lead Funnel",
    description: "A lead generation funnel for media agencies, designed to capture and qualify prospects through strategic content.",
    url: "https://apex-media-funnel.vercel.app",
    tags: ["Lead Funnel", "Agency", "Marketing"],
  },
];

export function LiveWebsitesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { ref: gridRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="live-websites" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      {/* Animated vertical lines moving upward */}
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live & Interactive</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Explore</span> Live Websites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse my live website projects — click to explore them in real-time and see the quality of work firsthand.
          </p>
        </div>

        {/* Website Cards */}
        <FolderReveal label="Explore Live Websites" count={liveWebsites.length}>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveWebsites.map((site, idx) => (
            <div
              key={site.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 opacity-0 hover:-translate-y-2",
                inView && "animate-rise-up"
              )}
              style={inView ? { animationDelay: `${idx * 150}ms` } : undefined}
              onMouseEnter={() => setHoveredId(site.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Browser mockup header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-md bg-background/50 text-xs text-muted-foreground truncate">
                  <Globe className="w-3 h-3 shrink-0" />
                  <span className="truncate">{site.url.replace('https://', '')}</span>
                </div>
              </div>

              {/* Live Preview */}
              <div className="relative w-full h-48 overflow-hidden">
                <iframe
                  src={site.url}
                  title={site.title}
                  className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none border-0"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300",
                  hoveredId === site.id ? "opacity-100" : "opacity-0"
                )}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <Monitor className="w-5 h-5 text-primary" />
                      </div>
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <Smartphone className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">Click to explore</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {site.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                    {site.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {site.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {site.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </Button>
                </a>
              </div>

              {/* Full card link overlay */}
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Visit {site.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
