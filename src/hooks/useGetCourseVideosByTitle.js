import { useGetCoursesQuery } from "../features/courses/courseApi";
import { useGetVideosQuery } from "../features/videos/videosApi";

const useGetCourseVideosByTitle = (courseTitle) => {
  const { data } = useGetCoursesQuery({
    queryText: courseTitle?.split("-").join(" "),
    size: 14,
  });
  const { courses } = data || {};
  const {
    data: videos,
    isLoading,
    isError,
  } = useGetVideosQuery({ id: courses?._id });

  return [videos, isLoading];
};

export default useGetCourseVideosByTitle;
