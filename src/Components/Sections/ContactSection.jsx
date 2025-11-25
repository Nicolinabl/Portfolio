import { IconCollection } from "../Icons/IconCollection"
import { ProfileImage } from '../cards/ProfileImage'
import { H2 } from '../typography/h2'
import { Body } from '../typography/body'

export const ContactSection = () => {
  return (
    <div>
      <ProfileImage />
      <H2>Lets talk!</H2>
      <Body>Nicolina Bäcklin Löwenberg</Body>
      <Body>+46 72 220 87 00</Body>
      <Body>nicolina.backlin@telia.com</Body>
      <IconCollection />
    </div>
  )
}