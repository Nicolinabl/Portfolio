import styled from 'styled-components'

const Heading = styled.h1`
  color: #505b4d;
  font-family: Urbanist;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 80px;
  }
`

export const H1 = ({children}) => {
  return <Heading>{children}</Heading>
}
