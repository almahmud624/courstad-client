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
        url: `/assignment/new`,
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
                  (assignment) => assignment?._id == arg?.id
                );
                editableAssignment.title = updatedAssignment?.data?.title;
                editableAssignment.video_title =
                  updatedAssignment?.data?.video_title;
                editableAssignment.totalMark =
                  updatedAssignment?.data?.totalMark;
                editableAssignment.video_id = updatedAssignment?.data?.video_id;
              }
            )
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignment",
              arg.id.toString(),
              (draft) => {
                draft.title = updatedAssignment?.data?.title;
                draft.video_title = updatedAssignment?.data?.video_title;
                draft.totalMark = updatedAssignment?.data?.totalMark;
                draft.video_id = updatedAssignment?.data?.video_id;
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
              return draft?.filter((assignment) => assignment?._id != arg);
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
