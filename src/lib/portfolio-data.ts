export interface PortfolioData {
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    headlineSuffix: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    ctaNote: string;
    motto: string;
  };
  about: {
    sectionLabel: string;
    name: string;
    title: string;
    description: string;
    vision: string;
    goal: string;
    location: string;
    email: string;
  };
  skills: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
      tags: string[];
      stats: Array<{ label: string; value: string }>;
      link?: string;
      image?: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  social: {
    upwork?: string;
    linkedin?: string;
    github?: string;
    email: string;
  };
}

export const defaultPortfolioData: PortfolioData = {
  hero: {
    badge: "Open for Freelance Projects",
    headline: "Automation That Saves",
    headlineAccent: "Time, Money,",
    headlineSuffix: "and Focus.",
    description:
      "Your Partner in AI & Business Automation.",
    ctaText: "Hire Me",
    ctaLink: "https://mail.google.com/mail/?view=cm&fs=1&to=dawnsolomon482@gmail.com",
    secondaryCtaText: "View My Work",
    ctaNote: "Let's transform your manual workflows into smart systems.",
    motto: "Better systems. Bigger impact.",
  },
  about: {
    sectionLabel: "THE ARCHITECT BEHIND THE AUTOMATION",
    name: "Dawn",
    title: "Automation Engineer | WordPress SEO | AI Visibility",
    description:
      "I design end-to-end automation solutions using tools like GoHighLevel, Zapier (Integromat), and n8n, seamlessly connecting marketing, CRM, and operations into one intelligent ecosystem that runs on autopilot. With a solid foundation in WordPress SEO and LLMS visibility, I understand how systems, data, and strategy work together to create sustainable digital growth.",
    vision:
      "A world where founders and teams focus purely on creative, high-impact work, while robots handle 100% of the repetitive admin.",
    goal:
      "To transform manual workflows into smart, self-running systems that multiply your time, productivity, and revenue.",
    location: "Laguna, Philippines",
    email: "dawnsolomon482@gmail.com",
  },
  skills: {
    title: "My Skills & Competencies",
    subtitle: "Comprehensive solutions to grow and streamline your business.",
    items: [
      {
        id: "skill-1",
        title: "WordPress SEO Optimization",
        description: "Technical SEO, keyword research, and on-page optimization.",
        icon: "Search",
      },
      {
        id: "skill-2",
        title: "Technical Virtual Assistant",
        description: "Reliable support for technical and administrative tasks.",
        icon: "Laptop",
      },
      {
        id: "skill-3",
        title: "AI Automation",
        description: "Building intelligent workflows with AI integration.",
        icon: "Bot",
      },
      {
        id: "skill-4",
        title: "GEO",
        description: "AI visibility optimization for LLMs and generative search engines.",
        icon: "Eye",
      },
    ],
  },
  services: {
    title: "My Services",
    subtitle: "What I can do for your business.",
    items: [
      {
        id: "service-1",
        title: "AI Automation Engineer",
        description:
          "I help businesses scale with AI automation—cut costs, save time, and focus on what matters most.",
        icon: "Zap",
      },
      {
        id: "service-2",
        title: "WordPress Optimization SEO",
        description:
          "I optimize WordPress sites for speed, security, and SEO—helping business owners grow online.",
        icon: "Globe",
      },
      {
        id: "service-3",
        title: "AI Visibility",
        description:
          "Boost your online visibility with AI automation & WordPress SEO—work smarter, grow faster.",
        icon: "Eye",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    subtitle:
      "Real-world scenarios solved with precision. These projects showcase my automation expertise.",
    items: [
      {
        id: "project-1",
        title: "Fitness Website Design",
        description:
          "Complete website design and development for a fitness brand with optimized user experience.",
        category: "Web Design",
        tags: ["WordPress", "SEO", "UI/UX"],
        stats: [
          { label: "Load Time", value: "-40%" },
          { label: "Conversions", value: "+25%" },
        ],
      },
      {
        id: "project-2",
        title: "GHL HVAC Website",
        description:
          "GoHighLevel website build for an HVAC company with automated lead capture and follow-up.",
        category: "Automation",
        tags: ["GoHighLevel", "CRM", "Automation"],
        stats: [
          { label: "Lead Response", value: "Instant" },
          { label: "Manual Ops", value: "Zero" },
        ],
      },
      {
        id: "project-3",
        title: "Auto Sort Gmail Attachments",
        description:
          "Automated workflow that sorts and organizes Gmail attachments into Google Drive folders.",
        category: "Automation",
        tags: ["n8n", "Gmail", "Google Drive"],
        stats: [
          { label: "Time Saved", value: "5 Hrs/Wk" },
          { label: "Accuracy", value: "100%" },
        ],
      },
      {
        id: "project-4",
        title: "AI Content Repurposing",
        description:
          "AI-powered workflow that transforms long-form content into multiple social media formats.",
        category: "AI",
        tags: ["n8n", "AI", "Content"],
        stats: [
          { label: "Content Output", value: "5x" },
          { label: "Time Saved", value: "-80%" },
        ],
      },
      {
        id: "project-5",
        title: "Automated WordPress Posts",
        description:
          "Scheduling and publishing automation for WordPress blogs with SEO optimization.",
        category: "Automation",
        tags: ["WordPress", "Zapier", "SEO"],
        stats: [
          { label: "Posts/Week", value: "Auto" },
          { label: "SEO Score", value: "+30%" },
        ],
      },
      {
        id: "project-6",
        title: "Invoice Workflow Automation",
        description:
          "End-to-end invoice generation and delivery system with payment tracking.",
        category: "Automation",
        tags: ["Zapier", "Xero", "Email"],
        stats: [
          { label: "Admin Time", value: "-4 Hrs" },
          { label: "Accuracy", value: "100%" },
        ],
      },
    ],
  },
  contact: {
    title: "Let's Work Together!",
    subtitle: "I am available for freelance projects.",
    ctaText: "Hire Me",
  },
  social: {
    email: "dawnsolomon482@gmail.com",
    linkedin: "https://www.linkedin.com/in/dawn-solomon-automation-engineer-wordpress-seo-ai-visibility/",
    upwork: "https://upwork.com",
  },
};

const STORAGE_KEY = "dawn-portfolio-data";

export function getPortfolioData(): PortfolioData {
  if (typeof window === "undefined") return defaultPortfolioData;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultPortfolioData;
    }
  }
  return defaultPortfolioData;
}

export function savePortfolioData(data: PortfolioData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetPortfolioData(): void {
  localStorage.removeItem(STORAGE_KEY);
}
