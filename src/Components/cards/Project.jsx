import { FilledButton } from '../buttons/FilledButton'
import { ClearButton } from '../buttons/ClearButton'
import { Body } from '../typography/body'
import { H3 } from '../typography/h3'

export const Project = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.name} className='projectImage' />
      <H3>{props.name}</H3>
      <Body>{props.description}</Body>
      <FilledButton label='Live Demo' href={props.netlify}/>
      <ClearButton label='View Code' href={props.github}/>
    </div>
  )
}