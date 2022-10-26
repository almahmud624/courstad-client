import React from "react";
import { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { FaClock, FaUserAlt } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    _id,
    courseName,
    coursePrice,
    courseDescription,
    courseTutor,
    teacherThumb,
    categories,
    courseDuration,
    courseEnrollment,
  } = course;
  console.log(course);

  const ref = useRef();
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12 dark:bg-gray-800">
        <div ref={ref} class="max-w-screen-md px-4 md:px-8 mx-auto">
          <div class="">
            <div class="space-y-4">
              <div class="mb-2 md:mb-3 flex items-center justify-between">
                <h2 class="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold w-9/12">
                  {courseName}
                </h2>
                <button className="border text-gray-500 dark:text-gray-200 dark:hover:border-gray-500 hover:shadow hover:drop-shadow-sm transition-all duration-300  px-2 py-1 rounded-md text-xs inset-2 shadow-sm">
                  <ReactToPdf
                    className=""
                    targetRef={ref}
                    filename="div-blue.pdf"
                  >
                    {({ toPdf }) => (
                      <button onClick={toPdf}>Generate pdf</button>
                    )}
                  </ReactToPdf>
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center ">
                  <span class="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 mr-3">
                    <img
                      class="w-10 h-10 rounded-full object-cover"
                      src={teacherThumb}
                      alt=""
                      title="teacher thumbnail"
                    />
                  </span>
                  <div className="font-medium text-lg text-gray-800 dark:text-gray-200">
                    {courseTutor}
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 flex items-center ">
                  <FaClock className="mr-3" /> Duration: {courseDuration}
                </div>
                <div className="text-gray-600 dark:text-gray-400 flex items-center">
                  <FaUserAlt className="mr-3" /> {courseEnrollment} Enrolled
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden relative h-72">
                <img
                  src={course.courseThumb}
                  loading="lazy"
                  alt="course Thumbnail"
                  class="w-full h-full object-cover object-center"
                />

                <span class="bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-xl font-semibold tracking-wider uppercase rounded-tr-lg absolute left-0 bottom-0 px-3 py-1.5">
                  ${coursePrice}{" "}
                  <span className="text-xs font-thin capitalize text-red-400 dark:text-red-600">
                    <span className="text-white dark:text-gray-800">/</span> 25%
                    off
                  </span>
                </span>
                <span class="bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-sm font-semibold tracking-wider uppercase rounded-tl-lg absolute right-0 bottom-0 px-3 py-1.5">
                  {categories}
                </span>
              </div>
            </div>
            <div class="py-4 pb-0">
              <div class="">
                <div class="text-gray-800 dark:text-gray-200 text-lg font-semibold mb-3">
                  Description
                </div>

                <p class="text-gray-500 dark:text-gray-400 mb-8">
                  {courseDescription &&
                    courseDescription.split(" ").slice(0, 50).join(" ")}
                  <br />
                  <br />
                  {courseDescription &&
                    courseDescription
                      .split(" ")
                      .slice(50, courseDescription.length)
                      .join(" ")}
                </p>
              </div>
            </div>
            <div class="flex">
              <Link
                class="group relative inline-block focus:outline-none focus:ring"
                to={`/checkout/${_id}`}
              >
                <span class="absolute inset-0 translate-x-0 translate-y-0 bg-green-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                <span class="relative inline-block border-2 border-green-500 rounded px-8 py-3 text-sm font-bold tracking-widest capitalize">
                  get premium access
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
