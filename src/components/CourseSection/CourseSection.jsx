import React from "react";
import { Link } from "react-router-dom";
import { CoursesCard } from "../CoursesCard/CoursesCard";
import { useSelector } from "react-redux";
import { useGetCoursesQuery } from "../../features/courses/courseApi";

const CourseSection = () => {
  const { user } = useSelector((state) => state.user);
  let enrolled = { student_id: user?._id, type: "unenrolled" };
  const { data, isLoading, isError } = useGetCoursesQuery({
    size: 6,
    enrolled,
  });
  const { courses } = data || {};
  return (
    <>
      <section className="dark:bg-gray-800 bg-white py-14">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-semibold dark:text-gray-200 text-gray-800">
            Our <span className=" ">Courses</span>
          </h1>
          <p className="text-center my-3 text-sm md:text-base md:my-5 dark:text-gray-400 text-gray-800 max-w-sm m-auto ">
            Learn more skills, be more competitive,Affordable online courses for
            everyone
          </p>
        </div>
        <CoursesCard
          courses={courses}
          isLoading={isLoading}
          isError={isError}
        />
        <div className="flex mt-8 justify-center">
          <Link
            className="group relative inline-block focus:outline-none focus:ring"
            to={`${courses?.length > 0 ? "/courses" : "/my-class"}`}
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

            <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
              {courses?.length > 0 ? "Explore More" : "Go to classes"}
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
