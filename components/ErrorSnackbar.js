import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import shallow from "zustand/shallow";

import useErrorHandler from "../hooks/useErrorHandler";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ErrorSnackbar() {
  const [errorMessage, actions] = useErrorHandler(
    state => [state.errorMessage, state.actions],
    shallow
  );

  return (
    <Snackbar
      open={!!errorMessage}
      autoHideDuration={10000}
      onClose={actions.clearError}
    >
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={actions.clearError}>
            Close
          </Button>
        }
      >
        {errorMessage}
      </Alert>
    </Snackbar>
  );
}
