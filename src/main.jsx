import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import CropTypes from "./pages/Crop-Type";
import Crops from "./pages/Crop";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
      {
        path: "/crop type",
        element: <CropTypes />,
      },
      {
        path: "/crop",
        element: <Crops />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
