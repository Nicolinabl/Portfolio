import { IconCollection } from './IconCollection'
import { ProfileImage } from './ProfileImage'

export const Introduction = () => {
  return (
    <div className='introSection'>
    <div>
      <h1>I am Nicolina Bäcklin Löwenberg</h1>
      <h2>Web Developer</h2>
      <p>Web developer and licensed veterinary nurse. Super excited to make ideas come to life and build projects with impact. I believe in constant learning and showing up fully prepared. Combining my skillsets as a developer and veterinary nurse to bridge the gap between tech and human.</p>
      <IconCollection />
    </div>
    <div>
      <ProfileImage />
    </div>
    </div>
  )
}