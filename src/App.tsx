import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
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
        <meta property="fb:app_id" content="319630456776049" />
        <meta property="og:title" content="Didin Nur Yahya" />
        <meta
          property="og:description"
          content="Didin Nur Yahya, A developer and a Freelancer. I create interactive & responsive Websites, Mobile Apps, and Test automation projects. Experience with E-Commerce site development."
        />
        <meta
          property="og:image"
          content="https://img.cumicumi.com/uploads/public/2023-12-05/202/312/051/th_350x200_202312051701755900656ebbfcc7715.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="350" />
        <meta property="og:image:height" content="200" />
        <meta property="og:type" content="website" />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="http://github.com/dzoxploit" />
        <meta property="og:site_name" content="didinnuryahya.vercel.app" />
        <meta property="article:published_time" content="date_time" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
