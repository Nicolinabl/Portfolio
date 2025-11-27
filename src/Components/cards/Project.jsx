import { FilledButton } from '../buttons/FilledButton'
import { ClearButton } from '../buttons/ClearButton'
import { Body } from '../typography/body'
import { H3 } from '../typography/h3'
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