'use client';

import { ContactButton } from '@/components/ui/ContactButton';
import Image from 'next/image';
import type { HeroSectionProps } from '@/types/portfolio';

export function HeroSection({ name, role, tagline, links }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-reverse"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-32 h-32 relative">
              <Image
                src="/profilepic.jpg"
                alt="Elvis Ciuffetelli - Frontend Developer, professional headshot"
                fill
                className="object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
            </div>
          </div>

          {/* Name and Role */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                {name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 dark:text-blue-400 font-medium animate-pulse-slow">
              {role}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            {tagline}
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            {links.email && (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ContactButton
                  href={`mailto:${links.email}`}
                  type="email"
                  variant="default"
                >
                  Get in Touch
                </ContactButton>
              </div>
            )}

            {links.cvDownload && (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ContactButton
                  href={links.cvDownload}
                  type="download"
                  variant="outline"
                >
                  Download CV
                </ContactButton>
              </div>
            )}

            <div className="flex gap-4">
              {links.linkedin && (
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <ContactButton
                    href={links.linkedin}
                    type="external"
                    variant="outline"
                  >
                    LinkedIn
                  </ContactButton>
                </div>
              )}

              {links.github && (
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <ContactButton
                    href={links.github}
                    type="external"
                    variant="outline"
                  >
                    GitHub
                  </ContactButton>
                </div>
              )}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <button
              onClick={() => {
                const aboutSection = document.querySelector('#about') as HTMLElement;
                if (aboutSection) {

                  const elementPosition = aboutSection.offsetTop;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="w-6 h-10 border-2 border-blue-400 dark:border-blue-500 rounded-full mx-auto relative cursor-pointer hover:border-blue-600 dark:hover:border-blue-300 transition-colors hover:scale-110 transform duration-200"
              aria-label="Scroll to About section"
            >
              <div className="w-1 h-3 bg-blue-400 dark:bg-blue-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse-slow"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}