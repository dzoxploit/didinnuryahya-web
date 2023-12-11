import React from "react";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "react-toastify/dist/ReactToastify.css";
import logoIcon from "./assets/WhatsApp Image 2022-12-03 at 11.13.06 PM-fotor-bg-remover-2023040841623.png";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Didin Nur Yahya" />
        <meta
          itemProp="description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />
        <meta itemProp="image" content={logoIcon} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://didinnuryahya.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DNY Aka Didin Nur Yahya" />
        <meta
          property="og:description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />
        <meta
          property="og:image"
          content={"https://didinnuryahya.vercel.app" + logoIcon}
        />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Meta Tags */}
        <meta
          name="twitter:card"
          content={"https://didinnuryahya.vercel.app" + logoIcon}
        />
        <meta name="twitter:title" content="Didin Nur Yahya" />
        <meta
          name="twitter:description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />
        <meta name="twitter:image" content={logoIcon} />
        {/* Facebook App ID */}
        <meta property="fb:app_id" content="1166728617405476" />
      </Helmet>

      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
