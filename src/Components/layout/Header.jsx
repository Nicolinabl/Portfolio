import { IconCollection } from '../Icons/IconCollection'
import { ProfileImage } from '../cards/ProfileImage'
import { H1 } from '../typography/h1'
import { H2 } from '../typography/h2'


export const Header = () => {
  return (
    <header className='introSection'>
    <div>
      <H1 title='I am Nicolina Bäcklin Löwenberg' />
      <H2 title='Web developer' />
      <p>Web developer and licensed veterinary nurse. Super excited to make ideas come to life and build projects with impact. I believe in constant learning and showing up fully prepared. Combining my skillsets as a developer and veterinary nurse to bridge the gap between tech and human.</p>
      <IconCollection />
    </div>
    <div>
      <ProfileImage />
    </div>
    </header>
  )
}