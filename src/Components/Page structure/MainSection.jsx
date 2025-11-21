import { Skills } from '../Skills'
import { ProjectsCollection } from '../ProjectsCollection'
import { Tech } from '../Tech'
import { MyJourney } from '../MyJourney'

export const MainSection = () => {
  return (
    <main>
      <Skills />
      <ProjectsCollection />
      <Tech />
      <MyJourney />
    </main>
  )
}