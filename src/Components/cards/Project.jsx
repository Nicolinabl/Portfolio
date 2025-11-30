import { FilledButton } from '../Buttons/FilledButton.jsx'
import { ClearButton } from '../Buttons/ClearButton.jsx'
import { Body } from '../typography/body.jsx'
import { H3 } from '../typography/h3.jsx'
import styled from 'styled-components'

const ProjectTemplate = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  min-width: 280px;
  flex-direction: column;
  justify-content: center;
  // align-items: flex-start;
  gap: 24px;
  padding: 16px;
  margin: 16px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  `

const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`

export const Project = (props) => {
  return (
    <ProjectTemplate>
      <ProjectImage src={props.imgSrc} alt={props.name} className='projectImage' />
      <H3>{props.name}</H3>
      <Body>{props.description}</Body>
      <Buttons>
        <FilledButton label='Live Demo' href={props.netlify}/>
        <ClearButton label='View Code' href={props.github}/>
      </Buttons>
    </ProjectTemplate>
  )
}