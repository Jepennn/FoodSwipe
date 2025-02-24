import { createAsyncThunk } from "@reduxjs/toolkit";
import { VeganApiRecipes } from "../../veganAPI.js";

export const fetchRecipeCollection = createAsyncThunk(
  "recipe/fetchRecipeCollection",
  async () => {
    try {
      // const response = await VeganApiRecipes();
      return response.results;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);
