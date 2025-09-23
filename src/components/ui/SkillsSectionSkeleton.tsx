import { Section } from '@/components/layout/Section';
import { SkillBadgeSkeleton } from '@/components/ui/SkillBadgeSkeleton';

export function SkillsSectionSkeleton() {
  return (
    <Section id="skills-skeleton" title="Skills & Technologies">
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        {Array.from({ length: 12 }, (_, index) => (
          <SkillBadgeSkeleton key={index} />
        ))}
      </div>
    </Section>
  );
}