import { createGlobalStyle } from "styled-components" 

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    padding: 0;
    background: white;
    max-width: 1440px;
  }
`
export default GlobalStyle