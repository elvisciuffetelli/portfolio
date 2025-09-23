'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  variant?: 'icon' | 'button' | 'dropdown';
  showLabel?: boolean;
  className?: string;
}

export function ThemeToggle({
  variant = 'icon',
  showLabel = false,
  className
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getIcon = () => {
    return theme === 'dark' ?
      <Moon className="w-4 h-4" /> :
      <Sun className="w-4 h-4" />;
  };

  const getLabel = () => {
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  if (variant === 'button') {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className={cn(
          'gap-2 transition-all duration-300 hover:scale-105',
          'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
          'border-gray-200 dark:border-gray-700',
          'hover:bg-white dark:hover:bg-gray-800',
          'hover:shadow-lg hover:shadow-blue-500/20',
          className
        )}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {getIcon()}
        {showLabel && <span className="text-sm">{getLabel()}</span>}
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={cn(
        'p-2 transition-all duration-300 hover:scale-110',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        'hover:shadow-md rounded-full',
        'text-gray-600 dark:text-gray-300',
        'hover:text-gray-900 dark:hover:text-gray-100',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative">
        {getIcon()}
        {/* Glow effect for active theme */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      </div>
      {showLabel && <span className="ml-2 text-sm">{getLabel()}</span>}
    </Button>
  );
}