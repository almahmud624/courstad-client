export const AlertModal = ({
  showModal,
  setShowModal,
  selectedTarget,
  action,
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
                  Confirm your delete process?
                </h2>
                <h2
                  className="text-md font-normal leading-6 mt-2.5 text-gray-400"
                  id="modal-title"
                >
                  You want to delete{" "}
                  <span className="text-green-600 font-semibold">
                    {selectedTarget?.title}
                  </span>{" "}
                  Once you remove this file it can't be undone.
                </h2>
              </div>

              <div className="bg-slate-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex gap-3">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-red-400 bg-red-600 hover:bg-red-800 sm:mt-0 sm:w-auto transition-all duration-150"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-green-400 bg-green-600 hover:bg-green-800 sm:mt-0 sm:w-auto transition-all duration-150"
                  onClick={action}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
