import styled from 'styled-components'

const ThirdHeading = styled.h3`
  color: #505b4d;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`

export const H3 = ({children}) => {
  return <ThirdHeading>{children}</ThirdHeading>
}
