import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.backgroundColor = `hsl(${
      Math.random() * 360
    },100%,92%)`;
  }, []);

  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};

export default MyApp;
