import { useGetCourseQuery } from "../../features/courses/courseApi";
import useGetCourseVideosById from "../../hooks/useGetCourseVideosById";
import { CustomLinkButton } from "../CustomLinkButton/CustomLinkButton";

export const EnrolledCourseList = ({ course = {} }) => {
  const { data: enrolledCourse, isLoading } = useGetCourseQuery(
    course?.course_id
  );
  const userCourses = useGetCourseVideosById(course?.course_id);

  const { courseName, courseTutor, courseThumb } = enrolledCourse || {};
  return (
    <>
      <div className="p-4 w-full">
        <div className="flex items-center justify-between p-4  rounded-lg bg-gradient-to-r dark:from-gray-800 dark:via-teal-800 dark:to-green-700 from-white  to-green-800 shadow-green-700 shadow">
          <div className="w-64">
            <h2 className="text-gray-900 dark:text-gray-200 text-lg font-bold">
              {courseName}
            </h2>
            <h3 className="my-4 text-md text-gray-700 dark:text-gray-300 text-left">
              {courseTutor}
            </h3>
            {userCourses?.length ? (
              <CustomLinkButton
                link={`/course-video/${courseName?.split(" ").join("-")}/${
                  userCourses?.length && userCourses[0]?._id
                }`}
                buttonText={"Start Course"}
                customEffectStyle={"px-2 py-2 text-sm"}
              />
            ) : (
              <span className="text-red-500 underline">
                Video not added yet
              </span>
            )}
          </div>
          <div className="w-56 rounded-full shadow-2xl shadow-gray-700 flex justify-center items-center ">
            <div className="w-full">
              <img
                src={courseThumb}
                className="w-full object-cover"
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
