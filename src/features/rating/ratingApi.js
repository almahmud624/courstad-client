import { apiSlice } from "../api/apiSlice";
import { courseApi } from "../courses/courseApi";

export const ratingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserRating: builder.query({
      query: () => "/ratings",
    }),
    getSingleRating: builder.query({
      query: (userId) => `/rating/${userId}`,
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
              "getUserRating",
              undefined,
              (draft) => {
                draft.push(newRating);
              }
            )
          );
          dispatch(courseApi.util.invalidateTags(["courses", "course"]));
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
              "getUserRating",
              undefined,
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
          dispatch(
            apiSlice.util.updateQueryData(
              "getSingleRating",
              arg.id.toString(),
              (draft) => {
                draft.rating = updatedRating.rating;
              }
            )
          );
          dispatch(courseApi.util.invalidateTags(["courses", "course"]));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    removeRating: builder.mutation({
      query: (id) => ({
        url: `/rating/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        dispatch(
          apiSlice.util.updateQueryData("getUserRating", undefined, (draft) => {
            return draft?.filter((rating) => rating?._id != arg);
          })
        );
        dispatch(courseApi.util.invalidateTags(["courses", "course"]));
      },
    }),
  }),
});

export const {
  useGetUserRatingQuery,
  useStoreUserRatingMutation,
  useRemoveRatingMutation,
  useUpdateRatingMutation,
  useGetSingleRatingQuery,
} = ratingApi;
