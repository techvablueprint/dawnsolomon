import { useEffect, useState } from "react";

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
        const newTrail = [newPos, ...prev.slice(0, 8)];
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
          className="absolute rounded-full bg-primary/30 blur-sm transition-all duration-75"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
            width: 8 - index * 0.5,
            height: 8 - index * 0.5,
            opacity: 1 - index * 0.1,
            transform: `scale(${1 - index * 0.08})`,
          }}
        />
      ))}
      
      {/* Main glow */}
      <div
        className="absolute rounded-full pointer-events-none transition-transform duration-100 ease-out"
        style={{
          left: position.x - 100,
          top: position.y - 100,
          width: 200,
          height: 200,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)`,
        }}
      />
      
      {/* Inner bright core */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          width: 12,
          height: 12,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.4) 50%, transparent 100%)`,
          boxShadow: `0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)`,
        }}
      />
    </div>
  );
}
