import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div class="">
            <div class="space-y-4">
              <div class="bg-gray-100 rounded-lg overflow-hidden relative h-72">
                <img
                  src={course.courseThumb}
                  loading="lazy"
                  alt="course Thumbnail"
                  class="w-full h-full object-cover object-center"
                />

                <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                  sale
                </span>
              </div>
            </div>
            <div class="md:py-8">
              <div class="mb-2 md:mb-3">
                <span class="inline-block text-gray-500 mb-0.5">
                  Fancy Brand
                </span>
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                  {course.courseName}
                </h2>
              </div>

              <div class="mb-4">
                <div class="flex items-end gap-2">
                  <span class="text-gray-800 text-xl md:text-2xl font-bold">
                    ${course.coursePrice}
                  </span>
                </div>
              </div>
              <div class="flex gap-2.5">
                <Link
                  to=""
                  class="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Add to cart
                </Link>
              </div>
              <div class="mt-5 md:mt-10 lg:mt-12">
                <div class="text-gray-800 text-lg font-semibold mb-3">
                  Description
                </div>

                <p class="text-gray-500">
                  {course.courseDescription}
                  <br />
                  <br />
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
