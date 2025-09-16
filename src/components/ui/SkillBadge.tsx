import { Badge } from '@/components/ui/badge';
import type { SkillBadgeProps } from '@/types/portfolio';

export function SkillBadge({ skill, variant = 'default' }: SkillBadgeProps) {
  return (
    <Badge 
      variant={variant}
      className="text-sm font-medium transition-colors"
    >
      {skill}
    </Badge>
  );
}