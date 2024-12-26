import styles from "./cardHolder.module.css";
import { FiThumbsDown, FiHeart } from "react-icons/fi";

export function CardHolderView({ children }) {
  return (
    <div className={styles.cardHolder_container}>
      <div className={styles.card}>
        <div className={styles.card_content}>
          This is the children{children}
        </div>
        <div className={styles.button_container}>
          <div className={styles.div_button}>
            <FiThumbsDown size={55} />
          </div>
          <div className={`${styles.div_button} ${styles.div_button_like}`}>
            <FiHeart size={55} />
          </div>
        </div>
      </div>
    </div>
  );
}
