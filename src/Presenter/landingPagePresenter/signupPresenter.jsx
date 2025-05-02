import { SignupView } from "../../View/landingPageView/signupView";
import { createUserThunk } from "../../Redux/Auth/createUserThunk";
import { useDispatch } from "react-redux";

export function SignupPresenter() {
  const dispatch = useDispatch();

  //Function to handle the creation of a new account
  const handleCreateAccount = (userData) => {
    try {
      dispatch(createUserThunk(userData)); //Creates a new user in the backend
      console.log("User created");
    } catch (error) {
      console.log("There was an error creating the user");
      console.error(error);
    }
  };

  return (
    <>
      <SignupView onClickCreateAccount={handleCreateAccount} />
    </>
  );
}
