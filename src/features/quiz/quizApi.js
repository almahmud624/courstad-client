import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "/quizzes",
    }),
    getQuiz: builder.query({
      query: (id) => `/quiz/${id}`,
    }),
    addQuiz: builder.mutation({
      query: (data) => ({
        url: `/quiz/new`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newQuiz } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
              draft.push(newQuiz);
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    editQuiz: builder.mutation({
      query: ({ quizId, quizData }) => ({
        url: `/quiz/${quizId}`,
        method: "PATCH",
        body: quizData,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedQuiz } = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
              const editableQuiz = draft.find(
                (quiz) => quiz?._id == arg?.quizId
              );
              editableQuiz.question = updatedQuiz?.data?.question;
              editableQuiz.video_id = updatedQuiz?.data?.video_id;
              editableQuiz.video_title = updatedQuiz?.data?.video_title;
              editableQuiz.options = updatedQuiz?.data?.options;
            })
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "getQuiz",
              arg.quizId.toString(),
              (draft) => {
                draft.question = updatedQuiz?.data?.question;
                draft.video_id = updatedQuiz?.data?.video_id;
                draft.video_title = updatedQuiz?.data?.video_title;
                draft.options = updatedQuiz?.data?.options;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quiz/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        dispatch(
          apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
            return draft?.filter((quiz) => quiz?._id != arg);
          })
        );
      },
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useAddQuizMutation,
  useEditQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
