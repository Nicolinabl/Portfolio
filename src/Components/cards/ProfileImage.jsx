import styled from 'styled-components'
import me from '../../Assets/me.JPG'

const ProfileImageStyling = styled.img`
  width: 500px;
  border-radius: 50%;
  border: 5px solid #FD6F00;
`

export const ProfileImage = () => {
  return <ProfileImageStyling src={me} alt="Photo of Nicolina" />
}