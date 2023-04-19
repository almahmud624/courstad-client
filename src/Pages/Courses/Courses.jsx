import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import SingleCourse from "../SingleCourse/SingleCourse";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import { useGetEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { useDispatch, useSelector } from "react-redux";
import { coursePagination } from "../../features/courses/courseSlice";

const Courses = () => {
  const { data: enrolledCourse } = useGetEnrolledCourseQuery();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const isShowing = location.pathname === "/home" || location.pathname === "/";
  let [courses, setCourse] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(isShowing ? "" : 5);
  const dispatch = useDispatch();
  const {
    data: coursesData,
    isLoading,
    isError,
  } = useGetCoursesQuery({ page, size });

  const pages = Math.ceil(parseInt(count) / size);
  if (isShowing) {
    courses = courses
      ?.filter(
        (v) =>
          !enrolledCourse?.some(
            (enrolld) =>
              enrolld?.course_id === v?._id && enrolld?.student_id === user?._id
          )
      )
      ?.slice(0, 3);
  }

  useEffect(() => {
    if (coursesData) {
      setCourse(coursesData?.courses);
      setCount(coursesData?.count);
      dispatch(coursePagination({ page, size }));
    }
  }, [page, size, coursesData, dispatch]);
  return (
    <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
      {!isShowing && (
        <LeftSideBar
          className="relative"
          key={Math.random()}
          // filterCategoryName={filterCategoryName}
        />
      )}
      <div
        className={`${
          isShowing
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl m-auto"
            : "grid grid-cols-1"
        }`}
      >
        {courses?.map((course) => (
          <SingleCourse key={Math.random()} course={course} />
        ))}
        {isShowing ? undefined : (
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
        )}
      </div>
    </div>
  );
};

export default Courses;
