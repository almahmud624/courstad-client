import { useNavigate } from "react-router-dom";
// import { getLocalestringDate } from "../../utils/getLocalestringDate";
import { useSelector } from "react-redux";
import { useGetQuizMarkQuery } from "../../features/quizMark/quizMarkApi";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";

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
  // check users quiz submission
  const checkQuizSubmisson = quizMarks?.some(
    (mark) => mark?.student_id === user?.id && mark?.video_id === Number(id)
  );

  // find quizzes for that video
  const videoQuizzes = quizzes?.filter((quiz) => quiz?.video_id === Number(id));
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

          <div className="flex gap-4">
            {assignment && (
              <button
                className={`px-3 font-bold py-1 border rounded-full text-sm disabled:border-slate-700 disabled:text-slate-700 disabled:cursor-not-allowed border-cyan text-cyan hover:bg-cyan hover:text-primary  disabled:hover:text-slate-700 ${
                  assignmentSubmisson &&
                  "bg-green-600 border-green-600 text-white disabled:hover:bg-green-600"
                }`}
                onClick={() => setShowModal(true)}
                disabled={assignmentSubmisson}
              >
                {assignmentSubmisson
                  ? "এসাইনমেন্ট জমা দেওয়া হয়েছে"
                  : "এসাইনমেন্ট"}
              </button>
            )}

            {videoQuizzes?.length !== 0 && (
              <button
                className={`px-3 font-bold py-1 border rounded-full text-sm disabled:border-slate-700 disabled:text-slate-700 disabled:cursor-not-allowed border-cyan text-cyan hover:bg-cyan hover:text-primary disabled:hover:text-slate-700 ${
                  checkQuizSubmisson &&
                  "bg-green-600 border-green-600 text-white disabled:hover:bg-green-600"
                }`}
                onClick={() => navigate(`/quiz/${id}`)}
                // disabled={checkQuizSubmisson}
              >
                {checkQuizSubmisson
                  ? "কুইজ দিয়েছেন, উত্তর দেখুন"
                  : "কুইজে অংশগ্রহণ করুন"}
              </button>
            )}
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
        </div>
      </div>
    </>
  );
};
