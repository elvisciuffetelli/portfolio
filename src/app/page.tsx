import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WorkExperienceSection } from '@/components/sections/WorkExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExtraCurricularSection } from '@/components/sections/ExtraCurricularSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getPortfolioData } from '@/utils/data';

export default function Home() {
  const portfolioData = getPortfolioData();

  return (
    <>
      <HeroSection
        name="Elvis Ciuffetelli"
        role="Frontend Developer"
        tagline="Experienced web and mobile developer with a strong focus on the React ecosystem, attention to UX/UI, and commitment to writing high-quality code."
        links={portfolioData.links}
      />

      <AboutSection
        professionalDescription="Web and mobile developer with strong focus on React ecosystem, attention to UX/UI, and commitment to writing high-quality code."
        personalInterests={[
          "💪 Passionate about fitness and staying active",
          "🚴‍♂️ Enjoy cycling and exploring new routes",
          "🥾 Love trekking and connecting with nature",
          "📚 Always learning new technologies and best practices",
          "🌍 Contributing to open source projects and the developer community"
        ]}
      />

      <WorkExperienceSection experiences={portfolioData.workExperience} />

      <EducationSection education={portfolioData.education} />

      <SkillsSection skills={portfolioData.skills} />

      <ProjectsSection projects={portfolioData.projects} />

      <ExtraCurricularSection activities={portfolioData.extraCurricular} />

      <ContactSection
        links={portfolioData.links}
        location={portfolioData.location}
        callToAction="Let's work together on your next project! 🤝"
      />
    </>
  );
}
