import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
  body {
    background: #DDD;
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;