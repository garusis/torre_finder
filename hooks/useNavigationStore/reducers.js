import { NAVIGATION_IDS, initialState } from "./constants";

export function showSearchAndDetailReducer(set) {
  return function () {
    set(state => ({
      ...state,
      navigationState: NAVIGATION_IDS.SEARCH_AND_DETAIL,
    }));
  };
}

export function resetStoreReducer(set) {
  return function () {
    set(state => ({ ...state, ...initialState }));
  };
}
