import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseConfig.js";

export const createUserThunk = createAsyncThunk(
  "auth/createUserThunk",
  async (userData, thunkAPI) => {
    try {
      const user = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
      });

      const id = user.id;
      const email = user.email;

      return { id, email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
