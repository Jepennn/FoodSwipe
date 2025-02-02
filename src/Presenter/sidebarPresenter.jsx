import { SidebarView } from "../View/sidebarView";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../Redux/Modal/modalSlice.js";
import { useNavigate } from "react-router-dom";
import { logoutUserThunk } from "../Redux/Auth/logoutUserThunk.js";

export function SidebarPresenter() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.modal.isSidebarOpen);
  const navigate = useNavigate();

  //Handles window resize and closes sidebar if window size is less than 768px
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

  function onHandleLogout() {
    dispatch(logoutUserThunk());
    navigate("/");
  }

  return (
    <SidebarView
      sidebar={sidebar}
      onClickFoodSwipeHeader={() => navigate("/recipeSwipe")}
      onToggleSidebar={() => dispatch(toggleSidebar())}
      onClickLinkedRecipe={() => navigate("/liked-recipes")}
      onClickProfile={() => navigate("/recipeSwipe")}
      onClickLogout={onHandleLogout}
    />
  );
}
