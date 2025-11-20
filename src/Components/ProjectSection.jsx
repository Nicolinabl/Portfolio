import { Projects } from './Projects'
import weatherApp from '../Assets/weatherApp.png'
import recipeLibrary from '../Assets/recipeLibrary.png'
import businessSite from '../Assets/businessSite.png'
import eventFinder from '../Assets/eventFinder.png'
import data from '../data/projects.json'

export const ProjectSection = () => {
  return (
    <div>
    <h2>Featured projects</h2>
    <Projects
        imgSrc={businessSite}
        name={data.projects[0].name}
        description={`${data.projects[0].description} Built using ${data.projects[0].tags}`}
        netlify={data.projects[0].netlify}
        github={data.projects[0].github}/>
    <Projects
        imgSrc={weatherApp}
        name={data.projects[1].name}
        description={`${data.projects[1].description} Built using ${data.projects[1].tags}`}
        netlify={data.projects[1].netlify}
        github={data.projects[1].github}/>
    <Projects
        imgSrc={eventFinder}
        name={data.projects[2].name}
        description={`${data.projects[2].description} Built using ${data.projects[2].tags}`} 
        netlify={data.projects[2].netlify}
        github={data.projects[2].github}/>
    <Projects
        imgSrc={recipeLibrary}
        name={data.projects[3].name}
        description={`${data.projects[3].description} Built using ${data.projects[3].tags}`} 
        netlify={data.projects[3].netlify}
        github={data.projects[3].github}/>
    </div>
  )
}