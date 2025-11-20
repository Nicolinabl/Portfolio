import {Introduction} from './Components/Introduction'
import { Skills } from './Components/Skills'
import { ProjectSection } from './Components/ProjectSection'
import { TechSection } from './Components/TechSection'
import { MyJourneySection } from './Components/MyJourneySection'
import { ContactSection } from './Components/ContactSection'


export const App = () => {
  return (
    <>
      <Introduction />
      <Skills />
      <ProjectSection />
      <TechSection />
      <MyJourneySection />
      <ContactSection />
    </>
  )
}
