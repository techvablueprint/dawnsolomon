import React from "react";
import aiAutomationImg from "@/assets/services/ai-automation.png";
import wordpressSeoImg from "@/assets/services/wordpress-seo.png";
import aiVisibilityImg from "@/assets/services/ai-visibility.png";

const services = [
  {
    id: "1",
    title: "AI Automation Engineer",
    image: aiAutomationImg,
  },
  {
    id: "2",
    title: "WordPress Optimization SEO",
    image: wordpressSeoImg,
  },
  {
    id: "3",
    title: "AI Visibility",
    image: aiVisibilityImg,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to automate and optimize your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 card-hover"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
