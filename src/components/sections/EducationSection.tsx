import { Section } from '@/components/layout/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatDateRange } from '@/utils/data';
import type { EducationSectionProps } from '@/types/portfolio';

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => {
          const dateRange = formatDateRange(edu.startDate, edu.endDate) || edu.status;
          
          return (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {edu.institution}
                </h3>
                {edu.course && (
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.course}
                  </p>
                )}
              </CardHeader>
              
              {dateRange && (
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {dateRange}
                  </p>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}