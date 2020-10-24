import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SearchPane from "./SearchPane";
import styles from "./Main.module.scss";

const theme = createMuiTheme({});

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid
          className={styles.mainGrid}
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          <SearchPane />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Main;
