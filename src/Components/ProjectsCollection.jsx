import { Project } from './Project'
import weatherApp from '../Assets/weatherApp.png'
import recipeLibrary from '../Assets/recipeLibrary.png'
import businessSite from '../Assets/businessSite.png'
import eventFinder from '../Assets/eventFinder.png'
import data from '../data/projects.json'

const images = [
  weatherApp, 
  recipeLibrary, 
  businessSite, 
  eventFinder
]

export const ProjectsCollection = () => {
  return (
    <div>
      <h2>Featured projects</h2>

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
    </div>
  )
}


{/* <Project
        imgSrc={businessSite}
        name={data.projects[0].name}
        description={`${data.projects[0].description} Built using ${data.projects[0].tags}`}
        netlify={data.projects[0].netlify}
        github={data.projects[0].github}/>
    <Project
        imgSrc={weatherApp}
        name={data.projects[1].name}
        description={`${data.projects[1].description} Built using ${data.projects[1].tags}`}
        netlify={data.projects[1].netlify}
        github={data.projects[1].github}/>
    <Project
        imgSrc={eventFinder}
        name={data.projects[2].name}
        description={`${data.projects[2].description} Built using ${data.projects[2].tags}`} 
        netlify={data.projects[2].netlify}
        github={data.projects[2].github}/>
    <Project
        imgSrc={recipeLibrary}
        name={data.projects[3].name}
        description={`${data.projects[3].description} Built using ${data.projects[3].tags}`} 
        netlify={data.projects[3].netlify}
        github={data.projects[3].github}/>
    </div> */}
