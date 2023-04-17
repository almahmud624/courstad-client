import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
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
      // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //   try {
      //     const { data: updatedVideo } = await queryFulfilled;
      //     dispatch(
      //       apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
      //         const editableVideo = draft.find(
      //           (video) => video?.id == arg?.videoId
      //         );
      //         editableVideo.title = updatedVideo.title;
      //         editableVideo.description = updatedVideo.description;
      //         editableVideo.url = updatedVideo.url;
      //         editableVideo.views = updatedVideo.views;
      //         editableVideo.duration = updatedVideo.duration;
      //       })
      //     );
      //     dispatch(
      //       apiSlice.util.updateQueryData(
      //         "getVideo",
      //         arg.videoId.toString(),
      //         (draft) => {
      //           draft.title = updatedVideo.title;
      //           draft.description = updatedVideo.description;
      //           draft.url = updatedVideo.url;
      //           draft.views = updatedVideo.views;
      //           draft.duration = updatedVideo.duration;
      //         }
      //       )
      //     );
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
    }),
  }),
});

export const {
  useGetCourseQuery,
  useGetCoursesQuery,
  useUpdateCourseMutation,
} = courseApi;
