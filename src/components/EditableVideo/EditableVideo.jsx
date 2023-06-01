import { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useAddVideoMutation,
  useEditVideoMutation,
  useGetVideoQuery,
} from "../../features/videos/videosApi";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import { ErrorAlert } from "../ErrorAlert/ErrorAlert";

export const EditableVideo = () => {
  const [addVideo, { isSuccess: addSuccess, isError: addError }] =
    useAddVideoMutation();
  const [editVideo, { isSuccess: editSuccess, isError: editError }] =
    useEditVideoMutation();
  const { data: courses } = useGetCoursesQuery({ size: 14 });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [courseId, setCourseId] = useState("");
  const [err, setErr] = useState({});
  const { videoId } = useParams();
  const { data: video } = useGetVideoQuery(videoId);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // mutation response shown by conditionally
  const isSuccess = addSuccess || editSuccess;
  const isError = addError || editError;

  // checking form validation
  const formValidation = (url, duration, views) => {
    let formErr = {};
    if (!/https?:\//.test(url)) {
      formErr = { ...formErr, url: "Url is invalid!" };
    }
    if (!/^\d{1,2}(:\d{1,2})?$/.test(duration)) {
      formErr = { ...formErr, duration: "Duration is invalid!" };
    }
    setErr(formErr);
    return formErr;
  };

  // add & edit video
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErr = formValidation(url, duration);
    if (Object.keys(formErr).length !== 0) return;
    const videoData = {
      title,
      course_id: courseId,
      description,
      url,
      duration,
    };
    if (pathname === "/admin/video/add") {
      addVideo(videoData);
    } else {
      videoData.createdAt = video?.createdAt;
      editVideo({ videoId, videoData });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/videos");
    }
    if (video?._id) {
      const { title, description, course_id, duration, url } = video || {};
      setTitle(title);
      setDescription(description);
      setDuration(duration);
      setCourseId(course_id);
      setUrl(url);
    }
  }, [video, isSuccess, navigate]);

  return (
    <>
      <DashboardLayout>
        {" "}
        <section className="">
          <div className="mx-auto max-w-lg px-5 lg:px-0">
            <div>
              <h2 className="my-6 text-center text-3xl font-extrabold text-slate-100">
                Add new video
              </h2>
            </div>
            <form className="py-5" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Video title<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Video title..."
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Description<sup className="text-red-600 font-bold">*</sup>
                </label>
                <textarea
                  rows="4"
                  id="description"
                  name="description"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="lorem ipsum dolar emmet"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="courseId"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Select Course<sup className="text-red-600 font-bold">*</sup>
                </label>
                <select
                  id="courseId"
                  className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={courseId}
                  onChange={(e) => {
                    setCourseId(e.target.value);
                    setErr({});
                  }}
                  // disabled={
                  //   existEditAssignmentVideos?.length === 1 ||
                  //   existAddAssignmentVideos?.length === 0
                  // }
                  required
                >
                  <option selected>Choose a Course</option>
                  {courses?.courses?.map((course, i) => (
                    <option
                      key={i}
                      value={course?._id}
                      className="text-gray-800"
                    >
                      {course?.courseName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Url<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="https://example.com"
                  value={url}
                  required
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setErr({});
                  }}
                />
              </div>
              {err?.url && <ErrorAlert message={err?.url} />}

              <div className="mb-6">
                <label
                  htmlFor="duration"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Duration<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="12:12"
                  value={duration}
                  required
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setErr({});
                  }}
                />
              </div>
              {err?.duration && <ErrorAlert message={err?.duration} />}
              <button
                type="submit"
                className="text-white border border-2 border-green-600 hover:bg-green-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-500 mb-5"
                // disabled={isLoading}
              >
                Submit
              </button>
            </form>
            {isError && <ErrorAlert message={"There was an error"} />}
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};
