'use client';

import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'flex items-center space-x-2 text-sm',
        'text-gray-600 dark:text-gray-400',
        className
      )}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => scrollToSection('#')}
            className={cn(
              'flex items-center hover:text-gray-900 dark:hover:text-gray-100',
              'transition-colors duration-200'
            )}
            aria-label="Go to top"
          >
            <Home className="h-4 w-4" />
          </button>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            {item.href && !item.current ? (
              <button
                onClick={() => scrollToSection(item.href!)}
                className={cn(
                  'hover:text-gray-900 dark:hover:text-gray-100',
                  'transition-colors duration-200',
                  'font-medium'
                )}
              >
                {item.label}
              </button>
            ) : (
              <span
                className={cn(
                  'font-medium',
                  item.current
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-600 dark:text-gray-400'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}