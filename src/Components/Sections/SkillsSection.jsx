import { H2 } from '../Typography/h2'
import { Skills } from '../cards/Skills'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`

const SkillsColumns = styled.div`
  display: flex;
  width: 982px;
  justify-content: center;
  align-items: flex-start;
`

export const SkillsSection = () => {
  const skillsData = [
    {
      title: 'Code',
      items: ['JavaScript ES6', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Toolbox',
      items: ['Figma', 'Notion', 'GitHub', 'Slack', 'Jira']
    },
    {
      title: 'Upcoming',
      items: ['Node.js', 'React']
    },
    {
      title: 'More',
      items: ['Agile Methodology', 'Accessibility (WCAG)', 'Team coordination']
    }
  ]

  return (
    <SkillsContainer>
    <H2>Skills</H2>
    <SkillsColumns>
        {skillsData.map((category, index) => (
          <Skills
            key={index} 
            title={category.title} 
            items={category.items} 
          />
        ))}
      </SkillsColumns>
    </SkillsContainer>
  )
}