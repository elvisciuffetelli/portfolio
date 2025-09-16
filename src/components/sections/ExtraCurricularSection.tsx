import { Section } from '@/components/layout/Section';
import { ActivityItem } from '@/components/ui/ActivityItem';
import type { ExtraCurricularSectionProps } from '@/types/portfolio';

export function ExtraCurricularSection({ activities }: ExtraCurricularSectionProps) {
  return (
    <Section id="activities" title="Extra-Curricular Activities">
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))}
      </div>
    </Section>
  );
}