import React from "react";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { FaClock, FaUserAlt } from "react-icons/fa";
import { useGetCourseQuery } from "../../features/courses/courseApi";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import { BsFillPlayFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

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

  const {
    _id,
    courseName,
    coursePrice,
    courseDescription,
    courseTutor,
    teacherThumb,
    categories,
    courseDuration,
    courseEnrollment,
  } = course || {};

  const ref = useRef();

  // find related course video
  const courseVideos = videos?.filter((video) => video?.course_id === id);

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
                    <FaClock className="mr-3" /> Duration:{" "}
                    {getVideosLength(courseVideos, 0)}h{" "}
                    {getVideosLength(courseVideos, 1)}min
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
              <Link
                className="group relative inline-block focus:outline-none focus:ring"
                to={`/checkout/${_id}`}
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                <span className="relative inline-block border-2 border-green-500 text-green-100 rounded px-8 py-3 text-sm font-bold tracking-widest capitalize">
                  get premium access
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
