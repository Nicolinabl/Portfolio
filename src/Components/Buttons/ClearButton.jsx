import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  width: 192px;
  height: 48px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #FD6F00;
  background: #FFF;

  font-family: Poppins;
  color: #FD6F00;
  font-size: 18px;
  Font-weight: 500;

`

export const ClearButton = (props) => {
  return (
  <a href={props.href} target="_blank"><Button>{props.label}</Button></a>
  )
}
