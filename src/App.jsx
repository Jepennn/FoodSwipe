// import { HeaderPresenter } from "./Presenter/headerPresenter.jsx";
import { SidebarPresenter } from "./Presenter/sidebarPresenter.jsx";
import { CardHolderPresenter } from "./Presenter/cardHolderPresenter.jsx";
import { SidebarViewRightButtonTopPresenter } from "./Presenter/sidebarViewRightButtonTopPresenter.jsx";
import { MoreDetailsRecipePresenter } from "./Presenter/moreDetailsRecipePresenter.jsx";
import { AiPresenter } from "./Presenter/aiPresenter.jsx";
import { LikedRecipePresenter } from "./Presenter/likedRecipePresenter.jsx";

//Components imported for landing page
import { HeaderPresenter } from "./Presenter/landingPagePresenter/headerPresenter.jsx";
import { LoginPresenter } from "./Presenter/landingPagePresenter/loginPresenter.jsx";
import { SignupPresenter } from "./Presenter/landingPagePresenter/signupPresenter.jsx";
import { MainPresenter } from "./Presenter/landingPagePresenter/mainPresenter.jsx";

// Pages components
import { Invitation } from "@/pages/invitation.jsx";

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
              <div className={styles.landing_page_container}>
                <HeaderPresenter />
                <MainPresenter />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className={styles.landing_page_container}>
                <HeaderPresenter />
                <LoginPresenter />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className={styles.landing_page_container}>
                <HeaderPresenter />
                <SignupPresenter />
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
                <LikedRecipePresenter />
                <SidebarViewRightButtonTopPresenter />
              </Protect>
            }
          />
          <Route
            path="/liked-recipes/:id"
            element={
              <Protect>
                <MoreDetailsRecipePresenter />
                <SidebarPresenter />
                <LikedRecipePresenter />
                <SidebarViewRightButtonTopPresenter />
              </Protect>
            }
          />
          <Route
            path="/recipeAI"
            element={
              <Protect>
                <SidebarPresenter />
                <AiPresenter />
                <SidebarViewRightButtonTopPresenter />
              </Protect>
            }
          />
          <Route
            path="/invitation/accept/:token"
            element={
              <Protect>
                <Invitation />
              </Protect>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
