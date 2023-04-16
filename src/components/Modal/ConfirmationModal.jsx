export const ConfirmationModal = ({
  showModal,
  setShowModal,
  checkQuizSubmisson,
}) => {
  return (
    <>
      <div
        className={`relative  ${
          showModal
            ? "ease-out duration-300 opacity-100 z-10"
            : "ease-in duration-200 opacity-0 -z-10"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
              showModal
                ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
                : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }`}
          >
            <div className="relative transform overflow-hidden rounded-lg bg-slate-800  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-slate-800 px-4 pt-5  sm:pb-4">
                <h2
                  className="text-base font-semibold leading-6  text-white capitalize"
                  id="modal-title"
                >
                  {checkQuizSubmisson?.video_title}
                </h2>
                <h2
                  className="text-sm font-normal leading-6 mt-2.5 text-gray-400 capitalize"
                  id="modal-title"
                >
                  Each question contain 5 marks
                </h2>
                <div className="border border-slate-700 p-3 rounded mt-5 grid grid-cols-2 place-items-center">
                  <p className="text-md text-slate-200 font-semibold my-1 text-md">
                    Total Question:{" "}
                    <span className="font-normal">
                      {checkQuizSubmisson?.totalQuiz}
                    </span>
                  </p>
                  <p className="text-md text-slate-200 font-semibold my-1 text-md">
                    Total Mark:{" "}
                    <span className="font-normal">
                      {checkQuizSubmisson?.totalMark}
                    </span>
                  </p>
                  <p className="text-md text-green-200 font-semibold my-1 text-md">
                    Correct Ans:{" "}
                    <span className="font-normal">
                      {checkQuizSubmisson?.totalCorrect}
                    </span>
                  </p>
                  <p className="text-md text-red-200 font-semibold my-1 text-md">
                    Wrong Ans:{" "}
                    <span className="font-normal">
                      {checkQuizSubmisson?.totalWrong}
                    </span>
                  </p>
                </div>
                <p className="text-lg text-slate-200 font-semibold my-1 text-md text-center">
                  Final Mark:{" "}
                  <span className="font-normal">
                    {checkQuizSubmisson?.mark}
                  </span>
                </p>
                <p className="text-lg text-teal-500 font-semibold my-1 text-md text-center">
                  <span className="font-semibold">
                    {checkQuizSubmisson?.totalCorrect ===
                      checkQuizSubmisson?.totalQuiz &&
                      "Fantastic😮Best Wishes For You"}
                    {checkQuizSubmisson?.totalWrong > 0 &&
                      checkQuizSubmisson?.totalWrong <
                        checkQuizSubmisson?.totalQuiz &&
                      "Good🥰Will be Better in Future"}
                    {checkQuizSubmisson?.totalCorrect === 0 &&
                      "Not Bad😊Don't Loss Hope"}
                  </span>
                </p>
              </div>

              <div className="bg-slate-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex gap-3">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-red-400 bg-red-600 hover:bg-red-800 sm:mt-0 sm:w-auto"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
