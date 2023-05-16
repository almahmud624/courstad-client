import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySearch,
  courseFilter,
  sortCourse,
} from "../../features/courses/courseSlice";
import { useGetCourseCategoriesQuery } from "../../features/courses/courseApi";
import "./LeftSideBar.css";
import { useSearchParams } from "react-router-dom";

const LeftSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const dispatch = useDispatch();
  const { data: categories } = useGetCourseCategoriesQuery();
  const {
    categories: stateCategories,
    sort,
    enrolled,
  } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);

  // course filtering handle
  const handleFilterTypeChange = (value) => {
    dispatch(courseFilter({ student_id: user?._id, type: value }));
  };

  // course sorting handle
  const handleSort = (value) => {
    dispatch(sortCourse(value));
  };

  // course filter by category handle
  const categoryHandle = (value) => {
    dispatch(categorySearch({ category: value }));
  };

  // handle clear category search param
  const handleSearchParam = () => {
    setSearchParams((params) => {
      params.set("page", "");
    });
  };

  return (
    <div className="w-1/4 p-8 hidden lg:block">
      <div className=" bg-white dark:bg-gray-900 border border-gray-300 shadow rounded-md sticky top-8">
        <div className="flex flex-col  sm:justify-around ">
          <div className="mt-10 px-6 ">
            <h4 className="inline-block dark:text-white text-gray-800  font-semibold px-3 bg-gray-300 dark:bg-gray-800 w-full text-left py-1 rounded text-xl">
              Filter Course
            </h4>
            <div className="my-5">
              {user?._id && (
                <>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select view type
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => handleFilterTypeChange(e.target.value)}
                    value={user?.id ? "unenrolled" : enrolled?.type}
                  >
                    <option value="all">All</option>
                    <option value="enrolled">Enrolled</option>
                    <option value="unenrolled">Unenrolled</option>
                  </select>
                </>
              )}
            </div>
            <div className="my-5">
              <>
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Sort type
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => handleSort(e.target.value)}
                  value={sort}
                >
                  <option value="default">Default</option>
                  <option value="most_enrolled">Most Enrolled</option>
                  <option value="most_rated">Most Rated</option>
                  <option value="price_to_low">Price High to Low</option>
                  <option value="price_to_high">Price Low to High</option>
                </select>
              </>
            </div>
          </div>
          <div className="mt-5 px-6 ">
            <h4 className="inline-block dark:text-white text-gray-800  font-semibold px-3 bg-gray-300 dark:bg-gray-800 w-full text-left py-1 rounded text-xl">
              Categories
            </h4>
            <div
              className="py-5 flex flex-col gap-2 overflow-y-scroll h-52"
              id="category"
            >
              {category ? (
                <>
                  <label className="text-gray-200 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-pink-500"
                      value={"all"}
                      checked={stateCategories?.includes("all")}
                      onChange={handleSearchParam}
                    />{" "}
                    All
                  </label>
                </>
              ) : undefined}
              {categories?.map((category, i) => (
                <label key={i} className="text-gray-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    value={category}
                    checked={stateCategories?.includes(category)}
                    onChange={(e) => categoryHandle(e.target.value)}
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
