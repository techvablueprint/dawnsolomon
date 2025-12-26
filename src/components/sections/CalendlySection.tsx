import { useEffect } from "react";
import { Calendar } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

export const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="booking" className="py-20 md:py-32 relative">
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
            Schedule a <span className="text-gradient">Meeting</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Book a free consultation call and let's explore how I can help automate your business processes.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="calendly-inline-widget rounded-2xl overflow-hidden border border-border shadow-lg"
            data-url="https://calendly.com/dawnsolomon482?hide_gdpr_banner=1&background_color=0a1628&text_color=e0f7fa&primary_color=00ffff"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};
