import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Discord from "./pages/Discord";
import Members from "./pages/Members";
import Logs from "./pages/Logs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "discord",
        element: <Discord />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);