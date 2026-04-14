import React, { useState } from "react";
import { ExternalLink, BarChart3, Monitor, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const liveDashboards = [
  {
    id: "dash-1",
    title: "Medspa Dashboard",
    description: "Real-time analytics dashboard tracking sales, appointments, and website traffic for medspa businesses.",
    url: "https://dawnsolomon-automation.lovable.app",
    image: "/projects/medspa-dashboard.png",
    tags: ["Analytics", "Real-time", "Sales Tracking"],
    metrics: [
      { label: "Live Data", value: "24/7" },
      { label: "Tracking", value: "Real-time" },
    ],
  },
];

export function LiveDashboardSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="live-dashboards" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      {/* Grid pattern decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Dashboards</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Live</span> Dashboards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore real-time dashboards I've built — interactive analytics that track business performance and deliver actionable insights.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {liveDashboards.map((dash) => (
            <div
              key={dash.id}
              className="group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              onMouseEnter={() => setHoveredId(dash.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Dashboard mockup header */}
              <div className="flex items-center justify-between px-6 py-4 bg-muted/50 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{dash.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-primary font-medium">LIVE</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Screenshot */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <img
                  src={dash.image}
                  alt={dash.title}
                  className={cn(
                    "w-full h-full object-cover object-top transition-transform duration-700",
                    hoveredId === dash.id && "scale-105"
                  )}
                />
                {/* Hover overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300",
                    hoveredId === dash.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                        <Monitor className="w-6 h-6 text-primary" />
                      </div>
                      <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <span className="text-base font-semibold text-foreground">Click to explore dashboard</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {dash.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-lg">
                      {dash.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dash.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics + CTA */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="flex gap-6">
                      {dash.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <p className="text-lg font-bold text-foreground">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <a
                      href={dash.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Explore Dashboard
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Full card link overlay */}
              <a
                href={dash.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Explore {dash.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
