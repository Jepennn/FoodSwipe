import { LikedRecipeView } from "../View/likedRecipeView.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getLikedRecipesDb } from "../supabaseDb.js";
import { setLikedrecipe } from "../Redux/ReceipCollection/recipeSlice.js";

export function LikedRecipePresenter() {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  //Fetches the users liked recipes from the database proccess them to provide them to the view
  async function handleLoadInLikedRecipes() {
    try {
      const recipeData = await getLikedRecipesDb(userId);

      const processedRecipes = recipeData.map((recipe) => {
        const parsedRecipe = JSON.parse(recipe.recipe_id);

        return {
          id: parsedRecipe.id,
          name: parsedRecipe.name,
          thumbnail: parsedRecipe.thumbnail_url,
          instructions: parsedRecipe.instructions.map(
            (instruction) => instruction.display_text
          ),
          description: parsedRecipe.description,
          video: parsedRecipe.video_url,
        };
      });

      dispatch(setLikedrecipe(processedRecipes));
    } catch (error) {
      console.log("Error loading liked recipes:", error);
    }
  }

  return (
    <>
      <LikedRecipeView onLoadInLikedRecipe={handleLoadInLikedRecipes} />
    </>
  );
}
