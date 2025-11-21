import { SkillsSection } from '../Sections/SkillsSection'
import { ProjectsSection } from '../Sections/ProjectsSection'
import { TechSection } from '../Sections/TechSection'
import { MyJourneySection } from '../Sections/MyJourneySection'

export const MainSection = () => {
  return (
    <main>
      <SkillsSection />
      <ProjectsSection />
      <TechSection />
      <MyJourneySection />
    </main>
  )
}