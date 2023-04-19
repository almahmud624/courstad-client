import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useGetEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { Rating } from "../../components/Rating/Rating";
import { Popover } from "../../components/Popover/Popover";
import {
  useRemoveRatingMutation,
  useUpdateCourseMutation,
  useUpdateRatingMutation,
} from "../../features/courses/courseApi";
import { showingCourseNameConditionally } from "../../utils/showingCourseNameConditionally";
import { getAvarageCourseRating } from "../../utils/getAvarageCourseRating";
import { DeleteConrfirmation } from "../../components/Popover/DeleteConrfirmation";

const SingleCourse = ({ course = {} }) => {
  const {
    _id,
    courseName,
    coursePrice,
    courseThumb,
    courseDescription,
    courseEnrollment,
    rating: courseRating,
  } = course;
  const location = useLocation();
  const isShowing = location.pathname === "/home" || location.pathname === "/";
  const { user } = useSelector((state) => state.user);
  const { data: enrolledCourse } = useGetEnrolledCourseQuery();
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditRating, setIsEditRating] = useState(false);
  const [deleteConfirmation, setDeleteConfimation] = useState(false);
  const [updateCourse, { isLoading: updateLoading, isSuccess: updateSuccess }] =
    useUpdateCourseMutation();
  const [removeRating] = useRemoveRatingMutation();
  const [updateRating] = useUpdateRatingMutation();

  //find current user enrolled course
  const checkUserEnrollment = enrolledCourse?.filter(
    (enroll) => enroll?.student_id === user?._id
  );
  const findEnrolledCourse = checkUserEnrollment?.find(
    (en) => en?.course_id === _id
  );

  // find current user rating for the course
  const findUserRating = course?.rating?.find(
    (rate) => rate.student_id === user?._id
  );

  // update rating
  const handleRating = () => {
    const newRating = { student_id: user?._id, userRating: rating };
    if (!isEditRating) {
      const updatedCourse = {
        ...course,
        rating: [...courseRating, newRating],
      };
      updateCourse({ id: _id, data: updatedCourse });
    } else {
      const updatedRating = {
        ...findUserRating,
        userRating: rating,
        type: "update",
      };
      updateRating({ id: _id, data: updatedRating });
    }
  };

  // rate text showing condition
  const isRateTextShow = findUserRating && !isEditRating;

  // remove user rating
  const toggleDeleteConfirmation = () => {
    setDeleteConfimation(!deleteConfirmation);
  };
  const removeUserRating = () => {
    removeRating({ id: _id, ratingId: findUserRating?._id });
  };
  useEffect(() => {
    if (updateSuccess) {
      setIsOpen(false);
      setIsEditRating(false);
    }
  }, [updateSuccess]);
  return (
    <div className="my-5 w-11/12 m-auto hover:scale-[99%] transition-all duration-500 relative overflow-hidden">
      <>
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div
            className={`${
              isShowing
                ? "md:h-68 flex flex-col md:flex-col-reverse bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden "
                : `md:h-68 flex flex-col sm:flex-row bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden `
            } ${findEnrolledCourse && "!border-2 !border-green-600"}`}
          >
            {findEnrolledCourse && (
              <div className="w-full absolute top-10 left-96 rotate-[40deg]">
                <p className="block dark:text-green-500 text-gray-800 text-sm md:text-base font-semibold text-center bg-gray-700 dark:bg-gray-800 py-1 rounded mr-10">
                  Already Enrolled
                </p>
              </div>
            )}
            <div
              className={`${
                isShowing
                  ? "w-full flex flex-col p-4 sm:p-8"
                  : "w-full md:w-7/12 flex flex-col p-4 sm:p-8"
              }`}
            >
              <h2 className="dark:text-white text-gray-900 text-xl md:text-xl font-semibold mb-4">
                <Link to={`/courses/${_id}`}>
                  {showingCourseNameConditionally(courseName, isShowing)}
                </Link>
              </h2>

              <p
                className="max-w-md text-gray-800 dark:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {courseDescription?.length > 100 ? (
                  <>
                    {courseDescription.slice(0, 100)}
                    {"..."}
                  </>
                ) : (
                  courseDescription
                )}
              </p>
              <div className="flex gap-1 items-center bg-gray-800 p-2 rounded mt-5">
                <span className="text-green-600">
                  {getAvarageCourseRating(course)}
                </span>
                <Rating rating={getAvarageCourseRating(course)} />
                <span className="text-gray-500">
                  ({course?.rating ? course?.rating?.length : 0})
                </span>
              </div>
              {findEnrolledCourse ? (
                <div className="mt-5">
                  <div className="mt-auto flex justify-between items-center w-full relative">
                    <p
                      className="inline-block dark:text-green-500 text-gray-800 text-sm md:text-base text-center  "
                      onClick={() => setIsOpen(false)}
                    >
                      {isRateTextShow
                        ? "Your Rating"
                        : !isEditRating
                        ? "Rate this course"
                        : "Update your rating"}
                    </p>

                    <Rating
                      rating={rating}
                      setRating={setRating}
                      setIsOpen={setIsOpen}
                      userRating={findUserRating}
                      setIsEditRating={setIsEditRating}
                      isEditRating={isEditRating}
                      toggleDeleteConfirmation={toggleDeleteConfirmation}
                    />
                    {isOpen && (
                      <Popover
                        rating={rating}
                        handleRating={handleRating}
                        // isLoading={isLoading}
                        setIsEditRating={setIsEditRating}
                        isEditRating={isEditRating}
                        setIsOpen={setIsOpen}
                      />
                    )}
                    {deleteConfirmation && (
                      <DeleteConrfirmation
                        message={"Remove Rating"}
                        action={removeUserRating}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div className="mt-auto">
                    <p className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-5 py-1 mt-5 rounded">
                      ${coursePrice}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-5 py-1 mt-5 rounded">
                      {courseEnrollment} Enrolled
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`${
                isShowing
                  ? "w-full  order-first sm:order-none bg-gray-700"
                  : "w-full md:w-1/2 order-first sm:order-none bg-gray-700"
              }`}
            >
              <Link to={`/courses/${_id}`}>
                <img
                  src={courseThumb}
                  loading="lazy"
                  alt="Course Thumb"
                  className="w-full h-full object-cover object-center"
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SingleCourse;
