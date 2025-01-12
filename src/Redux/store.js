import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice.js";
import modalReduer from "./Modal/modalSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReduer,
  },
});
