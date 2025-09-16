import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { getExternalLinkProps } from '@/utils/data';
import type { ProjectCardProps } from '@/types/portfolio';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
            {project.name}
          </CardTitle>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={project.githubUrl}
                  {...getExternalLinkProps()}
                  className="gap-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a 
                  href={project.liveUrl}
                  {...getExternalLinkProps()}
                  className="gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}