import { useState, useEffect } from 'react';

// Color cycling styles
export const colorStyles = [
  'text-primary', // Cyan - current
  'text-yellow-400', // Yellow
  'text-gradient', // Gradient
  'text-blue-400', // Neon blue
];

export function useColorCycle(interval = 1500) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colorStyles.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return colorStyles[colorIndex];
}
