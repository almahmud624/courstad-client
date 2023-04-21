import {
  BsStarHalf,
  BsFillStarFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
export const Rating = ({
  rating,
  setRating,
  setIsOpen,
  userRating,
  setIsEditRating,
  isEditRating,
  toggleDeleteConfirmation,
}) => {
  const handleRating = (value) => {
    const newRating = rating === value ? value - 0.5 : value;
    setRating(newRating);
    setIsOpen(true);
  };
  // rate text showing condition
  const isRateShow = (!userRating && !isEditRating) || isEditRating;
  return (
    <>
      {isRateShow ? (
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((index) => {
            const halfStar = index - 0.5;
            return (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => handleRating(index)}
              >
                {rating >= index ? (
                  <BsFillStarFill className="h-5 w-5 text-green-700" />
                ) : rating >= halfStar ? (
                  <BsStarHalf className="h-5 w-5 text-green-700" />
                ) : (
                  <BsFillStarFill className="h-5 w-5 text-gray-700" />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center">
          <span className="text-green-600 text-lg mr-1">
            {userRating?.rating}
          </span>
          <BsFillStarFill className="h-4 w-4 text-green-700" />
          <button
            className="text-red-600 underline ml-3"
            onClick={() => setIsEditRating(true)}
          >
            Edit
          </button>
          <BsThreeDotsVertical
            onClick={toggleDeleteConfirmation}
            className="h-6 w-6 text-gray-500 ml-2 cursor-pointer hover:bg-gray-700 hover:text-gray-900 p-1 rounded-full transition-all duration-300"
          />
        </div>
      )}
    </>
  );
};
