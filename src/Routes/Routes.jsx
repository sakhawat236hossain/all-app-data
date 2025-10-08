import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import AllAppsPge from "../Pages/AllAppsPage/AllAppsPge";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () => fetch("/AppData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/All Apps Page",
        loader: () => fetch("/AppData.json"),
        Component:AllAppsPge,
      },
       {
        path: "/Installation",
      Component:Installation,
    },
    ],
   },
]);

export default router;
