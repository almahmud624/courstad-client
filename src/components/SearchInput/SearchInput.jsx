import { useState } from "react";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import "./SearchInput";
import { Link } from "react-router-dom";

export const SearchInput = () => {
  const [queryText, setQueryText] = useState();
  const { data, isLoading, isError } = useGetCoursesQuery(
    { queryText },
    { skip: !queryText }
  );

  const { courses } = data || {};
  return (
    <div className="relative">
      <input
        type="search"
        className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Search by title"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />
      {queryText?.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg overflow-y-scroll max-h-52">
          {courses?.map((course) => (
            <div
              key={course._id}
              className="px-4 py-2 border-b border-gray-200 truncate"
            >
              <Link
                to={`/courses/${course?._id}`}
                title={course?.courseName}
                className="hover:text-blue-500 hover:underline"
              >
                {course?.courseName}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
