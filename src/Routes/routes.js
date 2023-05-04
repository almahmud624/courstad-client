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
import { Quiz } from "../Pages/Quiz/Quiz";
import { Dashboard } from "../Pages/Admin/Dashboard/Dashboard";
import { VideoTable } from "../Pages/Admin/VideoTable/VideoTable";
import { EditableVideo } from "../components/EditableVideo/EditableVideo";
import { Assignment } from "../Pages/Admin/Assignment/Assignment";
import { EditableAssignment } from "../components/EditableAssignment/EditableAssignment";
import { Quizzes } from "../Pages/Admin/Quizzes/Quizzes";
import { AddQuiz } from "../components/EditableQuiz/AddQuiz";
import { EditQuiz } from "../components/EditableQuiz/EditQuiz";

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
      {
        path: "/course-video/:courseName/:videoId/quiz",
        element: (
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      { path: "/admin/videos", element: <VideoTable /> },
      { path: "/admin/video/add", element: <EditableVideo /> },
      { path: "/admin/video/edit/:videoId", element: <EditableVideo /> },
      { path: "/admin/assignments", element: <Assignment /> },
      { path: "/admin/assignment/add", element: <EditableAssignment /> },
      {
        path: "/admin/assignment/edit/:assignmentId",
        element: <EditableAssignment />,
      },
      {
        path: "/admin/quizzes",
        element: <Quizzes />,
      },
      {
        path: "/admin/quiz/add",
        element: <AddQuiz />,
      },
      {
        path: "/admin/quiz/edit/:quizId",
        element: <EditQuiz />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
