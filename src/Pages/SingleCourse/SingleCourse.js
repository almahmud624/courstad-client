import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { _id, courseName, coursePrice, courseThumb } = course;
  return (
    <div className="mt-16 w-11/12">
      <Link
        to={`/courses/${_id}`}
        class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
      >
        <img
          src={courseThumb}
          loading="lazy"
          alt="Course Thumbnail"
          class="w-full h-full object-cover object-center transition duration-200"
        />

        <div class="flex gap-2 absolute left-0 bottom-2">
          <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
            -50%
          </span>
          <span class="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">
            New
          </span>
        </div>
      </Link>

      <div class="flex justify-between items-start gap-2 px-2">
        <div class="flex flex-col">
          <a
            href="#"
            class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
          >
            {courseName}
          </a>
        </div>

        <div class="flex flex-col items-end">
          <span class="text-gray-600 lg:text-lg font-bold">${coursePrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
