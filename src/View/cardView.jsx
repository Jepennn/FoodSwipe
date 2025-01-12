import styles from "./cardView.module.css";

export function CardView() {
  return (
    <>
      <img
        className={styles.dish_image}
        src="/vegan3.jpg"
        alt="image of food"
      />
      <h3 className={styles.dish_title}>Vegan stew with beetroot</h3>
    </>
  );
}
