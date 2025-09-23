import { Badge } from '@/components/ui/badge';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import type { SkillBadgeProps } from '@/types/portfolio';

export function SkillBadge({ skill, variant = 'default', index = 0 }: SkillBadgeProps & { index?: number }) {
  return (
    <AnimatedElement animation="bounce-in" delay={index * 50 + 100}>
      <Badge
        variant={variant}
        className="text-sm font-medium transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30 cursor-default bg-gradient-to-r from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/90 backdrop-blur-sm border border-blue-200 dark:border-blue-800 text-gray-800 dark:text-gray-200 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-100/90 hover:to-purple-100/90 dark:hover:from-blue-800/90 dark:hover:to-purple-800/90 group"
      >
        <span className="group-hover:animate-pulse">{skill}</span>
      </Badge>
    </AnimatedElement>
  );
}