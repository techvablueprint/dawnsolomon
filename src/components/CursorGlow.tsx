import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

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
        const newTrail = [newPos, ...prev.slice(0, 12)];
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
      {/* Rocket flame trail */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: pos.x + 20,
            top: pos.y + 28,
            width: 8 - index * 0.5,
            height: 12 - index * 0.8,
            opacity: 0.8 - index * 0.06,
            background: index < 4 
              ? `linear-gradient(to bottom, #ff6b35, #ff9500, #ffcc00)` 
              : `linear-gradient(to bottom, hsl(var(--primary) / ${0.6 - index * 0.04}), transparent)`,
            filter: `blur(${index * 0.5}px)`,
            borderRadius: '50%',
          }}
        />
      ))}
      
      {/* Main glow behind rocket */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: position.x - 30,
          top: position.y - 30,
          width: 100,
          height: 100,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.08) 40%, transparent 70%)`,
        }}
      />
      
      {/* Rocket flame glow */}
      <div
        className="absolute rounded-full pointer-events-none animate-pulse"
        style={{
          left: position.x + 10,
          top: position.y + 25,
          width: 24,
          height: 30,
          background: `radial-gradient(ellipse, rgba(255, 150, 50, 0.6) 0%, rgba(255, 100, 30, 0.3) 50%, transparent 80%)`,
          filter: 'blur(4px)',
        }}
      />
      
      {/* AI Rocket Guide */}
      <div
        className="absolute pointer-events-none transition-all duration-75 ease-out"
        style={{
          left: position.x + 8,
          top: position.y + 8,
        }}
      >
        <div className="relative">
          {/* Rocket container with glow */}
          <div 
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary via-cyan-400 to-primary shadow-xl"
            style={{
              boxShadow: `0 0 20px hsl(var(--primary) / 0.7), 0 0 40px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)`,
              transform: 'rotate(-45deg)',
            }}
          >
            <Rocket className="w-5 h-5 text-background" style={{ transform: 'rotate(45deg)' }} />
          </div>
          
          {/* Sparkle particles */}
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping"
            style={{
              top: 24,
              left: 20,
              animationDuration: '1s',
            }}
          />
          <div 
            className="absolute w-1 h-1 rounded-full bg-orange-400 animate-ping"
            style={{
              top: 28,
              left: 14,
              animationDuration: '1.5s',
            }}
          />
          <div 
            className="absolute w-1 h-1 rounded-full bg-cyan-400 animate-ping"
            style={{
              top: 30,
              left: 22,
              animationDuration: '0.8s',
            }}
          />
        </div>
      </div>
    </div>
  );
}
