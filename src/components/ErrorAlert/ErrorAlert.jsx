export const ErrorAlert = ({ message }) => {
  return (
    <>
      <div class="text-center py-4 lg:px-4">
        <div
          class="p-2 bg-red-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-semibold mr-3">
            Error
          </span>
          <span class="font-semibold mr-2 text-left flex-auto">{message}</span>
        </div>
      </div>
    </>
  );
};
