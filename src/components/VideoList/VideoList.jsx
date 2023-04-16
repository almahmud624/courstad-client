// import { VideoListLoader } from "../VideoListLoader/VideoListLoader";
import { useParams } from "react-router-dom";
import { VideoListItem } from "./VideoListItem";
import useGetCourseVideosByTitle from "../../hooks/useGetCourseVideosByTitle";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

export const VideoList = () => {
  const { courseName } = useParams();
  const [userCourses, isLoading, isError] =
    useGetCourseVideosByTitle(courseName);
  const [queryText, setQueryText] = useState("");

  let content;
  if (isLoading) {
    content = "loading...";
  } else if (!isLoading && isError) {
    content = <span>There was an error</span>;
  } else if (!isLoading && !isError && userCourses?.length === 0) {
    content = <span>Video not found</span>;
  } else if (!isLoading && !isError && userCourses?.length > 0) {
    content = userCourses
      ?.filter((video) => video?.title.includes(queryText))
      ?.map((video) => (
        <VideoListItem key={video.id} video={video} courseName={courseName} />
      ));
  }

  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
        <form>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt className="h-5 w-5 text-gray-200" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by title..."
              onChange={(e) => setQueryText(e.target.value)}
              required
            />
          </div>
        </form>

        <span className="text-white font-semibold bg-gray-900 block py-2 pl-2 rounded mt-3">
          Course Content
        </span>
        {content}
      </div>
    </>
  );
};
