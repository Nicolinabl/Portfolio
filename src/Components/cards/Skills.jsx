import { Body } from '../Typography/body'
import { H3 } from '../Typography/h3'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  height: 349px;
  text-align: center;
  padding: 44px;
  border-right: 2px solid #505b4d;

  &:last-child {
    border-right: none;
  }
`

export const Skills = ({ title, items }) => {
  return (
    <SkillsContainer>
      <H3>{title}</H3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Body>{item}</Body>
          </li>
        ))}
      </ul>
    </SkillsContainer>
  )
}