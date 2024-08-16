import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import Dashboardpage from "./routes/dashboardpage/Dashboardpage";
import Chatpage from "./routes/chatpage/Chatpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dashboard",
    children: [
      { path: "/dashboard", element: <Dashboardpage /> },
      { path: "/dashboard.chats/:id", element: <Chatpage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
