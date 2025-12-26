import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { MessageSquare, Search, Laptop, Bot, Zap, Globe, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-7 h-7" />,
  Search: <Search className="w-7 h-7" />,
  Laptop: <Laptop className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Eye: <Eye className="w-7 h-7" />,
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
  return (
    <div
      className={cn(
        "group rounded-2xl p-6",
        "bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/50",
        "hover:border-cyan-500/30 transition-all duration-300 cursor-default"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center mb-5 group-hover:text-cyan-300 transition-colors duration-300">
        {iconMap[icon] || <Bot className="w-7 h-7" />}
      </div>
      <EditableText
        value={title}
        onChange={onTitleChange}
        as="h3"
        className="font-bold text-xl mb-3 text-foreground"
      />
      <EditableText
        value={description}
        onChange={onDescriptionChange}
        as="p"
        multiline
        className="text-sm text-muted-foreground leading-relaxed"
      />
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
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <EditableText
            value={skills.title}
            onChange={(v) => updateData({ skills: { ...skills, title: v } })}
            as="h2"
            className="text-3xl lg:text-4xl font-bold mb-4"
          />
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
