import { H2 } from '../typography/h2'
import { Body } from '../typography/body'
import styled from 'styled-components'

const TechContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  @media (max-width: 768px) {

`

const TechInfo = styled.div`
max-width: 782px;
margin-top: 64px;
text-align: center;

  @media (max-width: 768px) {
    max-width: 600px; /* Adjust max width for tablets */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Allow full width on small screens */
  }
`

export const TechSection = () => {
  return (
    <TechContainer>
    <H2>Tech</H2>
    <TechInfo>
      <Body>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. </Body>
    </TechInfo>
    </TechContainer>
  )
}