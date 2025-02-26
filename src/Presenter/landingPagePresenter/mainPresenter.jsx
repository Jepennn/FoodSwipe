import { MainView } from "../../View/landingPageView/mainView";
import { useNavigate } from "react-router-dom";

export function MainPresenter() {
  const navigate = useNavigate();

  return (
    <>
      <MainView onClickGetStarted={() => navigate("/login")} />
    </>
  );
}
