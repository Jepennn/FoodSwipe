import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice.js";
import modalReduer from "./Modal/modalSlice.js";
import recipeReducer from "./ReceipCollection/recipeSlice.js";

import {
  saveToSessionStorage,
  getSessionState,
} from "../Utilities/localstorageFunctions.js";

//This solves the problem of the state being lost when the page is refreshed
const sessionState = getSessionState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReduer,
    recipe: recipeReducer,
  },
  preloadedState: sessionState, //The user's state is loaded from the session storage if exists
});

//This is a listener that listens to the store and saves the state to the session storage
//every time the state changes
store.subscribe(() => {
  const storeState = store.getState();

  //State to be saved in the session storage
  const stateToBeSaved = {
    auth: storeState.auth,
    modal: storeState.modal,
    recipe: storeState.recipe,
  };

  saveToSessionStorage(stateToBeSaved);
});
