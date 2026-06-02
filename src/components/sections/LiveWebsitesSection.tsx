import React, { useState } from "react";
import { ExternalLink, Globe, Monitor, Smartphone, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useInView } from "@/hooks/useInView";

type LiveSite = {
  id: string;
  title: string;
  label: string;
  description: string;
  url: string;
  tags: string[];
  benefits: string[];
  outcomes: string[];
};

const liveWebsites: LiveSite[] = [
  {
    id: "site-1",
    title: "FuelFit Funnel",
    label: "Sales Funnel",
    description: "A high-converting sales funnel designed to drive fitness product purchases with compelling copy and seamless checkout.",
    url: "https://fuelfit-funnel.vercel.app",
    tags: ["Sales Funnel", "Conversion", "Landing Page"],
    benefits: [
      "Turns cold traffic into paying customers with a guided, story-driven flow.",
      "Removes friction at checkout so buyers complete their purchase faster.",
      "Builds trust with social proof, benefit-led copy, and clear product positioning.",
    ],
    outcomes: [
      "Higher conversion rate on fitness product launches and promos.",
      "Lower ad cost per sale because the page does the selling.",
      "A repeatable funnel you can plug new offers into anytime.",
    ],
  },
  {
    id: "site-2",
    title: "Prestige Realty Funnel",
    label: "Appointment Funnel",
    description: "An appointment booking funnel for real estate businesses, capturing leads and scheduling property viewings automatically.",
    url: "https://prestige-realty-funnel.vercel.app",
    tags: ["Appointment Funnel", "Real Estate", "Lead Capture"],
    benefits: [
      "Captures qualified buyer and seller leads 24/7 without manual follow-up.",
      "Automatically books property viewings straight into your calendar.",
      "Filters out tire-kickers so agents only talk to serious prospects.",
    ],
    outcomes: [
      "More booked showings every week with zero back-and-forth.",
      "A predictable pipeline of leads instead of relying on referrals.",
      "Agents spend time closing deals — not chasing inquiries.",
    ],
  },
  {
    id: "site-3",
    title: "Apex Media Funnel",
    label: "Lead Funnel",
    description: "A lead generation funnel for media agencies, designed to capture and qualify prospects through strategic content.",
    url: "https://apex-media-funnel.vercel.app",
    tags: ["Lead Funnel", "Agency", "Marketing"],
    benefits: [
      "Positions your agency as the expert with clear messaging and case studies.",
      "Qualifies leads with smart form questions before they hit your inbox.",
      "Integrates with your CRM so no lead ever slips through the cracks.",
    ],
    outcomes: [
      "Discovery calls booked with pre-qualified, ready-to-buy clients.",
      "Higher close rate because leads arrive warm and informed.",
      "A scalable client acquisition system you can run paid traffic into.",
    ],
  },
];

export function LiveWebsitesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeSite, setActiveSite] = useState<LiveSite | null>(null);
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
            Browse my live website projects — click any preview to see how it helps business owners and the results it delivers.
          </p>
        </div>

        {/* Website Cards */}
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

              {/* Live Preview - clickable to open details modal */}
              <button
                type="button"
                onClick={() => setActiveSite(site)}
                className="relative w-full h-48 overflow-hidden block text-left focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label={`View details for ${site.title}`}
              >
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
                    <span className="text-sm font-medium text-foreground">Click to view details</span>
                  </div>
                </div>
              </button>

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
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={!!activeSite} onOpenChange={(open) => !open && setActiveSite(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {activeSite && (
            <>
              {/* Large preview */}
              <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden bg-muted border-b border-border/40">
                <iframe
                  src={activeSite.url}
                  title={activeSite.title}
                  className="w-[200%] h-[200%] origin-top-left scale-50 border-0"
                  loading="lazy"
                />
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader className="text-left mb-6">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <DialogTitle className="text-2xl">{activeSite.title}</DialogTitle>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                      {activeSite.label}
                    </span>
                  </div>
                  <DialogDescription className="text-base">
                    {activeSite.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Benefits */}
                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">How it helps the business owner</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {activeSite.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      <h4 className="font-semibold">The output for their website</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {activeSite.outcomes.map((o, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href={activeSite.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
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
