import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Person from "@material-ui/icons/Person";

import styles from "./SearchPane.module.scss";

import useNavigationStore, {
  NAVIGATION_IDS,
} from "../../../hooks/useNavigationStore";
import SearchBox from "./SearchBox";

function SearchPane() {
  const navigationState = useNavigationStore(state => state.navigationState);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Grid
      className={styles.searchPane}
      item
      xs={12}
      sm={6}
      lg={navigationState === NAVIGATION_IDS.INITIAL ? 6 : 3}
    >
      <SearchBox onSubmit={handleSubmit} />
    </Grid>
  );
}

export default SearchPane;
