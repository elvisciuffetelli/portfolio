import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/Skeleton';

interface ExperienceCardSkeletonProps {
  isLast?: boolean;
}

export function ExperienceCardSkeleton({ isLast = false }: ExperienceCardSkeletonProps) {
  return (
    <div className="relative animate-pulse">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-2.5 top-6 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-900" />

      {/* Card */}
      <div className="ml-12">
        <Card className="shadow-sm border-l-4 border-l-gray-300 dark:border-l-gray-600">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex items-start gap-3">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-20" />
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}