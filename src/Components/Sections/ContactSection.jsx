import { IconCollection } from "../Icons/IconCollection"
import { ProfileImage } from '../cards/ProfileImage'
import { H2 } from '../typography/h2'

export const ContactSection = () => {
  return (
    <div>
      <ProfileImage />
      <H2 title='Lets talk!' />
      <p>Nicolina Bäcklin Löwenberg</p>
      <p>+46 72 220 87 00</p>
      <p>nicolina.backlin@telia.com</p>
      <IconCollection />
    </div>
  )
}