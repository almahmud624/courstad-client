import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: ({
        page = 0,
        size = 0,
        enrolled = {},
        categories = [],
        queryText = "",
      }) => {
        const params = new URLSearchParams({
          categories: categories.join(","),
        });
        return `/courses?page=${page}&size=${size}&enrolled=${enrolled?.student_id}&${params}&search=${queryText}`;
      },
    }),
    getCourse: builder.query({
      query: (id) => `/course/${id}`,
    }),
    updateCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `/course/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, getState, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const updatedCourse = data?.data;
          const { page, size, enrolled, categories, queryText } =
            getState().course;

          dispatch(
            apiSlice.util.updateQueryData(
              "getCourses",
              { page, size, enrolled, categories, queryText },
              (draft) => {
                const editableCourse = draft.courses.find(
                  (course) => course?._id == arg?.id
                );
                editableCourse.courseName = updatedCourse.courseName;
                editableCourse.categories = updatedCourse.categories;
                editableCourse.courseTutor = updatedCourse.courseTutor;
                editableCourse.courseThumb = updatedCourse.courseThumb;
                editableCourse.coursePrice = updatedCourse.coursePrice;
                editableCourse.courseEnrollment =
                  updatedCourse.courseEnrollment;
                editableCourse.courseDescription =
                  updatedCourse.courseDescription;
                editableCourse.teacherThumb = updatedCourse.teacherThumb;
                editableCourse.teacherSkills = updatedCourse.teacherSkills;
                editableCourse.teacherSkills = updatedCourse.teacherSkills;
                editableCourse.rating = updatedCourse.rating;
              }
            )
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "getCourse",
              arg.id.toString(),
              (draft) => {
                draft.courseName = updatedCourse.courseName;
                draft.categories = updatedCourse.categories;
                draft.courseTutor = updatedCourse.courseTutor;
                draft.courseThumb = updatedCourse.courseThumb;
                draft.coursePrice = updatedCourse.coursePrice;
                draft.courseEnrollment = updatedCourse.courseEnrollment;
                draft.courseDescription = updatedCourse.courseDescription;
                draft.teacherThumb = updatedCourse.teacherThumb;
                draft.teacherSkills = updatedCourse.teacherSkills;
                draft.teacherSkills = updatedCourse.teacherSkills;
                draft.rating = updatedCourse.rating;
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

export const {
  useGetCourseQuery,
  useGetCoursesQuery,
  useUpdateCourseMutation,
} = courseApi;
