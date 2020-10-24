import React, { useState } from "react";
import cn from "classnames";
import Grid from "@material-ui/core/Grid";

import styles from "./SearchPane.module.scss";

import useNavigationStore, {
  NAVIGATION_IDS,
} from "../../../hooks/useNavigationStore";
import SearchBox from "./SearchBox";
import useFindUsers from "../../../hooks/userHooks/useFindUsers";
import Results from "./Results";

function SearchPane() {
  const [userQuery, setQuery] = useState();

  const navigationState = useNavigationStore(state => state.navigationState);
  const { isLoading, users, meta } = useFindUsers(userQuery);

  return (
    <Grid
      className={styles.searchPane}
      item
      xs={12}
      sm={6}
      lg={navigationState === NAVIGATION_IDS.INITIAL ? 6 : 3}
    >
      <Grid container direction="column" justify="center" spacing={5}>
        <Grid item xs={12}>
          <SearchBox onSubmit={setQuery} />
        </Grid>
        <Grid item xs={12}>
          <Grid
            className={styles.results}
            container
            direction="column"
            justify="center"
            spacing={2}
          >
            <Results isLoading={isLoading} users={users} meta={meta} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchPane;
