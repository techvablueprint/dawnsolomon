import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { EditableText } from "@/components/EditableText";
import { Zap, Globe, Eye, Bot, Search, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Eye: <Eye className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
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
          {iconMap[icon] || <Zap className="w-8 h-8" />}
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
