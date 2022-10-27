import React from "react";
import { Link, useLocation } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const {
    _id,
    courseName,
    coursePrice,
    courseThumb,
    courseDescription,
    courseEnrollment,
  } = course;
  const location = useLocation();

  return (
    <div className="my-5 w-11/12 m-auto hover:scale-[99%] transition-all duration-500">
      <Link to={`/courses/${_id}`} className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div
            className={`${
              location.pathname === "/home"
                ? "md:h-68 flex flex-col md:flex-col-reverse bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden"
                : "md:h-68 flex flex-col sm:flex-row bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden"
            }`}
          >
            <div
              className={`${
                location.pathname === "/home"
                  ? "w-full flex flex-col p-4 sm:p-8"
                  : "w-full md:w-7/12 flex flex-col p-4 sm:p-8"
              }`}
            >
              <h2 className="dark:text-white text-gray-900 text-xl md:text-2xl font-semibold mb-4">
                {courseName}
              </h2>

              <p className="max-w-md text-gray-800 dark:text-gray-400">
                {courseDescription.slice(0, 150)}
                {"..."}
              </p>

              <div className="flex justify-between items-center">
                <div className="mt-auto">
                  <p className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-5 py-1 mt-5 rounded">
                    ${coursePrice}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-5 py-1 mt-5 rounded">
                    {courseEnrollment} Enrolled
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${
                location.pathname === "/home"
                  ? "w-full  order-first sm:order-none bg-gray-700"
                  : "w-full md:w-1/2 order-first sm:order-none bg-gray-700"
              }`}
            >
              <img
                src={courseThumb}
                loading="lazy"
                alt="Course Thumb"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleCourse;
