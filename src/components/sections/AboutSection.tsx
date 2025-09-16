import { Section } from '@/components/layout/Section';
import type { AboutSectionProps } from '@/types/portfolio';

export function AboutSection({ 
  professionalDescription, 
  personalInterests 
}: AboutSectionProps) {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Professional Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Professional Background
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {professionalDescription}
          </p>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Personal Interests
          </h3>
          <div className="space-y-2">
            {personalInterests.map((interest, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}