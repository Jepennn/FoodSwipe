import { LoginView } from "../../View/SignupSite/loginView";
import { loginUserThunk } from "../../Redux/Auth/loginUserThunk";
import { useDispatch } from "react-redux";

export function LoginPresenter() {
  const dispatch = useDispatch();

  function handleLogin(email, password) {
    console.log("hello from login presenter");
    dispatch(loginUserThunk({ email, password }));
  }

  return (
    <>
      <LoginView onLoginUser={handleLogin} />
    </>
  );
}
