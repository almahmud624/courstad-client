import { QuizOptions } from "./QuizOptions";

export const QuizList = ({ quiz = {}, questionNo, checkAns, setCheckAns }) => {
  return (
    <>
      <div className="space-y-8 my-5 bg-gray-900 p-3 rounded">
        <div className="">
          <h4 className="text-xl font-semibold text-teal-500">
            Quiz {questionNo} - {quiz?.question}
          </h4>
          <form className="grid grid-cols-2 my-4 gap-4">
            {quiz?.options.map((option, i) => (
              <QuizOptions
                key={option.id}
                option={option}
                optionNo={i + 1}
                quiz={quiz}
                checkAns={checkAns}
                setCheckAns={setCheckAns}
              />
            ))}
          </form>
        </div>
      </div>
    </>
  );
};
