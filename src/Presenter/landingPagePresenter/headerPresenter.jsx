import { HeaderView } from "../../View/landingPageView/headerView";
import { useNavigate } from "react-router-dom";

export function HeaderPresenter() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderView
        onClickLoginButton={() => {
          navigate("/login");
        }}
        onClickSignupButton={() => {
          navigate("/signup");
        }}
        onClickLogo={() => {
          navigate("/");
        }}
      />
    </>
  );
}
