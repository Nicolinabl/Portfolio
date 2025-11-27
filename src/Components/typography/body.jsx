import styled from 'styled-components'

const BodyText = styled.p`
  font-family: Poppins;
  font-size: ${(props) => props.size || '18px'};
  color: #000;
  font-weight: 400;
  margin: 0;
`

export const Body = ({ children, size }) => {
  return <BodyText size={size}>{children}</BodyText>
}