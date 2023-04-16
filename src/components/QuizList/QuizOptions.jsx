import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const QuizOptions = ({
  option,
  optionNo,
  quiz = {},
  checkAns,
  setCheckAns,
}) => {
  const { user } = useSelector((state) => state.user);
  const { videoId } = useParams();
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
  const filterCurrentUserAns = quiz?.userAns?.filter(
    (ans) => ans.studentId === user?.id
  );
  const checkedAns = filterCurrentUserAns?.find((a) => a[Number(videoId)])?.[
    Number(videoId)
  ];
  const selectedAns = checkedAns?.some((ans) => ans[quiz?.id] === option?.id);
  const lableStyle =
    checkedAns?.length > 0
      ? ` ${selectedAns && "!text-red-500"}  ${
          option?.isCorrect && "!bg-green-500"
        }`
      : "";
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`option${optionNo}_q${quiz?._id}`}
        name={quiz?._id}
        value={option.option}
        checked={checkAns.some((ans) => ans[quiz?._id] === option?.id)}
        onChange={() => gettingAns(quiz?._id, option?.id)}
        // disabled={checkedAns?.length > 0}
      />
      <label
        htmlFor={`option${optionNo}_q${quiz?._id}`}
        class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300 "
      >
        {option.option}
      </label>
    </div>
  );
};
