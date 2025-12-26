import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";

export function ContactSection() {
  const { data, updateData } = usePortfolio();
  const { contact, about, social } = data;

  return (
    <section id="contact" className="py-20 lg:py-32 text-foreground" style={{ backgroundColor: 'hsl(215 50% 5%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - CTA */}
            <div className="space-y-6">
              <EditableText
                value={contact.title}
                onChange={(v) =>
                  updateData({ contact: { ...contact, title: v } })
                }
                as="h2"
                className="text-3xl lg:text-4xl font-bold"
              />
              <EditableText
                value={contact.subtitle}
                onChange={(v) =>
                  updateData({ contact: { ...contact, subtitle: v } })
                }
                as="p"
                className="text-muted-foreground text-lg"
              />
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button"
                asChild
              >
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${about.email}`} target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 w-5 h-5" />
                  <EditableText
                    value={contact.ctaText}
                    onChange={(v) =>
                      updateData({ contact: { ...contact, ctaText: v } })
                    }
                  />
                </a>
              </Button>
            </div>

            {/* Right - Contact info */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-muted-foreground">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">{about.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${about.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {about.email}
                    </a>
                  </div>
                </div>

                {social.linkedin && (
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        View Profile
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Copyright © {new Date().getFullYear()} {about.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
