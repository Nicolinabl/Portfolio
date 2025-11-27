import { Body } from '../typography/body'
import { H3 } from '../typography/h3'
import styled from 'styled-components'

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
    </ArticleContainer>
  )
}

