import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
