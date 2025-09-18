# Technology Stack

## Framework & Runtime
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Headless UI components (@radix-ui/react-*)
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

## Development Tools
- **Turbopack** - Fast bundler (used in dev and build)
- **ESLint 9** - Code linting
- **Jest** - Testing framework
- **Testing Library** - React component testing utilities

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:ci      # Run tests with coverage for CI
```

## Path Aliases
- `@/*` → `./src/*`
- `@/components/ui/*` → `./src/components/ui/*` or `./components/ui/*`
- `@/lib/*` → `./lib/*`

## Key Dependencies
- **next/image** - Optimized image component
- **next/font** - Font optimization (Geist fonts)
- Custom animations via CSS keyframes and Tailwind utilities