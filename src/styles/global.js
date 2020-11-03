import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1,h2, h3, p, a, strong,span{
    font-family: Roboto, sans-serif;
  }

  body{
    background: #fafafa;
  }
`;
