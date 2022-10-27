import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = ({ courses }) => {
  return (
    <div className="w-1/3 p-8 hidden lg:block">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 shadow rounded-md sticky top-8">
        <div className="flex flex-col sm:flex-row sm:justify-around ">
          <div className="mt-10 px-6 ">
            <h4 className="inline-block dark:text-white text-gray-800  font-semibold pl-3 bg-gray-300 dark:bg-gray-600 w-full text-left py-1 rounded text-xl">
              All Courses
            </h4>
            <nav className="">
              {courses?.map((course) => (
                <Link
                  className="hover:text-gray-800 hover:bg-gray-300 flex items-center my-3 py-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded pl-3"
                  to={`/courses/${course._id}`}
                >
                  <span className="text-md font-normal">
                    {course.courseName}
                  </span>
                  <span className="flex-grow text-right"></span>
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
