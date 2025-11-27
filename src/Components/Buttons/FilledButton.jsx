import styled from 'styled-components'

const Button = styled.a`
  display: flex;
  width: 192px;
  height: 48px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 16px;
  background: #505b4d;
  border: none;
  text-decoration: none;

  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const FilledButton = (props) => {
  return (
  <Button href={props.href} target="_blank">{props.label}</Button>
  )
}

