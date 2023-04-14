import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizMark: builder.query({
      query: () => "/quizMark",
    }),
    updateQuizMark: builder.mutation({
      query: (data) => ({
        url: "/quizMark",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newQuizMark } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getQuizMark", undefined, (draft) => {
              draft.push(newQuizMark);
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetQuizMarkQuery, useUpdateQuizMarkMutation } = quizMarkApi;
