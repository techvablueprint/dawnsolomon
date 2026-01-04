import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

export function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
      {/* Glow behind rocket */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-75"
        style={{
          left: position.x - 40,
          top: position.y - 40,
          width: 120,
          height: 120,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 50%, transparent 70%)`,
        }}
      />
      
      {/* Rocket */}
      <div
        className="absolute pointer-events-none transition-all duration-75"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary via-cyan-400 to-cyan-300"
          style={{
            boxShadow: `0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary) / 0.4)`,
          }}
        >
          <Rocket 
            className="w-5 h-5 text-background" 
            style={{ transform: 'rotate(135deg)' }} 
          />
        </div>
      </div>
    </div>
  );
}
