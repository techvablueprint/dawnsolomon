import React, { useState } from "react";
import { ExternalLink, Search, Sparkles, TrendingUp, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useInView } from "@/hooks/useInView";
import firstCallGarageDoors from "@/assets/projects/first-call-garage-doors.png";
import poshDeluxe from "@/assets/projects/posh-deluxe.png";



type SeoProject = {
  id: string;
  title: string;
  label: string;
  description: string;
  url?: string;
  reportUrl?: string;
  image?: string;
  tags: string[];
  benefits: string[];
  outcomes: string[];
  comingSoon?: boolean;
};

const seoProjects: SeoProject[] = [
  {
    id: "seo-1",
    title: "First Call Garage Doors",
    label: "Live SEO Case Study",
    description:
      "WordPress SEO overhaul for First Call Garage Doors — rebuilt content, on-page SEO, and site structure to grow trust flow, keywords, and organic traffic.",
    url: "https://www.firstcallgaragedoors.com/",
    reportUrl: "https://docs.google.com/spreadsheets/d/1fSMufoORztXBdWkSiiuE8FobVc_SsDqdJffTV3tqRJI/edit?usp=sharing",
    image: firstCallGarageDoors,
    tags: ["WordPress", "Local SEO", "On-Page SEO"],
    benefits: [
      "Homepage rewritten from 419 to 3,024 words with keyword-focused, conversion-driven copy.",
      "Expanded from 10 to 26 pages including 11 service pages and 12 service-area pages for local reach.",
      "Improved authority signals — Trust Flow 21 → 25, Citation Flow 0 → 10, referring domains 31 → 42.",
    ],
    outcomes: [
      "Organic traffic grew 3× and keywords ranked jumped from 50 to 86.",
      "Stronger local presence across Richmond, Houston, and Katy TX service areas.",
      "A scalable SEO foundation the business can keep growing on.",
    ],
  },

  {
    id: "seo-2",
    title: "WordPress SEO Project",
    label: "Coming Soon",
    description: "Placeholder for an upcoming WordPress SEO project — case study and live link will be added soon.",
    tags: ["WordPress", "SEO", "Optimization"],
    benefits: [
      "Site audit + keyword mapping for the client's niche.",
      "Schema markup, meta tags, and internal linking done right.",
      "Ongoing SEO tracking with clear reporting.",
    ],
    outcomes: [
      "Improved search visibility across target keywords.",
      "More qualified leads reaching out through the site.",
      "A scalable SEO foundation the business can grow on.",
    ],
    comingSoon: true,
  },
  {
    id: "seo-3",
    title: "WordPress SEO Project",
    label: "Coming Soon",
    description: "Placeholder for an upcoming WordPress SEO project — case study and live link will be added soon.",
    tags: ["WordPress", "Technical SEO", "Content"],
    benefits: [
      "Full technical SEO cleanup — sitemap, robots, redirects, indexing.",
      "Content strategy aligned with real search demand.",
      "Trust-building design and copy that converts visitors.",
    ],
    outcomes: [
      "Stronger domain authority and search presence.",
      "Consistent organic pipeline of new customers.",
      "A site the business owner is proud to share.",
    ],
    comingSoon: true,
  },
];

export function WordpressSeoSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<SeoProject | null>(null);
  const { ref: gridRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="wordpress-seo" className="relative py-20 lg:py-32 overflow-hidden">
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
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">WordPress & SEO</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">SEO</span> Projects & WordPress
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated space for my WordPress builds and SEO case studies — new projects will be added here soon.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoProjects.map((project, idx) => (
            <div
              key={project.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 opacity-0 hover:-translate-y-2",
                inView && "animate-rise-up"
              )}
              style={inView ? { animationDelay: `${idx * 150}ms` } : undefined}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Preview placeholder */}
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="relative w-full h-48 overflow-hidden block text-left focus:outline-none focus:ring-2 focus:ring-primary/40 bg-gradient-to-br from-primary/10 via-muted/40 to-secondary/10"
                aria-label={`View details for ${project.title}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} — WordPress SEO case study feature image`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Feature image coming soon</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300",
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                )}>
                  <span className="text-sm font-medium text-foreground">Click to view details</span>
                </div>
              </button>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                    {project.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 gap-2"
                  disabled={project.comingSoon || (!project.reportUrl && !project.url)}
                  onClick={(e) => {
                    e.stopPropagation();
                    const target = project.reportUrl || project.url;
                    if (target) window.open(target, "_blank", "noopener,noreferrer");
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.comingSoon ? "Coming Soon" : project.reportUrl ? "View SEO Report" : "Visit Live Site"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {activeProject && (
            <div className="p-6 md:p-8">
              <DialogHeader className="text-left mb-6">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <DialogTitle className="text-2xl">{activeProject.title}</DialogTitle>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                    {activeProject.label}
                  </span>
                </div>
                <DialogDescription className="text-base">
                  {activeProject.description}
                </DialogDescription>
              </DialogHeader>

              {activeProject.image && (
                <div className="mb-6 rounded-xl overflow-hidden border border-primary/15">
                  <img
                    src={activeProject.image}
                    alt={`${activeProject.title} — feature image`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">How it helps the business owner</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {activeProject.benefits.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    <h4 className="font-semibold">The output for their website</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {activeProject.outcomes.map((o, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {activeProject.reportUrl && (
                  <a href={activeProject.reportUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View SEO Report
                    </Button>
                  </a>
                )}
                {activeProject.url && (
                  <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </Button>
                  </a>
                )}
                {!activeProject.url && !activeProject.reportUrl && (
                  <Button className="w-full gap-2" disabled>
                    <ExternalLink className="w-4 h-4" />
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
