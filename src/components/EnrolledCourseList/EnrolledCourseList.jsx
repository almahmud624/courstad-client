import { useGetCourseQuery } from "../../features/courses/courseApi";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import { showingCourseNameConditionally } from "../../utils/showingCourseNameConditionally";
import { CustomLinkButton } from "../CustomLinkButton/CustomLinkButton";

export const EnrolledCourseList = ({ course = {} }) => {
  const { data: enrolledCourse } = useGetCourseQuery(course?.course_id);
  const { data: videos } = useGetVideosQuery({
    id: course?.course_id,
  });
  const { courseName, courseTutor, courseThumb } = enrolledCourse || {};
  return (
    <>
      <div className="md:p-4 w-full">
        <div className="flex md:flex-row flex-col-reverse gap-y-3 items-center justify-between p-4 rounded-lg md:bg-gradient-to-r bg-gradient-to-t dark:from-gray-800 dark:via-teal-800 dark:to-green-700 from-white  to-green-800 shadow-green-700 shadow">
          <div className="md:w-64 w-full">
            <h2
              className="text-gray-900 dark:text-gray-200 text-lg font-bold"
              title={courseName}
            >
              {showingCourseNameConditionally(courseName, true)}
            </h2>
            <h3 className="my-4 text-md text-gray-700 dark:text-gray-300 text-left">
              {courseTutor}
            </h3>
            {videos?.length > 0 ? (
              <CustomLinkButton
                link={`/course-video/${encodeURIComponent(courseName)}/${
                  videos[0]?._id
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
          <div className="md:w-56 w-full rounded-full shadow-2xl shadow-gray-700 flex justify-center items-center ">
            <img
              src={courseThumb}
              className="w-full h-40 object-cover rounded-md"
              alt="thumbnail"
            />
          </div>
        </div>
      </div>
    </>
  );
};
