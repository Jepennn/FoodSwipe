import { createSlice } from "@reduxjs/toolkit";

//Import the fetchRecipeCollection thunk
import { fetchRecipeCollection } from "./recipeThunk.js";

//Insert database thunk
// import { insertDbThunk } from "./insertDbThunk.js";

const initialState = {
  recipeCollection: [],
  selectedRecipe: {},
  indexOfRecipe: null,
  likedRecipes: [],
  likedRecipeMoreInfo: {},
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
    setLikedrecipe: (state, action) => {
      state.likedRecipes = action.payload;
    },
    addRecipeToLikedrecipe: (state, action) => {
      state.likedRecipes.push(action.payload);
    },
    likedRecipeMoreInfo: (state, action) => {
      state.likedRecipeMoreInfo = action.payload;
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
    //Add the case for the insertDbThunk
  },
});

export const {
  setRecipeCollection,
  setSelectedRecipe,
  setLikedrecipe,
  addRecipeToLikedrecipe,
  likedRecipeMoreInfo,
} = recipeSlice.actions;
export default recipeSlice.reducer;
