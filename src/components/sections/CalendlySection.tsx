import { useEffect } from "react";
import { Calendar } from "lucide-react";

export const CalendlySection = () => {
  return (
    <section id="booking" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated vertical lines moving upward */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] bg-gradient-to-t from-transparent via-primary/25 to-transparent animate-line-up rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              height: '150px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Book a Call</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule a <span className="text-primary">Meeting</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Book a free consultation call and let's explore how I can help automate your business processes.
          </p>
        </div>

        {/* Cal.com inline embed */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
            style={{ minWidth: "320px", height: "700px" }}
          >
            <iframe
              src="https://cal.com/dawn-solomon-gseqme/30min"
              title="Book a meeting with Dawn Solomon"
              className="w-full h-full border-0"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
