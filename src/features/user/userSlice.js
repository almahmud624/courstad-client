import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignIn: (state, action) => {
      state.user = action.payload;
    },
    userLogOut: (state) => {
      state.user = {};
    },
  },
});
export default userSlice.reducer;
export const { userSignIn, userLogOut } = userSlice.actions;
