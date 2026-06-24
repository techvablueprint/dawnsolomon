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
    ctaText: "Book a Call",
    ctaLink: "https://mail.google.com/mail/?view=cm&fs=1&to=dawnsolomon482@gmail.com",
    secondaryCtaText: "View My Work",
    ctaNote: "Let's transform your manual workflows into smart systems.",
    motto: "Better systems. Bigger impact.",
  },
  about: {
    sectionLabel: "THE ARCHITECT BEHIND THE AUTOMATION",
    name: "Dawn Solomon",
    title: "GoHighLevel & AI Automation | CRM, Workflows, WordPress SEO",
    description:
      "I help businesses scale with GoHighLevel & AI automation — building powerful CRM systems, smart workflows, and SEO-optimized WordPress sites that run on autopilot. By connecting marketing, sales, and operations into one intelligent ecosystem, I turn manual tasks into self-running processes that save time, cut costs, and drive sustainable growth.",
    vision:
      "A world where founders and teams focus purely on creative, high-impact work, while robots handle 100% of the repetitive admin.",
    goal:
      "To transform manual workflows into smart, self-running systems that multiply your time, productivity, and revenue — making your business easy to run and completely stress-free.",
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
        id: "project-3",
        title: "Auto Sort Gmail Attachments",
        description:
          "Automated workflow that sorts and organizes Gmail attachments into Google Drive folders.",
        category: "Automation",
        tags: ["Make", "Gmail", "Google Drive"],
        stats: [
          { label: "Time Saved", value: "5 Hrs/Wk" },
          { label: "Accuracy", value: "100%" },
        ],
        image: "/projects/auto-sort-gmail-attachments.png",
      },
      {
        id: "project-4",
        title: "4 Quote Follow up Automation",
        description:
          "Zapier automation that handles task tracking and email follow-ups across multiple workflow stages.",
        category: "Automation",
        tags: ["Zapier", "Asana", "Gmail"],
        stats: [
          { label: "Workflow Stages", value: "5+" },
          { label: "Auto Emails", value: "20+" },
        ],
        image: "/projects/quote-followup-automation.png",
      },
      {
        id: "project-6",
        title: "Lead to Booking – HVAC NPCS",
        description:
          "Lead to Booking – HVAC NPCS: A fully automated GoHighLevel workflow that captures leads and books appointments automatically, eliminating manual follow-ups and streamlining the entire sales pipeline.",
        category: "Automation",
        tags: ["GoHighLevel", "Workflow", "CRM"],
        stats: [
          { label: "Project Base", value: "100%" },
          { label: "Accuracy", value: "100%" },
        ],
        image: "/projects/invoice-workflow-automation.png",
      },
    ],
  },
  contact: {
    title: "Let's Work Together!",
    subtitle: "I am available for freelance projects.",
    ctaText: "Book a Call",
  },
  social: {
    email: "dawnsolomon482@gmail.com",
    linkedin: "https://www.linkedin.com/in/dawnsolomon482-automation-wordpress-seo-specialist/",
    upwork: "https://upwork.com",
  },
};

const STORAGE_KEY = "dawn-portfolio-data";

export function getPortfolioData(): PortfolioData {
  if (typeof window === "undefined") return defaultPortfolioData;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as PortfolioData;
      // Merge project images/links from default data if missing in stored data
      const mergedProjects = parsed.projects.items.map((item) => {
        const defaultItem = defaultPortfolioData.projects.items.find(
          (d) => d.id === item.id
        );
        if (defaultItem) {
          return {
            ...item,
            image: item.image || defaultItem.image,
            link: item.link || defaultItem.link,
          };
        }
        return item;
      });
      return {
        ...parsed,
        about: {
          ...parsed.about,
          title: defaultPortfolioData.about.title,
        },
        projects: {
          ...parsed.projects,
          items: mergedProjects,

        },
      };
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
