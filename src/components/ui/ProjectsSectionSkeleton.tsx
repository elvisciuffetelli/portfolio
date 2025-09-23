import { Section } from '@/components/layout/Section';
import { ProjectCardSkeleton } from '@/components/ui/ProjectCardSkeleton';

export function ProjectsSectionSkeleton() {
  return (
    <Section id="projects-skeleton" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }, (_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </Section>
  );
}