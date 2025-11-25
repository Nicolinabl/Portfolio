import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  width: 192px;
  height: 48px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 16;
  background: #FD6F00;
  border: none;

  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  font-size: 18px;
  Font-weight: 500;
  color: #FFFFFF

`

export const FilledButton = (props) => {
  return (
  <a href={props.href} target="_blank"><Button>{props.label}</Button></a>
  )
}