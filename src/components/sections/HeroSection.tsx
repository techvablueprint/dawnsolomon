import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const WorkflowNode = ({
  icon,
  title,
  subtitle,
  delay,
  color,
}: {
  icon: string;
  title: string;
  subtitle: string;
  delay: number;
  color: string;
}) => (
  <div
    className="workflow-node animate-float flex items-center gap-3 min-w-[200px]"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${color}`}>
      {icon}
    </div>
    <div>
      <p className="font-medium text-sm text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const WorkflowConnector = () => (
  <div className="flex flex-col items-center py-2">
    <div className="w-0.5 h-6 bg-border" />
    <div className="w-2 h-2 rounded-full bg-primary" />
    <div className="w-0.5 h-6 bg-border" />
  </div>
);

export function HeroSection() {
  const { data, updateField } = usePortfolio();
  const { hero } = data;

  return (
    <section id="home" className="relative min-h-screen bg-grid-pattern overflow-hidden">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Profile Photo */}
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card shadow-card">
                <img
                  src={profilePhoto}
                  alt="Dawn Solomon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                ✓
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <EditableText
                value={hero.badge}
                onChange={(v) => updateField("hero", "badge", v)}
                className="text-sm font-medium text-secondary"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <EditableText
                value={hero.headline}
                onChange={(v) => updateField("hero", "headline", v)}
                className="text-foreground"
              />{" "}
              <EditableText
                value={hero.headlineAccent}
                onChange={(v) => updateField("hero", "headlineAccent", v)}
                className="text-primary"
              />
              <br />
              <EditableText
                value={hero.headlineSuffix}
                onChange={(v) => updateField("hero", "headlineSuffix", v)}
                className="text-foreground"
              />
            </h1>

            {/* Description */}
            <EditableText
              value={hero.description}
              onChange={(v) => updateField("hero", "description", v)}
              as="p"
              multiline
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            />

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button"
                asChild
              >
                <a href={hero.ctaLink}>
                  <EditableText
                    value={hero.ctaText}
                    onChange={(v) => updateField("hero", "ctaText", v)}
                  />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
                asChild
              >
                <a href="#projects">
                  <EditableText
                    value={hero.secondaryCtaText}
                    onChange={(v) => updateField("hero", "secondaryCtaText", v)}
                  />
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* CTA Note */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <EditableText
                value={hero.ctaNote}
                onChange={(v) => updateField("hero", "ctaNote", v)}
              />
            </div>
          </div>

          {/* Right column - Workflow visualization */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
            <div className="relative p-8 flex flex-col items-center">
              <WorkflowNode icon="📊" title="Google Sheet" subtitle="New Row Added" delay={0} color="bg-green-100 text-green-600" />
              <WorkflowConnector />
              <WorkflowNode icon="🔍" title="Filter" subtitle="Qualify Lead" delay={0.5} color="bg-purple-100 text-purple-600" />
              <WorkflowConnector />
              <WorkflowNode icon="🤖" title="AI Agent" subtitle="Process Data" delay={1} color="bg-blue-100 text-blue-600" />
              <WorkflowConnector />
              <WorkflowNode icon="📧" title="Email" subtitle="Send Notification" delay={1.5} color="bg-orange-100 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Motto section */}
        <div className="mt-20 lg:mt-32 flex justify-center">
          <div className="text-center max-w-2xl">
            <EditableText
              value={hero.motto}
              onChange={(v) => updateField("hero", "motto", v)}
              as="p"
              className="text-xl lg:text-2xl font-medium italic text-muted-foreground"
            />
            <p className="mt-2 text-sm text-muted-foreground">— My Motto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
