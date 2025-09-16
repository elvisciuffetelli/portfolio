import { cn } from '@/lib/utils';
import type { SectionProps } from '@/types/portfolio';

export function Section({ 
  id, 
  title, 
  children, 
  className 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        'py-16 px-4 sm:px-6 lg:px-8',
        'max-w-4xl mx-auto',
        className
      )}
    >
      <div className="space-y-8">
        <h2 className={cn(
          'text-3xl font-bold tracking-tight',
          'text-gray-900 dark:text-gray-100',
          'text-center sm:text-left'
        )}>
          {title}
        </h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}