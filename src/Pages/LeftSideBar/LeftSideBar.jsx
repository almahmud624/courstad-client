import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseFilter } from "../../features/courses/courseSlice";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { enrolled } = useSelector((state) => state.course);
  return (
    <div className="w-1/4 p-8 hidden lg:block">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 shadow rounded-md sticky top-8">
        <div className="flex flex-col sm:flex-row sm:justify-around ">
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
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
