import { CardHolderView } from "../View/cardHolderView";
import { CardView } from "../View/cardView";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardFlip } from "../Redux/Modal/modalSlice.js";
import { useEffect } from "react";
import { fetchRecipeCollection } from "../Redux/ReceipCollection/recipeThunk.js";
import { setSelectedRecipe } from "../Redux/ReceipCollection/recipeSlice.js";

export function CardHolderPresenter() {
  const dispatch = useDispatch();
  const isCardFlipped = useSelector((state) => state.modal.isCardFlipped);
  const currentRecipe = useSelector((state) => state.recipe.selectedRecipe);

  useEffect(() => {
    dispatch(fetchRecipeCollection());
  }, [dispatch]);

  //Handle clicked like button
  function handleLikedRecipe(e) {
    e.stopPropagation(); //Stops the event from bubbling so the card does not flip
    dispatch(setSelectedRecipe());
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
