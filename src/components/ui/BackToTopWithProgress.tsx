'use client';

import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/utils/cn';

interface BackToTopWithProgressProps {
  className?: string;
  threshold?: number;
  size?: number;
  strokeWidth?: number;
}

export function BackToTopWithProgress({
  className,
  threshold = 300,
  size = 56,
  strokeWidth = 3
}: BackToTopWithProgressProps) {
  const { isVisible } = useScrollPosition({ threshold });
  const scrollProgress = useScrollProgress();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <Button
      onClick={scrollToTop}
      size="sm"
      className={cn(
        'fixed bottom-6 right-6 z-40 p-0 rounded-full transition-all duration-300 group',
        'bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm',
        'border border-gray-200 dark:border-gray-700',
        'hover:bg-white dark:hover:bg-gray-800',
        'hover:shadow-xl hover:shadow-blue-500/25',
        'hover:border-blue-300 dark:hover:border-blue-600',
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-95 pointer-events-none',
        'hover:scale-110 active:scale-95',
        className
      )}
      style={{ width: size, height: size }}
      aria-label={`Scroll to top (${Math.round(scrollProgress)}% read)`}
    >
      {/* Progress Ring */}
      <svg
        className="absolute inset-0 transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-gray-600"
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#back-to-top-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 ease-out"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
          }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="back-to-top-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <ChevronUp className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />

        {/* Ripple effect */}
        <div className="absolute inset-2 rounded-full bg-blue-500/20 scale-0 group-active:scale-100 transition-transform duration-150" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Back to top · {Math.round(scrollProgress)}%
      </div>
    </Button>
  );
}