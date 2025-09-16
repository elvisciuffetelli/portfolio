import { describe, it, expect } from '@jest/globals';
import portfolioData from '../../src/data/portfolio.json';
import type { PortfolioData } from '../../src/types/portfolio';

describe('Portfolio Data Validation', () => {
  const data = portfolioData as PortfolioData;

  it('should have valid portfolio data structure', () => {
    expect(data).toBeDefined();
    expect(data.workExperience).toBeInstanceOf(Array);
    expect(data.education).toBeInstanceOf(Array);
    expect(data.skills).toBeInstanceOf(Array);
    expect(data.languages).toBeInstanceOf(Array);
    expect(data.projects).toBeInstanceOf(Array);
    expect(data.extraCurricular).toBeInstanceOf(Array);
    expect(data.links).toBeDefined();
    expect(data.location).toBeDefined();
  });

  it('should have required work experience fields', () => {
    data.workExperience.forEach(exp => {
      expect(exp.title).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.startDate).toBeDefined();
      expect(exp.endDate).toBeDefined();
    });
  });

  it('should have valid education data', () => {
    data.education.forEach(edu => {
      expect(edu.institution).toBeDefined();
    });
  });

  it('should have valid project data', () => {
    data.projects.forEach(project => {
      expect(project.name).toBeDefined();
      expect(project.description).toBeDefined();
    });
  });

  it('should have valid extra-curricular activities', () => {
    data.extraCurricular.forEach(activity => {
      expect(activity.role).toBeDefined();
      expect(activity.organization).toBeDefined();
      expect(activity.description).toBeDefined();
    });
  });

  it('should have valid contact links', () => {
    expect(data.links.email).toBeDefined();
    expect(data.links.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('should have skills and languages arrays', () => {
    expect(data.skills.length).toBeGreaterThan(0);
    expect(data.languages.length).toBeGreaterThan(0);
  });

  it('should include tracciapesi.app project', () => {
    const tracciapesiProject = data.projects.find(p => p.name === 'tracciapesi.app');
    expect(tracciapesiProject).toBeDefined();
    expect(tracciapesiProject?.description).toContain('workout');
  });

  it('should include Informatici Senza Frontiere activity', () => {
    const isfActivity = data.extraCurricular.find(a => 
      a.organization === 'Informatici Senza Frontiere APS'
    );
    expect(isfActivity).toBeDefined();
    expect(isfActivity?.description).toContain('Open Hospital');
  });
});