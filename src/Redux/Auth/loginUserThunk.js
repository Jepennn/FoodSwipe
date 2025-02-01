import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseConfig.js";

export const loginUserThunk = createAsyncThunk(
  "auth/loginUserThunk",
  async (userData, thunkAPI) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data.user;
  }
);
