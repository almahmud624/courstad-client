import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FrequentlyQuestion from "../Pages/FrequentlyQuestion/FrequentlyQuestion";
import CheckOut from "../Pages/Checkout/CheckOut";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://courstad-server.vercel.app/courses").catch(
            (error) => {}
          ),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () =>
          fetch("https://courstad-server.vercel.app/courses").catch(
            (error) => {}
          ),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://courstad-server.vercel.app/courses").catch(
            (error) => {}
          ),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://courstad-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <FrequentlyQuestion />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://courstad-server.vercel.app/courses/${params.id}`),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
