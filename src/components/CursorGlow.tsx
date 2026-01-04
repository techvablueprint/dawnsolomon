import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

export function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [sparkId, setSparkId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setIsVisible(true);
      
      // Create new sparks at rocket tail
      const colors = ['#ff6b35', '#ff9500', '#ffcc00', '#fff', '#00d4ff', '#ff4757'];
      const newSparks: Spark[] = [];
      
      for (let i = 0; i < 3; i++) {
        newSparks.push({
          id: sparkId + i,
          x: newPos.x + 20,
          y: newPos.y + 35,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 2,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 4 + 2,
        });
      }
      
      setSparkId(prev => prev + 3);
      setSparks(prev => [...prev.slice(-40), ...newSparks]);
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
  }, [sparkId]);

  // Animate sparks
  useEffect(() => {
    const interval = setInterval(() => {
      setSparks(prev => 
        prev
          .map(spark => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy,
            vy: spark.vy + 0.1, // gravity
            life: spark.life - 0.03,
          }))
          .filter(spark => spark.life > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Firework sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: spark.x,
            top: spark.y,
            width: spark.size * spark.life,
            height: spark.size * spark.life,
            backgroundColor: spark.color,
            opacity: spark.life,
            boxShadow: `0 0 ${spark.size * 2}px ${spark.color}, 0 0 ${spark.size * 4}px ${spark.color}`,
          }}
        />
      ))}
      
      {/* Main rocket flame */}
      <div
        className="absolute pointer-events-none animate-pulse"
        style={{
          left: position.x + 8,
          top: position.y + 30,
          width: 20,
          height: 40,
          background: `linear-gradient(to bottom, #ff6b35, #ff9500, #ffcc00, transparent)`,
          filter: 'blur(3px)',
          borderRadius: '50% 50% 50% 50%',
          transform: 'scaleX(0.6)',
        }}
      />
      
      {/* Inner bright flame */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: position.x + 12,
          top: position.y + 32,
          width: 12,
          height: 25,
          background: `linear-gradient(to bottom, #fff, #ffcc00, #ff6b35, transparent)`,
          filter: 'blur(2px)',
          borderRadius: '50%',
          transform: 'scaleX(0.5)',
        }}
      />
      
      {/* Rocket glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: position.x - 15,
          top: position.y - 15,
          width: 70,
          height: 70,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
        }}
      />
      
      {/* Rocket */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary via-cyan-400 to-cyan-300"
          style={{
            boxShadow: `0 0 25px hsl(var(--primary) / 0.8), 0 0 50px hsl(var(--primary) / 0.5)`,
          }}
        >
          <Rocket 
            className="w-6 h-6 text-background" 
            style={{ transform: 'rotate(135deg)' }} 
          />
        </div>
      </div>
    </div>
  );
}
