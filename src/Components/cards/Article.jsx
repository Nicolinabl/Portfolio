import { Body } from '../typography/body.jsx'
import { H3 } from '../typography/h3.jsx'
import styled from 'styled-components'
import { ClearButton } from '../Buttons/ClearButton.jsx'

const ArticleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  min-width: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 16px;
  margin: 16px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
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

