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
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import { MyClasses } from "../components/MyClasses/MyClasses";
import { Video } from "../Pages/Video/Video";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
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
        path: "/profile-edit",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-class",
        element: (
          <PrivateRoute>
            <MyClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "/course-video/:courseName/:videoId",
        element: (
          <PrivateRoute>
            <Video />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
