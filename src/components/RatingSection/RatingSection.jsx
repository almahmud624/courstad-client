import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Rating } from "../Rating/Rating";
import { Popover } from "../Popover/Popover";
import { DeleteConrfirmation } from "../Popover/DeleteConrfirmation";
import {
  useGetSingleRatingQuery,
  useGetUserRatingQuery,
  useRemoveRatingMutation,
  useStoreUserRatingMutation,
  useUpdateRatingMutation,
} from "../../features/rating/ratingApi";

export const RatingSection = ({ course = {} }) => {
  const { user } = useSelector((state) => state.user);
  const [deleteConfirmation, setDeleteConfimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditRating, setIsEditRating] = useState(false);
  const [rating, setRating] = useState(0);
  // const { data: usersRating } = useGetUserRatingQuery();
  const [storeUserRating, { isSuccess: ratingSuccess }] =
    useStoreUserRatingMutation();
  const [updateRating, { isSuccess: updateSuccess }] =
    useUpdateRatingMutation();
  const [removeRating, { isSuccess: removeSuccess }] =
    useRemoveRatingMutation();
  // const { data: userRating } = useGetSingleRatingQuery(user?._id);
  // find current user rating
  const findUserRating = course?.reviews?.find(
    (rate) => rate.student_id === user?._id && rate?.course_id === course?._id
  );

  // add and update rating
  const handleRating = () => {
    const newRating = {
      student_id: user?._id,
      student_name: user?.name,
      course_id: course?._id,
      course_title: course?.courseName,
      rating: rating,
    };
    if (!isEditRating) {
      storeUserRating(newRating);
    } else {
      updateRating({ id: findUserRating?._id, data: newRating });
    }
  };

  // remove user rating
  const toggleDeleteConfirmation = () => {
    setDeleteConfimation(!deleteConfirmation);
  };
  const removeUserRating = () => {
    removeRating(findUserRating?._id);
  };

  const isRateTextShow = findUserRating && !isEditRating;

  useEffect(() => {
    if (ratingSuccess || updateSuccess) {
      setIsOpen(false);
      setIsEditRating(false);
    }
    if (removeSuccess) {
      setDeleteConfimation(false);
    }
  }, [ratingSuccess, updateSuccess, removeSuccess]);
  return (
    <>
      <div className="mt-5">
        <div className="mt-auto flex justify-between items-center w-full relative">
          <p
            className="inline-block dark:text-green-500 text-gray-800 text-sm md:text-base text-center  "
            onClick={() => setIsOpen(false)}
          >
            {isRateTextShow
              ? "Your Rating"
              : !isEditRating
              ? "Rate this course"
              : "Update your rating"}
          </p>

          <Rating
            rating={rating}
            setRating={setRating}
            setIsOpen={setIsOpen}
            userRating={findUserRating}
            setIsEditRating={setIsEditRating}
            isEditRating={isEditRating}
            toggleDeleteConfirmation={toggleDeleteConfirmation}
          />
          {isOpen && (
            <Popover
              rating={rating}
              handleRating={handleRating}
              // isLoading={isLoading}
              setIsEditRating={setIsEditRating}
              isEditRating={isEditRating}
              setIsOpen={setIsOpen}
            />
          )}
          {deleteConfirmation && (
            <DeleteConrfirmation
              message={"Remove Rating"}
              action={removeUserRating}
            />
          )}
        </div>
      </div>
    </>
  );
};
