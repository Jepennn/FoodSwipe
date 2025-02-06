import styles from "./likedRecipeView.module.css";
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
    <div className={styles.liked_recipe_container}>
      <div className={styles.liked_recipe_header}>
        <h1>Recipe collection</h1>
      </div>
      <div className={styles.recipe_wraper}>
        {likedRecipes.map((recipe) => {
          return <SmallCardMoreInfo key={recipe.id} data={recipe} />;
        })}
      </div>
    </div>
  );
}
