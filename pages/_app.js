import { useEffect, useState } from "react";
import "../styles/globals.scss";
import "../styles/styles.scss";
import "../styles/custome.css";
import "tachyons";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faEnvelope, faHeart, faCoffee);

import Head from "next/head";
import useScrollPosition from "../hooks/useScrollPosition";
import { useRouter } from "next/router";
import Backdrop from "../components/Slider/backdrop";
import Slider from "../components/Slider";
import "react-modal-video/scss/modal-video.scss";
import { ToastContainer } from "react-nextjs-toast";
// import WOW from "wowjs";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

function MyApp({ Component, pageProps }) {
  const scrollPos = useScrollPosition();
  const router = useRouter();
  // console.log(router);

  const [openQuote, setopenQuote] = useState(null);

  const openDrawer = (value) => {
    // console.log(value)
    setopenQuote(value);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  // useEffect(() => {
  //   new WOW.WOW().init();
  //   document.documentElement.lang = "en-us";
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        ></link>
        <link
          rel="preload"
          href="/fonts/EuclidCircularB-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/EuclidCircularB-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/EuclidCircularB-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/EuclidCircularB-Bold.ttf"
          as="font"
          crossOrigin=""
        />

        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
      </Head>

      {router.pathname === "/_error" ? (
        <Component {...pageProps} />
      ) : (
        <>
          {/* {openQuote && } */}
          <ToastContainer position={"top"} />

          <Slider show={openQuote} openDrawer={openDrawer} />
          <div
            className={openQuote === true ? "AnimApp AnimApp--exit" : "AnimApp"}
          >
            <Header scrollPos={scrollPos} openDrawer={openDrawer} />
            {openQuote === true && <Backdrop openDrawer={openDrawer} />}
            <Component {...pageProps} />
            <Footer openDrawer={openDrawer} />
          </div>
        </>
      )}
    </>
  );
}

export default MyApp;
