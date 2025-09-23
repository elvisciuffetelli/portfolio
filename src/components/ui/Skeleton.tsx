import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'shimmer' | 'wave';
}

export function Skeleton({ className, variant = 'default' }: SkeletonProps) {
  const baseClasses = 'rounded-md bg-gray-300/70 dark:bg-gray-700/70';

  const variantClasses = {
    default: 'animate-pulse',
    shimmer: 'skeleton-shimmer animate-skeleton-pulse',
    wave: 'animate-skeleton-wave'
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    />
  );
}