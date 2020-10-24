import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import ErrorSnackbar from "../components/ErrorSnackbar";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Torre Related Finder</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="This small app will help you to find people based on the Skills and Experience of another Torre user. You can use it to find similar talents to people that are working in your company and that you may be interested to join your team."
        />
        <meta name="author" content="Marcos Javier Alvarez" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <ErrorSnackbar />
    </React.Fragment>
  );
}

export default MyApp;
