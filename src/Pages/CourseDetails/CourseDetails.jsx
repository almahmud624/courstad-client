import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { FaClock, FaUserAlt } from "react-icons/fa";
import { useGetCourseQuery } from "../../features/courses/courseApi";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import { BsFillPlayFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
  useGetEnrolledCourseQuery,
  useStoreEnrolledCourseMutation,
} from "../../features/enrollCourse/enrollCourseApi";
import toast from "react-hot-toast";
import { CustomLinkButton } from "../../components/CustomLinkButton/CustomLinkButton";
import { BsFillStarFill } from "react-icons/bs";
import { getAvarageCourseRating } from "../../utils/getAvarageCourseRating";

const getVideosLength = (courseVideos, type) => {
  return courseVideos
    ?.reduce((acc, cur) => acc + Number(cur?.duration.split(":")[0]) / 60, 0)
    .toFixed(2)
    .split(".")[type];
};

const CourseDetails = () => {
  const { id } = useParams();
  const { data: course, isLoading: courseLoading } = useGetCourseQuery(id);
  const { data: videos, isLoading: videoLoading } = useGetVideosQuery();
  const { user } = useSelector((state) => state.user);
  const [storeEnrolledCourse, { isLoading: enrollmentLoading, isSuccess }] =
    useStoreEnrolledCourseMutation();
  const { data: enrolledCourse } = useGetEnrolledCourseQuery();
  const navigate = useNavigate();

  const {
    _id,
    courseName,
    coursePrice,
    courseDescription,
    courseTutor,
    teacherThumb,
    categories,
    courseEnrollment,
  } = course || {};

  const ref = useRef();

  // check user enrollment
  const enrollCheck = enrolledCourse?.find(
    (course) => course?.student_id === user?._id && course?.course_id === _id
  );

  // find related course video
  const courseVideos = videos?.filter((video) => video?.course_id === id);

  // enroll course
  const handleEnroll = () => {
    const enrolledCourse = {
      course_id: _id,
      course_title: courseName,
      student_id: user?._id,
      student_name: user?.name,
    };
    storeEnrolledCourse(enrolledCourse);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/my-class");
      toast.success("Course successfully enrolled!");
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 dark:bg-gray-800">
        <div ref={ref} className="max-w-screen-md px-4 md:px-8 mx-auto">
          <div className="">
            <div className="space-y-4">
              <div className="mb-2 md:mb-3 flex flex-col md:flex-row items-start md:items-center justify-between">
                <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold w-9/12">
                  {courseName}
                </h2>
                <div className="border md:mt-0 mt-5 text-gray-500 dark:text-gray-200 dark:hover:border-gray-500 hover:shadow hover:drop-shadow-sm transition-all duration-300  px-2 py-1 rounded-md text-xs inset-2 shadow-sm">
                  <ReactToPdf
                    className=""
                    targetRef={ref}
                    filename="course.pdf"
                  >
                    {({ toPdf }) => (
                      <button onClick={toPdf}>Generate pdf</button>
                    )}
                  </ReactToPdf>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-between py-3">
                <div className="flex items-center ">
                  <span className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 mr-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={teacherThumb}
                      alt=""
                      title="teacher thumbnail"
                    />
                  </span>
                  <div className="font-medium text-lg text-gray-800 dark:text-gray-200">
                    {courseTutor}
                  </div>
                </div>
                <div className="flex w-full md:mt-0 mt-5 md:w-[57%] justify-between items-center">
                  <div className="text-gray-600 dark:text-gray-400 flex items-center ">
                    <BsFillStarFill className="mr-2" />{" "}
                    {getAvarageCourseRating(course)}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 flex items-center">
                    <FaUserAlt className="mr-3" /> {courseEnrollment} Enrolled
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden relative h-72">
                <img
                  src={course?.courseThumb}
                  loading="lazy"
                  alt="course Thumbnail"
                  className="w-full h-full object-cover object-center"
                />

                <span className="bg-green-300 dark:bg-green-700 dark:text-white text-gray-800 text-xl font-semibold tracking-wider uppercase rounded-tr-lg absolute left-0 bottom-0 px-3 py-1.5">
                  ${coursePrice}{" "}
                  <span className="text-xs font-thin capitalize text-red-400 dark:text-gray-300">
                    <span className="dark:text-white text-gray-800">/</span> 25%
                    off
                  </span>
                </span>
                <span className="bg-green-300 dark:bg-green-700 dark:text-white text-gray-800 text-sm font-semibold tracking-wider uppercase rounded-tl-lg absolute right-0 bottom-0 px-3 py-1.5">
                  {categories}
                </span>
              </div>
            </div>
            <div className="py-4 pb-0">
              <div className="">
                <div className="text-gray-800 dark:text-gray-200 text-lg font-semibold mb-3">
                  Description
                </div>

                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  {courseDescription &&
                    courseDescription.split(" ").slice(0, 50).join(" ")}
                  <br />
                  <br />
                  {courseDescription &&
                    courseDescription
                      .split(" ")
                      .slice(50, courseDescription.length)
                      .join(" ")}
                </p>
              </div>
            </div>
            <div className="py-4 pb-6">
              <div className="">
                <div className="text-gray-800 dark:text-gray-200 text-lg font-semibold mb-3">
                  Curriculum - Content
                </div>

                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {courseVideos?.length} videos .{" "}
                  {getVideosLength(courseVideos, 0)}h{" "}
                  {getVideosLength(courseVideos, 1)}min length
                </p>
                {courseVideos?.map((video) => (
                  <div
                    key={video?._id}
                    className="flex justify-between mb-3 border border-gray-700 p-3 rounded"
                  >
                    <p className="text-gray-800 dark:text-gray-200 font-normal flex items-center">
                      <BsFillPlayFill className="inline-block align-middle mr-2 text-gray-500" />
                      {video?.title}
                    </p>
                    <span className="text-gray-800 dark:text-gray-200 font-normal flex items-center">
                      {video?.duration}
                      <BiLock className="inline-block align-middle ml-2 text-gray-500" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
              <button
                className="group relative inline-block focus:outline-none focus:ring-0  disabled:cursor-not-allowed"
                onClick={handleEnroll}
                disabled={enrollmentLoading || enrollCheck}
              >
                <span
                  className={`absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded ${
                    enrollCheck &&
                    "bg-gray-700 group-hover:translate-y-0 group-hover:translate-x-0 "
                  }`}
                ></span>

                <span className="relative inline-block border-2 border-green-500 text-green-100 rounded px-8 py-3 text-sm font-bold tracking-widest capitalize">
                  {enrollmentLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-800 fill-green-600 dark:fill-green-500 "
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : enrollCheck ? (
                    "Already Enrolled"
                  ) : (
                    "Enroll & Start Learning"
                  )}
                </span>
              </button>
              {enrollCheck && (
                <CustomLinkButton
                  buttonText={"Go to class"}
                  customStyle={"ml-3"}
                  link={"/my-class"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
