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

//Sidebar components
import { AppSidebar } from "@/components/appSidebar.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                <HeaderPresenter />
                <MainPresenter />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <HeaderPresenter />
                <LoginPresenter />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <HeaderPresenter />
                <SignupPresenter />
              </>
            }
          />
          <Route
            path="/swipe"
            element={
              <Protect>
                {/* <AppSidebar /> */}
                {/* <CardHolderPresenter /> */}
              </Protect>
            }
          />
          <Route
            path="/liked"
            element={
              <Protect>
                {/* <AppSidebar /> */}
                <LikedRecipePresenter />
              </Protect>
            }
          />
          <Route
            path="/liked/:id"
            element={
              <Protect>
                <MoreDetailsRecipePresenter />
                <LikedRecipePresenter />
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