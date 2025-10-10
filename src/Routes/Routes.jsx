// Routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";
import AllAppsPge from "../Pages/AllAppsPage/AllAppsPge";
import AppDetails from "../Pages/AppDetails/AppDetails";
import LoadingSpinner from "../Components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        
        Component: Home,
      },
      {
        path: "/all-apps-page",
        // loader: () => fetch("/AppData.json"),
        Component: AllAppsPge,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetails/:id",
        // loader: () => fetch("/AppData.json"),
        Component: AppDetails,
      },
      {
        path: "/LoadingSpinner",
        // loader: () => fetch("/AppData.json"),
        Component: LoadingSpinner,
      },
      
    ],
  },
]);

export default router;
