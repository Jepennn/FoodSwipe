import { IoLogOut, IoHeart, IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import styles from "./sidebarView.module.css";
import { useState, useEffect } from "react";

export function SidebarView() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  //If the window size is less than 768px, the sidebar will be displayed as hamburger menu
  if (windowSize < 768) {
    return (
      <div className={styles.sidebar}>
        <h1>FoodSwipe</h1>
        <IoMenu />
      </div>
    );
  }

  return (
    <div className={styles.sidebar}>
      <h1>FoodSwipe</h1>
      <div className={styles.path_contianer}>
        <FaUser size={22} />
        <span>Profile</span>
      </div>
      <div className={styles.path_contianer}>
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
