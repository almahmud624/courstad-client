import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
    }),
    getCourse: builder.query({
      query: (id) => `/course/${id}`,
    }),
  }),
});

export const { useGetCourseQuery, useGetCoursesQuery } = courseApi;
