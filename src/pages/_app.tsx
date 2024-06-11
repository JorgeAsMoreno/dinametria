import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Navbar from "../../frontend/Components/Navbar/Navbar";
import Footer from "../../frontend/Components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}
