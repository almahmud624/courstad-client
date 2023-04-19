import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: ({ page = 0, size = 0, enrolled = {} }) =>
        `/courses?page=${page}&size=${size}&enrolled=${enrolled?.student_id}`,
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
          const { page, size, enrolled } = getState().course;

          dispatch(
            apiSlice.util.updateQueryData(
              "getCourses",
              { page, size, enrolled },
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
    removeRating: builder.mutation({
      query: ({ id, ratingId }) => ({
        url: `/course/${id}/rating/${ratingId}`,
        method: "PATCH",
        body: { type: "remove" },
      }),
      async onQueryStarted(arg, { queryFulfilled, getState, dispatch }) {
        const { data } = await queryFulfilled;
        const { page, size, enrolled } = getState().course;
        dispatch(
          apiSlice.util.updateQueryData(
            "getCourses",
            { page, size, enrolled },
            (draft) => {
              if (draft.courses) {
                const course = draft.courses.find(
                  (course) => course._id == arg.id
                );
                course.rating = data.rating;
              }
            }
          )
        );
        dispatch(
          apiSlice.util.updateQueryData("getCourse", arg.id, (draft) => {
            draft.rating = data.rating;
          })
        );
      },
    }),
    updateRating: builder.mutation({
      query: ({ id, data }) => ({
        url: `/course/${id}/rating/${data?._id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, getState, dispatch }) {
        const { page, size, enrolled } = getState().course;
        dispatch(
          apiSlice.util.updateQueryData(
            "getCourses",
            { page, size, enrolled },
            (draft) => {
              // Find the targeted course
              const course = draft.courses?.find(
                (course) => course._id == arg.id
              );
              // Find the targeted rating
              const updatableRating = course.rating.find(
                (rate) => rate._id == arg.data?._id
              );
              // Update the rating
              updatableRating.userRating = arg.data.userRating;
            }
          )
        );
        dispatch(
          apiSlice.util.updateQueryData(
            "getCourse",
            arg.id.toString(),
            (draft) => {
              // Find the targeted rating
              const updatableRating = draft.rating.find(
                (rate) => rate._id == arg.data?._id
              );
              // Update the rating
              updatableRating.userRating = arg.data.userRating;
            }
          )
        );
      },
    }),
  }),
});

export const {
  useGetCourseQuery,
  useGetCoursesQuery,
  useUpdateCourseMutation,
  useRemoveRatingMutation,
  useUpdateRatingMutation,
} = courseApi;
