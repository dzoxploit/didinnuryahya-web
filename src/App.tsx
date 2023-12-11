import React from "react";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "react-toastify/dist/ReactToastify.css";
import logoIcon from "./assets/logodny.jpg";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Didin Nur Yahya</title>
        <meta
          name="description"
          content="Didin Nur Yahya, A developer and a Freelancer. I create interactive & responsive Websites, Mobile Apps, and Test automation projects. Experience with E-Commerce site development."
        />
        <meta
          name="keywords"
          content="Didin Nur Yahya, Didin, Didin nur yahya LKS"
        />

        {/* Open Graph tags */}
        <meta property="og:title" content="Didin Nur Yahya" />
        <meta
          property="og:description"
          content="Didin Nur Yahya, A developer and a Freelancer."
        />
        <meta property="og:type" content="website" />
        <meta property="article:author" content="http://github.com/dzoxploit" />
        <meta property="og:site_name" content="didinnuryahya.vercel.app" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://didinnuryahya.vercel.app" />
        <meta property="fb:app_id" content="319630456776049" />
      </Helmet>

      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
