import { Skeleton } from '@/components/ui/Skeleton';

export function SkillBadgeSkeleton() {
  return (
    <Skeleton className="h-8 w-16 rounded-full" variant="shimmer" />
  );
}