import { Section } from '@/components/layout/Section';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { sortWorkExperienceByDate } from '@/utils/data';
import type { WorkExperienceSectionProps } from '@/types/portfolio';

export function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  const sortedExperiences = sortWorkExperienceByDate(experiences);

  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6">
        {sortedExperiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.startDate}`}
            experience={experience}
            isLast={index === sortedExperiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}