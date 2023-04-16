import { useNavigate, useParams } from "react-router-dom";
// import { getLocalestringDate } from "../../utils/getLocalestringDate";
import { useSelector } from "react-redux";
import { useGetQuizMarkQuery } from "../../features/quizMark/quizMarkApi";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";
import useGetCourseVideosByTitle from "../../hooks/useGetCourseVideosByTitle";
import { useState } from "react";

export const VideoPlayer = ({
  video,
  setShowModal,
  assignmentSubmisson,
  assignment,
}) => {
  const navigate = useNavigate();
  const { id, title, description, createdAt, url } = video || {};
  const { data: quizMarks } = useGetQuizMarkQuery();
  const { data: quizzes } = useGetQuizzesQuery();
  const { user } = useSelector((state) => state.user);
  const { courseName, videoId } = useParams();
  const [userCourses, isLoading, isError] =
    useGetCourseVideosByTitle(courseName);
  const [videoNavigate, setVideoNavigate] = useState(0);

  // check users quiz submission
  const checkQuizSubmisson = quizMarks?.some(
    (mark) => mark?.student_id === user?.id && mark?.video_id === Number(id)
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
    console.log(videoNavigate);
  };
  return (
    <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <iframe
          width="100%"
          className="aspect-video"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-100">
            {title}
          </h1>
          <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
            {/* Uploaded on {getLocalestringDate(createdAt)} */}
          </h2>

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

              {videoQuizzes?.length !== 0 && (
                <button
                  className={`px-3 font-bold py-1 border rounded text-sm disabled:border-slate-700 disabled:text-slate-700 disabled:cursor-not-allowed border-cyan text-teal-500 hover:bg-cyan-500 hover:text-gray-900  disabled:hover:text-slate-700 transition-all duration-300 ${
                    checkQuizSubmisson &&
                    "bg-green-600 border-green-600 text-white disabled:hover:bg-green-600"
                  }`}
                  onClick={() =>
                    navigate(`/course-video/${courseName}/${videoId}/quiz`)
                  }
                  disabled={checkQuizSubmisson}
                >
                  {checkQuizSubmisson ? "Quiz Submitted" : "Quiz"}
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
