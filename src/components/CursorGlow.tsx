import { useEffect, useState } from "react";
import { Bot } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

export function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setIsVisible(true);
      
      setTrail((prev) => {
        const newTrail = [newPos, ...prev.slice(0, 5)];
        return newTrail;
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Trail particles */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-primary/40 blur-sm"
          style={{
            left: pos.x + 15,
            top: pos.y + 15,
            width: 6 - index * 0.8,
            height: 6 - index * 0.8,
            opacity: 0.6 - index * 0.1,
          }}
        />
      ))}
      
      {/* Glow behind robot */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-150 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 80,
          height: 80,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 50%, transparent 70%)`,
        }}
      />
      
      {/* AI Robot Guide */}
      <div
        className="absolute pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: position.x + 12,
          top: position.y + 12,
        }}
      >
        <div className="relative">
          {/* Robot container with glow */}
          <div 
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-400 shadow-lg animate-pulse"
            style={{
              boxShadow: `0 0 15px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--primary) / 0.3)`,
            }}
          >
            <Bot className="w-4 h-4 text-background" />
          </div>
          
          {/* Orbiting particles */}
          <div 
            className="absolute w-2 h-2 rounded-full bg-cyan-400/80 animate-spin"
            style={{
              top: -4,
              left: 12,
              animationDuration: '2s',
              boxShadow: '0 0 6px hsl(var(--primary) / 0.8)',
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/80 animate-spin"
            style={{
              bottom: -2,
              right: -2,
              animationDuration: '3s',
              animationDirection: 'reverse',
              boxShadow: '0 0 4px hsl(var(--primary) / 0.6)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
