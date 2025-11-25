import { Body } from '../typography/body'
import { H3 } from '../typography/h3'

export const Skills = ({ title, items }) => {
  return (
    <div>
      <H3>{title}</H3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Body>{item}</Body>
          </li>
        ))}
      </ul>
    </div>
  )
}