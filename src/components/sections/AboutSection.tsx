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
        <div className="glass dark:glass-dark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            Professional Background
          </h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {professionalDescription}
          </p>
        </div>

        {/* Personal Interests */}
        <div className="glass dark:glass-dark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            Personal Interests
          </h3>
          <div className="space-y-3">
            {personalInterests.map((interest, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <p className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}