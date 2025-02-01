import styles from "./cardView.module.css";
import { useSelector } from "react-redux";

export function CardView({ foodImage, foodTitle }) {
  const recipeLoading = useSelector((state) => state.recipe.loading);

  return recipeLoading ? (
    <img src="/spinner.svg"></img>
  ) : (
    <>
      <img className={styles.dish_image} src={foodImage} alt="image of food" />
      <h1 className={styles.dish_title}>{foodTitle}</h1>
    </>
  );
}
