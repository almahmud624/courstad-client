import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  size: 0,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    coursePagination: (state, action) => {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
  },
});
export default courseSlice.reducer;
export const { coursePagination } = courseSlice.actions;
