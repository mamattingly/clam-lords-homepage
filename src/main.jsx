import App from "./App";
import Home from "./pages/Home";
// import About from "./pages/About";
import Discord from "./pages/Discord";
// import Members from "./pages/Members";
// import Logs from "./pages/Logs";
// import Contact from "./pages/Contact";
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
        element: <div>About</div>,
      },
      {
        path: "discord",
        element: <Discord />,
      },
      {
        path: "members",
        element: <div>Members</div>,
      },
      {
        path: "logs",
        element: <div>Logs</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);