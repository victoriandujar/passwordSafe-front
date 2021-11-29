import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
    --primary-color: #980DC8;
    --secondary-color: #1A0225;
    --background-color: #F5F5F5;
    --color-white: #fff;
    --gray-02: #626060;
    --gray-03: #B9B9B9;
    --danger: #EE5B6D;
  }
  body {
    -webkit-font-smoothing: antialised;
    background: var(--background-color);
  }
  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    cursor: pointer;
  }
  p, a, span, label {
    font-weight: 500;
    color: "#6D6D6D";
  }
`;