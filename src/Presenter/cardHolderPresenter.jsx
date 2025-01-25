import { CardHolderView } from "../View/cardHolderView";
import { CardView } from "../View/cardView";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardFlip } from "../Redux/Modal/modalSlice.js";
import { useEffect } from "react";
import { fetchRecipeCollection } from "../Redux/ReceipCollection/recipeThunk.js";

export function CardHolderPresenter() {
  const dispatch = useDispatch();
  const isCardFlipped = useSelector((state) => state.modal.isCardFlipped);
  const currentRecipe = useSelector((state) => state.recipe.selectedRecipe);

  useEffect(() => {
    dispatch(fetchRecipeCollection());
  }, [dispatch]);

  const handleFlip = () => {
    dispatch(toggleCardFlip());
  };

  return (
    <CardHolderView
      onHandleFlip={handleFlip}
      isCardFlipped={isCardFlipped}
      currentRecipe={currentRecipe}
    >
      <CardView
        foodImage={currentRecipe.thumbnail_url}
        foodTitle={currentRecipe.name}
      />
    </CardHolderView>
  );
}
