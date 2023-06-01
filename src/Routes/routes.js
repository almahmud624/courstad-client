import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FrequentlyQuestion from "../Pages/FrequentlyQuestion/FrequentlyQuestion";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import { MyClasses } from "../components/MyClasses/MyClasses";
import { Video } from "../Pages/Video/Video";
import { Quiz } from "../Pages/Quiz/Quiz";
import { VideoTable } from "../Pages/Admin/VideoTable/VideoTable";
import { EditableVideo } from "../components/EditableVideo/EditableVideo";
import { Assignment } from "../Pages/Admin/Assignment/Assignment";
import { EditableAssignment } from "../components/EditableAssignment/EditableAssignment";
import { Quizzes } from "../Pages/Admin/Quizzes/Quizzes";
import { AddQuiz } from "../components/EditableQuiz/AddQuiz";
import { EditQuiz } from "../components/EditableQuiz/EditQuiz";
import { AssignmentMark } from "../Pages/Admin/AssignmentMark/AssignmentMark";
import { Leaderboard } from "../Pages/Leaderboard/Leaderboard";
import { AboutUs } from "../Pages/AboutUs/AboutUs";
import { ContactUs } from "../Pages/ContactUs/ContactUs";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import PublicRoute from "../PrivateRoute/PublicRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Main />
      </PublicRoute>
    ),
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
      {
        path: "/leaderboard",
        element: (
          <PrivateRoute>
            <Leaderboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminPrivateRoute>
        <VideoTable />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/videos",
    element: (
      <AdminPrivateRoute>
        <VideoTable />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/video/add",
    element: (
      <AdminPrivateRoute>
        <EditableVideo />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/video/edit/:videoId",
    element: (
      <AdminPrivateRoute>
        <EditableVideo />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/assignments",
    element: (
      <AdminPrivateRoute>
        <Assignment />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/assignment/add",
    element: (
      <AdminPrivateRoute>
        <EditableAssignment />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/assignment/edit/:assignmentId",
    element: (
      <AdminPrivateRoute>
        <EditableAssignment />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/quizzes",
    element: (
      <AdminPrivateRoute>
        <Quizzes />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/quiz/add",
    element: (
      <AdminPrivateRoute>
        <AddQuiz />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/quiz/edit/:quizId",
    element: (
      <AdminPrivateRoute>
        <EditQuiz />
      </AdminPrivateRoute>
    ),
  },
  {
    path: "/admin/assignmentMark",
    element: (
      <AdminPrivateRoute>
        <AssignmentMark />
      </AdminPrivateRoute>
    ),
  },
  { path: "*", element: <ErrorPage /> },
]);
