import { apiSlice } from "../api/apiSlice";

export const ratingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourseRating: builder.query({
      query: (courseId) => `/ratings/${courseId}`,
    }),
    storeUserRating: builder.mutation({
      query: (data) => ({
        url: "/rating/new",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newRating } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getCourseRating",
              arg?.course_id,
              (draft) => {
                draft.push(newRating);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    updateRating: builder.mutation({
      query: ({ id, data }) => ({
        url: `/rating/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedRating } = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData(
              "getCourseRating",
              arg?.data?.course_id,
              (draft) => {
                const editableRating = draft.find(
                  (rating) => rating?._id == arg?.id
                );
                editableRating.rating = updatedRating.rating;
                editableRating.course_id = updatedRating.course_id;
                editableRating.course_title = updatedRating.course_title;
                editableRating.student_id = updatedRating.student_id;
                editableRating.student_name = updatedRating.student_name;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    removeRating: builder.mutation({
      query: ({ ratingId, courseId }) => ({
        url: `/rating/${ratingId}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch }) {
        dispatch(
          apiSlice.util.updateQueryData(
            "getCourseRating",
            arg?.courseId,
            (draft) => {
              return draft.filter((rating) => rating?._id !== arg?.ratingId);
            }
          )
        );
      },
    }),
  }),
});

export const {
  useGetCourseRatingQuery,
  useStoreUserRatingMutation,
  useRemoveRatingMutation,
  useUpdateRatingMutation,
} = ratingApi;
