import { Badge } from '@/components/ui/badge';
import type { SkillBadgeProps } from '@/types/portfolio';

export function SkillBadge({ skill, variant = 'default' }: SkillBadgeProps) {
  return (
    <Badge
      variant={variant}
      className="text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 cursor-default bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 text-gray-800 dark:text-gray-200"
    >
      {skill}
    </Badge>
  );
}