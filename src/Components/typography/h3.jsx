import styled from 'styled-components'

const ThirdHeading = styled.h3`
  color: #000;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const H3 = ({children}) => {
  return <ThirdHeading>{children}</ThirdHeading>
}
