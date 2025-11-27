import { Article } from '../cards/Article'
import workMe from '../../Assets/workMe.jpg'
import { ClearButton } from '../buttons/ClearButton'
import { H2 } from '../typography/h2'
import styled from 'styled-components'

const MyJourneyContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`

const ArticleContent = styled.div`
  display: flex;
  gap: 64px;
`

export const MyJourneySection = () => {
  return (
    <MyJourneyContainer>
    <H2>My Journey</H2>
    <ArticleContent>
      <Article imgSrc={workMe} date='1 nov 2025' title='When worlds collide' text='I år gjorde jag det jag aldrig trodde att jag skulle göra. Jag lämnade min trygga punkt, fantastiska kollegor och en arbetsplats som kändes som hemma. Jag lämnade den värld jag trodde var min enda, för att ge ett nytt intresse chansen att växa.'/>
      <Article imgSrc={workMe} date='1 nov 2025' title='When worlds collide' text='I år gjorde jag det jag aldrig trodde att jag skulle göra. Jag lämnade min trygga punkt, fantastiska kollegor och en arbetsplats som kändes som hemma. Jag lämnade den värld jag trodde var min enda, för att ge ett nytt intresse chansen att växa.'/>
      <Article imgSrc={workMe} date='1 nov 2025' title='When worlds collide' text='I år gjorde jag det jag aldrig trodde att jag skulle göra. Jag lämnade min trygga punkt, fantastiska kollegor och en arbetsplats som kändes som hemma. Jag lämnade den värld jag trodde var min enda, för att ge ett nytt intresse chansen att växa.'/>
      <Article imgSrc={workMe} date='1 nov 2025' title='When worlds collide' text='I år gjorde jag det jag aldrig trodde att jag skulle göra. Jag lämnade min trygga punkt, fantastiska kollegor och en arbetsplats som kändes som hemma. Jag lämnade den värld jag trodde var min enda, för att ge ett nytt intresse chansen att växa.'/>
    </ArticleContent>
    <ClearButton label='Read Article'/>
    </MyJourneyContainer>
  )
}