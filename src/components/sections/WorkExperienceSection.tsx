'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// @ts-expect-error: This CSS import is not typed, but required for timeline styling
import 'react-vertical-timeline-component/style.min.css';
import { Section } from '@/components/layout/Section';
import { sortWorkExperienceByDate, formatDateRange } from '@/utils/data';
import type { WorkExperienceSectionProps, WorkExperience } from '@/types/portfolio';
import Image from 'next/image';

// Dynamic imports to avoid SSR issues
const VerticalTimeline = dynamic(
  () => import('react-vertical-timeline-component').then(mod => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import('react-vertical-timeline-component').then(mod => mod.VerticalTimelineElement),
  { ssr: false }
);

const ExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  const dateRange = formatDateRange(experience.startDate, experience.endDate);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        border: '1px solid hsl(var(--border))',
        borderRadius: '0.75rem',
      }}
      contentArrowStyle={{
        borderRight: '7px solid hsl(var(--background))',
        borderLeft: '7px solid hsl(var(--background))'
      }}
      date={dateRange}
      iconStyle={{
        background: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
        boxShadow: '0 0 0 4px hsl(var(--primary)), inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)'
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={32}
              height={32}
              className='object-contain w-full h-full max-w-9 max-h-9 rounded border-2 border-black'
            />
          ) : (
            <div className='w-4 h-4 bg-background rounded-full border-2 border-primary -ml-0.5' />
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-foreground text-xl font-bold mb-1'>
          {experience.title}
        </h3>
        <p className='text-primary text-base font-semibold mb-0'>
          {experience.company}
        </p>
      </div>

      {(experience.note || experience.project) && (
        <div className='mt-4'>
          {experience.note && (
            <p className='text-muted-foreground text-sm mb-2 leading-relaxed'>
              {experience.note}
            </p>
          )}
          {experience.project && (
            <p className='text-muted-foreground text-sm leading-relaxed'>
              <span className='font-medium text-foreground'>Project:</span> {experience.project}
            </p>
          )}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  const sortedExperiences = sortWorkExperienceByDate(experiences);

  return (
    <Section id="experience" title="Work Experience">
      <div className="mt-12">
        <VerticalTimeline>
          {sortedExperiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.company}-${experience.startDate}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
}