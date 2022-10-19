import { createBrowserRouter } from "react-router-dom";

import { Login, Layout, Home, Single } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;