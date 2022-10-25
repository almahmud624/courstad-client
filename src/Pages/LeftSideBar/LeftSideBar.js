import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = ({ courses }) => {
  return (
    <div className="w-1/3">
      <div class="relative bg-white dark:bg-gray-800">
        <div class="flex flex-col sm:flex-row sm:justify-around">
          <div class="">
            <nav class="mt-10 px-6 ">
              {courses?.map((course) => (
                <Link
                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  to={`/courses/${course._id}`}
                >
                  <span class="mx-4 text-lg font-normal">
                    {course.courseName}
                  </span>
                  <span class="flex-grow text-right"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
