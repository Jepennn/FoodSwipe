import { createSlice } from "@reduxjs/toolkit";

//Importing Thunks for user authentication
import { createUserThunk } from "./createUserThunk";
import { loginUserThunk } from "./loginUserThunk";
import { logoutUserThunk } from "./logoutUserThunk";

const initialState = {
  isAuth: false,
  userId: null,
  first_name: null,
  last_name: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.userId = action.payload.id;
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      state.isAuth = false;
      state.userId = null;
      state.email = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Create User thunk reducers
      .addCase(createUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserThunk.fulfilled, (state, action) => {
        state.isAuth = true;
        state.userId = action.payload.id;
        state.email = action.payload.email;
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        state.isAuth = false;
        state.userId = null;
        state.email = null;
        state.error = action.payload;
      })
      //Login User thunk reducers
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.userId = action.payload.id;
        state.email = action.payload.email;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isAuth = false;
        state.userId = null;
        state.email = null;
        state.error = action.payload;
      })
  },
});

export default authSlice.reducer;
export const { setUser, resetUser } = authSlice.actions;

