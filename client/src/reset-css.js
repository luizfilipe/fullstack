import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  html {
    font-size: 62.5%; /* 10px = 1rem */
  }
  body {
    font-family: Yantramanav, sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.4;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: normal;
  }
  a {
    font-family: Roboto, sans-serif;
    font-weight: normal;
    font-size: 1.6rem;
    text-decoration: none;
  }
  input {
    font-family: Roboto,sans-serif;
    font-size: 1.6rem;
  }
  label {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  button {
    font-family: Yantramanav, sans-serif;
    font-size: 1.6rem;
  }
`
