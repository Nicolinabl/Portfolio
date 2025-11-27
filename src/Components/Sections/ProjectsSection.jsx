import { Project } from '../cards/Project'
import weatherApp from '../../Assets/weatherApp.png'
import recipeLibrary from '../../Assets/recipeLibrary.png'
import businessSite from '../../Assets/businessSite.png'
import eventFinder from '../../Assets/eventFinder.png'
import data from '../../data/projects.json'
import { H2 } from '../typography/h2'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`
const ProjectInfo = styled.div`
  display: flex;
  gap: 64px;
`

const images = [
  businessSite,
  weatherApp,
  eventFinder, 
  recipeLibrary
]

export const ProjectsSection = () => {
  return (
    <ProjectContainer>
      <H2>Featured projects</H2>

    <ProjectInfo>
      {data.projects.map((project, index) => (
        <Project
          key={project.name}
          imgSrc={images[index]}
          name={project.name}
          description={`${project.description} Built using ${project.tags}`}
          netlify={project.netlify}
          github={project.github}
        />
      ))}
    </ProjectInfo>
    </ProjectContainer>
  )
}

