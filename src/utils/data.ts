import portfolioData from '@/data/portfolio.json';
import type { PortfolioData } from '@/types/portfolio';

/**
 * Get the portfolio data with proper typing
 */
export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format date range for display
 */
export function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate) return '';
  
  const start = startDate;
  const end = endDate || 'Present';
  
  return `${start} - ${end}`;
}

/**
 * Get skills grouped by category (if we enhance the data structure later)
 */
export function groupSkillsByCategory(skills: string[]): Record<string, string[]> {
  // For now, return all skills in a general category
  // This can be enhanced when we add skill categories to the data
  return {
    'Technologies': skills
  };
}

/**
 * Get external link props for safe navigation
 */
export function getExternalLinkProps() {
  return {
    target: '_blank',
    rel: 'noopener noreferrer'
  };
}

/**
 * Check if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname !== window.location.hostname;
  } catch {
    return false;
  }
}

/**
 * Sanitize and validate portfolio data at runtime
 */
export function validatePortfolioData(data: any): data is PortfolioData {
  if (!data || typeof data !== 'object') return false;
  
  const required = [
    'workExperience',
    'education', 
    'skills',
    'languages',
    'projects',
    'extraCurricular',
    'links',
    'location'
  ];
  
  return required.every(field => field in data);
}

/**
 * Get current work experience (where endDate is "Present")
 */
export function getCurrentWorkExperience(experiences: PortfolioData['workExperience']) {
  return experiences.find(exp => exp.endDate.toLowerCase() === 'present');
}

/**
 * Sort work experience by most recent first
 */
export function sortWorkExperienceByDate(experiences: PortfolioData['workExperience']) {
  return [...experiences].sort((a, b) => {
    // Put "Present" jobs first
    if (a.endDate.toLowerCase() === 'present' && b.endDate.toLowerCase() !== 'present') return -1;
    if (b.endDate.toLowerCase() === 'present' && a.endDate.toLowerCase() !== 'present') return 1;
    
    // For finished jobs, sort by end date
    if (a.endDate !== 'Present' && b.endDate !== 'Present') {
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    }
    
    return 0;
  });
}