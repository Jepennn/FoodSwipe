// import { HeaderPresenter } from "./Presenter/headerPresenter.jsx";
import { SidebarPresenter } from "./Presenter/sidebarPresenter.jsx";
import { CardHolderPresenter } from "./Presenter/cardHolderPresenter.jsx";
import { SidebarViewRightButtonTopPresenter } from "./Presenter/sidebarViewRightButtonTopPresenter.jsx";

//Components imported for Signup site
import { HeaderPresenter } from "./Presenter/SignupPresenters/headerPresenter.jsx";
import { LoginPresenter } from "./Presenter/SignupPresenters/loginPresenter.jsx";

//import for protected routes
import { Protect } from "./Utilities/protect.jsx";

//Imported components for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.signup_site}>
                <HeaderPresenter />
                <LoginPresenter />
              </div>
            }
          />
          <Route
            path="/recipeSwipe"
            element={
              <Protect>
                <SidebarPresenter />
                <CardHolderPresenter />
                <SidebarViewRightButtonTopPresenter />
              </Protect>
            }
          />
          <Route
            path="/liked-recipes"
            element={
              <Protect>
                <SidebarPresenter />
                <div>This is the linked recipe section</div>
              </Protect>
            }
          />
          <Route
            path="/profile"
            element={
              <Protect>
                <SidebarPresenter />
                <div>This is the profile section</div>
              </Protect>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
