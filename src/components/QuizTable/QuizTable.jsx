import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDeleteQuizMutation } from "../../features/quiz/quizApi";
import { AlertModal } from "../Modal/AlertModal";
// import { useDeleteQuizMutation } from "../../features/quiz/quizApi";

export const QuizTable = ({ quizzes = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [deleteQuiz, { isSuccess }] = useDeleteQuizMutation();
  const handleDeleteQuiz = () => {
    deleteQuiz(selectedQuiz?._id);
  };
  useEffect(() => {
    if (isSuccess) {
      setShowModal(false);
      setSelectedQuiz("");
    }
  }, [isSuccess]);
  return (
    <>
      <div className="overflow-x-auto mt-4 bg-gray-800">
        <table className="divide-y-1 text-base divide-gray-600 w-full text-white text-left">
          <thead>
            <tr>
              <th className="py-4 px-6">Question</th>
              <th className="py-4 px-6">Video Title</th>
              <th className="py-4 px-6">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-600/50">
            {quizzes?.map((quiz) => (
              <tr key={quiz?._id}>
                <td className="px-6 py-4 font-medium ">
                  <p className="truncate w-64">{quiz?.question}</p>
                </td>
                <td className="px-6 py-4 ">
                  <p className="truncate w-64">{quiz?.video_title}</p>
                </td>
                <td className="px-6 py-4 flex gap-x-2 items-center">
                  <span
                    className="hover:text-red-600 transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      setShowModal(true);
                      setSelectedQuiz(quiz);
                    }}
                  >
                    <AiOutlineDelete className="text-2xl" />
                  </span>
                  <Link
                    className="hover:text-green-600 transition-all duration-200"
                    to={`/admin/quiz/edit/${quiz?._id}`}
                  >
                    <FiEdit className="text-xl" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedTarget={selectedQuiz}
        action={handleDeleteQuiz}
      />
    </>
  );
};
