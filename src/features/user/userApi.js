import { apiSlice } from "../api/apiSlice";
import { userSignIn } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users",
    }),
    verifyUser: builder.mutation({
      query: (data) => ({
        url: "/user/verify",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userSignIn(data));
        } catch (err) {}
      },
    }),
    storeUser: builder.mutation({
      query: (data) => ({
        url: "/user/new",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userSignIn(data));
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetUserQuery, useStoreUserMutation, useVerifyUserMutation } =
  userApi;
