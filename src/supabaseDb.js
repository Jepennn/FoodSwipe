//Functions that handles the interaction with the database. This functions is used in thunk functions in the redux store

import { supabase } from "./supabaseConfig";

//Insertion of recipe in to recipe collection
async function insertRecipesDb(userId, recipeId) {
  const { error, data } = await supabase
    .from("recipe_collection")
    .insert({ user_id: userId, recipe_id: recipeId });

  if (error) {
    console.log("Error inserting recipe", error);
    throw error;
  }

  return data;
}

// //Deletion of recipe from recipe collection
// async function deleteRecipe(userId, recipeId) {
//     const { error }= await supabase.from("recipe_collection").delete().
// }

// //Retrieval of all recipes from recipe collection
// async function getAllRecipes(userId) {}

// //Retrieval of all liked recipes from recipe collection

async function getLikedRecipesDb(userId) {
  const { data, error } = await supabase
    .from("recipe_collection")
    .select("recipe_id")
    .eq("user_id", userId);

  if (error) {
    console.log("Error fetching liked recipes", error);
    throw error;
  }

  return data;
}

export { insertRecipesDb, getLikedRecipesDb };
