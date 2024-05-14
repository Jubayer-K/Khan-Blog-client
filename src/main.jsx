import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";
import routes from "./Components/Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </HelmetProvider>
      <object data="" type=""></object>
    </AuthProviders>
  </React.StrictMode>
);
