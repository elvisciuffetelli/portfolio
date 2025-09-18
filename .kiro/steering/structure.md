# Project Structure

## Root Directory
- `src/` - Main application source code
- `components/` - Shared UI components (shadcn/ui)
- `lib/` - Utility functions and configurations
- `public/` - Static assets (images, PDFs, logos)
- `specs/` - Project specifications and documentation
- `tests/` - Test files organized by type

## Source Code Organization (`src/`)

### Application Core
- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main portfolio page
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles and animations

### Components Architecture
- `src/components/sections/` - Page section components
  - Each section is a self-contained component (HeroSection, AboutSection, etc.)
- `src/components/ui/` - Reusable UI components
  - Small, focused components (ContactButton, SkillBadge, etc.)
- `src/components/layout/` - Layout-related components

### Data & Types
- `src/data/portfolio.json` - Single source of truth for all portfolio data
- `src/types/portfolio.ts` - TypeScript interfaces for all data structures
- `src/utils/data.ts` - Data access utilities

### Utilities
- `src/hooks/` - Custom React hooks
- `src/utils/` - Helper functions and utilities

## Component Patterns

### Section Components
- Named with "Section" suffix (e.g., `HeroSection.tsx`)
- Accept props for data and configuration
- Self-contained with their own styling

### UI Components
- Small, reusable components
- Follow shadcn/ui patterns with CVA for variants
- Located in both `components/ui/` (shadcn) and `src/components/ui/` (custom)

### Data Flow
- Portfolio data flows from `portfolio.json` → `getPortfolioData()` → page → section components
- Type safety enforced through TypeScript interfaces

## Styling Conventions
- Tailwind CSS utility classes
- Custom animations defined in `globals.css`
- Responsive design with mobile-first approach
- Dark mode support via CSS custom properties

## Asset Organization
- `public/logos/` - Company/organization logos
- `public/` - Profile images, CV, and other static files
- Images optimized using Next.js Image component

## Testing Structure
- `tests/unit/` - Component unit tests
- `tests/integration/` - Integration tests
- Jest configuration with Testing Library