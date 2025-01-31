import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseConfig.js";

export const logoutUserThunk = createAsyncThunk(
  "auth/logoutUserThunk",
  async (args, thunkAPI) => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return null;
  }
);
