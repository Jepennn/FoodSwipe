import { useEffect } from "react";
import { SmallCardMoreInfo } from "../Utilities/smallCardMoreInfo.jsx";
import { useSelector } from "react-redux";
// import { SmallCardComp } from "../Utilities/smallCardComp.jsx";

export function LikedRecipeView({ onLoadInLikedRecipe }) {
  const likedRecipes = useSelector((state) => state.recipe.likedRecipes);

  //Load in liked recipes when component is mounted
  useEffect(() => {
    onLoadInLikedRecipe();
  }, [onLoadInLikedRecipe]);

  return (
    <div className="flex flex-col flex-grow pl-10 pt-6">
      <div className="flex items-center p-6 gap-4">
        <h1 className="text-[3.5rem]">Recipe collection</h1>
      </div>
      <div className="flex flex-wrap flex-grow overflow-y-auto pt-4 pl-8 justify-start gap-6">
        {likedRecipes.map((recipe) => {
          return <SmallCardMoreInfo key={recipe.id} data={recipe} />;
        })}
      </div>
    </div>
  );
}
