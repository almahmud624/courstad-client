import { BsFillStarFill } from "react-icons/bs";
export const Popover = ({
  rating,
  handleRating,
  isLoading,
  setIsEditRating,
  isEditRating,
  setIsOpen,
}) => {
  return (
    <>
      <div className="popover absolute bottom-[120%] w-full z-10 bg-white rounded shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="font-semibold flex justify-center items-center">
            Your Rating: {rating}
            <BsFillStarFill className="inline-block ml-1" />
          </div>
          <div className="flex gap-2">
            <button
              className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-green-300 dark:bg-green-600 px-3 py-1 rounded"
              onClick={handleRating}
              disabled={isLoading}
            >
              {isEditRating ? "Update" : "Submit"}
            </button>
            {isEditRating && (
              <button
                className="inline-block dark:text-white text-gray-800 text-sm md:text-base font-semibold text-center bg-red-300 dark:bg-red-600 px-3 py-1 rounded"
                onClick={() => {
                  setIsEditRating(false);
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
