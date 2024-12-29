import { FiThumbsDown, FiHeart } from "react-icons/fi";
import styles from "./cardHolder.module.css";

export function CardHolderView({ children, onHandleFlip, isCardFlipped }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.cardHolder_container}>
        <div
          className={`${styles.card} ${isCardFlipped ? styles.is_flipped : ""}`}
          onClick={onHandleFlip}
        >
          <div className={styles.card_front}>
            {/* Image */}
            <div className={styles.card_content}>{children}</div>

            {/* Buttons */}
            <div className={styles.button_container}>
              <div className={styles.div_button}>
                <FiThumbsDown size={55} />
              </div>
              <div className={`${styles.div_button} ${styles.div_button_like}`}>
                <FiHeart size={55} />
              </div>
            </div>
          </div>
          <div className={styles.card_back}>
            <h1>recipe heading</h1>
            <p>description</p>
            <p>video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
