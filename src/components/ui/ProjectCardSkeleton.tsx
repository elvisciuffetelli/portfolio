import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/Skeleton';

export function ProjectCardSkeleton() {
  return (
    <Card className="h-full flex flex-col glass dark:glass-dark shadow-lg border-0 animate-pulse">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Skeleton className="h-6 w-32" variant="shimmer" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-16 rounded-lg" variant="shimmer" />
            <Skeleton className="h-8 w-16 rounded-lg" variant="shimmer" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" variant="shimmer" />
          <Skeleton className="h-4 w-3/4" variant="shimmer" />
          <Skeleton className="h-4 w-1/2" variant="shimmer" />
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          <Skeleton className="h-6 w-16 rounded-full" variant="shimmer" />
          <Skeleton className="h-6 w-20 rounded-full" variant="shimmer" />
          <Skeleton className="h-6 w-14 rounded-full" variant="shimmer" />
          <Skeleton className="h-6 w-18 rounded-full" variant="shimmer" />
        </div>
      </CardContent>
    </Card>
  );
}