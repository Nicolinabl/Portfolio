import { H2 } from '../Typography/h2'
import { Body } from '../Typography/Body'
import styled from 'styled-components'

const TechContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`

export const TechSection = () => {
  return (
    <TechContainer>
    <H2>Tech</H2>
    <Body>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. </Body>
    </TechContainer>
  )
}