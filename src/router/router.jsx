import { createBrowserRouter } from "react-router";

import { Suspense } from "react";
import AuthLayout from "../layout/AuthLayout";

import Private from "../layout/Private";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/signup/SignUp";
import Coverage from "../pages/coverage/Coverage";
import Home from "../pages/home/Home";
import SendPercel from "../pages/percels/SendPercel";
const data = fetch("/serviceCenter.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/send-percel",
        element: (
          <Private>
            <SendPercel data={data} />
          </Private>
        ),
      },
      {
        path: "/coverage",
        element: (
          <Private>
            <Suspense fallback={<div>Loading...</div>}>
              <Coverage centers={data} />
            </Suspense>
          </Private>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
