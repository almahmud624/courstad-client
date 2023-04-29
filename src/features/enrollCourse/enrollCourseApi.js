import { apiSlice } from "../api/apiSlice";
import { courseApi } from "../courses/courseApi";

export const enrollCourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEnrolledCourse: builder.query({
      query: ({ courseId = "", userId = "" }) =>
        `/enrolled?courseId=${courseId}&userId=${userId}`,
      providesTags: ["enrolled"],
    }),
    storeEnrolledCourse: builder.mutation({
      query: (data) => ({
        url: "/enroll/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["enrolled"],
      onQueryStarted: (arg, { dispatch }) => {
        dispatch(courseApi.util.invalidateTags(["courses", "course"]));
      },
    }),
  }),
});

export const { useGetEnrolledCourseQuery, useStoreEnrolledCourseMutation } =
  enrollCourseApi;
