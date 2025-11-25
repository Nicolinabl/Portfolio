import { H2 } from '../typography/h2'
import { Skills } from '../cards/Skills'

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
    <>
    <H2>Skills</H2>
    <div>
        {skillsData.map((category, index) => (
          <Skills
            key={index} 
            title={category.title} 
            items={category.items} 
          />
        ))}
      </div>
    </>
  )
}