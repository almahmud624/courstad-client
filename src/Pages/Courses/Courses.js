import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="flex gap-10">
      <LeftSideBar className="" courses={courses} />
      <div class="grid sm:grid-cols-2 w-11/12 lg:grid-cols-2 xl:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-8">
        {courses?.map((course) => (
          <SingleCourse key={Math.random()} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
