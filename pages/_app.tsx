import { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/NavBar";
import "../styles/globals.css";

const App = ( { Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;