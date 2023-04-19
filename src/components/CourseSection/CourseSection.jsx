import React from "react";
import { Link } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
import { CoursesCard } from "../CoursesCard/CoursesCard";

const CourseSection = () => {
  return (
    <>
      <section className="dark:bg-gray-800 bg-white pt-16">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-semibold dark:text-gray-200 text-gray-800">
            Our <span className=" ">Courses</span>
          </h1>
          <p className="text-center my-3 text-sm md:text-base md:my-5 dark:text-gray-400 text-gray-800 max-w-sm m-auto ">
            Learn more skills, be more competitive,Affordable online courses for
            everyone
          </p>
        </div>
        <CoursesCard />
        <div className="flex mt-8 justify-center">
          <Link
            className="group relative inline-block focus:outline-none focus:ring"
            to="/courses"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

            <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
              Explore More
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
