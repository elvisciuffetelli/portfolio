import { Section } from '@/components/layout/Section';
import { ContactButton } from '@/components/ui/ContactButton';
import { Separator } from '@/components/ui/separator';
import { MapPin } from 'lucide-react';
import type { ContactSectionProps } from '@/types/portfolio';

export function ContactSection({
  links,
  location,
  callToAction = "Let's work together"
}: ContactSectionProps) {
  return (
    <section id="contact" className="w-full bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-12">
          {/* Title */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Call to Action */}
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            {callToAction}
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {links.email && (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ContactButton
                  href={`mailto:${links.email}`}
                  type="email"
                  variant="default"
                >
                  Send Email
                </ContactButton>
              </div>
            )}

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

            {links.website && (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ContactButton
                  href={links.website}
                  type="external"
                  variant="outline"
                >
                  Website
                </ContactButton>
              </div>
            )}
          </div>

          <Separator className="max-w-md mx-auto opacity-30" />

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-lg">{location}</span>
          </div>

          {/* Footer */}
          <div className="pt-8 text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Elvis Ciuffetelli. Built with Next.js and TailwindCSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}