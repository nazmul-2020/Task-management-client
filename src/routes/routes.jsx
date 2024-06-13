import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashBoardLayout from "../layout/DashBoardLayout";
import Home from "../pages/Home";
import AllFruits from "../pages/AllFruits";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUP from "../pages/SignUP";
import FruitDetails from "../component/Home/FruitDetails";
import ManageFruits from "../component/DashBord/ManageFruits";
import AddFruit from "../component/DashBord/AddFruit";
import EditFruit from "../component/DashBord/EditFruit";
import Profile from "../component/DashBord/Profile";
import EditProfile from "../component/DashBord/EditProfile";
import PrivateRoute from "./pivate/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://organic-fruit-house-server-site.vercel.app/fruits"),
      },
      {
        path: "/allFruits",
        element: <AllFruits />,
        loader: () =>
          fetch("https://organic-fruit-house-server-site.vercel.app/fruits"),
      },
      {
        path: "/fruits/:id",
        element: <FruitDetails />,
        loader: ({ params }) =>
          fetch(
            `https://organic-fruit-house-server-site.vercel.app/fruits/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUP />,
      },
    ],
  },
  {
    path: "",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/manageFruits",
        element: (
          <PrivateRoute>
            <ManageFruits />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/addFruit",
        element: (
          <PrivateRoute>
            <AddFruit />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/editFruit/:id",
        element: (
          <PrivateRoute>
            <EditFruit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://organic-fruit-house-server-site.vercel.app/fruits/${params.id}`
          ),
      },
      {
        path: "dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/editProfile/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://organic-fruit-house-server-site.vercel.app/user/get/${params.id}`),
      },
    ],
  },
]);
