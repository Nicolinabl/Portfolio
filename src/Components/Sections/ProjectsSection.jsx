import { Project } from '../cards/Project'
import weatherApp from '../../Assets/weatherApp.png'
import recipeLibrary from '../../Assets/recipeLibrary.png'
import businessSite from '../../Assets/businessSite.png'
import eventFinder from '../../Assets/eventFinder.png'
import data from '../../data/projects.json'
import { H2 } from '../typography/h2'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 64px;
`

const images = [
  businessSite,
  weatherApp,
  eventFinder, 
  recipeLibrary
]

export const ProjectsSection = () => {
  const settings = {
    dots: true,               // shows navigation dots
    infinite: true,           // loops infinitely
    speed: 500,               // animation speed
    slidesToShow: 3,          // how many slides are visible at once
    slidesToScroll: 1,        // slides to scroll per swipe
    responsive: [             // responsive breakpoints
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <ProjectContainer>
        <H2>Featured projects</H2>
      <Slider {...settings} style={{ width: '100%', gap: '32px' }}>
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
      </Slider>
    </ProjectContainer>
  )
}

