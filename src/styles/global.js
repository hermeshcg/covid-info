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

  h1{
    font-size: 22px;
  }

  strong{
    font-size: 16px;
  }

  span{
    font-size: 16px;
  }

  body{
    background: #fafafa;
  }
`;
