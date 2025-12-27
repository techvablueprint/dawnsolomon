import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { MessageSquare, Search, Laptop, Bot, Zap, Globe, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Laptop: <Laptop className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Eye: <Eye className="w-8 h-8" />,
};

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  onTitleChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
}

function SkillCard({
  title,
  description,
  icon,
  index,
  onTitleChange,
  onDescriptionChange,
}: SkillCardProps) {
  const colors = [
    "from-primary/20 to-primary/5 border-primary/20",
    "from-secondary/20 to-secondary/5 border-secondary/20",
    "from-primary/20 to-secondary/10 border-primary/20",
  ];

  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br rounded-2xl p-8 border overflow-hidden",
        "card-hover",
        colors[index % colors.length]
      )}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-background/50 to-transparent rounded-bl-full" />

      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
          {iconMap[icon] || <Bot className="w-8 h-8" />}
        </div>
        <EditableText
          value={title}
          onChange={onTitleChange}
          as="h3"
          className="font-bold text-xl mb-3"
        />
        <EditableText
          value={description}
          onChange={onDescriptionChange}
          as="p"
          multiline
          className="text-muted-foreground leading-relaxed"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { data, updateData } = usePortfolio();
  const { skills } = data;

  const updateSkillItem = (
    id: string,
    field: "title" | "description",
    value: string
  ) => {
    const newItems = skills.items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    updateData({
      skills: { ...skills, items: newItems },
    });
  };

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
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
            My Skills & <span className="text-primary">Competencies</span>
          </h2>
          <EditableText
            value={skills.subtitle}
            onChange={(v) => updateData({ skills: { ...skills, subtitle: v } })}
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {skills.items.map((skill, index) => (
            <SkillCard
              key={skill.id}
              {...skill}
              index={index}
              onTitleChange={(v) => updateSkillItem(skill.id, "title", v)}
              onDescriptionChange={(v) => updateSkillItem(skill.id, "description", v)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
