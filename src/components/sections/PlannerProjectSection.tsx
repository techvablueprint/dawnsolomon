import React, { useState } from "react";
import { LayoutGrid, Clock, ImageOff, ExternalLink, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import plannerFeature from "@/assets/projects/fence-planner-feature.png";
import hvacPlannerFeature from "@/assets/projects/hvac-planner-feature.png";
import roofingPlannerFeature from "@/assets/projects/roofing-planner-feature.png";

type Planner = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string | null;
  tags: string[];
  status: "soon" | "live";
  url?: string;
  benefits: string[];
  outcomes: string[];
};

const planners: Planner[] = [
  {
    id: "fence-planner",
    title: "Fencing Calculator & Planner",
    label: "Live",
    description:
      "Custom planner that lets users design their fence section by section, with real-time material list and cost estimation.",
    image: plannerFeature,
    tags: ["Planner", "Calculator", "Responsive"],
    status: "live",
    url: "https://hampton-fence-planner.vercel.app",
    benefits: [
      "Lets homeowners self-quote their fence without waiting for a sales rep.",
      "Eliminates back-and-forth emails to figure out materials and pricing.",
      "Captures hot, ready-to-buy leads straight into the sales pipeline.",
    ],
    outcomes: [
      "More qualified quote requests every week, fully automated.",
      "Faster sales cycle — clients arrive already knowing their budget.",
      "A 24/7 estimator that replaces hours of manual quoting.",
    ],
  },
  {
    id: "planner-2",
    title: "HVAC System Planner",
    label: "Live",
    description:
      "Interactive HVAC planner that lets users select zones, system types, and add-ons with a live estimate snapshot.",
    image: hvacPlannerFeature,
    tags: ["Planner", "HVAC", "Estimator"],
    status: "live",
    url: "https://hvac-deploy-delta.vercel.app/",
    benefits: [
      "Helps customers visualize the right HVAC setup for their home.",
      "Removes pricing confusion with a transparent live estimate.",
      "Filters serious buyers before the technician ever leaves the office.",
    ],
    outcomes: [
      "Higher booked-install rate from pre-qualified leads.",
      "Less time spent on dead-end estimates and site visits.",
      "A premium customer experience that builds trust upfront.",
    ],
  },
  {
    id: "planner-3",
    title: "Roofing Project Planner",
    label: "Live",
    description:
      "Interactive roofing planner to estimate costs, visualize roof sections, and request a free inspection & quote.",
    image: roofingPlannerFeature,
    tags: ["Planner", "Roofing", "Estimator"],
    status: "live",
    url: "https://roofing-planner.vercel.app",
    benefits: [
      "Gives homeowners instant clarity on roofing costs and options.",
      "Books free inspections automatically from the same page.",
      "Positions the roofing company as modern, transparent, and trustworthy.",
    ],
    outcomes: [
      "A steady flow of inspection bookings without phone tag.",
      "Higher close rate because leads come in already educated.",
      "An always-on lead engine that works while the crew is on site.",
    ],
  },
];

export function PlannerProjectSection() {
  const { ref: gridRef, inView } = useInView<HTMLDivElement>();
  const [activePlanner, setActivePlanner] = useState<Planner | null>(null);

  return (
    <section id="planner-project" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <LayoutGrid className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Planner Tools</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Custom</span> Planner Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of custom-built planner and calculator tools — click any preview to see how it helps the business owner.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
          {planners.map((planner, idx) => (
            <div
              key={planner.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 flex flex-col opacity-0 hover:-translate-y-1",
                inView && "animate-flip-in"
              )}
              style={inView ? { animationDelay: `${idx * 200}ms`, transformOrigin: "center top" } : undefined}
            >
              {/* Browser mockup header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-md bg-background/50 text-xs text-muted-foreground truncate">
                  <LayoutGrid className="w-3 h-3 shrink-0" />
                  <span className="truncate">{planner.label}</span>
                </div>
              </div>

              {/* Feature image / placeholder — clickable */}
              <button
                type="button"
                onClick={() => setActivePlanner(planner)}
                className="relative w-full h-56 overflow-hidden bg-muted/30 block text-left focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label={`View details for ${planner.title}`}
              >
                {planner.image ? (
                  <img
                    src={planner.image}
                    alt={planner.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <ImageOff className="w-6 h-6 text-primary/70" />
                    </div>
                    <span className="text-sm font-medium">Feature image coming soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-sm font-medium text-foreground">Click to view details</span>
                </div>
              </button>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {planner.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                    {planner.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {planner.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {planner.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {planner.status === "live" && planner.url ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                  >
                    <a href={planner.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Planner
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    disabled
                    className="w-full gap-2 border-primary/20 opacity-80 cursor-not-allowed"
                  >
                    <Clock className="w-4 h-4" />
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={!!activePlanner} onOpenChange={(open) => !open && setActivePlanner(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {activePlanner && (
            <>
              <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden bg-muted border-b border-border/40">
                {activePlanner.image ? (
                  <img
                    src={activePlanner.image}
                    alt={activePlanner.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <ImageOff className="w-10 h-10" />
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader className="text-left mb-6">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <DialogTitle className="text-2xl">{activePlanner.title}</DialogTitle>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                      {activePlanner.label}
                    </span>
                  </div>
                  <DialogDescription className="text-base">
                    {activePlanner.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">How it helps the business owner</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {activePlanner.benefits.map((b, i) => (
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
                      {activePlanner.outcomes.map((o, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activePlanner.status === "live" && activePlanner.url && (
                  <a href={activePlanner.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Planner
                    </Button>
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
