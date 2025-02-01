import { createSlice } from "@reduxjs/toolkit";

//Import the fetchRecipeCollection thunk
import { fetchRecipeCollection } from "./recipeThunk.js";

const initialState = {
  recipeCollection: [],
  selectedRecipe: {},
  indexOfRecipe: null,
  likedRecipes: [],
  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSelectedRecipe: (state) => {
      state.indexOfRecipe++;
      state.selectedRecipe = state.recipeCollection[state.indexOfRecipe];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeCollection.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipeCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeCollection = action.payload;
      state.indexOfRecipe = Math.floor(Math.random() * 39);
      state.selectedRecipe = action.payload[state.indexOfRecipe]; //randomly select a recipe
    });
    builder.addCase(fetchRecipeCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { setRecipeCollection, setSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
