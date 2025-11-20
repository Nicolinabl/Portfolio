import { Articles } from './Articles'
import workMe from '../Assets/workMe.jpg'
import { ClearButton } from './ClearButton'

export const MyJourneySection = () => {
  return (
    <div>
    <h2>My Journey</h2>
    <Articles imgSrc={workMe} date='1 nov 2025' title='When worlds collide' text='I år gjorde jag det jag aldrig trodde att jag skulle göra. Jag lämnade min trygga punkt, fantastiska kollegor och en arbetsplats som kändes som hemma. Jag lämnade den värld jag trodde var min enda, för att ge ett nytt intresse chansen att växa.'/>
    <ClearButton label='Read Article'/>
    </div>
  )
}