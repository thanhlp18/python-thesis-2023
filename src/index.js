import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import StudentDetail from "./components/StudentDetail";
import "./index.css";
import StudentList from "./container/StudentList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentList />,
    children: [],
  },
  {
    path: "/student/:studentId",
    element: <StudentDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
