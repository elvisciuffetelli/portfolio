'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/utils/cn';

interface CircularScrollProgressProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  showPercentage?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function CircularScrollProgress({
  className,
  size = 48,
  strokeWidth = 3,
  showPercentage = false,
  position = 'bottom-right'
}: CircularScrollProgressProps) {
  const scrollProgress = useScrollProgress();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-20 right-6',
    'top-left': 'top-20 left-6'
  };

  return (
    <div
      className={cn(
        'fixed z-40 transition-all duration-300',
        positionClasses[position],
        className
      )}
    >
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-gray-200 dark:text-gray-700"
          />

          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
            style={{ filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))' }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage text */}
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}