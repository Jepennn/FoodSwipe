import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./Redux/store.js";
import "./index.css";
import App from "./App.jsx";

//Tanstack query devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { TanstackProvider } from "@/lib/provider/tanstackConfig.jsx";
import { Provider } from "react-redux";

//Shadcn sidebar component
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/appSidebar.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TanstackProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </TanstackProvider>
    </Provider>
  </StrictMode>
);

