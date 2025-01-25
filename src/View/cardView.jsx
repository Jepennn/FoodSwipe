import styles from "./cardView.module.css";

export function CardView({ foodImage, foodTitle }) {
  return (
    <>
      <img className={styles.dish_image} src={foodImage} alt="image of food" />
      <h1 className={styles.dish_title}>{foodTitle}</h1>
    </>
  );
}
