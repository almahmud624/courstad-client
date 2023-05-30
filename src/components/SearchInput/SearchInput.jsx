import { useState } from "react";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import "./SearchInput";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";

export const SearchInput = ({ setIsMenuOpen }) => {
  const [queryText, setQueryText] = useState();
  const { data, isLoading, isError } = useGetCoursesQuery(
    { queryText, size: 14 },
    { skip: !queryText }
  );
  const { courses } = data || {};

  const handleInputSearchField = () => {
    setQueryText("");
    if (!setIsMenuOpen) return;
    setIsMenuOpen(false);
  };
  return (
    <div className="relative">
      <input
        type="search"
        className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 text-gray-500"
        placeholder="Search by title"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />
      <div className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg overflow-auto max-h-52 text-center">
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          "There was an error"
        ) : courses?.length === 0 ? (
          "Not Found"
        ) : (
          queryText?.length > 0 && (
            <div className="">
              {courses?.map((course) => (
                <div
                  key={course._id}
                  className="px-4 py-2 border-b border-gray-200 truncate"
                >
                  <Link
                    to={`/courses/${course?._id}`}
                    title={course?.courseName}
                    className="hover:text-blue-500 hover:underline text-gray-600"
                    onClick={handleInputSearchField}
                  >
                    {course?.courseName}
                  </Link>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};
