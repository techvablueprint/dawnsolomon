import { Helmet } from "react-helmet-async";
import { PortfolioProvider } from "@/contexts/PortfolioContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MouseFollower } from "@/components/MouseFollower";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LiveWebsitesSection } from "@/components/sections/LiveWebsitesSection";
import { LiveDashboardSection } from "@/components/sections/LiveDashboardSection";
import { CalendlySection } from "@/components/sections/CalendlySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <PortfolioProvider>
      <Helmet>
        <title>Dawn Solomon | Automation Engineer & WordPress SEO Specialist</title>
        <meta
          name="description"
          content="I'm an Automation Engineer focused on building AI-driven workflows and business automation systems that help brands scale faster, work smarter, and operate seamlessly."
        />
        <meta
          name="keywords"
          content="automation engineer, wordpress seo, ai automation, workflow automation, virtual assistant, philippines freelancer"
        />
        <meta property="og:title" content="Dawn Solomon | Automation Engineer" />
        <meta
          property="og:description"
          content="Building AI-driven workflows and business automation systems that help brands scale faster."
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
