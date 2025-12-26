import { Helmet } from "react-helmet-async";
import { PortfolioProvider } from "@/contexts/PortfolioContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EditModeToggle } from "@/components/EditModeToggle";

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

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <EditModeToggle />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
