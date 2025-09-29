'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import type { NavigationProps } from '@/types/portfolio';

const defaultSections = [
  { id: 'about', label: '👨‍💻 About', href: '#about' },
  { id: 'experience', label: '💼 Experience', href: '#experience' },
  { id: 'education', label: '🎓 Education', href: '#education' },
  { id: 'skills', label: '🛠️ Skills', href: '#skills' },
  { id: 'projects', label: '🚀 Projects', href: '#projects' },
  { id: 'activities', label: '🌟 Activities', href: '#activities' },
  { id: 'contact', label: '📧 Contact', href: '#contact' },
];

export function Navigation({ sections = defaultSections }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      //const navbarHeight = 72; // 64px navbar + 8px extra padding
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <nav
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Profile Avatar */}
          <button
            onClick={() => scrollToSection('#')}
            className={cn(
              'flex-shrink-0',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full'
            )}
            aria-label="Go to top of page - Elvis Ciuffetelli Portfolio"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/profilepic.jpg"
                alt="Elvis Ciuffetelli"
                fill
                className="object-cover rounded-full border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                sizes="40px"
                quality={85}
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6" role="menubar" aria-label="Site sections">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.href)}
                  className={cn(
                    'text-sm font-medium',
                    'text-gray-700 dark:text-gray-300',
                    'hover:text-gray-900 dark:hover:text-gray-100',
                    'transition-colors duration-200 cursor-pointer',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1'
                  )}
                  role="menuitem"
                  aria-label={`Navigate to ${section.label.replace(/[^\w\s]/gi, '').trim()} section`}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <div className="border-l border-gray-200 dark:border-gray-700 pl-6">
              <ThemeToggle variant="icon" />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle variant="icon" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-haspopup="true"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700" role="menu" aria-label="Mobile navigation menu">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.href)}
                  className={cn(
                    'block w-full text-left px-3 py-2 text-base font-medium',
                    'text-gray-700 dark:text-gray-300',
                    'hover:text-gray-900 dark:hover:text-gray-100',
                    'hover:bg-gray-50 dark:hover:bg-gray-800',
                    'rounded-md transition-colors duration-200 cursor-pointer',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  )}
                  role="menuitem"
                  aria-label={`Navigate to ${section.label.replace(/[^\w\s]/gi, '').trim()} section`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}