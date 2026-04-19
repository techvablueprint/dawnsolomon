import React from "react";
import { ExternalLink, LayoutGrid, Ruler, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import plannerFeature from "@/assets/projects/fence-planner-feature.png";

const PLANNER_URL = "http://localhost:8765/fence-planner-standalone";

export function PlannerProjectSection() {
  const features = [
    {
      icon: Ruler,
      title: "Custom Measurements",
      description: "Enter exact fence length in millimeters and instantly visualize the layout.",
    },
    {
      icon: LayoutGrid,
      title: "Section Configurator",
      description: "Add panels, gates, and posts with a clear step-by-step configuration flow.",
    },
    {
      icon: Calculator,
      title: "Automatic Calculation",
      description: "Get materials needed and total cost calculated automatically as you build.",
    },
  ];

  return (
    <section id="planner-project" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <LayoutGrid className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Planner Tool</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Fencing</span> Calculator & Planner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A custom-built fence planning tool that lets users design their fence section by section, with real-time material calculation and cost estimation.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm">
              <img
                src={plannerFeature}
                alt="Fencing Calculator planner shown on desktop and mobile"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {["Planner Tool", "Calculator", "Responsive", "Custom Build"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={PLANNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Planner
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
