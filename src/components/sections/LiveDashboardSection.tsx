import React, { useState } from "react";
import { ExternalLink, BarChart3, Monitor, TrendingUp, Mail, Lock, Copy, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";

function CopyField({ value, icon: Icon, label }: { value: string; icon: React.ElementType; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`${label} copied!`);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Failed to copy");
    }
  };
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="w-3.5 h-3.5 text-primary/70 shrink-0" />
      <span className="text-muted-foreground text-xs">{label}:</span>
      <span className="text-foreground text-xs font-mono select-all flex-1 truncate">{value}</span>
      <button
        type="button"
        onClick={handleCopy}
        className="relative z-30 p-1 rounded-md hover:bg-primary/10 text-primary/70 hover:text-primary transition-colors"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}

type Dashboard = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  credentials: { email: string; password: string };
  metrics: { label: string; value: string }[];
  benefits: string[];
  outcomes: string[];
};

const liveDashboards: Dashboard[] = [
  {
    id: "dash-1",
    title: "FuelFit Dashboard",
    description: "Real-time analytics dashboard tracking sales, appointments, and website traffic for fitness businesses.",
    url: "https://fuelfit-dashboard.vercel.app",
    image: "/projects/fuelfit-dashboard.jpg",
    tags: ["Analytics", "Real-time", "Sales Tracking"],
    credentials: { email: "admin@fuelfit.com", password: "FuelFit2025" },
    metrics: [
      { label: "Live Data", value: "24/7" },
      { label: "Tracking", value: "Real-time" },
    ],
    benefits: [
      "Gives fitness owners one screen to see sales, bookings, and traffic.",
      "Spots underperforming products and offers before they cost revenue.",
      "Replaces messy spreadsheets with a clean, live performance view.",
    ],
    outcomes: [
      "Smarter decisions backed by real-time numbers, not gut feel.",
      "Faster response to trends — promote what's working immediately.",
      "A professional command center that scales with the business.",
    ],
  },
  {
    id: "dash-2",
    title: "Prestige Realty Dashboard",
    description: "Real estate analytics dashboard monitoring property leads, bookings, and client engagement metrics.",
    url: "https://prestige-realty-dashboard.vercel.app",
    image: "/projects/prestige-realty-dashboard.jpg",
    tags: ["Real Estate", "Lead Tracking", "Analytics"],
    credentials: { email: "admin@prestigerealty.com", password: "Prestige2025" },
    metrics: [
      { label: "Live Data", value: "24/7" },
      { label: "Tracking", value: "Real-time" },
    ],
    benefits: [
      "Tracks every lead source so you know which channels truly convert.",
      "Surfaces hot prospects automatically based on engagement.",
      "Keeps agents accountable with clear booking and follow-up metrics.",
    ],
    outcomes: [
      "More closed deals because no lead falls through the cracks.",
      "Higher ROI on marketing spend with channel-level visibility.",
      "A scalable real-estate operation, not a chaotic inbox.",
    ],
  },
  {
    id: "dash-3",
    title: "Apex Media Dashboard",
    description: "Media agency dashboard tracking campaign performance, client metrics, and marketing ROI in real-time.",
    url: "https://apex-media-dashboard.vercel.app/sign-in",
    image: "/projects/apex-media-dashboard.jpg",
    tags: ["Agency", "Campaign Tracking", "Marketing"],
    credentials: { email: "admin@apexmedia.com", password: "ApexMedia2025" },
    metrics: [
      { label: "Live Data", value: "24/7" },
      { label: "Tracking", value: "Real-time" },
    ],
    benefits: [
      "Shows every campaign's ROI in one branded client-ready view.",
      "Cuts reporting time from hours to minutes for agency teams.",
      "Builds client trust with transparent, always-on performance data.",
    ],
    outcomes: [
      "Longer client retention — they can see the value you deliver.",
      "Faster optimization cycles, more revenue per campaign.",
      "A premium agency offering that justifies higher retainers.",
    ],
  },
];

export function LiveDashboardSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeDash, setActiveDash] = useState<Dashboard | null>(null);
  const { ref: gridRef, inView } = useInView<HTMLDivElement>();

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
            Click any dashboard preview to see how it helps the business owner, or use the demo login to explore it live.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveDashboards.map((dash, idx) => (
            <div
              key={dash.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 opacity-0 hover:-translate-y-2",
                inView && "animate-dashboard-reveal"
              )}
              style={inView ? { animationDelay: `${idx * 200}ms` } : undefined}
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

              {/* Dashboard Preview Area — clickable */}
              <button
                type="button"
                onClick={() => setActiveDash(dash)}
                className="relative w-full h-48 overflow-hidden block text-left focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label={`View details for ${dash.title}`}
              >
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
                    <span className="text-sm font-medium text-foreground">Click to view details</span>
                  </div>
                </div>
              </button>

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
                <div className="rounded-xl bg-muted/40 border border-border/40 p-4 mb-4 space-y-2 relative z-20">
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-2">Demo Login</p>
                  <CopyField value={dash.credentials.email} icon={Mail} label="Email" />
                  <CopyField value={dash.credentials.password} icon={Lock} label="Password" />
                </div>

                {/* CTA */}
                <a
                  href={dash.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative z-20 block"
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
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={!!activeDash} onOpenChange={(open) => !open && setActiveDash(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {activeDash && (
            <>
              <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden bg-muted border-b border-border/40">
                <img
                  src={activeDash.image}
                  alt={activeDash.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader className="text-left mb-6">
                  <DialogTitle className="text-2xl mb-2">{activeDash.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {activeDash.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">How it helps the business owner</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {activeDash.benefits.map((b, i) => (
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
                      {activeDash.outcomes.map((o, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href={activeDash.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Explore Dashboard
                  </Button>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
