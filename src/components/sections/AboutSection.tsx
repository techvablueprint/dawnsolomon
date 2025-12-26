import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { MapPin, Mail, Briefcase, Target, Eye } from "lucide-react";

export function AboutSection() {
  const { data, updateField } = usePortfolio();
  const { about } = data;

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-muted/30 overflow-hidden">
      {/* Animated vertical lines moving upward */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] bg-gradient-to-t from-transparent via-cyan-400/40 to-transparent animate-line-up rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              height: '150px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <EditableText
              value={about.sectionLabel}
              onChange={(v) => updateField("about", "sectionLabel", v)}
              as="p"
              className="text-sm font-semibold tracking-wider text-primary uppercase"
            />
            <h2 className="text-3xl lg:text-4xl font-bold">
              I'm{" "}
              <EditableText
                value={about.name}
                onChange={(v) => updateField("about", "name", v)}
                className="text-foreground"
              />
              .
            </h2>
            <EditableText
              value={about.title}
              onChange={(v) => updateField("about", "title", v)}
              as="p"
              className="text-lg font-medium text-muted-foreground"
            />
            <EditableText
              value={about.description}
              onChange={(v) => updateField("about", "description", v)}
              as="p"
              multiline
              className="text-muted-foreground leading-relaxed"
            />

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <EditableText
                  value={about.location}
                  onChange={(v) => updateField("about", "location", v)}
                  className="text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <EditableText
                  value={about.email}
                  onChange={(v) => updateField("about", "email", v)}
                  className="text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Freelancer</span>
              </div>
            </div>
          </div>

          {/* Right column - Vision & Goal */}
          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-8 border border-secondary/20 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-background/50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center mb-6 text-secondary">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3">My Vision</h3>
                <EditableText
                  value={about.vision}
                  onChange={(v) => updateField("about", "vision", v)}
                  as="p"
                  multiline
                  className="text-muted-foreground leading-relaxed"
                />
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-background/50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center mb-6 text-primary">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3">My Goal</h3>
                <EditableText
                  value={about.goal}
                  onChange={(v) => updateField("about", "goal", v)}
                  as="p"
                  multiline
                  className="text-muted-foreground leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
