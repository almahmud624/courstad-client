import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySearch,
  courseFilter,
} from "../../features/courses/courseSlice";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const { data } = useGetCoursesQuery({});
  const categories = data?.courses.map((course) => course.categories);
  const uniqueCategories = [...new Set(categories)];
  const { categories: stateCategories } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const { enrolled } = useSelector((state) => state.course);
  return (
    <div className="w-1/4 p-8 hidden lg:block">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 shadow rounded-md sticky top-8">
        <div className="flex flex-col  sm:justify-around ">
          <div className="mt-10 px-6 ">
            <h4 className="inline-block dark:text-white text-gray-800  font-semibold px-3 bg-gray-300 dark:bg-gray-800 w-full text-left py-1 rounded text-xl">
              Filter Course
            </h4>
            <nav className="my-5">
              {user?._id && (
                <div className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked={enrolled.student_id}
                    onChange={() =>
                      dispatch(courseFilter({ enrolled: user?._id }))
                    }
                  />
                  <label
                    for="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Enrolled
                  </label>
                </div>
              )}
            </nav>
          </div>
          <div className="mt-5 px-6 ">
            <h4 className="inline-block dark:text-white text-gray-800  font-semibold px-3 bg-gray-300 dark:bg-gray-800 w-full text-left py-1 rounded text-xl">
              Categories
            </h4>
            <div
              class="py-5 flex flex-col gap-2 overflow-y-scroll h-52"
              id="category"
            >
              {uniqueCategories?.map((category, i) => (
                <label key={i} className="text-gray-200">
                  <input
                    type="checkbox"
                    class="accent-pink-500"
                    value={category}
                    checked={stateCategories?.includes(category)}
                    onChange={(e) =>
                      dispatch(categorySearch({ category: e.target.value }))
                    }
                  />{" "}
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
