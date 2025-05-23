

//Components imported for landing page
import { LoginPresenter } from "./Presenter/landingPagePresenter/loginPresenter.jsx";
import { SignupPresenter } from "./Presenter/landingPagePresenter/signupPresenter.jsx";

// Pages components
import { Invitation } from "@/pages/invitation.jsx";
import { Collaborate } from "@/pages/collaborate.jsx";
import { Landing } from "@/pages/landing.jsx";
import { Swipe } from "@/pages/swipe.jsx";
import { AllRecipes } from "@/pages/allRecipes.jsx";

//import for protected routes
import { Protect } from "./Utilities/protect.jsx";

//Imported components for routing
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

//Shadcn sidebar component
import { AppSidebar } from "./components/appSidebar.jsx";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Divide } from "lucide-react";

// Dashboard Layout Component
const DashboardLayout = () => {
  return (
    <>
      <AppSidebar />
      <SidebarTrigger />
      <Outlet /> {/* This will render the child routes */}
    </>
  );
};

// Landing Page Component
const LandingPage = () => {
  return (
    <>
      <LoginPresenter />
    </>
  );
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Dashboard routes with sidebar */}
          <Route 
            path="/dashboard" 
            element={
              <Protect>
                <DashboardLayout />
              </Protect>
            }
          >
            {/* Dashboard index route - redirects to swipe */}
            <Route index element={<Navigate to="/dashboard/swipe" replace />} />
            
            {/* Nested dashboard routes */}
            <Route path="swipe" element={<Swipe />} />
            <Route path="collaborate" element={<Collaborate />} />
            <Route path="swipe/liked" element={<div>Liked</div>} />
            <Route path="swipe/liked/:id" element={<div>More Details</div>} />
            <Route path="recipes" element={<AllRecipes />} />
          </Route>
          
          {/* Public route for invitation */}
          <Route path="/invitation/accept/:token" element={<Invitation />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}