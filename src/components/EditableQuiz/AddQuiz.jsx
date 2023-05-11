import { useState } from "react";

import { useAddQuizMutation } from "../../features/quiz/quizApi";
import { useNavigate } from "react-router-dom";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import DashboardLayout from "../../Layout/DashboardLayout";
// import { ErrorDialog } from "../ErrorDialog/ErrorDialog";

export const AddQuiz = () => {
  const { data: videos } = useGetVideosQuery({});
  const [question, setQuestion] = useState("");
  const [videoId, setVideoId] = useState();
  const [options, setOptions] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [addQuiz, { isSuccess, isError, isLoading }] = useAddQuizMutation();
  const navigate = useNavigate();

  // add & edit quiz
  const handleSubmit = (e) => {
    e.preventDefault();

    // field validation
    const checkIsCorrectField = options.every(
      (option) => option?.isCorrect === true || option?.isCorrect === false
    );
    if (!checkIsCorrectField || isNaN(videoId)) {
      return setIsValid(true);
    }
    // selected video title
    const video_title = videos?.find(
      (video) => video.id === Number(videoId)
    )?.title;

    // create new quiz
    const quizData = {
      question,
      video_id: Number(videoId),
      video_title,
      options: options,
    };

    addQuiz(quizData);
  };

  // getting options value
  const getOptionsValue = (value, index) => {
    const check = options?.findIndex((option) => option?.id === index);
    if (check !== -1) {
      setOptions(
        options?.map((option) => {
          if (option?.id === index) {
            return { ...option, option: value };
          } else {
            return option;
          }
        })
      );
    } else {
      setOptions([...options, { id: index, option: value }]);
    }
  };

  // add isCorrect property on options
  const includeIsCorrect = (value, index) => {
    setOptions(
      options?.map((option) => {
        if (option?.id === index) {
          setIsValid(false);
          return { ...option, isCorrect: JSON.parse(value) };
        } else {
          return option;
        }
      })
    );
  };

  // remove option
  const removeOptionHandler = () => {
    const availableOptions = options?.filter(
      (option) => option?.id !== options?.length
    );
    setOptions(availableOptions);
  };

  if (isSuccess) {
    navigate("/admin/quizzes");
  }
  return (
    <>
      <DashboardLayout>
        <section className="py-6 bg-primary">
          <div className="mx-auto max-w-lg px-5 lg:px-0 ">
            <div>
              <h2 className="my-6 text-center text-3xl font-extrabold text-slate-100">
                Add new quiz
              </h2>
            </div>
            <form className="py-5" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="question"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Question<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="question"
                  name="question"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:shadow-sm-light"
                  placeholder="New Question"
                  value={question}
                  required
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="videoId"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Select video<sup className="text-red-600 font-bold">*</sup>
                </label>
                <select
                  id="videoId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={videoId}
                  onChange={(e) => {
                    setVideoId(e.target.value);
                    setIsValid(false);
                  }}
                  required
                >
                  <option selected>Choose a video</option>
                  {videos?.map((video) => (
                    <option key={video?.id} value={video?.id}>
                      {video?.title}
                    </option>
                  ))}
                </select>
              </div>
              {Array(Number(options?.length > 4 ? options?.length : 4))
                ?.fill()
                ?.map((v, i) => (
                  <div key={i} className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor={`option_${i + 1}`}
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Option - {`${i + 1}`}
                      </label>
                      <input
                        type="text"
                        id={`option_${i + 1}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Quiz option"
                        onChange={(e) => getOptionsValue(e.target.value, i + 1)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`isCorrect_${i + 1}`}
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Select ans
                        <sup className="text-red-600 font-bold">*</sup>
                      </label>
                      <select
                        id={`isCorrect_${i + 1}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        //   value={isCorrect}
                        disabled={
                          !options?.find((option) => option?.id === i + 1)
                            ?.option
                        }
                        onChange={(e) =>
                          includeIsCorrect(e.target.value, i + 1)
                        }
                      >
                        <option selected disabled>
                          Choose a answer
                        </option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    </div>
                  </div>
                ))}

              <div className="flex gap-2 mb-6 md:grid-cols-2 justify-center">
                <div className="text-center mb-6">
                  <button
                    type="button"
                    className="text-white border-2 border-green-700 hover:bg-green-700 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2 disabled:bg-slate-800 disabled:text-slate-400 disabled:border-slate-800 transition-all duration-500"
                    disabled={options?.length === 6}
                    onClick={() => getOptionsValue("", options?.length + 1)}
                    title="Top 04 options must be filled"
                  >
                    {options?.length === 6
                      ? "Maximum options reached"
                      : "Add option"}
                  </button>
                </div>
                <div className="text-center mb-6">
                  <button
                    type="button"
                    className="text-white border-2 border-red-600 hover:bg-red-600/90 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2 disabled:bg-slate-800 disabled:text-slate-400 disabled:border-slate-800 transition-all duration-500"
                    disabled={options?.length === 4}
                    onClick={removeOptionHandler}
                  >
                    Less option
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="text-white border-green-600 hover:bg-green-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-500 !bg-green-700 hover:border-green-900 hover:text-slate-900"
                disabled={isLoading}
              >
                Submit
              </button>
            </form>
            {/* {(isError || isValid) && (
            <ErrorDialog
              message={
                isValid
                  ? "Please!! Fill the required field"
                  : "There was an error!!"
              }
            />
          )} */}
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};
