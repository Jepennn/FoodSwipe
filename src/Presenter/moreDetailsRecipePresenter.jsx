import { MoreDetailsRecipeView } from "../View/moreDetailsRecipeView";
import { Modal } from "../Utilities/modal";
import { useSelector } from "react-redux";

export function MoreDetailsRecipePresenter() {
  const recipeData = useSelector((state) => state.recipe.likedRecipeMoreInfo);

  return (
    <Modal>
      <MoreDetailsRecipeView data={recipeData} />
    </Modal>
  );
}
