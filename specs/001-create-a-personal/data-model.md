# Data Model: Portfolio Data Structure

## Core Data Entities

### Portfolio Owner
```typescript
interface PortfolioOwner {
  name: string;
  role: string;
  tagline: string;
  location: string;
  aboutMe: {
    professional: string;
    personal: string;
  };
}
```

**Fields**:
- `name`: Full name of the developer
- `role`: Primary professional role (e.g., "Frontend Developer")
- `tagline`: Short description of skills and value proposition
- `location`: Geographic location (e.g., "L'Aquila, Italy")
- `aboutMe.professional`: Professional background and expertise
- `aboutMe.personal`: Personal interests and hobbies

### Work Experience
```typescript
interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  note?: string;
  project?: string;
}
```

**Fields**:
- `title`: Job title/role
- `company`: Company name
- `startDate`: Employment start date (string format)
- `endDate`: Employment end date or "Present"
- `note`: Optional notes about acquisitions or special circumstances
- `project`: Optional specific project information

**Validation Rules**:
- All required fields must be non-empty strings
- `endDate` should be either "Present" or a date after `startDate`
- `note` and `project` are optional

### Education
```typescript
interface Education {
  institution: string;
  course?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
}
```

**Fields**:
- `institution`: Name of educational institution
- `course`: Specific course or program name (optional)
- `startDate`: Start date (optional)
- `endDate`: End date (optional)
- `status`: Current status (e.g., "Present")

**Validation Rules**:
- `institution` is required
- Either provide date range OR status
- If both dates provided, `endDate` should be after `startDate`

### Skills
```typescript
type Skill = string;

interface SkillCategory {
  category: string;
  skills: Skill[];
  proficiencyLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}
```

**Current Implementation**: Simple array of strings  
**Future Enhancement**: Categorized skills with proficiency levels

**Validation Rules**:
- Skills array must contain at least one skill
- Each skill must be a non-empty string
- No duplicate skills allowed

### Personal Projects
```typescript
interface Project {
  name: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}
```

**Fields**:
- `name`: Project name
- `description`: Project description and goals
- `technologies`: Array of technologies used (optional)
- `githubUrl`: GitHub repository link (optional)
- `liveUrl`: Live project URL (optional)
- `imageUrl`: Project screenshot/image (optional)

**Validation Rules**:
- `name` and `description` are required
- URLs should be valid HTTP/HTTPS links when provided
- `technologies` should be array of non-empty strings

### Extra-Curricular Activities
```typescript
interface Activity {
  role: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  description: string;
}
```

**Fields**:
- `role`: Role or position in the activity
- `organization`: Organization or institution name
- `startDate`: Activity start date (optional)
- `endDate`: Activity end date (optional)
- `description`: Description of the activity and achievements

**Validation Rules**:
- `role`, `organization`, and `description` are required
- Date validation same as other entities

### Contact Links
```typescript
interface ContactLinks {
  email: string;
  linkedin?: string;
  github?: string;
  website?: string;
  cvDownload?: string;
}
```

**Fields**:
- `email`: Primary email address
- `linkedin`: LinkedIn profile URL (optional)
- `github`: GitHub profile URL (optional)
- `website`: Personal website URL (optional)
- `cvDownload`: CV/Resume download link (optional)

**Validation Rules**:
- `email` must be valid email format
- All URLs must be valid HTTP/HTTPS links when provided

### Languages
```typescript
interface Language {
  name: string;
  proficiency?: 'basic' | 'intermediate' | 'advanced' | 'native';
}

// Current simple implementation
type Language = string;
```

**Current Implementation**: Simple array of strings  
**Future Enhancement**: Objects with proficiency levels

## Complete Portfolio Data Structure

```typescript
interface PortfolioData {
  owner: PortfolioOwner;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[]; // or SkillCategory[] in enhanced version
  languages: string[]; // or Language[] in enhanced version
  projects: Project[];
  extraCurricular: Activity[];
  links: ContactLinks;
}
```

## Data Relationships

```mermaid
graph TB
    PD[PortfolioData] --> PO[PortfolioOwner]
    PD --> WE[WorkExperience[]]
    PD --> ED[Education[]]
    PD --> SK[Skills[]]
    PD --> LG[Languages[]]
    PD --> PR[Projects[]]
    PD --> AC[Activities[]]
    PD --> CL[ContactLinks]
```

## State Management

**Approach**: Static data import with TypeScript interfaces  
- Data stored in `/data/portfolio.json`
- TypeScript interfaces in `/types/portfolio.ts`
- No complex state management needed (Redux/Zustand not required)
- React state for UI interactions (mobile menu, modals, etc.)

## Data Validation Strategy

1. **TypeScript Compile-Time Validation**: Interface enforcement
2. **Runtime Validation**: Zod schema validation (optional enhancement)
3. **Component-Level Validation**: PropTypes or TypeScript props
4. **JSON Schema**: For data file validation in development

## Example Data Structure

```json
{
  "owner": {
    "name": "Elvis Ciuffetelli",
    "role": "Frontend Developer",
    "tagline": "Experienced web and mobile developer with a strong focus on React ecosystem, UX/UI, and high-quality code",
    "location": "L'Aquila, Italy",
    "aboutMe": {
      "professional": "Web and mobile developer with strong focus on React ecosystem, attention to UX/UI, and commitment to writing high-quality code.",
      "personal": "Passionate about fitness, cycling, and trekking. Always learning new technologies and contributing to open source."
    }
  },
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
    "React", "Node.js", "TypeScript", "Next.js", "TailwindCSS"
  ],
  "languages": ["Italiano", "Inglese"],
  "projects": [
    {
      "name": "tracciapesi.app",
      "description": "Web app for tracking workouts and monitoring gym progress. Features include custom exercise logging, visual progress charts, and a clean, mobile-first interface."
    }
  ],
  "extraCurricular": [
    {
      "role": "Sviluppatore front-end",
      "organization": "Informatici Senza Frontiere APS",
      "startDate": "March 2021",
      "endDate": "Present",
      "description": "Contributor to the Open Hospital project"
    }
  ],
  "links": {
    "email": "ciuffetellielvis@gmail.com",
    "linkedin": "https://linkedin.com/in/elvis-ciuffetelli",
    "github": "https://github.com/elvisciuffetelli"
  }
}
```