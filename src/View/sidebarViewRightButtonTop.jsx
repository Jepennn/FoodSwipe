import { FiSidebar } from "react-icons/fi";
import styles from "./sidebarView.module.css";

export function SidebarViewRightButtonTop({ onToggleSidebar }) {
  return (
    <div className={styles.right_button_top}>
      <FiSidebar onClick={onToggleSidebar} size={25} />
    </div>
  );
}
