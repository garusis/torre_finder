import create from "zustand";
import { devtools } from "zustand/middleware";

export default create(
  devtools(
    set => ({
      errorMessage: null,
      actions: {
        displayError: errorMessage => set({ errorMessage }),
        clearError: () => set({ errorMessage: null }),
      },
    }),
    "ErrorHandler"
  )
);
