import { apiSlice } from "../api/apiSlice";
import { courseApi } from "../courses/courseApi";

export const enrollCourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEnrolledCourse: builder.query({
      query: (courseId) => `/enrolled/${courseId}`,
      providesTags: ["enrolled"],
    }),
    getUserEnrolledCourse: builder.query({
      query: (userId) => `/user-enrolled/${userId}`,
      providesTags: ["userEnrolled"],
    }),
    storeEnrolledCourse: builder.mutation({
      query: (data) => ({
        url: "/enroll/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["enrolled", "userEnrolled"],
      onQueryStarted: (arg, { dispatch }) => {
        dispatch(courseApi.util.invalidateTags(["courses", "course"]));
      },
    }),
  }),
});

export const {
  useGetEnrolledCourseQuery,
  useStoreEnrolledCourseMutation,
  useGetUserEnrolledCourseQuery,
} = enrollCourseApi;
