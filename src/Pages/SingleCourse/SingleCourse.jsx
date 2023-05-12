import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Rating } from "../../components/Rating/Rating";
import { showingCourseNameConditionally } from "../../utils/showingCourseNameConditionally";
import { RatingSection } from "../../components/RatingSection/RatingSection";
import { useGetCourseRatingQuery } from "../../features/rating/ratingApi";
import { getAvarageCourseRating } from "../../utils/getAvarageCourseRating";

const SingleCourse = ({ course = {} }) => {
  const {
    _id,
    courseName,
    coursePrice,
    courseThumb,
    courseDescription,
    enrollment,
  } = course;
  const location = useLocation();
  const isShowing = location.pathname === "/home" || location.pathname === "/";
  const { user } = useSelector((state) => state.user);
  const { data: courseRating } = useGetCourseRatingQuery(course?._id);

  //filter current user enrolled course
  const checkUserEnrollment = enrollment?.filter(
    (enroll) => enroll?.student_id === user?._id
  );
  const findEnrolledCourse = checkUserEnrollment?.find(
    (en) => en?.course_id === _id
  );
  return (
    <div className="group my-5 w-11/12  m-auto hover:scale-[99%] transition-all duration-500 relative">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div
          className={`flex flex-col bg-transparent border border-gray-300 shadow dark:border-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden group-hover:animate-border ${
            isShowing ? " md:flex-col-reverse  " : `md:h-68 sm:flex-row`
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
            className={`md:h-52 w-full flex flex-col p-4 sm:p-4${
              isShowing ? "" : "md:w-7/12"
            }`}
          >
            <h2 className="dark:text-white text-gray-900 text-xl md:text-xl font-semibold mb-4">
              <Link to={`/courses/${_id}`}>
                {showingCourseNameConditionally(courseName, isShowing)}
              </Link>
            </h2>

            {!isShowing ? (
              <p className="max-w-md text-gray-800 dark:text-gray-400">
                {courseDescription?.length > 100 ? (
                  <>
                    {courseDescription.slice(0, 100)}
                    {"..."}
                  </>
                ) : (
                  courseDescription
                )}
              </p>
            ) : undefined}
            <div className="flex gap-1 items-center bg-gray-800 p-2 rounded">
              <span className="text-green-600">
                {getAvarageCourseRating(courseRating)}
              </span>
              <Rating rating={getAvarageCourseRating(courseRating)} />
              <span className="text-gray-500">
                ({courseRating?.length > 0 ? courseRating?.length : 0})
              </span>
            </div>
            {findEnrolledCourse ? (
              <RatingSection course={course} />
            ) : (
              <div className="flex justify-between items-center">
                <div className="mt-auto">
                  <p className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-5 py-1 mt-5 rounded">
                    ${coursePrice}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-5 py-1 mt-5 rounded">
                    {enrollment?.length ? enrollment?.length : 0} Enrolled
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={`order-first sm:order-none bg-gray-700 ${
              isShowing ? "w-full h-44" : "w-full md:w-1/2"
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
    </div>
  );
};

export default SingleCourse;
