'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import type { SectionProps } from '@/types/portfolio';

export function Section({
  id,
  title,
  children,
  className
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'py-20 px-4 sm:px-6 lg:px-8',
        'max-w-5xl mx-auto',
        'transform transition-all duration-1000',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0',
        className
      )}
    >
      <div className="space-y-12">
        <h2 className={cn(
          'text-4xl font-bold tracking-tight',
          'text-gray-900 dark:text-gray-100',
          'text-center',
          'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
        )}>
          {title}
        </h2>
        <div className={cn(
          'transform transition-all duration-1000 delay-300',
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
        )}>
          {children}
        </div>
      </div>
    </section>
  );
}