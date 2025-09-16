import { formatDateRange } from '@/utils/data';
import type { ActivityItemProps } from '@/types/portfolio';

export function ActivityItem({ activity }: ActivityItemProps) {
  const dateRange = formatDateRange(activity.startDate, activity.endDate);

  return (
    <div className="border-l-4 border-blue-500 pl-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {activity.role}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {activity.organization}
          </p>
        </div>
        {dateRange && (
          <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
            {dateRange}
          </div>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {activity.description}
      </p>
    </div>
  );
}