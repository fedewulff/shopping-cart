import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import FullScreen from "./FullScreen.jsx";
import Error from "./Error.jsx";

const router = createBrowserRouter([
  { path: "/", element: <FullScreen />, errorElement: <Error /> },
  { path: "/:name", element: <FullScreen /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
