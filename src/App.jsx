// import { HeaderPresenter } from "./Presenter/headerPresenter.jsx";
import { SidebarPresenter } from "./Presenter/sidebarPresenter.jsx";
import { CardHolderPresenter } from "./Presenter/cardHolderPresenter.jsx";
import { SidebarViewRightButtonTopPresenter } from "./Presenter/sidebarViewRightButtonTopPresenter.jsx";

//Components imorted for Signup site
import { HeaderPresenter } from "./Presenter/SignupPresenters/headerPresenter.jsx";
import { LoginPresenter } from "./Presenter/SignupPresenters/loginPresenter.jsx";

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
              <>
                <SidebarPresenter />
                <CardHolderPresenter />
                <SidebarViewRightButtonTopPresenter />
              </>
            }
          />
          <Route
            path="/liked-recipes"
            element={
              <>
                <SidebarPresenter />
                <div>This is the linked recipe section</div>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <SidebarPresenter />
                <div>This is the profile section</div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
