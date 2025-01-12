// src/styles/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
    background: "#f5f5f5",
    text: "#333",
  },
};

