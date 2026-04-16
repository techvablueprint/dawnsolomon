import { useEffect, useState } from "react";

export function MouseFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <>
      {/* Outer glow */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen transition-opacity duration-300"
        style={{
          left: position.x - 150,
          top: position.y - 150,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-200"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          width: 12,
          height: 12,
          background: "hsl(var(--primary))",
          boxShadow: "0 0 12px 4px hsl(var(--primary) / 0.5)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
