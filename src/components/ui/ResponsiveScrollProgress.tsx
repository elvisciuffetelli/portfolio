'use client';

import { ScrollProgressIndicator } from './ScrollProgressIndicator';
import { BackToTopButton } from './BackToTopButton';
import { useEffect, useState } from 'react';

interface ResponsiveScrollProgressProps {
  className?: string;
}

export function ResponsiveScrollProgress({ className }: ResponsiveScrollProgressProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile: Use linear progress bar at top and simple back-to-top button
        <>
          <ScrollProgressIndicator
            position="top"
            height={3}
            className={className}
          />
          <BackToTopButton
            variant="floating"
            position="bottom-right"
            threshold={300}
          />
        </>
      ) : (
        // Desktop: Use only linear progress at top and separate back-to-top button
        <>
          <ScrollProgressIndicator
            position="top"
            height={4}
            className={className}
          />
          <BackToTopButton
            variant="floating"
            position="bottom-right"
            threshold={300}
          />
        </>
      )}
    </>
  );
}