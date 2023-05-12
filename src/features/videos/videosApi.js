import { apiSlice } from "../api/apiSlice";
import { assignmentApi } from "../assignment/assignmentApi";
import { quizApi } from "../quiz/quizApi";

export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ id = "" }) => `/videos?id=${id}`,
    }),
    getVideo: builder.query({
      query: (id) => `/video/${id}`,
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: "/video/new",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newVideo } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getVideos", {}, (draft) => {
              draft.push(newVideo);
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    editVideo: builder.mutation({
      query: ({ videoId, videoData }) => ({
        url: `/video/${videoId}`,
        method: "PATCH",
        body: videoData,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedVideo } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getVideos", {}, (draft) => {
              const editableVideo = draft.find(
                (video) => video?._id == arg?.videoId
              );
              editableVideo.title = updatedVideo?.data?.title;
              editableVideo.description = updatedVideo?.data?.description;
              editableVideo.url = updatedVideo?.data?.url;
              editableVideo.course_id = updatedVideo?.data?.course_id;
              editableVideo.duration = updatedVideo?.data?.duration;
            })
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "getVideo",
              arg.videoId.toString(),
              (draft) => {
                draft.title = updatedVideo.title;
                draft.description = updatedVideo.description;
                draft.url = updatedVideo.url;
                draft.views = updatedVideo.views;
                draft.duration = updatedVideo.duration;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/video/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // pesimistic update for delete video
        dispatch(
          apiSlice.util.updateQueryData("getVideos", {}, (draft) => {
            return draft?.filter((video) => video?._id != arg);
          })
        );
        // get assignments for delete corrosponding video assginment
        const assignments = await dispatch(
          assignmentApi.endpoints.getAssignments.initiate()
        ).unwrap();
        const assignment = assignments?.find(
          (assignment) => assignment?.video_id == arg
        );
        if (assignment) {
          await dispatch(
            assignmentApi.endpoints.deleteAssignment.initiate(assignment?._id)
          );
        }
        // get quizzes for delete corrosponding video quiz
        const quizzes = await dispatch(
          quizApi.endpoints.getQuizzes.initiate()
        ).unwrap();
        const videoQuizzes = quizzes?.filter((quiz) => quiz?.video_id == arg);
        if (videoQuizzes?.length > 0) {
          videoQuizzes?.forEach((quiz) =>
            dispatch(quizApi.endpoints.deleteQuiz.initiate(quiz?._id))
          );
        }
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = videosApi;
