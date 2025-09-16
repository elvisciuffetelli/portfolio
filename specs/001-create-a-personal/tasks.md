# Tasks: Personal Developer Portfolio Page

**Input**: Design documents from `/specs/001-create-a-personal/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Using Next.js App Router structure: `src/app/`, `src/components/`, `src/data/`, `src/types/`

## Phase 3.1: Setup
- [ ] T001 Initialize Next.js project with TypeScript, TailwindCSS, and App Router using create-next-app
- [ ] T002 Initialize shadcn/ui configuration and install core components (button, card, badge, separator, navigation-menu)
- [ ] T003 [P] Install additional dependencies: lucide-react, @types/node
- [ ] T004 [P] Configure Jest testing framework with React Testing Library and Next.js support
- [ ] T005 [P] Set up ESLint and Prettier configuration for code quality
- [ ] T006 Create project directory structure: src/{components/{sections,ui,layout},data,types,hooks,utils}

## Phase 3.2: Data Layer & Types (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These must be implemented first as foundation for all components**
- [ ] T007 [P] Create portfolio data interfaces in src/types/portfolio.ts based on contracts/component-interfaces.ts
- [ ] T008 [P] Create portfolio JSON data file in src/data/portfolio.json with provided sample data
- [ ] T009 [P] Create data validation tests in tests/unit/data-validation.test.ts
- [ ] T010 [P] Create TypeScript JSON import utility in src/utils/data.ts

## Phase 3.3: Layout Components (ONLY after data layer complete)
- [ ] T011 [P] Create Section wrapper component in src/components/layout/Section.tsx
- [ ] T012 [P] Create responsive Navigation component in src/components/layout/Navigation.tsx
- [ ] T013 [P] Create main page layout in src/app/layout.tsx with metadata and fonts
- [ ] T014 [P] Unit test for Section component in tests/unit/Section.test.tsx
- [ ] T015 [P] Unit test for Navigation component in tests/unit/Navigation.test.tsx

## Phase 3.4: Core UI Components
- [ ] T016 [P] Create SkillBadge component in src/components/ui/SkillBadge.tsx
- [ ] T017 [P] Create ContactButton component in src/components/ui/ContactButton.tsx
- [ ] T018 [P] Create ExperienceCard component in src/components/ui/ExperienceCard.tsx
- [ ] T019 [P] Create ProjectCard component in src/components/ui/ProjectCard.tsx
- [ ] T020 [P] Create ActivityItem component in src/components/ui/ActivityItem.tsx
- [ ] T021 [P] Unit tests for all UI components in tests/unit/ui-components.test.tsx

## Phase 3.5: Section Components (Sequential - depends on UI components)
- [ ] T022 Create HeroSection component in src/components/sections/HeroSection.tsx (name, role, tagline, contact buttons)
- [ ] T023 Create AboutSection component in src/components/sections/AboutSection.tsx (professional description, personal interests)
- [ ] T024 Create WorkExperienceSection component in src/components/sections/WorkExperienceSection.tsx (chronological job list)
- [ ] T025 Create EducationSection component in src/components/sections/EducationSection.tsx (academic background)
- [ ] T026 Create SkillsSection component in src/components/sections/SkillsSection.tsx (categorized skills with badges)
- [ ] T027 Create ProjectsSection component in src/components/sections/ProjectsSection.tsx (project showcase)
- [ ] T028 Create ExtraCurricularSection component in src/components/sections/ExtraCurricularSection.tsx (activities and volunteering)
- [ ] T029 Create ContactSection component in src/components/sections/ContactSection.tsx (footer with contact info and location)

## Phase 3.6: Main Page Integration
- [ ] T030 Implement main portfolio page in src/app/page.tsx importing all sections and portfolio data
- [ ] T031 Add SEO metadata and Open Graph tags in src/app/layout.tsx
- [ ] T032 Create custom hooks for responsive behavior in src/hooks/useResponsive.ts
- [ ] T033 Create scroll-to-section navigation functionality in src/hooks/useScrollSpy.ts

## Phase 3.7: Integration Tests (TDD - Parallel)
- [ ] T034 [P] Integration test for hero section display and contact buttons in tests/integration/hero-section.test.tsx
- [ ] T035 [P] Integration test for work experience chronological display in tests/integration/experience-section.test.tsx
- [ ] T036 [P] Integration test for projects showcase with tracciapesi.app in tests/integration/projects-section.test.tsx
- [ ] T037 [P] Integration test for responsive design behavior in tests/integration/responsive.test.tsx
- [ ] T038 [P] Integration test for complete page navigation flow in tests/integration/navigation.test.tsx

## Phase 3.8: Accessibility & Performance
- [ ] T039 [P] Add ARIA labels and semantic HTML structure across all components
- [ ] T040 [P] Implement keyboard navigation support for interactive elements
- [ ] T041 [P] Optimize images and implement Next.js Image component where applicable
- [ ] T042 [P] Add loading states and error boundaries for better UX
- [ ] T043 Run Lighthouse audit and optimize Core Web Vitals (target: >90 score)

## Phase 3.9: Polish & Validation
- [ ] T044 [P] Add animations and micro-interactions using TailwindCSS transitions
- [ ] T045 [P] Implement dark mode support (optional enhancement)
- [ ] T046 [P] Add print stylesheet for CV-friendly printing
- [ ] T047 [P] Create README.md with setup instructions and project overview
- [ ] T048 Validate all functional requirements from specification (FR-001 through FR-017)
- [ ] T049 Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] T050 Mobile device testing and responsive design validation

## Dependencies
- Setup (T001-T006) before all other phases
- Data layer (T007-T010) blocks all component development
- Layout components (T011-T015) before section components (T022-T029)
- UI components (T016-T021) before section components use them
- Section components (T022-T029) before main page integration (T030-T033)
- Integration tests (T034-T038) can run parallel after components complete
- Polish tasks (T044-T050) require completed implementation

## Parallel Execution Examples

### Phase 3.2 - Data Foundation (Run together)
```
Task: "Create portfolio data interfaces in src/types/portfolio.ts"
Task: "Create portfolio JSON data file in src/data/portfolio.json"
Task: "Create data validation tests in tests/unit/data-validation.test.ts"
Task: "Create TypeScript JSON import utility in src/utils/data.ts"
```

### Phase 3.4 - UI Components (Run together)
```
Task: "Create SkillBadge component in src/components/ui/SkillBadge.tsx"
Task: "Create ContactButton component in src/components/ui/ContactButton.tsx"
Task: "Create ExperienceCard component in src/components/ui/ExperienceCard.tsx"
Task: "Create ProjectCard component in src/components/ui/ProjectCard.tsx"
Task: "Create ActivityItem component in src/components/ui/ActivityItem.tsx"
```

### Phase 3.7 - Integration Tests (Run together)
```
Task: "Integration test for hero section display and contact buttons"
Task: "Integration test for work experience chronological display"
Task: "Integration test for projects showcase with tracciapesi.app"
Task: "Integration test for responsive design behavior"
Task: "Integration test for complete page navigation flow"
```

## Functional Requirements Validation

### FR-001-003: Hero Section
- T022: HeroSection component with name, role, tagline
- T017: ContactButton component for CV download, email, LinkedIn, GitHub
- T034: Integration test for hero section functionality

### FR-004-005: About Section
- T023: AboutSection with professional background and personal interests

### FR-006: Work Experience
- T018: ExperienceCard component for individual job entries
- T024: WorkExperienceSection with chronological display
- T035: Integration test for experience display

### FR-007: Education
- T025: EducationSection for academic background

### FR-008: Skills Organization
- T016: SkillBadge component for individual skills
- T026: SkillsSection with categorization

### FR-009: Projects Showcase
- T019: ProjectCard component for project display
- T027: ProjectsSection featuring tracciapesi.app
- T036: Integration test for projects showcase

### FR-010: Extra-curricular Activities
- T020: ActivityItem component for individual activities
- T028: ExtraCurricularSection for volunteering and contributions

### FR-011: Contact & Footer
- T029: ContactSection with email, LinkedIn, GitHub, location

### FR-012: Responsive Design
- T032: useResponsive hook for responsive behavior
- T037: Integration test for responsive functionality

### FR-013-014: Clean Design & Extensibility
- T011: Section wrapper for consistent layout
- T044: Polish animations and micro-interactions

### FR-015-017: Optional Features
- T016: SkillBadge with proficiency indicators
- T019: ProjectCard with links and previews
- T029: ContactSection with collaboration call-to-action

## Notes
- [P] tasks = different files, no dependencies
- Follow TDD: write tests before implementation where applicable
- Commit after each completed task
- All file paths assume src/ directory structure per Next.js conventions
- Components use shadcn/ui and TailwindCSS for consistent styling
- Data flows from portfolio.json → components → rendered sections

## Task Generation Rules Applied

1. **From Contracts**: 
   - component-interfaces.ts → T007 TypeScript interfaces
   - portfolio-data.schema.json → T008 JSON data file

2. **From Data Model**:
   - Each entity (WorkExperience, Education, Project, etc.) → UI component tasks
   - Portfolio data structure → T008, T010 data handling

3. **From Quickstart Scenarios**:
   - Setup steps → T001-T006 project initialization
   - Component development order → T011-T029 implementation sequence
   - Testing validation → T034-T038 integration tests

4. **Ordering Applied**:
   - Setup → Data Layer → UI Components → Sections → Integration → Polish
   - Dependencies enforced (data before components, components before integration)

## Validation Checklist

- [x] All contract interfaces have corresponding TypeScript definitions
- [x] All data entities have component implementations
- [x] All functional requirements have implementing tasks
- [x] Parallel tasks are truly independent (different files)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] Tests come before implementation where applicable
- [x] Setup tasks precede all development
- [x] Integration tests validate user stories
- [x] Polish tasks ensure professional quality