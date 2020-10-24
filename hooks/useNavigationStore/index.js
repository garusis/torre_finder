import create from "zustand";
import { devtools } from "zustand/middleware";
export { NAVIGATION_IDS } from "./constants";
import { initialState } from "./constants";
import { resetStoreReducer, showSearchAndDetailReducer } from "./reducers";

export default create(
  devtools(
    set => ({
      ...initialState,
      actions: {
        showSearchAndDetail: showSearchAndDetailReducer(set),
        resetStore: resetStoreReducer(set),
      },
    }),
    "NavigationStore"
  )
);
