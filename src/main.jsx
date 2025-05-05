import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./Redux/store.js";
import "./index.css";
import App from "./App.jsx";

//Tanstack query devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { TanstackProvider } from "@/lib/provider/tanstackConfig.jsx";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TanstackProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </TanstackProvider>
    </Provider>
  </StrictMode>
);
