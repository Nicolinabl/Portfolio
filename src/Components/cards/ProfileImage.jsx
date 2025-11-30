import styled from 'styled-components'
import me from '../../Assets/me.JPG'

const ProfileImageStyling = styled.img`
  max-width: 440px;
  border-radius: 50%;
  border: 5px solid #505b4d;

  @media (max-width: 600px) {
   width: 100%;
   object-fit: cover;
  }
`

export const ProfileImage = () => {
  return <ProfileImageStyling src={me} alt="Photo of Nicolina" />
}