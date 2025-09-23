'use client';

import { cn } from '@/utils/cn';

export function SkipLinks() {
  const skipLinks = [
    { href: '#main-content', label: 'Skip to main content' },
    { href: '#about', label: 'Skip to about section' },
    { href: '#experience', label: 'Skip to experience section' },
    { href: '#contact', label: 'Skip to contact section' }
  ];

  return (
    <div className="sr-only focus-within:not-sr-only fixed top-4 left-4 z-50 space-y-2">
      {skipLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={cn(
            'inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            'transition-all duration-200 hover:bg-blue-700',
            'shadow-lg'
          )}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}