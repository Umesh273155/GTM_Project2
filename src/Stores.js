import userReducer from "./reduxx/authslices";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {
      userSlice: userReducer
    },
  });
