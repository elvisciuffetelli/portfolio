# Quickstart Guide: Portfolio Website

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Initial Setup

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd portfolio
```

### 2. Install shadcn/ui
```bash
npx shadcn@latest init
```

Choose the following options:
- TypeScript: Yes
- Style: Default
- Base color: Slate
- CSS variables: Yes

### 3. Install Required shadcn/ui Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add navigation-menu
```

### 4. Install Additional Dependencies
```bash
npm install lucide-react
npm install @types/node
```

## Project Structure Setup

### 1. Create Directory Structure
```bash
mkdir -p src/{components,types,data,hooks,utils}
mkdir -p src/components/{sections,ui,layout}
mkdir -p tests/{unit,integration}
```

### 2. Create Portfolio Data File
Create `src/data/portfolio.json` with the provided JSON structure:

```json
{
  "workExperience": [
    {
      "title": "Software Engineer",
      "company": "Wellhub",
      "startDate": "June 2023",
      "endDate": "Present",
      "note": "Initially joined Fitprime, which was acquired by Wellhub in December 2024"
    }
  ],
  "education": [
    {
      "institution": "Università degli Studi dell'Aquila",
      "status": "Present"
    }
  ],
  "skills": [
    "React", "Node.js", "HTML & CSS", "MongoDB", "Git", "JavaScript", 
    "Typescript", "NextJS", "Supabase", "Tailwind", "React Native", "Cypress"
  ],
  "languages": ["Italiano", "Inglese"],
  "extraCurricular": [
    {
      "role": "Sviluppatore front-end",
      "organization": "Informatici Senza Frontiere APS",
      "startDate": "March 2021",
      "endDate": "Present",
      "description": "Contributor to the Open Hospital project"
    }
  ],
  "projects": [
    {
      "name": "tracciapesi.app",
      "description": "Web app for tracking workouts and monitoring gym progress. Features include custom exercise logging, visual progress charts, and a clean, mobile-first interface."
    }
  ],
  "links": {
    "email": "ciuffetellielvis@gmail.com",
    "linkedin": "https://linkedin.com/in/elvis-ciuffetelli",
    "github": "https://github.com/elvisciuffetelli"
  },
  "location": "L'Aquila, Italy"
}
```

### 3. Create TypeScript Interfaces
Create `src/types/portfolio.ts` with the interface definitions from the contracts.

### 4. Set up Testing Framework
```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

Create `jest.config.js`:
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

## Component Development Order

### Phase 1: Core Components
1. **Layout Components**
   - `src/components/layout/Header.tsx`
   - `src/components/layout/Footer.tsx`
   - `src/components/layout/Section.tsx`

2. **Basic UI Components**
   - `src/components/ui/SkillBadge.tsx`
   - `src/components/ui/ContactButton.tsx`

### Phase 2: Section Components
1. **Hero Section**
   - `src/components/sections/HeroSection.tsx`
   - Display name, role, tagline, and contact buttons

2. **About Section**
   - `src/components/sections/AboutSection.tsx`
   - Professional and personal description

3. **Experience Section**
   - `src/components/sections/WorkExperienceSection.tsx`
   - `src/components/ui/ExperienceCard.tsx`

### Phase 3: Remaining Sections
1. **Education Section**
   - `src/components/sections/EducationSection.tsx`

2. **Skills Section**
   - `src/components/sections/SkillsSection.tsx`

3. **Projects Section**
   - `src/components/sections/ProjectsSection.tsx`
   - `src/components/ui/ProjectCard.tsx`

4. **Activities Section**
   - `src/components/sections/ExtraCurricularSection.tsx`

## Main Page Implementation

Update `src/app/page.tsx`:
```tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
// ... other imports
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection 
        name="Elvis Ciuffetelli"
        role="Frontend Developer"
        tagline="Experienced web and mobile developer..."
        links={portfolioData.links}
      />
      <AboutSection />
      {/* Other sections */}
    </main>
  );
}
```

## Testing Strategy

### Unit Tests
Test each component in isolation:
```bash
# Example test command
npm run test -- --watch
```

### Integration Tests
Test complete user flows:
1. Hero section displays correctly
2. Contact buttons work
3. All sections render with data
4. Responsive behavior works

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Type check
npm run type-check
```

## Validation Checklist

### Functional Requirements Validation
- [ ] FR-001: Hero section displays name and role
- [ ] FR-002: Contact buttons are accessible
- [ ] FR-003: Professional tagline is visible
- [ ] FR-004: About section shows professional background
- [ ] FR-005: Personal interests are included
- [ ] FR-006: Work experience in chronological order
- [ ] FR-007: Education information displayed
- [ ] FR-008: Skills organized by categories
- [ ] FR-009: Projects showcase with tracciapesi.app
- [ ] FR-010: Extra-curricular activities shown
- [ ] FR-011: Footer with contact info and location
- [ ] FR-012: Responsive on all devices
- [ ] FR-013: Clean, professional design
- [ ] FR-014: Easy to extend with new content

### Technical Validation
- [ ] TypeScript compilation without errors
- [ ] All tests passing
- [ ] Lighthouse score > 90
- [ ] Mobile responsiveness tested
- [ ] Accessibility compliance (WCAG 2.1 AA)

### User Acceptance Testing
1. **Hero Section Test**
   - Visit homepage
   - Verify name, role, and tagline display
   - Test contact buttons (email, LinkedIn, GitHub)

2. **Content Navigation Test**
   - Scroll through all sections
   - Verify all content displays correctly
   - Test responsive behavior on mobile

3. **Performance Test**
   - Check page load time (<3 seconds)
   - Verify smooth scrolling
   - Test on various devices

## Deployment Preparation

### Static Export Setup (Optional)
```bash
# For static hosting
npm run build
npm run export
```

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Maintenance

### Adding New Content
1. Update `src/data/portfolio.json`
2. Add new TypeScript interfaces if needed
3. Create new components if required
4. Run tests to ensure compatibility

### Performance Monitoring
- Regular Lighthouse audits
- Core Web Vitals monitoring
- Mobile performance testing