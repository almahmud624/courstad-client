export const ErrorAlert = ({ message }) => {
  return (
    <>
      <div className="text-center py-4 lg:px-4">
        <div
          className="p-2 bg-red-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-semibold mr-3">
            Error
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {message}
          </span>
        </div>
      </div>
    </>
  );
};
