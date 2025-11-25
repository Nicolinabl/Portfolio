import { IconCollection } from '../Icons/IconCollection'
import { ProfileImage } from '../cards/ProfileImage'
import { H1 } from '../typography/h1'
import { H2 } from '../typography/h2'
import { Body } from '../typography/body'


export const Header = () => {
  return (
    <header className='introSection'>
    <div>
      <Body size='30px'>I am Nicolina Bäcklin Löwenberg</Body>
      <H1>Web developer</H1>
      <Body>Web developer and licensed veterinary nurse. Super excited to make ideas come to life and build projects with impact. I believe in constant learning and showing up fully prepared. Combining my skillsets as a developer and veterinary nurse to bridge the gap between tech and human.</Body>
      <IconCollection />
    </div>
    <div>
      <ProfileImage />
    </div>
    </header>
  )
}