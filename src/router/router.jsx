import { createBrowserRouter } from "react-router";

import { Suspense } from "react";
import RootLayout from "../layout/RootLayout";
import Coverage from "../pages/coverage/Coverage";
import Home from "../pages/home/Home";
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
        path: "/coverage",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Coverage centers={data} />,
          </Suspense>
        ),
      },
    ],
  },
]);
