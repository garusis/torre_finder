import React, { Fragment } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <Fragment>
      <Head></Head>
      {children}
    </Fragment>
  );
}

export default Layout;
