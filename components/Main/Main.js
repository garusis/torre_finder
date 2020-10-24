import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SearchPane from "./SearchPane";
import styles from "./Main.module.scss";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({});

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid className={styles.mainGrid} container direction="column">
          <Grid container direction="row" justify="center" spacing={2}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Grid className={styles.header} item xs={12} sm={6}>
                <Typography variant="h2">Find Similar</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Do you have an amazing coworker/employee in your company and
                  want to find similar talents?
                </Typography>
                <Typography variant="body1">
                  Just type his name or username and click Find Similar to check
                  users with similar Skills or Find Co-workers to check based on
                  their professional experience.
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center" spacing={2}>
              <SearchPane />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Main;
