import { Body } from '../Typography/Body.jsx'
import { H3 } from '../Typography/h3.jsx'
import styled from 'styled-components'
import { ClearButton } from '../Buttons/ClearButton.jsx'

const ArticleContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`


export const Article = (props) => {
  return(
    <ArticleContainer>
      <img src={props.imgSrc} alt={props.title} className="articleImage"/>
      <Body>{props.date}</Body>
      <H3>{props.title} </H3>
      <Body>{props.text}</Body>
      <ClearButton label='Read Article'/>
    </ArticleContainer>
  )
}

