'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/utils/cn';

interface ScrollProgressIndicatorProps {
  className?: string;
  position?: 'top' | 'bottom';
  height?: number;
  showPercentage?: boolean;
}

export function ScrollProgressIndicator({
  className,
  position = 'top',
  height = 3,
  showPercentage = false
}: ScrollProgressIndicatorProps) {
  const scrollProgress = useScrollProgress();

  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0'
  };

  return (
    <>
      {/* Progress Bar */}
      <div
        className={cn(
          'fixed left-0 right-0 z-[60] bg-gray-200/20 dark:bg-gray-700/20',
          positionClasses[position],
          className
        )}
        style={{ height: `${height}px` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(147, 51, 234, 0.4)'
          }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Optional percentage display */}
      {showPercentage && (
        <div
          className={cn(
            'fixed right-4 z-50 px-2 py-1 text-xs font-medium',
            'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
            'border border-gray-200 dark:border-gray-700 rounded-md',
            'text-gray-700 dark:text-gray-300',
            'shadow-lg transition-all duration-300',
            position === 'top' ? 'top-8' : 'bottom-8'
          )}
        >
          {Math.round(scrollProgress)}%
        </div>
      )}
    </>
  );
}