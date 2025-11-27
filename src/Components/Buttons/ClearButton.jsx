import styled from 'styled-components'

const Button = styled.a`
  display: flex;
  width: 192px;
  height: 48px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #505b4d;
  background: #FFF;

  font-family: Poppins;
  color: #505b4d;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const ClearButton = (props) => {
  return (
  <Button href={props.href} target="_blank">{props.label}</Button>
  )
}

// export const ClearButton = (props) => {
//   return (
//   <a href={props.href} target="_blank"><Button>{props.label}</Button></a>
//   )
// }
