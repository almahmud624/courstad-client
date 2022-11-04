import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CourseDataContext } from "../../Contexts/CourseData";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  let { coursesData } = useContext(CourseDataContext);
  let { courses } = coursesData;

  let [course, setCourse] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const pages = Math.ceil(parseInt(count) / size);
  const location = useLocation();
  if (location.pathname === "/home" || location.pathname === "/") {
    course = course.slice(0, 3);
  }
  useEffect(() => {
    fetch(`http://localhost:4000/courses?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data.courses);
        setCount(data.count);
      });
  }, [page, size]);
  return (
    <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
      {location.pathname !== "/home" && location.pathname !== "/" && (
        <LeftSideBar
          className="relative"
          key={Math.random()}
          courses={courses}
        />
      )}
      <div
        className={`${
          location.pathname === "/home" || location.pathname === "/"
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl m-auto"
            : "grid grid-cols-1"
        }`}
      >
        {course?.map((course) => (
          <SingleCourse key={Math.random()} course={course} />
        ))}
        <div className="flex mt-8 justify-center">
          {[...Array(pages).keys()].map((n) => (
            <button
              key={Math.random()}
              className="group relative inline-block focus:outline-none focus:ring"
              onClick={() => setPage(n)}
            >
              <span
                className={`"absolute inset-0 translate-x-0 translate-y-0  transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded mx-2" ${
                  n + 1 === page + 1 && "bg-green-700"
                }`}
              ></span>

              <span
                className={`"relative inline-block border-2 text-green-100 mx-2 border-green-500 rounded px-3 py-1 text-md font-semibold tracking-widest capitalize" ${
                  n + 1 === page + 1 && "bg-green-500"
                }`}
              >
                {n + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
