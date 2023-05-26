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
    categories,
    teacherThumb,
  } = course;
  const location = useLocation();
  const isShowingOnHome =
    location.pathname === "/home" || location.pathname === "/";
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
            isShowingOnHome ? " md:flex-col-reverse  " : `md:h-68 sm:flex-row`
          } ${findEnrolledCourse && "!border-2 !border-red-600"}`}
        >
          <div
            className={`md:h-56 w-full flex flex-col p-4 sm:p-4${
              isShowingOnHome ? "" : "md:w-7/12 md:h-72"
            }`}
          >
            <h2 className="dark:text-white text-gray-900 text-xl md:text-xl font-semibold mb-4 pt-5">
              <Link to={`/courses/${_id}`}>
                {showingCourseNameConditionally(courseName, isShowingOnHome)}
              </Link>
            </h2>

            {!isShowingOnHome ? (
              <p className="max-w-md text-gray-800 dark:text-gray-400 mb-5">
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
            className={`order-first sm:order-none bg-gray-700 relative ${
              isShowingOnHome ? "w-full h-44" : "w-full md:w-1/2"
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
            <span className="absolute top-2 right-2 px-2 py-1 rounded bg-gray-800 text-green-500 font-semibold">
              {categories}
            </span>
            {isShowingOnHome && (
              <div className="h-14 w-14">
                <img
                  src={teacherThumb}
                  alt=""
                  className="w-full h-full rounded-full object-cover border-2 border-white -mt-7 ml-5"
                />
              </div>
            )}
            {findEnrolledCourse && !isShowingOnHome && (
              <div className="w-40 absolute top-14 -left-20 rotate-[90deg]">
                <p className="block dark:text-red-700 text-gray-800 text-sm md:text-base font-semibold text-center bg-gray-900 py-1 rounded">
                  Already Enrolled
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
