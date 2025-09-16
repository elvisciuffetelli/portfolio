import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import type { ProjectsSectionProps } from '@/types/portfolio';

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Personal Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}