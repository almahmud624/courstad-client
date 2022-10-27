import React from "react";
import { useState } from "react";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  let courses = useLoaderData();
  const location = useLocation();
  if (location.pathname === "/") {
    courses = courses.slice(0, 3);
  }
  return (
    <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
      {location.pathname !== "/" && (
        <LeftSideBar className="relative" courses={courses} />
      )}
      <div
        class={`${
          location.pathname === "/"
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl m-auto"
            : "grid grid-cols-1"
        }`}
      >
        {courses?.map((course) => (
          <SingleCourse key={Math.random()} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
