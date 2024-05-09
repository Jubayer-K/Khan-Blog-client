import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";
import routes from "./Components/Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={routes} />
      </HelmetProvider><object data="" type=""></object>
    </AuthProviders>
  </React.StrictMode>
);
