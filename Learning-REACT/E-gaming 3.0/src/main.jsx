import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import "./index.css";
import HomePage from "./routes/HomePage.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import GamePage from "./routes/GamePage.jsx";
import platformStore from "./Store/index.js";
import { Provider } from "react-redux";
// Define routes
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Shared layout component
    children: [
      {
        index: true, // This is the default route for "/"
        element: <HomePage />, // HomePage will render at "/"
      },
      {
        path: "home", // Nested route for "/home"
        element: <HomePage />,
      },

      {
        path: "dashboard", // Nested route for "/dashboard"
        element: <Dashboard />,
      },
      {
        path: "game", // Nested route for "/game"
        element: <GamePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={platformStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
