import { apiSlice } from "../api/apiSlice";

export const ratingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserRating: builder.query({
      query: () => "/ratings",
    }),
    storeUserRating: builder.mutation({
      query: (data) => ({
        url: "/rating/new",
        method: "POST",
        body: data,
      }),
      //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //     try {
      //       const { data: newEnrolledCourse } = await queryFulfilled;
      //       dispatch(
      //         apiSlice.util.updateQueryData(
      //           "getEnrolledCourse",
      //           undefined,
      //           (draft) => {
      //             draft.push(newEnrolledCourse);
      //           }
      //         )
      //       );
      //     } catch (err) {
      //       console.log(err);
      //     }
      //   },
    }),
  }),
});

export const { useGetUserRatingQuery, useStoreUserRatingMutation } = ratingApi;
