// Component Interface Contracts for Portfolio Website

/**
 * Core data interfaces matching the JSON schema
 */
export interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  note?: string;
  project?: string;
}

export interface Education {
  institution: string;
  course?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Activity {
  role: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  description: string;
}

export interface ContactLinks {
  email: string;
  linkedin?: string;
  github?: string;
  website?: string;
  cvDownload?: string;
}

export interface PortfolioData {
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  languages: string[];
  projects: Project[];
  extraCurricular: Activity[];
  links: ContactLinks;
  location: string;
}

/**
 * Component prop interfaces
 */
export interface HeroSectionProps {
  name: string;
  role: string;
  tagline: string;
  links: ContactLinks;
}

export interface AboutSectionProps {
  professionalDescription: string;
  personalInterests: string[];
}

export interface WorkExperienceCardProps {
  experience: WorkExperience;
  isLast?: boolean;
}

export interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

export interface EducationItemProps {
  education: Education;
}

export interface EducationSectionProps {
  education: Education[];
}

export interface SkillBadgeProps {
  skill: string;
  variant?: 'default' | 'secondary' | 'outline';
}

export interface SkillsSectionProps {
  skills: string[];
  groupByCategory?: boolean;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectsSectionProps {
  projects: Project[];
}

export interface ActivityItemProps {
  activity: Activity;
}

export interface ExtraCurricularSectionProps {
  activities: Activity[];
}

export interface ContactSectionProps {
  links: ContactLinks;
  location: string;
  callToAction?: string;
}

export interface LanguagesListProps {
  languages: string[];
}

/**
 * Layout and navigation interfaces
 */
export interface NavigationProps {
  sections: NavigationSection[];
}

export interface NavigationSection {
  id: string;
  label: string;
  href: string;
}

export interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Utility and hook interfaces
 */
export interface UseScrollSpyResult {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export interface ResponsiveBreakpoints {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}

/**
 * Theme and styling interfaces
 */
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  spacing: {
    section: string;
    card: string;
  };
}

/**
 * SEO and meta interfaces
 */
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  imageUrl?: string;
}