import { createSlice } from "@reduxjs/toolkit";

//Import the fetchRecipeCollection thunk
import { fetchRecipeCollection } from "./recipeThunk.js";

const initialState = {
  recipeCollection: [],
  selectedRecipe: {},

  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeCollection.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipeCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeCollection = action.payload;
      state.selectedRecipe = action.payload[Math.floor(Math.random() * 39)]; //randomly select a recipe
    });
    builder.addCase(fetchRecipeCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { setRecipeCollection, setSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
