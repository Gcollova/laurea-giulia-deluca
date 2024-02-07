import React from "react";
import { ContextProvider } from "./context/main";
import "./index.css";
import Home from "./component/Home";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </React.StrictMode>
);
