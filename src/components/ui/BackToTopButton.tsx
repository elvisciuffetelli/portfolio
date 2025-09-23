'use client';

import { ArrowUp, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

interface BackToTopButtonProps {
  className?: string;
  icon?: 'arrow' | 'chevron';
  variant?: 'default' | 'floating' | 'minimal';
  threshold?: number;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
}

export function BackToTopButton({
  className,
  icon = 'chevron',
  variant = 'floating',
  threshold = 300,
  position = 'bottom-right'
}: BackToTopButtonProps) {
  const { isVisible } = useScrollPosition({ threshold });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getIcon = () => {
    return icon === 'arrow' ?
      <ArrowUp className="w-4 h-4" /> :
      <ChevronUp className="w-5 h-5" />;
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  const variantStyles = {
    default: cn(
      'bg-blue-600 hover:bg-blue-700 text-white',
      'shadow-lg hover:shadow-xl',
      'border-0'
    ),
    floating: cn(
      'bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm',
      'border border-gray-200 dark:border-gray-700',
      'text-gray-700 dark:text-gray-200',
      'hover:bg-white dark:hover:bg-gray-800',
      'hover:shadow-xl hover:shadow-blue-500/25',
      'hover:border-blue-300 dark:hover:border-blue-600'
    ),
    minimal: cn(
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
      'text-gray-600 dark:text-gray-400',
      'hover:text-gray-900 dark:hover:text-gray-100',
      'border-0 shadow-none'
    )
  };

  return (
    <Button
      onClick={scrollToTop}
      size="sm"
      className={cn(
        'fixed z-40 p-3 rounded-full transition-all duration-300 group',
        positionClasses[position],
        variantStyles[variant],
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-95 pointer-events-none',
        'hover:scale-110 active:scale-95',
        className
      )}
      aria-label="Scroll to top"
    >
      <div className="relative">
        {getIcon()}

        {/* Animated background effect */}
        {variant === 'floating' && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        )}

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-active:scale-150 transition-transform duration-200" />
      </div>

      {/* Optional tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Back to top
      </div>
    </Button>
  );
}