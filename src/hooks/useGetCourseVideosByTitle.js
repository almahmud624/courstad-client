import { useGetCoursesQuery } from "../features/courses/courseApi";
import { useGetVideosQuery } from "../features/videos/videosApi";

const useGetCourseVideosByTitle = (courseTitle) => {
  const { data } = useGetCoursesQuery({
    queryText: decodeURIComponent(courseTitle),
    size: 14,
  });
  const { courses } = data || {};
  const {
    data: videos,
    isLoading,
    isError,
  } = useGetVideosQuery({ id: courses?.[0]?._id });

  return [videos, isLoading];
};

export default useGetCourseVideosByTitle;
