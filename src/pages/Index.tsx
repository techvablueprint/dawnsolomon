import { Helmet } from "react-helmet-async";
import { PortfolioProvider } from "@/contexts/PortfolioContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MouseFollower } from "@/components/MouseFollower";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LiveWebsitesSection } from "@/components/sections/LiveWebsitesSection";
import { PlannerProjectSection } from "@/components/sections/PlannerProjectSection";
import { LiveDashboardSection } from "@/components/sections/LiveDashboardSection";
import { CalendlySection } from "@/components/sections/CalendlySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <PortfolioProvider>
      <Helmet>
        <title>Dawn Solomon | GHL Automation Specialist</title>
        <meta
          name="description"
          content="Dawn Solomon — GoHighLevel Automation Specialist & AI Engineer. Helping businesses build self-running systems through GHL, Make.com, Zapier, and n8n."
        />
        <meta
          name="keywords"
          content="automation engineer, wordpress seo, ai automation, workflow automation, virtual assistant, philippines freelancer"
        />
        <meta property="og:title" content="Dawn Solomon | GHL Automation Specialist" />
        <meta
          property="og:description"
          content="Helping businesses build self-running systems through GHL, Make.com, Zapier, and n8n."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dawnsolomon.com" />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Global Video Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/videos/background.mp4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <MouseFollower />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <LiveWebsitesSection />
          <PlannerProjectSection />
          <LiveDashboardSection />
          
          <CalendlySection />
          <ContactSection />
        </main>
        <Chatbot />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
