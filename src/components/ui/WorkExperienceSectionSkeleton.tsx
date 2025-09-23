import { Section } from '@/components/layout/Section';
import { ExperienceCardSkeleton } from '@/components/ui/ExperienceCardSkeleton';

export function WorkExperienceSectionSkeleton() {
  return (
    <Section id="work-experience-skeleton" title="Work Experience">
      <div className="space-y-8">
        {Array.from({ length: 4 }, (_, index) => (
          <ExperienceCardSkeleton key={index} isLast={index === 3} />
        ))}
      </div>
    </Section>
  );
}