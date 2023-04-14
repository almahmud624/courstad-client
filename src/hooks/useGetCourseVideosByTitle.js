import { useGetCoursesQuery } from "../features/courses/courseApi";
import { useGetVideosQuery } from "../features/videos/videosApi";

const useGetCourseVideosByTitle = (courseTitle) => {
  const { data: allCourse } = useGetCoursesQuery();
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  // find course
  const selectedCourse = allCourse?.courses?.find(
    (course) => course.courseName === courseTitle?.split("-").join(" ")
  );

  // filter course videos
  const userCourses = videos?.filter(
    (video) => video?.course_id === selectedCourse?._id
  );
  return [userCourses, isLoading];
};

export default useGetCourseVideosByTitle;
