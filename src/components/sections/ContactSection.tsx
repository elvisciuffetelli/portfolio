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
    <Section id="contact" title="Get In Touch" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="text-center space-y-8">
        {/* Call to Action */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {callToAction}
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {links.email && (
            <ContactButton 
              href={`mailto:${links.email}`}
              type="email"
              variant="default"
            >
              Send Email
            </ContactButton>
          )}
          
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

          {links.website && (
            <ContactButton
              href={links.website}
              type="external"
              variant="outline"
            >
              Website
            </ContactButton>
          )}
        </div>

        <Separator className="max-w-md mx-auto" />

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        {/* Footer */}
        <div className="pt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Elvis Ciuffetelli. Built with Next.js and TailwindCSS.</p>
        </div>
      </div>
    </Section>
  );
}