import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
  }

  input, button, textarea {
    font-family: inherit;
    font-size: inherit;
    width: 100%;

    &:focus {
      outline: none;
      box-shadow: 0 0 4px 1px deeppink;
    }
  }

  input, textarea {
    border: 2px solid #ddd;
    padding: 4px;
  }

  button {
    border-radius: 4px;
    background: white;
    border: 1px solid #555;
  }
`