import { useEffect, useRef, useState } from "react";

export function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
      }
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
      {/* Outer glow - follows exactly with cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen transition-opacity duration-300 will-change-transform"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Inner dot - exact cursor tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-200 will-change-transform"
        style={{
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
