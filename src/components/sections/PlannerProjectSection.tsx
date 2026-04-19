import React from "react";
import { LayoutGrid, Clock, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import plannerFeature from "@/assets/projects/fence-planner-feature.png";

type Planner = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string | null;
  tags: string[];
  status: "soon";
};

const planners: Planner[] = [
  {
    id: "fence-planner",
    title: "Fencing Calculator & Planner",
    label: "Fence Planner",
    description:
      "Custom planner that lets users design their fence section by section, with real-time material list and cost estimation.",
    image: plannerFeature,
    tags: ["Planner", "Calculator", "Responsive"],
    status: "soon",
  },
  {
    id: "planner-2",
    title: "Planner Project #2",
    label: "Coming Soon",
    description:
      "A second custom planner tool currently in development. Feature image and live link will be available soon.",
    image: null,
    tags: ["Planner", "In Progress"],
    status: "soon",
  },
  {
    id: "planner-3",
    title: "Planner Project #3",
    label: "Coming Soon",
    description:
      "A third custom planner tool currently in development. Feature image and live link will be available soon.",
    image: null,
    tags: ["Planner", "In Progress"],
    status: "soon",
  },
];

export function PlannerProjectSection() {
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
            A collection of custom-built planner and calculator tools designed to streamline real-world workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planners.map((planner) => (
            <div
              key={planner.id}
              className="group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
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

              {/* Feature image / placeholder */}
              <div className="relative w-full h-56 overflow-hidden bg-muted/30">
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
              </div>

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

                {/* CTA — Soon */}
                <Button
                  variant="outline"
                  disabled
                  className={cn(
                    "w-full gap-2 border-primary/20 opacity-80 cursor-not-allowed",
                  )}
                >
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
