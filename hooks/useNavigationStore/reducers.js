import { NAVIGATION_IDS, initialState } from "./constants";

export function showSearchAndDetailReducer(set) {
  return function () {
    set({
      navigationState: NAVIGATION_IDS.SEARCH_AND_DETAIL,
    });
  };
}

export function resetStoreReducer(set) {
  return function () {
    set({ ...initialState });
  };
}
