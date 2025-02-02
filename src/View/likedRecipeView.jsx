import styles from "./likedRecipeView.module.css";
// import { useSelector } from "react-redux";

export function LikedRecipeView() {
  //   const likedRecipes = useSelector((state) => state.likedRecipes);

  return (
    <div className={styles.liked_recipe_container}>
      <div className={styles.liked_recipe_header}>
        <h1>Recipe collection</h1>
      </div>
      <div className={styles.recipe_wraper}>
        <div className={styles.liked_recipe_card}></div>
        <div className={styles.liked_recipe_card}></div>
        <div className={styles.liked_recipe_card}></div>
        <div className={styles.liked_recipe_card}></div>
        <div className={styles.liked_recipe_card}></div>
        <div className={styles.liked_recipe_card}></div>
      </div>
    </div>
  );
}
