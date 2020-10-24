import React, { useState } from "react";
import cn from "classnames";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Person from "@material-ui/icons/Person";

import styles from "./SearchPane.module.scss";

import useNavigationStore, {
  NAVIGATION_IDS,
} from "../../../hooks/useNavigationStore";
import SearchBox from "./SearchBox";
import useFindUsers from "../../../hooks/userHooks/useFindUser";

function SearchPane() {
  const [userQuery, setQuery] = useState();

  const navigationState = useNavigationStore(state => state.navigationState);
  const { isLoading, users } = useFindUsers(userQuery);

  return (
    <Grid
      className={cn(styles.searchPane, { displayResults: userQuery })}
      item
      xs={12}
      sm={6}
      lg={navigationState === NAVIGATION_IDS.INITIAL ? 6 : 3}
    >
      <SearchBox onSubmit={setQuery} />
    </Grid>
  );
}

export default SearchPane;
