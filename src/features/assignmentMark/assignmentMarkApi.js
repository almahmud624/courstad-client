import { apiSlice } from "../api/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMark: builder.query({
      query: () => "/assignmentMark",
    }),
    submitAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignmentMark",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newAssignmentMark } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignmentMark",
              undefined,
              (draft) => {
                draft.push(newAssignmentMark);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    updateAssignmentMark: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignmentMark/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedAssignmentMark } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignmentMark",
              undefined,
              (draft) => {
                const editableAssignmentMark = draft.find(
                  (mark) => mark?.id == arg?.id
                );
                editableAssignmentMark.mark = updatedAssignmentMark.mark;
                editableAssignmentMark.status = updatedAssignmentMark.status;
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
  useGetAssignmentMarkQuery,
  useSubmitAssignmentMutation,
  useUpdateAssignmentMarkMutation,
} = assignmentMarkApi;
