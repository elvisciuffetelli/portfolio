import { Section } from '@/components/layout/Section';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { groupSkillsByCategory } from '@/utils/data';
import type { SkillsSectionProps } from '@/types/portfolio';

export function SkillsSection({ skills, groupByCategory = false }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return (
      <Section id="skills" title="Skills & Technologies">
        <div className="text-center text-gray-500">
          No skills data available
        </div>
      </Section>
    );
  }

  if (groupByCategory) {
    const groupedSkills = groupSkillsByCategory(skills);

    return (
      <Section id="skills" title="Skills & Technologies">
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {categorySkills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </Section>
  );
}