import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { ExternalLink, Github, Star } from 'lucide-react';
import { getExternalLinkProps } from '@/utils/data';
import type { ProjectCardProps } from '@/types/portfolio';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <AnimatedElement animation="scale-in" delay={200}>
      <Card className="h-full flex flex-col glass dark:glass-dark shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 group overflow-hidden relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating star icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform rotate-12 group-hover:rotate-0 group-hover:scale-110">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
        </div>

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:scale-105">
              {project.name}
            </CardTitle>
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button size="sm" variant="outline" asChild className="hover:scale-110 transition-all duration-300 hover:shadow-lg group/btn">
                  <a
                    href={project.githubUrl}
                    {...getExternalLinkProps()}
                    className="gap-1"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" asChild className="hover:scale-110 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg animate-glow group/btn">
                  <a
                    href={project.liveUrl}
                    {...getExternalLinkProps()}
                    className="gap-1"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col gap-4 relative z-10">
          <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, index) => (
                <AnimatedElement key={index} animation="bounce-in" delay={index * 100 + 300}>
                  <Badge
                    variant="secondary"
                    className="text-xs glass dark:glass-dark hover:scale-110 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-all duration-300 hover:shadow-md cursor-default"
                  >
                    {tech}
                  </Badge>
                </AnimatedElement>
              ))}
            </div>
          )}
        </CardContent>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-lg border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />
        </div>
      </Card>
    </AnimatedElement>
  );
}