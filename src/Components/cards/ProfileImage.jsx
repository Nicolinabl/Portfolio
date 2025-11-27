import styled from 'styled-components'
import me from '../../Assets/me.JPG'

const ProfileImageStyling = styled.img`
  width: 440px;
  border-radius: 50%;
  border: 5px solid #505b4d;
`

export const ProfileImage = () => {
  return <ProfileImageStyling src={me} alt="Photo of Nicolina" />
}