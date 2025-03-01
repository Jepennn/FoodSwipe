import { SignupView } from "../../View/landingPageView/signupView";
import { createUserThunk } from "../../Redux/Auth/createUserThunk";

export function SignupPresenter() {
  //Function to handle the creation of a new account
  const handleCreateAccount = (userData) => {
    console.log(userData);
  };

  return (
    <>
      <SignupView onClickCreateAccount={handleCreateAccount} />
    </>
  );
}
