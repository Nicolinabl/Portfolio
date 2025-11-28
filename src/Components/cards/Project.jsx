import { FilledButton } from '../buttons/FilledButton.jsx'
import { ClearButton } from '../buttons/ClearButton.jsx'
import { Body } from '../Typography/Body.jsx'
import { H3 } from '../Typography/h3.jsx'
import styled from 'styled-components'

const ProjectTemplate = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`

export const Project = (props) => {
  return (
    <ProjectTemplate>
      <img src={props.imgSrc} alt={props.name} className='projectImage' />
      <H3>{props.name}</H3>
      <Body>{props.description}</Body>
      <Buttons>
        <FilledButton label='Live Demo' href={props.netlify}/>
        <ClearButton label='View Code' href={props.github}/>
      </Buttons>
    </ProjectTemplate>
  )
}