import { ContactButton } from '@/components/ui/ContactButton';
import Image from 'next/image';
import type { HeroSectionProps } from '@/types/portfolio';

export function HeroSection({ name, role, tagline, links }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-24 h-24 relative">
              <Image
                src="/profilepic.jpg"
                alt="Elvis Ciuffetelli"
                fill
                className="object-cover rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Name and Role */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium">
              {role}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {links.email && (
              <ContactButton 
                href={`mailto:${links.email}`}
                type="email"
                variant="default"
              >
                Get in Touch
              </ContactButton>
            )}
            
            {links.cvDownload && (
              <ContactButton
                href={links.cvDownload}
                type="download"
                variant="outline"
              >
                Download CV
              </ContactButton>
            )}

            <div className="flex gap-2">
              {links.linkedin && (
                <ContactButton
                  href={links.linkedin}
                  type="external"
                  variant="outline"
                >
                  LinkedIn
                </ContactButton>
              )}
              
              {links.github && (
                <ContactButton
                  href={links.github}
                  type="external"
                  variant="outline"
                >
                  GitHub
                </ContactButton>
              )}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}