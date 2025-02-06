import { useNavigate } from "react-router-dom";
import styles from "./modal.module.css";

export function Modal({ children }) {
  const navigate = useNavigate();

  // Function to stop the event from bubbling up to the overlay
  function stopBubblingEvent(e) {
    e.stopPropagation();
  }

  // Function to close the modal when clicking the overlay. We switch URL to /todos
  function onCloseModal() {
    navigate("/liked-recipes");
  }

  return (
    <div onClick={onCloseModal} className={styles.overlay}>
      <div className={styles.modal} onClick={stopBubblingEvent}>
        {children}
      </div>
    </div>
  );
}
