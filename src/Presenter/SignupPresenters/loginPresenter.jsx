import { LoginView } from "../../View/SignupSite/loginView";
import { loginUserThunk } from "../../Redux/Auth/loginUserThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginPresenter() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  //If user is logged/loggs in redirect to recipeSwipe page
  useEffect(() => {
    if (isAuth) {
      navigate("/recipeSwipe");
    }
  }, [isAuth, navigate]);

  //Function to handle login when user clicks on login button
  function handleLogin(email, password) {
    dispatch(loginUserThunk({ email, password }));
  }

  return (
    <>
      <LoginView onLoginUser={handleLogin} />
    </>
  );
}
