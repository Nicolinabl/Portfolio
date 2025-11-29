import { IconCollection } from '../Icons/IconCollection'
import { ProfileImage } from '../cards/ProfileImage'
import { H1 } from '../typography/h1'
import { Body } from '../typography/body'
import styled from 'styled-components'

const Hero = styled.header`
  display: flex;
  padding: 128px 128px 64px 128px;
  justify-content: space-evenly;
  align-items: center;
  align-self: stretch;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 64px 32px 32px 32px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 16px 16px;
    text-align: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  width: 580px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
`

const ImageContainer = styled.div`
  display: flex;
  padding: 128px 128px 64px 128px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
const InfoText = styled.div`
  margin-top: 32px;
`

export const IntroSection = () => {
  return (
    <Hero>
    <TextContainer>
      <Body size='30px'>I am Nicolina Bäcklin Löwenberg</Body>
      <H1>Web developer</H1>
      <InfoText>
        <Body>Web developer and licensed veterinary nurse. Super excited to make ideas come to life and build projects with impact. I believe in constant learning and showing up fully prepared. Combining my skillsets as a developer and veterinary nurse to bridge the gap between tech and human.</Body>
      </InfoText>
      <IconCollection />
    </TextContainer>
    <div>
      <ProfileImage />
    </div>
    </Hero>
  )
}

