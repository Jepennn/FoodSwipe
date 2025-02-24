import { IoLogOut, IoHeart } from "react-icons/io5";
import { MdSwipeRight } from "react-icons/md";
import { FaBrain } from "react-icons/fa";

import styles from "./sidebarView.module.css";

export function SidebarView({
  sidebar,
  onClickLinkedRecipe,
  onClickProfile,
  onClickFoodSwipeHeader,
  onClickLogout,
  onClickAi,
}) {
  if (!sidebar) {
    return null;
  }

  if (sidebar) {
    return (
      <div className={styles.sidebar_container}>
        <h1 onClick={onClickFoodSwipeHeader}>FoodSwipe</h1>
        <div className={styles.path_contianer} onClick={onClickProfile}>
          <MdSwipeRight size={22} />
          <span>inspiration</span>
        </div>
        <div className={styles.path_contianer} onClick={onClickLinkedRecipe}>
          <IoHeart size={22} />
          <span>Liked recipes</span>
        </div>
        <div className={styles.path_contianer} onClick={onClickAi}>
          <FaBrain size={22} />
          <span>RecipeAI</span>
        </div>
        <div className={styles.path_contianer} onClick={onClickLogout}>
          <IoLogOut size={25} />
          <span>Log out</span>
        </div>
      </div>
    );
  }
}
