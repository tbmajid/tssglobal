import * as React from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";

import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Provider, createClient } from "urql";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

//Material UI
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  //Material UI Theme

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#253ebb",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },

      //<div class="MuiGrid-root MuiGrid-item css-13i4rnv-MuiGrid-root">Read More</div>
    },

    active: {
      color: "white",
      backgroundColor: "black",
    },
    notActive: {
      color: "black",
    },
  });
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Provider value={client}>
          <ResponsiveAppBar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

//Material UI
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
