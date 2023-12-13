import React from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "react-toastify/dist/ReactToastify.css";
import logoIcon from "./assets/WhatsApp Image 2022-12-03 at 11.13.06 PM-fotor-bg-remover-2023040841623.png";

function App() {
  return (
    <>
      <HeadProvider>
        {/* Facebook Meta Tags */}
        <Meta property="og:title" content="DNY Aka Didin Nur Yahya" />
        <Meta
          property="og:description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />
        <Meta property="og:url" content="https://didinnuryahya.vercel.app" />
        <meta property="og:type" content="website" />

        <Meta
          property="og:image"
          content={"https://didinnuryahya.vercel.app" + logoIcon}
        />
        <Meta property="og:image:type" content="image/png" />

        {/* Google / Search Engine Tags */}
        <Meta itemProp="name" content="Didin Nur Yahya" />
        <Meta
          itemProp="description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />
        <Meta
          itemProp="image"
          content={"https://didinnuryahya.vercel.app" + logoIcon}
        />

        {/* Twitter Meta Tags */}
        <Meta
          name="twitter:card"
          content={"https://didinnuryahya.vercel.app" + logoIcon}
        />
        <Meta name="twitter:title" content="Didin Nur Yahya" />
        <Meta
          name="twitter:description"
          content="Didin Nur Yahya, Software Engineer and Test Engineer"
        />
        <Meta
          name="twitter:image"
          content={"https://didinnuryahya.vercel.app" + logoIcon}
        />
        {/* Facebook App ID */}
        <Meta property="fb:app_id" content="1166728617405476" />
      </HeadProvider>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
