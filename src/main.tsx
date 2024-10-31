import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TotoPage from "./pages/TotoPage";
import NotFound from "./pages/NotFound";
import App from "./App";
import ArticlePage from "./pages/ArticlePage";

const router = createBrowserRouter([
  {
    element: <App />,
    // loader: () => fetch("http://ioayoub.fr/api/eshop"),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/article/:id",
        element: <ArticlePage />,
        loader: ({ params }) =>
          fetch(`http://ioayoub.fr/api/eshop/${params.id}`),
      },
      {
        path: "/toto",
        element: <TotoPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
