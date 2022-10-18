import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import palette from "./palette";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans R', sans-serif;
        color: ${palette.gray[9]};
    };
    a{
        text-decoration:none;
        color: ${palette.gray[9]};
    }

`;
export default GlobalStyle;
