import { IconCollection } from "./IconCollection"
import { ProfileImage } from './ProfileImage'

export const ContactSection = () => {
  return (
    <div>
      <ProfileImage />
      <h2>Let's Talk!</h2>
      <p>Nicolina Bäcklin Löwenberg</p>
      <p>+46 72 220 87 00</p>
      <p>nicolina.backlin@telia.com</p>
      <IconCollection />
    </div>
  )
}