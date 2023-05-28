import { useSelector } from "react-redux";
import { useGetUserEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { EnrolledCourse } from "../EnrolledCourse/EnrolledCourse";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
export const MyClasses = () => {
  const { user } = useSelector((state) => state.user);
  const {
    data: enrolledCourse,
    isLoading,
    isError,
  } = useGetUserEnrolledCourseQuery(user?._id);

  return (
    <div className="bg-white dark:bg-gray-800 px-4 py-5 mx-auto md:px-24 lg:px-8 ">
      <div className="2xl:max-w-7xl mx-auto">
        <h3 className="lg:text-4xl text-2xl dark:text-white text-gray-800 font-semibold truncate">
          Welcome,<span className="text-green-600">{user?.name}</span>
        </h3>
        {isLoading ? (
          <HashLoader color="#36d7b7" cssOverride={override} />
        ) : isError ? (
          "There was an error!"
        ) : (
          <EnrolledCourse userEnrolledCourse={enrolledCourse} />
        )}
      </div>
    </div>
  );
};
