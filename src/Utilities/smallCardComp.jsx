import styles from "./smallCardComp.module.css";

export function SmallCardComp() {
  return (
    <div className={styles.small_card_container}>
      <img src="/smallFoodImage.jpg" alt="foood-image" />
    </div>
  );
}
