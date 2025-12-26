import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { MapPin, Mail, Briefcase, Target, Eye } from "lucide-react";

export function AboutSection() {
  const { data, updateField } = usePortfolio();
  const { about } = data;

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
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
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">My Vision</h3>
              </div>
              <EditableText
                value={about.vision}
                onChange={(v) => updateField("about", "vision", v)}
                as="p"
                multiline
                className="text-muted-foreground leading-relaxed"
              />
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">My Goal</h3>
              </div>
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
    </section>
  );
}
