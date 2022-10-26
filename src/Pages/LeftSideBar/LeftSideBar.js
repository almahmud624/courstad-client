import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = ({ courses }) => {
  return (
    <div className="w-1/3 p-8">
      <div class="relative bg-white dark:bg-gray-800 border border-gray-300 shadow rounded-md sticky top-8">
        <div class="flex flex-col sm:flex-row sm:justify-around ">
          <div class="mt-10 px-6 ">
            <h4 className="inline-block dark:text-white text-gray-800  font-semibold pl-3 bg-gray-300 dark:bg-gray-600 w-full text-left py-1 rounded text-xl">
              All Courses
            </h4>
            <nav class="">
              {courses?.map((course) => (
                <Link
                  class="hover:text-gray-800 hover:bg-gray-300 flex items-center my-3 py-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded pl-3"
                  to={`/courses/${course._id}`}
                >
                  <span class="text-md font-normal">{course.courseName}</span>
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
