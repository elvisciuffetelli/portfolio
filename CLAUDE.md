# Claude Code Context: Personal Portfolio Website

## Project Overview
Personal developer portfolio website showcasing professional experience, skills, education, projects, and contact information. Built with Next.js 15, TypeScript, TailwindCSS, and shadcn/ui.

## Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Testing**: Jest + React Testing Library
- **Data**: Static JSON file
- **Deployment**: Vercel/Netlify (static)

## Project Structure
```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/
│   │   ├── sections/        # Main page sections
│   │   ├── ui/              # Reusable UI components
│   │   └── layout/          # Layout components
│   ├── data/
│   │   └── portfolio.json   # Portfolio content data
│   ├── types/
│   │   └── portfolio.ts     # TypeScript interfaces
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
├── tests/
│   ├── unit/               # Component unit tests
│   └── integration/        # Integration tests
└── specs/001-create-a-personal/  # Feature documentation
```

## Key Components
- `HeroSection`: Name, role, tagline, contact buttons
- `AboutSection`: Professional description and interests
- `WorkExperienceSection`: Job history with cards
- `EducationSection`: Academic background
- `SkillsSection`: Technical skills as badges
- `ProjectsSection`: Personal projects showcase
- `ExtraCurricularSection`: Volunteering and activities
- `ContactSection`: Footer with links and location

## Data Structure
Portfolio data stored in `src/data/portfolio.json` with TypeScript interfaces in `src/types/portfolio.ts`. Key entities:
- WorkExperience (title, company, dates, notes)
- Education (institution, course, status)
- Projects (name, description, links)
- Activities (role, organization, description)
- ContactLinks (email, social profiles)

## Development Approach
1. **TDD**: Write tests before implementation
2. **Component-First**: Build reusable UI components
3. **Mobile-First**: Responsive design with TailwindCSS
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Performance**: Static generation, optimized images

## Testing Strategy
- Unit tests for all components
- Integration tests for user flows
- Accessibility testing
- Responsive design validation
- Performance testing (Lighthouse)

## Recent Changes
- Created feature specification and implementation plan
- Defined data model and component interfaces
- Set up project structure and contracts
- Generated quickstart guide for development

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run test suite
npm run lint         # Lint code
```

## Portfolio Sections (Implementation Order)
1. Hero/Header with name, role, contact buttons
2. About Me with professional/personal description
3. Work Experience with chronological timeline
4. Education with institutions and courses
5. Skills displayed as categorized badges
6. Projects with tracciapesi.app featured
7. Extra-curricular activities and volunteering
8. Contact/Footer with links and location

Generated: 2025-09-16 | Feature: 001-create-a-personal