import { Body } from '../typography/body'
import { H3 } from '../typography/h3'

export const Article = (props) => {
  return(
    <div>
    <img src={props.imgSrc} alt={props.title} className="articleImage"/>
    <Body>{props.date}</Body>
    <H3>{props.title} </H3>
    <Body>{props.text}</Body>
    </div>
  )
}

