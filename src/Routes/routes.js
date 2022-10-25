import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("http://localhost:4000/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/courses/${params.id}`),
      },
    ],
  },
]);
