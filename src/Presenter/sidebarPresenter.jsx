import { SidebarView } from "../View/sidebarView";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../Redux/Modal/modalSlice.js";
import { useNavigate } from "react-router-dom";

export function SidebarPresenter() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.modal.isSidebarOpen);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);

      if (window.innerWidth < 768 && sidebar) {
        dispatch(toggleSidebar());
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize, sidebar, dispatch]);

  return (
    <SidebarView
      windowSize={windowSize}
      sidebar={sidebar}
      onClickFoodSwipeHeader={() => navigate("/recipeSwipe")}
      onToggleSidebar={handleToggleSidebar}
      onClickLinkedRecipe={() => navigate("/liked-recipes")}
      onClickProfile={() => navigate("/profile")}
    />
  );

  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }
}
