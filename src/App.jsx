// import { HeaderPresenter } from "./Presenter/headerPresenter.jsx";
import { SidbarPresenter } from "./Presenter/sidebarPresenter.jsx";
import { CardHolderPresenter } from "./Presenter/cardHolderPresenter.jsx";
import { SidebarViewRightButtonTopPresenter } from "./Presenter/sidebarViewRightButtonTopPresenter.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SidbarPresenter />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CardHolderPresenter />
                <SidebarViewRightButtonTopPresenter />
              </>
            }
          />
          <Route
            path="/recipes"
            element={<div>This is the linked recipe section</div>}
          />
          <Route
            path="/profile"
            element={<div>This is the profile section</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
