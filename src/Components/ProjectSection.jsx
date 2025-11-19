import { Projects } from './Projects'
import weatherApp from '../Assets/weatherApp.png'
import recipeLibrary from '../Assets/recipeLibrary.png'
import businessSite from '../Assets/businessSite.png'
import eventFinder from '../Assets/eventFinder.png'

export const ProjectSection = () => {
  return (
    <div>
    <h2>Featured projects</h2>
    <Projects
        imgSrc={weatherApp}
        name='Weather App'
        description='Functioning weather app collecting real time data using SMHI open API. Displaying real time temperature for Stockholm,  different messages and colors depending on weather. HTML, CSS, TypeScript, SMHI API' />
    <Projects
        imgSrc={businessSite}
        name='Business site'
        description='Dummy model agency website, built this to explore responsive design, interactivity and layout techniques. Site includes functional navigation bar, hamburger menu on smaller screens, interactive buttons that change theme, form with submission to httpbin. HTML, CSS, JavaScript.' />
    <Projects
        imgSrc={recipeLibrary}
        name='Recipe library'
        description='Recipe app fetching recipes from spoonacular API. Options to display recipes according to chosen filters and sorting options. Taps into saved backup collection of recipes if daily quota of API is reached.  HTML, CSS, JavaScript, Spoonacular API.' />
            <Projects
        imgSrc={eventFinder}
        name='Event finder'
        description='Event finder page. Focus while building this site was accessibility, following WCAG AA standards. HTML, CSS, JavaScript.' />
    </div>
  )
}