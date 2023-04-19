import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetQuizMarkQuery } from "../../features/quizMark/quizMarkApi";

export const QuizOptions = ({
  option,
  optionNo,
  quiz = {},
  checkAns,
  setCheckAns,
}) => {
  const { user } = useSelector((state) => state.user);
  const { videoId } = useParams();
  const { data: quizMarks } = useGetQuizMarkQuery();
  const gettingAns = (quizId, optionId) => {
    const ansAvail = checkAns.find(
      (ans) => Number(ans[quizId]) === Number(option.id)
    );
    if (ansAvail) {
      setCheckAns(
        checkAns.filter((ans) => Number(ans[quizId]) !== Number(option.id))
      );
    } else {
      setCheckAns([...checkAns, { [quizId]: optionId }]);
    }
  };

  // check user ans
  const findCurrentUserAns = quizMarks?.find(
    (quiz) => quiz.student_id === user?._id && quiz?.video_id === videoId
  );
  const selectedAns = findCurrentUserAns?.userAns?.some(
    (ans) => ans[quiz?._id] === option?.id
  );
  const checkingStyle = findCurrentUserAns
    ? ` ${option?.isCorrect && "!bg-green-500"}`
    : "";

  // input checked condition
  const inputChecked = findCurrentUserAns
    ? option?.isCorrect
    : checkAns.some((ans) => ans[quiz?._id] === option?.id);
  return (
    <div
      className={`flex items-center bg-gray-700 p-3 w-full rounded ${checkingStyle}`}
    >
      <input
        type="checkbox"
        id={`option${optionNo}_q${quiz?._id}`}
        name={quiz?._id}
        value={option.option}
        checked={inputChecked}
        onChange={() => gettingAns(quiz?._id, option?.id)}
        className="peer-checked:bg-red-500"
        disabled={findCurrentUserAns}
      />
      <label
        htmlFor={`option${optionNo}_q${quiz?._id}`}
        className={`ml-2 text-md font-medium text-gray-900 dark:text-gray-300 ${
          selectedAns && "!text-red-500"
        }  ${option?.isCorrect && "text-gray-700"} `}
      >
        {option.option}
      </label>
    </div>
  );
};
