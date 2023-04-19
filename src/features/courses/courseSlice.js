import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  size: 0,
  enrolled: {
    student_id: "",
  },
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    coursePagination: (state, action) => {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
    courseFilter: (state, action) => {
      if (!state.enrolled.student_id) {
        state.enrolled.student_id = action.payload.enrolled;
      } else {
        state.enrolled.student_id = "";
      }
    },
  },
});
export default courseSlice.reducer;
export const { coursePagination, courseFilter } = courseSlice.actions;
