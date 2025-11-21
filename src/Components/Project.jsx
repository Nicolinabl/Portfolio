import { FilledButton } from '../Components/Buttons/FilledButton'
import { ClearButton } from '../Components/Buttons/ClearButton'

export const Project = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.name} className='projectImage' />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <FilledButton label='Live Demo' href={props.netlify}/>
      <ClearButton label='View Code' href={props.github}/>
    </div>
  )
}