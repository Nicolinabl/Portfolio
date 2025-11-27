import { IconCollection } from "../Icons/IconCollection"
import { ProfileImage } from '../cards/ProfileImage'
import { H2 } from '../typography/h2'
import { Body } from '../typography/body'
import styled from 'styled-components'

const ContactContainer = styled.div`
  display: flex;
  padding: 64px 0;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  justify-content: center;
`
const ContactHeading = styled.div`
  margin-bottom: 32px;
`

export const ContactSection = () => {
  return (
    <ContactContainer>
      <div>
        <ProfileImage />
      </div>

      <div>
        <ContactHeading>
          <H2>Lets talk!</H2>
        </ContactHeading>
        <Body>Nicolina Bäcklin Löwenberg</Body>
        <Body>+46 72 220 87 00</Body>
        <Body>nicolina.backlin@telia.com</Body>
        <IconCollection />
      </div>
    </ContactContainer>
  )
}