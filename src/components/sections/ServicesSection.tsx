import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Zap, Globe, Eye, Bot, Search, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Eye: <Eye className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
  Search: <Search className="w-7 h-7" />,
  Settings: <Settings className="w-7 h-7" />,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  onTitleChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
}

function ServiceCard({
  title,
  description,
  icon,
  index,
  onTitleChange,
  onDescriptionChange,
}: ServiceCardProps) {
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
        {iconMap[icon] || <Zap className="w-7 h-7" />}
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

export function ServicesSection() {
  const { data, updateData } = usePortfolio();
  const { services } = data;

  const updateServiceItem = (
    id: string,
    field: "title" | "description",
    value: string
  ) => {
    const newItems = services.items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    updateData({
      services: { ...services, items: newItems },
    });
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <EditableText
            value={services.title}
            onChange={(v) => updateData({ services: { ...services, title: v } })}
            as="h2"
            className="text-3xl lg:text-4xl font-bold mb-4"
          />
          <EditableText
            value={services.subtitle}
            onChange={(v) => updateData({ services: { ...services, subtitle: v } })}
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={index}
              onTitleChange={(v) => updateServiceItem(service.id, "title", v)}
              onDescriptionChange={(v) =>
                updateServiceItem(service.id, "description", v)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
