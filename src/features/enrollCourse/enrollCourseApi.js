import { apiSlice } from "../api/apiSlice";

export const enrollCourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEnrolledCourse: builder.query({
      query: () => "/enrolled",
    }),
    storeEnrolledCourse: builder.mutation({
      query: (data) => ({
        url: "/enroll/new",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newEnrolledCourse } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getEnrolledCourse",
              undefined,
              (draft) => {
                draft.push(newEnrolledCourse);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetEnrolledCourseQuery, useStoreEnrolledCourseMutation } =
  enrollCourseApi;
