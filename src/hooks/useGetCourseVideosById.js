import { useGetVideosQuery } from "../features/videos/videosApi";

const useGetCourseVideosById = (courseId) => {
  const { data: videos, isLoading: videoLoading } = useGetVideosQuery();
  // filter course videos
  const userCourses = videos?.filter((video) => video?.course_id === courseId);
  return userCourses;
};

export default useGetCourseVideosById;
