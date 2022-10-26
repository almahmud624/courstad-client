import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="flex gap-x-5">
      <LeftSideBar className="relative" courses={courses} />
      <div class="grid grid-cols-1">
        {courses?.map((course) => (
          <SingleCourse key={Math.random()} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
