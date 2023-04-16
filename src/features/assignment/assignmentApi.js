import { apiSlice } from "../api/apiSlice";

export const assignmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => "/assignments",
    }),
    getAssignment: builder.query({
      query: (id) => `/assignment/${id}`,
    }),
    addAssignment: builder.mutation({
      query: (data) => ({
        url: `/assignments`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newAssignment } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignments",
              undefined,
              (draft) => {
                draft.push(newAssignment);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    editAssignment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignment/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedAssignment } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignments",
              undefined,
              (draft) => {
                const editableAssignment = draft.find(
                  (assignment) => assignment?.id == arg?.id
                );
                editableAssignment.title = updatedAssignment.title;
                editableAssignment.video_title = updatedAssignment.video_title;
                editableAssignment.totalMark = updatedAssignment.totalMark;
                editableAssignment.video_id = updatedAssignment.video_id;
              }
            )
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignment",
              arg.id.toString(),
              (draft) => {
                draft.title = updatedAssignment.title;
                draft.video_title = updatedAssignment.video_title;
                draft.totalMark = updatedAssignment.totalMark;
                draft.video_id = updatedAssignment.video_id;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assignment/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        dispatch(
          apiSlice.util.updateQueryData(
            "getAssignments",
            undefined,
            (draft) => {
              return draft?.filter((assignment) => assignment?.id != arg);
            }
          )
        );
      },
    }),
  }),
});

export const {
  useGetAssignmentsQuery,
  useGetAssignmentQuery,
  useAddAssignmentMutation,
  useEditAssignmentMutation,
  useDeleteAssignmentMutation,
} = assignmentApi;
