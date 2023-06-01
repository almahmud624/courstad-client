import { useSelector } from "react-redux";
import { useGetUserEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { EnrolledCourse } from "../EnrolledCourse/EnrolledCourse";
import { CardLoader2 } from "../Loader/CardLoader2/CardLoader2";

const loadingCell = 4;
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 ">
            {Array(loadingCell)
              .fill()
              ?.map((i) => (
                <CardLoader2 key={Math.random()} />
              ))}
          </div>
        ) : isError ? (
          "There was an error!"
        ) : (
          <EnrolledCourse userEnrolledCourse={enrolledCourse} />
        )}
      </div>
    </div>
  );
};
