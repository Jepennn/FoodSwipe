import { IoLogOut, IoHeart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import styles from "./sidebarView.module.css";

export function SidebarView({ sidebar, onClickLinkedRecipe, onClickProfile }) {
  if (!sidebar) {
    return null;
  }

  if (sidebar) {
    return (
      <div className={styles.sidebar_container}>
        <h1>FoodSwipe</h1>
        <div className={styles.path_contianer} onClick={onClickProfile}>
          <FaUser size={22} />
          <span>Profile</span>
        </div>
        <div className={styles.path_contianer} onClick={onClickLinkedRecipe}>
          <IoHeart size={22} />
          <span>Liked receipes</span>
        </div>
        <div className={styles.path_contianer}>
          <IoLogOut size={25} />
          <span>Log out</span>
        </div>
      </div>
    );
  }
}
