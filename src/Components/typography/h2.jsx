import styled from 'styled-components'

const SecondHeading = styled.h2`
  color: #505b4d;
  font-family: Urbanist;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 60px;
  }
`

export const H2 = ({children}) => {
  return <SecondHeading>{children}</SecondHeading>
}
