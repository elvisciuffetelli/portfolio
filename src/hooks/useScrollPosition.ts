'use client';

import { useEffect, useState } from 'react';

interface UseScrollPositionOptions {
  threshold?: number;
}

export function useScrollPosition(options: UseScrollPositionOptions = {}) {
  const { threshold = 300 } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsVisible(currentScrollY > threshold);
    };

    // Set initial scroll position
    handleScroll();

    // Add event listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [threshold]);

  return { scrollY, isVisible };
}