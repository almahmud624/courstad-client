import { useSelector } from "react-redux";
import { useGetUserEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { EnrolledCourse } from "../EnrolledCourse/EnrolledCourse";

export const MyClasses = () => {
  const { user } = useSelector((state) => state.user);
  const {
    data: enrolledCourse,
    isLoading,
    isError,
  } = useGetUserEnrolledCourseQuery(user?._id);

  return (
    <div className="bg-white dark:bg-gray-800 px-4 py-5 mx-auto  md:px-24 lg:px-8">
      <h3 className="text-4xl dark:text-white text-gray-800 font-semibold">
        Welcome,<span className="text-green-600">{user?.name}</span>
      </h3>
      {isLoading ? (
        "Content loading..."
      ) : isError ? (
        "There was an error!"
      ) : (
        <EnrolledCourse userEnrolledCourse={enrolledCourse} />
      )}
    </div>
  );
};
