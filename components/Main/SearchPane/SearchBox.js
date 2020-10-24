import React, { useState } from "react";
import PropTypes from "prop-types";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Person from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";

import styles from "./SearchPane.module.scss";

function SearchBox({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <OutlinedInput
        className={styles.searchBox}
        placeholder="Search by Name or Username"
        inputProps={{ "aria-label": "search by name or username" }}
        startAdornment={<Person />}
        endAdornment={
          <Button
            variant="contained"
            disableElevation
            className={styles.searchButton}
            color="primary"
            type="submit"
          >
            Search
          </Button>
        }
        onChange={handleChange}
        value={search}
      />
    </form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
