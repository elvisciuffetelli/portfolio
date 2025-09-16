import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatDateRange } from '@/utils/data';
import Image from 'next/image';
import type { WorkExperienceCardProps } from '@/types/portfolio';

export function ExperienceCard({ experience, isLast = false }: WorkExperienceCardProps) {
  const dateRange = formatDateRange(experience.startDate, experience.endDate);

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-2.5 top-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900" />
      
      {/* Card */}
      <div className="ml-12">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex items-start gap-3">
                {experience.logo && (
                  <div className="flex-shrink-0 w-12 h-12 relative">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {experience.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                {dateRange}
              </div>
            </div>
          </CardHeader>
          
          {(experience.note || experience.project) && (
            <CardContent className="pt-0">
              {experience.note && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {experience.note}
                </p>
              )}
              {experience.project && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Project:</span> {experience.project}
                </p>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}