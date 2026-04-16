import React, { useState } from "react";
import { ExternalLink, BarChart3, Monitor, TrendingUp, Mail, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const liveDashboards = [
  {
    id: "dash-1",
    title: "FuelFit Dashboard",
    description: "Real-time analytics dashboard tracking sales, appointments, and website traffic for fitness businesses.",
    url: "https://fuelfit-dashboard.vercel.app",
    image: "/projects/fuelfit-dashboard.jpg",
    tags: ["Analytics", "Real-time", "Sales Tracking"],
    credentials: {
      email: "admin@fuelfit.com",
      password: "FuelFit2025",
    },
    metrics: [
      { label: "Live Data", value: "24/7" },
      { label: "Tracking", value: "Real-time" },
    ],
  },
  {
    id: "dash-2",
    title: "Prestige Realty Dashboard",
    description: "Real estate analytics dashboard monitoring property leads, bookings, and client engagement metrics.",
    url: "https://prestige-realty-dashboard.vercel.app",
    image: "/projects/prestige-realty-dashboard.jpg",
    tags: ["Real Estate", "Lead Tracking", "Analytics"],
    credentials: {
      email: "admin@prestigerealty.com",
      password: "Prestige2025",
    },
    metrics: [
      { label: "Live Data", value: "24/7" },
      { label: "Tracking", value: "Real-time" },
    ],
  },
  {
    id: "dash-3",
    title: "Apex Media Dashboard",
    description: "Media agency dashboard tracking campaign performance, client metrics, and marketing ROI in real-time.",
    url: "https://apex-media-dashboard.vercel.app/sign-in",
    image: "/projects/apex-media-dashboard.jpg",
    tags: ["Agency", "Campaign Tracking", "Marketing"],
    credentials: {
      email: "admin@apexmedia.com",
      password: "ApexMedia2025",
    },
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
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Dashboards</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Live</span> Dashboards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore real-time dashboards I've built — use the login credentials below to test and interact with each dashboard.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveDashboards.map((dash) => (
            <div
              key={dash.id}
              className="group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              onMouseEnter={() => setHoveredId(dash.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Dashboard mockup header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{dash.title}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-primary font-medium">LIVE</span>
                </div>
              </div>

              {/* Dashboard Preview Area */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={dash.image}
                  alt={dash.title}
                  loading="lazy"
                  width={1280}
                  height={720}
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
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <Monitor className="w-5 h-5 text-primary" />
                      </div>
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">Open Dashboard</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {dash.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {dash.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dash.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Login Credentials */}
                <div className="rounded-xl bg-muted/40 border border-border/40 p-4 mb-4 space-y-2">
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-2">Demo Login</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                    <span className="text-muted-foreground text-xs">Email:</span>
                    <span className="text-foreground text-xs font-mono select-all">{dash.credentials.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                    <span className="text-muted-foreground text-xs">Password:</span>
                    <span className="text-foreground text-xs font-mono select-all">{dash.credentials.password}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={dash.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative z-20"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Explore Dashboard
                  </Button>
                </a>
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
