'use client';

import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate the maximum scrollable distance
      const maxScroll = documentHeight - windowHeight;

      // Calculate the scroll progress as a percentage (0-100)
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      // Clamp the value between 0 and 100
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Calculate initial progress
    calculateScrollProgress();

    // Add event listener with throttling for better performance
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also recalculate on resize in case content height changes
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return scrollProgress;
}