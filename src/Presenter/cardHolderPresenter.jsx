import { CardHolderView } from "../View/cardHolderView";
import { CardView } from "../View/cardView";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardFlip } from "../Redux/Modal/modalSlice.js";
import { useEffect } from "react";
import { fetchRecipeCollection } from "../Redux/ReceipCollection/recipeThunk.js";
import { setSelectedRecipe } from "../Redux/ReceipCollection/recipeSlice.js";

import { insertRecipesDb } from "../supabaseDb.js";

export function CardHolderPresenter() {
  const dispatch = useDispatch();
  const isCardFlipped = useSelector((state) => state.modal.isCardFlipped);
  const currentRecipe = useSelector((state) => state.recipe.selectedRecipe);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    //Fetch the recipe collection from the API
    dispatch(fetchRecipeCollection());
    console.log("This is the data about current recipe", currentRecipe);
  }, [dispatch]);

  //Handle clicked like button
  function handleLikedRecipe(e) {
    e.stopPropagation();
    dispatch(setSelectedRecipe());
    insertRecipesDb(
      userId,
      JSON.stringify({
        id: currentRecipe.id,
        name: currentRecipe.name,
        thumbnail_url: currentRecipe.thumbnail_url,
        instructions: currentRecipe.instructions,
        video_url: currentRecipe.original_video_url,
        description: currentRecipe.description,
        nutrional_info: currentRecipe.nutrition,
      })
    );
  }

  function handleDislikedRecipe(e) {
    e.stopPropagation();
    dispatch(setSelectedRecipe());
  }

  //Handle the flip of the card
  function handleFlip() {
    dispatch(toggleCardFlip());
  }

  return (
    <CardHolderView
      onClickFlipCard={handleFlip}
      isCardFlipped={isCardFlipped}
      currentRecipe={currentRecipe}
      onClickLikeRecipe={handleLikedRecipe}
      onClickDislikedRecipe={handleDislikedRecipe}
    >
      <CardView
        foodImage={currentRecipe.thumbnail_url}
        foodTitle={currentRecipe.name}
      />
    </CardHolderView>
  );
}
