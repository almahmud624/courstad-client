import { useNavigate, useParams } from "react-router-dom";
// import { getLocalestringDate } from "../../utils/getLocalestringDate";
import { useSelector } from "react-redux";
import { useGetQuizMarkQuery } from "../../features/quizMark/quizMarkApi";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";
import useGetCourseVideosByTitle from "../../hooks/useGetCourseVideosByTitle";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";

export const VideoPlayer = ({
  video,
  setShowModal,
  assignmentSubmisson,
  assignment,
}) => {
  const navigate = useNavigate();
  const { id, title, description, url } = video || {};
  const { data: quizMarks } = useGetQuizMarkQuery();
  const { data: quizzes } = useGetQuizzesQuery();
  const { user } = useSelector((state) => state.user);
  const { courseName, videoId } = useParams();
  const [userCourses, isLoading, isError] =
    useGetCourseVideosByTitle(courseName);
  const [videoNavigate, setVideoNavigate] = useState(0);

  // check users quiz submission
  const checkQuizSubmisson = quizMarks?.some(
    (mark) => mark?.student_id === user?._id && mark?.video_id === videoId
  );

  // find quizzes for that video
  const videoQuizzes = quizzes?.filter((quiz) => quiz?.video_id === videoId);

  // handle next and previous video
  const handlevideoNavigate = (condition) => {
    const videoNavigateUrl = `/course-video/${courseName}/${userCourses[videoNavigate]?._id}`;
    if (userCourses?.length !== videoNavigate && condition === "next") {
      setVideoNavigate((prev) => prev + 1);
      navigate(videoNavigateUrl);
    }
    if (videoNavigate !== 0 && condition === "prev") {
      setVideoNavigate((prev) => prev - 1);
      navigate(videoNavigateUrl);
    }
  };
  return (
    <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <ReactPlayer
          url={url}
          width={"100%"}
          height={"450px"}
          controls={"controls"}
          muted={"muted"}
        />

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-100">
            {title}
          </h1>
          <div className="flex justify-between">
            <div className="flex gap-4">
              {assignment && (
                <button
                  className={`px-3 font-bold py-1 border rounded text-sm disabled:border-slate-700 disabled:text-slate-700 disabled:cursor-not-allowed border-cyan text-teal-500 hover:bg-cyan-500 hover:text-gray-900  disabled:hover:text-slate-700 transition-all duration-300 ${
                    assignmentSubmisson &&
                    "bg-green-600 border-green-600 text-white disabled:hover:bg-green-600"
                  }`}
                  onClick={() => setShowModal(true)}
                  disabled={assignmentSubmisson}
                >
                  {assignmentSubmisson ? "Assignment Submitted" : "Assignment"}
                </button>
              )}
              {checkQuizSubmisson && (
                <span className="text-green-600 ">Quiz Submitted</span>
              )}
              {videoQuizzes?.length !== 0 && (
                <button
                  className={`px-3 font-bold py-1 border rounded text-sm border-cyan text-teal-500 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300 ${
                    checkQuizSubmisson &&
                    "bg-green-600 border-green-600 !text-gray-800 hover:bg-green-700"
                  }`}
                  onClick={() =>
                    navigate(`/course-video/${courseName}/${videoId}/quiz`)
                  }
                >
                  {checkQuizSubmisson ? "Check Ans" : "Quiz"}
                </button>
              )}
            </div>
            <div className="flex gap-5">
              <button
                className={`px-3 font-bold py-1 border rounded text-sm disabled:border-slate-600 disabled:text-slate-600 disabled:cursor-not-allowed border-cyan text-teal-500 hover:bg-cyan-500 hover:text-gray-900  disabled:hover:text-slate-700 transition-all duration-300 ${
                  videoNavigate === 0 && " disabled:hover:bg-transparent"
                }`}
                onClick={() => handlevideoNavigate("prev")}
                disabled={videoNavigate === 0}
              >
                Previous Video
              </button>
              <button
                className={`px-3 font-bold py-1 border rounded text-sm disabled:border-slate-600 disabled:text-slate-600 disabled:cursor-not-allowed border-cyan text-teal-500 hover:bg-cyan-500 hover:text-gray-900  disabled:hover:text-slate-700 transition-all duration-300 ${
                  userCourses?.length === videoNavigate &&
                  " disabled:hover:bg-transparent"
                }`}
                onClick={() => handlevideoNavigate("next")}
                disabled={userCourses?.length === videoNavigate}
              >
                Next Video
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
        </div>
      </div>
    </>
  );
};
