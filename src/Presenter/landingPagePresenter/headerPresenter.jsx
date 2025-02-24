import { HeaderView } from "../../View/landingPageView/headerView";
import { useDispatch } from "react-redux";
import { toggleLoginModal } from "../../Redux/Modal/modalSlice";

export function HeaderPresenter() {
  const dispatch = useDispatch();
  function handleLoginModal() {
    dispatch(toggleLoginModal());
  }

  return (
    <>
      <HeaderView onClickLoginButton={handleLoginModal} />
    </>
  );
}
