import { SidebarViewRightButtonTop } from "../View/sidebarViewRightButtonTop";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../Redux/Modal/modalSlice.js";

export function SidebarViewRightButtonTopPresenter() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.modal.isSidebarOpen);

  function handleToggleSidebar() {
    console.log("Toggle sidebar");
    dispatch(toggleSidebar());
  }

  return (
    <>
      <SidebarViewRightButtonTop
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );
}
