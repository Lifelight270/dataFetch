import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardLayout from "./CardLayout";
import { Home, About, Contact } from "./component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <CardLayout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
