import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;

    --bg-main: #212121;
    --text-main: #ffffff;
    --card-bg: rgba(255,255,255,0.03);
    --card-border: rgba(255,255,255,0.06);

    --pill-bg: rgba(35, 206, 107, 0.08);
    --pill-border: rgba(35, 206, 107, 0.25);
    --pill-text: #ffffff;
    --pill-glow: rgba(35, 206, 107, 0.5);

    --card-bg: linear-gradient(180deg, rgba(20,20,20,0.95), rgba(12,12,12,0.98));
    --card-border: rgba(35,206,107,0.3);
    --card-shadow: 0 10px 40px rgba(0,0,0,0.5);
    --timeline-line: rgba(35,206,107,0.4);
    --timeline-icon-bg: #23ce6b;
    --timeline-icon-text: #000;


    scroll-padding-top: 10rem;


  }

  /* 🌙 DARK (default) */
  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: background .4s ease, color .4s ease;
  }

  /* ☀️ LIGHT MODE */
  html.light{
    --bg-main: #f5f5f5;
    --text-main: #212121;
    --card-bg: rgba(0,0,0,0.04);
    --card-border: rgba(0,0,0,0.08);
    --pill-bg: rgba(0, 0, 0, 0.05);
    --pill-border: rgba(0, 0, 0, 0.15);
    --pill-text: #212121;
    --pill-glow: rgba(0, 0, 0, 0.25);

    --card-bg: linear-gradient(180deg, #ffffff, #f3f3f3);
    --card-border: rgba(0,0,0,0.1);
    --card-shadow: 0 8px 30px rgba(0,0,0,0.08);
    --timeline-line: rgba(0,0,0,0.15);
    --timeline-icon-bg: #23ce6b;
    --timeline-icon-text: #000;
  }

  html.light header.header-fixed{
    background-color: #f5f5f550;
  }

  html.light header.header-fixed a{
    color: #212121;
  }

  html.light .menu,
  html.light .menu:before,
  html.light .menu:after{
    background-color: #212121;
  }

  html.light footer.footer{
    background-color: rgba(0,0,0,0.1);
    color: #212121;
  }

  html.light form input,
  html.light form textarea{
    border: solid 1px #212121;
    color: #212121;
  }

  html.light form input::placeholder,
  html.light form textarea::placeholder{
    color: #212121;
  }

  /* RESET */
  ul, li { list-style: none; margin: 0; padding: 0; }
  *{ margin: 0; padding: 0; box-sizing: border-box; }

  html{ font-size: 62.5%; }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
  }

  a{ text-decoration: none; }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: white;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{ filter: brightness(0.8); }
  }

  .logo{
    font-size: 3rem;
    color: var(--text-main);
  }

`;
