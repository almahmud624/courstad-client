import React, { useState, useEffect } from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import SingleCourse from "../SingleCourse/SingleCourse";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import { useDispatch, useSelector } from "react-redux";
import { coursePagination } from "../../features/courses/courseSlice";
import useGetSearchParams from "../../hooks/useGetSearchParams";
import HashLoader from "react-spinners/HashLoader";
import { NotFound } from "../../components/NotFound/NotFound";

const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};

const Courses = () => {
  // const { queryText } = useGetSearchParams();
  let [courses, setCourse] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const dispatch = useDispatch();
  const { enrolled, categories, sort } = useSelector((state) => state.course);
  const {
    data: coursesData,
    isLoading,
    isError,
  } = useGetCoursesQuery({ page, size, enrolled, categories, sort });
  const pages = Math.ceil(parseInt(count) / size);
  useEffect(() => {
    if (coursesData) {
      setCourse(coursesData?.courses);
      setCount(coursesData?.count);
      dispatch(coursePagination({ page, size }));
    }
  }, [page, size, coursesData, dispatch]);
  return (
    <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
      {<LeftSideBar className="relative" key={Math.random()} />}
      {isLoading ? (
        <HashLoader color="#36d7b7" cssOverride={override} />
      ) : isError ? (
        "Something wrong"
      ) : courses?.length <= 0 ? (
        <NotFound message={"Course not found!"} hideBtn={"hidden"} />
      ) : (
        <div className="grid grid-cols-1">
          {courses?.map((course) => (
            <SingleCourse key={Math.random()} course={course} />
          ))}
          {
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
          }
        </div>
      )}
    </div>
  );
};

export default Courses;
