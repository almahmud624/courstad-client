export const DeleteConrfirmation = ({ message, action }) => {
  return (
    <>
      <div
        className="absolute z-20 right-0 bottom-[120%] mt-2 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        onClick={action}
      >
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            className="block px-3 py-2 text-sm text-red-500  hover:text-gray-600 hover:rounded"
            role="menuitem"
          >
            {message}
          </button>
        </div>
      </div>
    </>
  );
};
