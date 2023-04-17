import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useGetEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { Rating } from "../../components/Rating/Rating";
import { Popover } from "../../components/Popover/Popover";
import { useUpdateCourseMutation } from "../../features/courses/courseApi";
import {
  useGetUserRatingQuery,
  useStoreUserRatingMutation,
} from "../../features/rating/ratingApi";

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
  const [updateCourse, { isLoading: updateLoading, isSuccess: updateSuccess }] =
    useUpdateCourseMutation();
  const [
    storeUserRating,
    { isLoading: ratingLoading, isSuccess: ratingSuccess },
  ] = useStoreUserRatingMutation();
  const { data: ratings } = useGetUserRatingQuery();

  const isLoading = ratingLoading || updateLoading;

  //find current user enrolled course
  const checkUserEnrollment = enrolledCourse?.filter(
    (enroll) => enroll?.student_id === user?._id
  );
  const findEnrolledCourse = checkUserEnrollment?.find(
    (en) => en?.course_id === _id
  );

  // find current user rating for the course
  const findUserRating = ratings?.find(
    (rate) => rate?.student_id === user?._id && rate?.course_id === _id
  );

  // update rating
  const handleRating = () => {
    const userRating = {
      course_id: _id,
      course_title: courseName,
      student_id: user?._id,
      student_name: user?.name,
      rating,
    };
    const courseRating = { student_id: user?._id, userRating: rating };
    if (!isEditRating) {
      if (course?.rating) {
        course.rating = [...courseRating, rating];
        updateCourse({ id: _id, data: course });
      } else {
        course.rating = [courseRating];
        updateCourse({ id: _id, data: course });
      }
      storeUserRating(userRating);
    } else {
      console.log(userRating);
    }
  };
  // rate text showing condition
  const isRateTextShow = findUserRating && !isEditRating;
  return (
    <div className="my-5 w-11/12 m-auto hover:scale-[99%] transition-all duration-500">
      <>
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div
            className={`${
              isShowing
                ? "md:h-68 flex flex-col md:flex-col-reverse bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden"
                : `md:h-68 flex flex-col sm:flex-row bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden `
            } ${findEnrolledCourse && "!border-2 !border-green-600"}`}
          >
            <div
              className={`${
                isShowing
                  ? "w-full flex flex-col p-4 sm:p-8"
                  : "w-full md:w-7/12 flex flex-col p-4 sm:p-8"
              }`}
            >
              <h2 className="dark:text-white text-gray-900 text-xl md:text-2xl font-semibold mb-4">
                <Link to={`/courses/${_id}`}>{courseName}</Link>
              </h2>

              <p
                className="max-w-md text-gray-800 dark:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {courseDescription.slice(0, 150)}
                {"..."}
              </p>

              {findEnrolledCourse ? (
                <div className="flex flex-col justify-center gap-4 items-center">
                  <div className="mt-auto w-full">
                    <p className="block dark:text-green-500 text-gray-800 text-sm md:text-base font-semibold text-center bg-gray-700 dark:bg-gray-800 px-5 py-1 mt-5 rounded">
                      Already Enrolled
                    </p>
                  </div>
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
                    />
                    {isOpen && (
                      <Popover
                        rating={rating}
                        handleRating={handleRating}
                        isLoading={isLoading}
                        setIsEditRating={setIsEditRating}
                        isEditRating={isEditRating}
                        setIsOpen={setIsOpen}
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
