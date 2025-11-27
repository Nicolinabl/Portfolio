import { LinkedinIcon } from './LinkedinIcon'
import { GitHubIcon } from './GitHubIcon'
import { InstagramIcon } from './InstagramIcon'
import styled from 'styled-components'

const IconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;
  margin-top: 64px;
`

export const IconCollection = () => {
  return (
    <IconsContainer>
      <LinkedinIcon />
      <GitHubIcon />
      <InstagramIcon />
    </IconsContainer>
  )
}