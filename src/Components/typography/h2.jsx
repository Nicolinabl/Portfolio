import styled from 'styled-components'

const SecondHeading = styled.h2`
  color: #000;
  font-family: Urbanist;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const H2 = ({children}) => {
  return <SecondHeading>{children}</SecondHeading>
}
